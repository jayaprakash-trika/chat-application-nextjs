import Ably from "ably/promises";


export async function GET() {
    try{
    const client = new Ably.Realtime(process.env.ABLY_APY_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'ably-nextjs-demo' });
    return Response.json(tokenRequestData);
    }catch(e){
        return Response.json(e);

    }
}
