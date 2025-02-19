'use client';

import { useState } from 'react';
import { ClickableButton } from '@components/Button';
import { TextArea, TextInput } from '@components/Inputs';
import classes from './contact.module.scss';

export default function Contact() {
    const [mailerStatus, setMailerStatus] = useState<'in-progress' | 'success' | 'failure' | null>(null);

    // no need for useMemo
    const isSending = mailerStatus === 'in-progress';

    const submitContactForm = async (formData: FormData) => {
        const fromEmail = formData.get('email');
        const fromName = formData.get('name');
        const message = formData.get('message');

        if (!fromEmail || !fromName || !message) return;

        if (formData.get('1201307') !== '') return;

        try {
            setMailerStatus('in-progress');
            // await sendEmail({ fromEmail: fromEmail as string, fromName: fromName as string, message: message as string });
            setMailerStatus('success');
        } catch (error) {
            setMailerStatus('failure');

            setTimeout(() => setMailerStatus(null), 3000);
            console.error(error);
        }
    };

    return (
        <section className={classes.contact}>
            <h5>Contact me</h5>
            <h2>Get in Touch</h2>
            <form className={classes.contact__form} action={submitContactForm}>
                <TextInput name="name" id="name" label="Name" />
                <TextInput name="email" id="email" type="email" label="Email" />
                <TextArea name="message" id="message" label="Message" />

                {/*Spam prevention*/}
                <input name="1201307" type="text" style={{ display: 'none' }} />

                <ClickableButton disabled={isSending} label={isSending ? 'Sending...' : 'Send ->'} type="submit" />
            </form>
        </section>
    );
}
