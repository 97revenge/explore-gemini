import { prisma } from "@/lib/orm/prisma"
export const GET = async () => {

  const card = await prisma.card.findMany({
    include: {
      topics: true
    }
  })

  return Response.json(card)
}