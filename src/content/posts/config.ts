import { z, defineCollection } from 'astro:content';
import {TopicsEnum} from "../../config.ts";


const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    description: z.string(),
    topics: TopicsEnum,
    largeCard: z.boolean(),
    order: z.number(),
    createdAt: z.date(),
    githubLink: z.string(),
    published: z.boolean(),
  }),
});

export const collections = {
  'posts': postsCollection,
};