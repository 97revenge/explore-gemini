"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SendIcon } from "lucide-react";
import { useActions, readStreamableValue } from "ai/rsc";
import { useEffect, useRef, useState } from "react";
import { Message } from "@/app/chat/actions";
import { usePathname } from "next/navigation";

import Markdown from "react-markdown";

export const ConversacionalChat = () => {
  const { chat } = useActions();

  const params = usePathname().split("/")[2];

  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handler = async () => {
    const { messages, newMessage, err, display } = await chat(
      [...conversation, { role: "user", content: input }],
      params
    );

    if (err) {
      alert("erro !!! ");
      console.log(err);
    }

    setInput("");

    for await (const chunk of readStreamableValue(newMessage)) {
      alert(JSON.stringify(display));
      let textContent = `${newMessage}${chunk}`;
      setConversation([
        ...messages,
        {
          id: "sdkad",
          role: "assistant",
          content: chunk as string,
        },
      ]);
    }
  };

  const chatRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  return (
    <>
      <div className="transition-all flex-1 flex-col overflow-y-auto p-4 grid gap-4">
        {conversation.map((m, index) => {
          return (
            <>
              {m.role == "user" && (
                <>
                  <div className="transition-all flex justify-end h-auto">
                    <div className="transition-all bg-blue-500 h-auto text-white px-4 py-2 rounded-lg ">
                      <Markdown>{m.content}</Markdown>
                    </div>
                  </div>
                </>
              )}
              {m.role == "assistant" && (
                <>
                  <div className="transition-all flex">
                    <div className="transition-all bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded-lg max-w-[60%]">
                      <Markdown>{m.content}</Markdown>
                    </div>
                  </div>
                </>
              )}
            </>
          );
        })}
        <div ref={chatRef} />
      </div>
      <div className="transition-all border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="transition-all flex items-center gap-2">
          <form
            action={handler}
            className="transition-all w-full flex flex-row"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="transition-all flex-1 h-12 px-3 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
            />
            {/* <Button variant="ghost" size="icon">
              <FilePlusIcon className="transition-all w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <SmileIcon className="transition-all w-5 h-5" />
            </Button> */}
            <Button type="submit" variant="ghost" size="icon">
              <SendIcon className="transition-all w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
