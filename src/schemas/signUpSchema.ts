import { z } from 'zod'


export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 characters")
    .max(20, "Ussername must be no more than 20 characters")
    .regex(/.+\@.+\..+/, "Username must not cotain special character")



export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, {message: 'password must be at least 6 characters'})
})