'use client'

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { SendIcon } from 'lucide-react'
import { useActions, readStreamableValue } from 'ai/rsc'
import { useState } from 'react'
import { Message } from 'ai'
import { usePathname } from 'next/navigation'

export const ConversacionalChat = () => {
  const { chat } = useActions()

  const params = usePathname().split('/')[2]

  const [conversation, setConversation] = useState<Message[]>([])
  const [input, setInput] = useState<string>('')

  const handler = async () => {
    const { messages, newMessage, err } = await chat(
      [...conversation, { role: 'user', content: input }],
      params,
    )

    if (err) {
      alert('erro !!! ')
      console.log(err)
    }

    for await (const chunk of readStreamableValue(newMessage)) {
      let textContent = `${newMessage}${chunk}`
      setConversation([
        ...conversation,
        {
          id: 'sdkad',
          role: 'assistant',
          content: chunk as string,
        },
      ])
    }
  }

  return (
    <>
      <div className="flex-1 overflow-y-auto p-4 grid gap-4">
        {conversation
          .filter(m => m.role === 'user' || m.role === 'assistant')
          .map((m, index) => {
            return (
              <>
                {m.role === 'user' && (
                  <>
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-[60%]">
                        {m.content}
                      </div>
                    </div>
                  </>
                )}

                {m.role === 'assistant' && (
                  <>
                    <div className="flex">
                      <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded-lg max-w-[60%]">
                        {m.content}
                      </div>
                    </div>
                  </>
                )}
              </>
            )
          })}

        {/* <div className="flex justify-end">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-[60%]">
            Awesome, Im glad to hear that. Did you have a chance to look at the
            project proposal I sent over?
          </div>
        </div> */}
        {/* <div className="flex">
          <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded-lg max-w-[60%]">
            Yes, I did. I think the proposal looks great. Lets schedule a call
            to discuss the next steps.
          </div>
        </div> */}
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center gap-2">
          <form action={handler} className="w-full flex flex-row">
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 h-12 px-3 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
            />
            {/* <Button variant="ghost" size="icon">
              <FilePlusIcon className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <SmileIcon className="w-5 h-5" />
            </Button> */}
            <Button type="submit" variant="ghost" size="icon">
              <SendIcon className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
