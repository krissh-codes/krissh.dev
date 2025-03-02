'use client';

import { useState } from 'react';
import { SlideUp } from '@animations';
import { ClickableButton, TextArea, TextInput } from '@components';
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
            await fetch('/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ from: { email: fromEmail, name: fromName }, message })
            });
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
                <SlideUp>
                    <TextInput name="name" id="name" label="Name" />
                    <TextInput name="email" id="email" type="email" label="Email" />
                    <TextArea name="message" id="message" label="Message" />

                    {/*Spam prevention*/}
                    <input id="bt1201307" name="1201307" type="text" className={classes.contact__bt1201307} />

                    <ClickableButton disabled={isSending} label={isSending ? 'Sending...' : 'Send ->'} type="submit" />
                </SlideUp>
            </form>
        </section>
    );
}
