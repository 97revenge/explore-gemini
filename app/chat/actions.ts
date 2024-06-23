"use server";
import { GithubUser } from './../../components/component/github-user';

import z from "zod"

import { createStreamableValue, createStreamableUI } from "ai/rsc";
import { CoreTool, generateText, streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { Helpers } from "@/lib/Helpers";


const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  display?: React.ReactNode;
}

export const chat = async (messages: Message[], req: string) => {



  const switcher = () => {
    let route: { system?: any, tools?: Record<string, CoreTool> } = new Object();

    switch (true) {
      case req?.startsWith("github"):
        route.system = Helpers.github.system as string;
        route.tools = {
          getUser: {
            description: "pegue o usuario do github dele e busques as informações pela api https://api.github.com/user",
            parameters: z.object({
              login: z.string().describe("o login do usuario do github"),
              avatar: z.string().describe("a url image avatar do usuario")
            }),

          }
        }

        break;

      case req?.startsWith("math"):
        route.system = Helpers.math.system as string;
        route.tools = {}
        break;
    }
    return route;
  };

  const { system } = switcher();




  // const tools: Record<string, CoreTool> = switchTools();
  const { textStream } = await streamText({
    model: google("models/gemini-1.5-flash-latest"),
    messages,
    system,
  });

  const stream = createStreamableValue(textStream);







  try {
    return {
      messages,
      newMessage: stream.value

    };
  } catch (err) {

    if (err instanceof Error) {
      return { error: err.message };
    }
  }
};
