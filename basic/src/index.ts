import { OpenAI } from "openai";
import { encoding_for_model } from "tiktoken";

const openAI = new OpenAI({
  apiKey: process.env.AI_API_KEY,
});

async function main() {
  const response = await openAI.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{
      role: "user",
      content: "Hello World!",
    }]
  })
  console.log(response.choices[0].message)
}

function encodePrompt() {
  const prompt = ""
  const encoder = encoding_for_model("chatgpt-4o-latest")
  const words = encoder.encode(prompt);
  console.log(words)
}

main()
encodePrompt();
