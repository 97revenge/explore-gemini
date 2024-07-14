import Link from "next/link";

import { cookies } from "next/headers";

import { Input } from "../ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export const ContainerChat = () => {
  const cookieStore = cookies();

  return (
    <>
      <div className="flex-1 overflow-y-auto ">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <Input
            placeholder="Search or start new chat"
            className="w-full h-8 px-3 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="grid gap-2 p-4 ">
          {cookieStore.getAll().map((item: { name: string }) => {
            return (
              <>
                <Link
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                  prefetch={false}
                >
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>🤖</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 grid gap-0.5">
                    <div className="font-medium text-white">{item.name}</div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
