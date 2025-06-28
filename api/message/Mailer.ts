import nodemailer from 'nodemailer';
import type { MessagePayload } from '@common-types';

export class Mailer {
    private readonly transport;

    constructor() {
        this.transport = nodemailer.createTransport({
            host: process.env.MAILER_HOST,
            port: +process.env.MAILER_PORT!,
            auth: {
                user: process.env.SENDER_ADDRESS,
                pass: process.env.SENDER_PASS
            }
        });
    }

    send(payload: MessagePayload) {
        return this.transport.sendMail({
            from: process.env.FROM_ADDRESS,
            to: process.env.MAILBOX_ADDRESS,
            replyTo: payload.from.email,
            subject: `New message from ${payload.from.name} via portfolio`,
            html: payload.message,
            text: payload.message
        });
    }
}
