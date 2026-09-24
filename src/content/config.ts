import { defineCollection, z } from "astro:content";

// Blog posts live in src/content/blog/*.md. The filename becomes the URL:
// src/content/blog/my-post.md -> /post/my-post
const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      date: z.coerce.date(),
      cover: image(),
      coverAlt: z.string().optional(),
      description: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
