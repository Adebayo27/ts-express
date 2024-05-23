import {z} from 'zod'

export const createNoteSchema = z.object({
    body: z.object({
        name: z.string().min(1, {
            message: 'Name must be greater than 1 character(s)'
        }),
        description: z.string().min(5, {
            message: 'Description must be greater than 5 character(s)'
        }),
        user_id: z.number().gt(0, {message: "ID must be more that 0"})
    })
})