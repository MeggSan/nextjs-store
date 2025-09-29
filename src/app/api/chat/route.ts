import { Configuration, OpenAIApi } from "openai-edge";

export const runtime = "edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const { messages } = await req.json();

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
    stream: true, // streaming
  });

  return new Response(completion.body, {
    headers: { "Content-Type": "text/event-stream" },
  });
}
