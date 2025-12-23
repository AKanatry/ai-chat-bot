import { convertToModelMessages, streamText } from 'ai';
import { google } from '@ai-sdk/google';
import { smoothStream } from 'ai';
export async function POST(req) {
  const { messages, model } = await req.json();

  const result = streamText({
    model: google(model || 'gemini-2.5-flash'),
    system: 'You are a helpful assistant.',
    messages: await convertToModelMessages(messages),
    experimental_transform: smoothStream({
        delayInMs: 20,
        chunking: "word",
      }),
  });

  return result.toUIMessageStreamResponse();
}