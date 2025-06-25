export default class ResponseBuilder {
    static constructResponse(statusCode: number, responseMessage: string, details?: unknown) {
        return new Response(JSON.stringify({ status: statusCode >= 400 ? 'error' : 'success', message: responseMessage, details }), { status: statusCode });
    }
}
