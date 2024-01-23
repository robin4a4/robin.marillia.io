import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    description: z.string(),
    topics: z.array(z.string()),
    largeCard: z.boolean(),
    order: z.number(),
    createdAt: z.date(),
    githubLink: z.string(),
  }),
});

export const collections = {
  'posts': postsCollection,
};