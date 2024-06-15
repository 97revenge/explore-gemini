'use client'

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { SendIcon } from 'lucide-react'
import { useActions } from 'ai/rsc'

export const ConversacionalChat = () => {
  const { chat } = useActions()

  return (
    <>
      <div className="flex-1 overflow-y-auto p-4 grid gap-4">
        <div className="flex justify-end">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-[60%]">
            Hey, hows it going?
          </div>
        </div>
        <div className="flex">
          <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded-lg max-w-[60%]">
            Im doing great, thanks for asking!
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-[60%]">
            Awesome, Im glad to hear that. Did you have a chance to look at the
            project proposal I sent over?
          </div>
        </div>
        <div className="flex">
          <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded-lg max-w-[60%]">
            Yes, I did. I think the proposal looks great. Lets schedule a call
            to discuss the next steps.
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Type your message..."
            className="flex-1 h-12 px-3 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
          />
          {/* <Button variant="ghost" size="icon">
              <FilePlusIcon className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <SmileIcon className="w-5 h-5" />
            </Button> */}
          <Button variant="ghost" size="icon">
            <SendIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </>
  )
}
