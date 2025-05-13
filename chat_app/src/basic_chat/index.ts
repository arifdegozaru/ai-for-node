import OpenAI from "openai";

const openAI = new OpenAI();

process.stdin.addListener("data", async function (input) {
  const userInput = input.toString().trim();
  const response = await openAI.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{
      role: "system",
      content: "you are a helpful chatbot",
    }, {
      role: "user",
      content: userInput,
    }]
  });
  console.log(response.choices[0].message.content);
})