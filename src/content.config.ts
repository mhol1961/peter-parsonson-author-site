import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog ("Field Dispatches") content collection.
// Each article is a Markdown file in src/content/blog/<slug>.md
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),   // meta description / SEO
    excerpt: z.string(),       // card teaser on the listing
    pubDate: z.coerce.date(),
    category: z.string(),
    readTime: z.string(),      // e.g. "7 min read"
    image: z.string(),         // /images/<file>.jpg
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
