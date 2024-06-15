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
import { ContainerChat } from './container-chat'

export default function Component({ slug }: { slug: string }) {
  return (
    <div className="flex h-screen w-full  mx-auto">
      <div className="bg-gray-100 dark:bg-gray-800 text-white border-r border-gray-200 dark:border-gray-700 w-[300px] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="text-md font-medium">Explore Gemini</div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <MenuIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <ContainerChat />
      </div>
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>✨</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-md dark:text-white white:text-black">
                {slug}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Online
                {/* isso pode depender talvez de uma chamada para a API da AI */}
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
        <ConversacionalChat />
      </div>
    </div>
  )
}
