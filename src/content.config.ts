import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

// Définir un chargeur (`loader`) et un schéma (`schema`) pour chaque collection
const blog = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
    }),
});

export const collections = { blog };
