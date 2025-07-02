import { RESPONSE_CONSTANTS } from './constants';

export class ResponseBuilder {
    static constructResponse(statusCode: number, responseMessage: string, details?: unknown) {
        return new Response(JSON.stringify({ status: statusCode >= 400 ? RESPONSE_CONSTANTS.ERROR : RESPONSE_CONSTANTS.SUCCESS, message: responseMessage, details }), {
            status: statusCode
        });
    }
}
