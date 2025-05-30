import z from "zod";


export const signUpInput = z.object({
    email : z.string().email(),
    password : z.string().min(6)
})

export type SignUpInput =z.infer<typeof signUpInput>


export const signInInput = z.object({
    email : z.string().email(),
    password : z.string().min(6)
})

export type SignInInput =z.infer<typeof signInInput>


export const blogSchema = z.object({
    title : z.string().max(30) ,
    content : z.string().max(125)
})

export type BlogSchema = z.infer<typeof blogSchema>

export const updateblogSchema = z.object({
    title : z.string().max(30) ,
    content : z.string().max(125),
    id : z.string()
})

export type UpdateBlogSchema = z.infer<typeof updateblogSchema>

// @fable/medium-common@1.0.0