import { ChatOpenAI } from "langchain/chat_models";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

export async function chatExample() {
  const chat = new ChatOpenAI({ temperature: 0 });

  const response = await chat.call([
    new SystemChatMessage(
      "You are a helpful assistant that translates English to French."
    ),
    new HumanChatMessage("Translate: I love programming."),
  ]);

  console.log(response);
}
