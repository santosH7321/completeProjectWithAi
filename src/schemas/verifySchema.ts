import { z } from "zod"

export const verifySchema = z.object({
    code: z.string().length(6, {message: 'Varification code must be 6 digits'})
})




