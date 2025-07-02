import { LuMail, LuSend } from 'react-icons/lu';
import { SlideUp } from '@animations';
import { Button, TextArea, TextInput } from '@components';
import { MailerStates, useMailer } from '@hooks';
import classes from './contact.module.scss';

export function Contact() {
    const [mailerStatus, sendMail] = useMailer();

    // no need for useMemo
    const isSending = mailerStatus === MailerStates.IN_PROGRESS;

    const submitContactForm = async (formData: FormData) => {
        const fromEmail = formData.get('email')!.toString();
        const fromName = formData.get('name')!.toString();
        const message = formData.get('message')!.toString();

        if (!fromEmail || !fromName || !message) return;

        if (formData.get('1201307') !== '') return;

        sendMail({ from: { email: fromEmail, name: fromName }, message });
    };

    return (
        <section id="contact" className={classes.contact}>
            <h5>
                <LuMail /> Contact me
            </h5>
            <h2>Get in Touch</h2>
            <form className={classes.contact__form} action={submitContactForm}>
                <SlideUp>
                    <TextInput name="name" id="name" label="Name" />
                    <TextInput name="email" id="email" type="email" label="Email" />
                    <TextArea name="message" id="message" label="Message" />

                    {/* Spam prevention */}
                    <input inert id="bt1201307" name="1201307" type="text" className={classes.contact__bt1201307} />

                    <Button disabled={isSending} type="submit">
                        {isSending ? (
                            'Sending...'
                        ) : (
                            <>
                                Send <LuSend style={{ marginLeft: '0.8rem' }} size={16} />
                            </>
                        )}
                    </Button>
                </SlideUp>
            </form>
        </section>
    );
}
