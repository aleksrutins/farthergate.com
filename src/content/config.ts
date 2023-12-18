import { z, defineCollection } from 'astro:content'

export const collections = {
    blog: defineCollection({
        type: 'content',
        schema: z.object({
            draft: z.boolean(),
            inline: z.boolean(),
            title: z.string(),
            summary: z.optional(z.string()),
            publishDate: z.date(),
            tags: z.array(z.string()),
            image: z.optional(z.string())
        })
    })
}