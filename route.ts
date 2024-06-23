import { prisma } from "./lib/orm/prisma";



export const approvedRoute = ["/chat/github", "/chat/math"]


export const routeCall = async () => {

  const system = await prisma.helper.findMany({ cacheStrategy: { swr: 60, ttl: 60 }, });

  console.log(system)

  if (system) {
    prisma.$disconnect();
  }
}