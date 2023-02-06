import { z } from "zod";

export const movieSchema = z.object({
    id: z.number(),
    title: z.string(),
    synopsis: z.string().max(400),
    genre: z.string(),
    rating: z.number().positive(),
    imgUrl: z.string().url(),
    comments: z.array(z.object({
        id: z.number(),
        content: z.string().max(250),
        author: z.string(),
        likes: z.number()
    }))
});

export type movieSchema = z.infer<typeof movieSchema>;
