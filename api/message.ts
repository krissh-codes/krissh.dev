import type { MessagePayload } from '@common-types';
import ResponseBuilder from './utils/ResponseBuilder';

export default async function MessageController(req: Request) {
    if (req.method !== 'POST') {
        return ResponseBuilder.constructResponse(405, 'method not allowed');
    }

    const body = (await req.json()) as MessagePayload;
    return ResponseBuilder.constructResponse(200, 'message sent successfully', body);
}
