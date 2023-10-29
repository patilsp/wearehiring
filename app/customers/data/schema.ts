import { z } from "zod"

export const customersSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  status: z.string(),
  phone: z.string(),
  address: z.string(),
})

export type Customer = z.infer<typeof customersSchema>
