import OpenAI from "openai";

const openAI = new OpenAI();

const context: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [{
  role: "system",
  content: "you are a helpful chatbot",
}]

async function createChatCompletion() {
  const response = await openAI.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: context
  });
  const responseMessage = response.choices[0].message;
  context.push({
    role: "assistant",
    content: responseMessage.content
  })
  console.log(`${response.choices[0].message.role}: ${response.choices[0].message.content}`);
}

process.stdin.addListener("data", async function (input) {
  const userInput = input.toString().trim()
  context.push({
    role: "user",
    content: userInput,
  })
  await createChatCompletion();
})