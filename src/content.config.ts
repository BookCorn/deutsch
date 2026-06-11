import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    section: z.enum(['grammatik', 'notiz_b1', 'notiz_b2', 'mathematic']),
    summary: z.string().optional(),
    date: z.coerce.date().optional(),
    math: z.boolean().default(false),
    weight: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
