import { z } from "zod";

let simpleValue = z.string(),

export const cardType = z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  description: z.string().optional(),
  topics: z.string().optional()
})