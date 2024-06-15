"use server"

import { Message } from "ai"
import { createStreamableValue } from "ai/rsc"
import { streamText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { type NextRequest } from "next/server"
import { Helpers } from "@/lib/Helpers"

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY!
})



export const chat = async (messages: Message[], req?: NextRequest) => {


  const path = req?.nextUrl.pathname



  const switchSystem = () => {
    let route: string = ""

    switch (true) {
      case path?.startsWith("github"):
        route = Helpers.github.system as string
        break;

      case path?.startsWith("math"):
        route = Helpers.math.system as string
        break;


    }



    return route
  }


  const { textStream } = await streamText({
    model: google('models/gemini-1.5-flash-latest'),
    ...messages,
    system: switchSystem()
  })

  const stream = createStreamableValue(textStream)

  return {
    messages,
    newMessage: stream.value
  }


}