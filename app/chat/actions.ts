"use server";
import { GithubUser } from './../../components/component/github-user';

import z from "zod"

import { createStreamableValue, createStreamableUI } from "ai/rsc";
import { CoreTool, generateText, streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { routeConfig } from '@/route';

const approvedRoute = ["github", "math"]


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
    let route: { system?: string, tools?: Record<string, CoreTool> } = {}

    if (approvedRoute.includes(req)) {
      route.system = routeConfig[req]
      route.tools = {}
    }

    return route

  }





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
