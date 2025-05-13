import OpenAI from "openai";

const openAI = new OpenAI();

functio

async function callOpenAIWithTools() {
  const context: OpenAI.Chat.ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: 'You are a helpful assistant that gives information about the time of day'
    },
    {
      role: 'user',
      content: 'What is the status of order 1235?'
    }
  ]

  // configure chat tools (first openAI call)
  const response = await openAI.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: context,
  })
  console.log(response.choices[0].message.content)
}

callOpenAIWithTools()
