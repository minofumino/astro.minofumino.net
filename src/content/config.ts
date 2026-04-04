import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    description: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};