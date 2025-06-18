import 'dotenv/config';
import type { MessagePayload } from '@common-types';
import { Mailer } from './mailer/Mailer';
import ResponseBuilder from './utils/ResponseBuilder';

export default async function MessageController(req: Request) {
    if (req.method !== 'POST') {
        return ResponseBuilder.constructResponse(405, 'method not allowed');
    }

    const body = (await req.json()) as MessagePayload;

    if (process.env.NODE_ENV === 'production') {
        const { messageId, response } = await new Mailer().send(body);
        return ResponseBuilder.constructResponse(200, response, { message_id: messageId });
    }

    return ResponseBuilder.constructResponse(200, 'message sent successfully', body);
}
