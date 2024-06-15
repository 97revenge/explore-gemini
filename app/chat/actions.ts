"use server"


import { createStreamableValue } from "ai/rsc"
import { streamText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { type NextRequest } from "next/server"
import { Helpers } from "@/lib/Helpers"

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY!
})






export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  display?: React.ReactNode;
}


export const chat = async (messages: Message[], req: string) => {



  const switchSystem = () => {
    let route: string = ""

    switch (true) {
      case req?.startsWith("github"):
        route = Helpers.github.system as string
        break;

      case req?.startsWith("math"):
        route = Helpers.math.system as string
        break;


    }
    console.log(route)
    return route
  }

  const resultSystem: string = switchSystem();

  const { textStream } = await streamText({
    model: google('models/gemini-1.5-flash-latest'),
    messages,
    system: resultSystem
  })

  const stream = createStreamableValue(textStream)

  try {
    return {
      messages,
      newMessage: stream.value
    }

  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message }
    }
  }

}