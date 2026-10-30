import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Ryan Poznikoff'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});
export const collections = { blog };
