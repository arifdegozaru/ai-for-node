import { OpenAI } from "openai";

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

main();
