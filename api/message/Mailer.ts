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

    getHtmlMessage(payload: MessagePayload) {
        return `
            <p>From: ${payload.from.name}</p>
            <p>Email: ${payload.from.email}</p>
            <p>Message:</p>
            <p>${payload.message}</p>
        `;
    }

    getPlainMessage(payload: MessagePayload) {
        return `
            From: ${payload.from.name}
            Email: ${payload.from.email}
            Message:
            ${payload.message}
        `;
    }

    send(payload: MessagePayload) {
        return this.transport.sendMail({
            from: process.env.FROM_ADDRESS,
            to: process.env.MAILBOX_ADDRESS,
            replyTo: payload.from.email,
            subject: `${payload.from.name} via portfolio`,
            html: this.getHtmlMessage(payload),
            text: this.getPlainMessage(payload)
        });
    }
}
