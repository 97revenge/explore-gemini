/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iLUlLEqyZvS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import { Input } from '../ui/input'

import {
  FilePlusIcon,
  MenuIcon,
  MoveVerticalIcon,
  SearchIcon,
  SendIcon,
  Star,
} from 'lucide-react'
import { ConversacionalChat } from './conversacional-chat'
import Image from 'next/image'

export default function Component() {
  return (
    <div className="flex h-screen w-full  mx-auto">
      <div className="bg-gray-100 dark:bg-gray-800 text-white border-r border-gray-200 dark:border-gray-700 w-[300px] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="text-md font-medium">Explore Gemini</div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Star className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MenuIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <ConversacionalChat />
      </div>
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-md dark:text-white white:text-black">
                Github
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Online
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <SearchIcon className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <FilePlusIcon className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoveVerticalIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 grid gap-4">
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-[60%]">
              Hey, hows it going?
            </div>
          </div>
          <div className="flex">
            <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded-lg max-w-[60%]">
              I'm doing great, thanks for asking!
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-[60%]">
              Awesome, Im glad to hear that. Did you have a chance to look at
              the project proposal I sent over?
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
      </div>
    </div>
  )
}
