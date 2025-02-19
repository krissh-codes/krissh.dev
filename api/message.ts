export default async (req: Request) => {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ status: 'error', message: 'method not allowed' }), { status: 405 });
    }

    const body = await req.json();
    return new Response(JSON.stringify({ status: 'success', message: 'message sent successfully', details: body }), {
        status: 200
    });
};
