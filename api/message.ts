import type { MessagePayload } from '@common-types';

function constructResponse(statusCode: number, responseMessage: string, details?: unknown) {
    return new Response(
        JSON.stringify({ status: statusCode >= 400 ? 'error' : 'success', message: responseMessage, details }),
        { status: statusCode }
    );
}

export default async function MessageController(req: Request) {
    if (req.method !== 'POST') {
        return constructResponse(405, 'method not allowed');
    }

    const body = (await req.json()) as MessagePayload;
    return constructResponse(200, 'message sent successfully', body);
}
