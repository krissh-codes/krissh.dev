import type { MessagePayload } from '@common-types';
import { Mailer } from './message/Mailer';
import { Constants, ResponseBuilder } from './utils';

export default async function MessageController(req: Request) {
    if (req.method !== 'POST') {
        return ResponseBuilder.constructResponse(405, Constants.RESPONSE_CONSTANTS.METHOD_NOT_ALLOWED);
    }

    const body = (await req.json()) as MessagePayload;
    const { messageId, response } = await new Mailer().send(body);
    return ResponseBuilder.constructResponse(200, response, { message_id: messageId });
}
