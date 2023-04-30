import { OpenAI } from "langchain";

export async function baseExample() {
  const model = new OpenAI({
    modelName: "gpt-3.5-turbo",
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const res = await model.call(
    "What's a good idea for an application to build with GPT-3?"
  );

  console.log(res);
}
