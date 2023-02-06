import { z } from "zod";

export const userSchema = z.object(
    {
        id: z.number(),
        username: z.string().max(20),
        profilePicUrl: z.string().url(),
        bio: z.string().max(300),
        favoriteGenre: z.string(),
        favoriteMovies: z.array(z.string()),
        followers: z.number()
    }
)

export type userSchema = z.infer<typeof userSchema>
