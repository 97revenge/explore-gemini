"use server"

import { createAI } from "ai/rsc";

import { Message } from "ai"
import { chat } from "./app/chat/actions";

export interface ServerMessage extends Message {

}

export interface ClientMessage extends ServerMessage {
  display?: React.ReactNode
}

export const AI = createAI<ServerMessage[], ClientMessage[]>({
  actions: {
    chat,
  },
  initialAIState: [],
  initialUIState: [],

})