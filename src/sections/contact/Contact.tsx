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
        <section id="contact" className={`${classes.contact}`}>
            <header>
                <p className="section__eyebrow">
                    <LuMail /> Contact me
                </p>
                <h2>Get in Touch</h2>
            </header>
            <form className={classes.contact__form} action={submitContactForm}>
                <SlideUp>
                    <TextInput name="name" id="name" label="Name" autoComplete="name" required />
                    <TextInput name="email" id="email" type="email" label="Email" autoComplete="email" required />
                    <TextArea name="message" id="message" label="Message" required minLength={20} />

                    {/* Spam prevention */}
                    <input inert aria-hidden={true} tabIndex={-1} autoComplete="off" id="bt1201307" name="1201307" type="text" className={classes.contact__bt1201307} />

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
