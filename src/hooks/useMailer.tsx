import { useState } from 'react';
import type { MessagePayload } from '@common-types';

export enum MailerStates {
    READY,
    IN_PROGRESS,
    SUCCESS,
    FAILURE
}

export function useMailer(): [MailerStates, typeof sendMail] {
    const [status, setStatus] = useState<MailerStates>(MailerStates.READY);

    async function sendMail(payload: MessagePayload) {
        setStatus(MailerStates.IN_PROGRESS);
        try {
            await fetch('/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            setStatus(MailerStates.SUCCESS);
        } catch (error) {
            setStatus(MailerStates.FAILURE);
            setTimeout(() => setStatus(MailerStates.READY), 3000);
            console.error(error);
        }
    }

    return [status, sendMail];
}
