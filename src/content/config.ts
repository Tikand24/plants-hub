import { defineCollection, z } from 'astro:content';

const plants = defineCollection({
  schema: z.object({
    _id: z.string(),
    name: z.string(),
    price: z.number(),
    deleted: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
    medias: z.array(z.object({
      url: z.string(),
      filename: z.string(),
      _id: z.string(),
    })),
    type: z.array(z.object({
      name: z.string(),
      price: z.number(),
      _id: z.string(),
      clients: z.array(z.string()),
      routes: z.array(z.string()),
    })),
  }),
});

export const collections = {
  plants,
};