'use client'

import Link from 'next/link'

import { Input } from '../ui/input'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'

export const ConversacionalChat = () => {
  return (
    <>
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <Input
            placeholder="Search or start new chat"
            className="w-full h-8 px-3 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="grid gap-2 p-4">
          <Link
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            prefetch={false}
          >
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 grid gap-0.5">
              <div className="font-medium text-white">John Doe</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                Hey, hows it going?
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              2:30 PM
            </div>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            prefetch={false}
          >
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 grid gap-0.5">
              <div className="font-medium">Jane Smith</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                Attached a file for you.
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              12:45 PM
            </div>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            prefetch={false}
          >
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 grid gap-0.5">
              <div className="font-medium">Michael Johnson</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                Lets discuss the project details.
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              9:15 AM
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
