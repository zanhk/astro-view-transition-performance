import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.optional(z.string()),
			type: z.string(),
			lastUpdateDate: z.date(),
			hideTitle: z.optional(z.boolean()),
			addPadding: z.optional(z.boolean()),
			hidden: z.optional(z.boolean()),
			cover: z.optional(image()),
			seo: z.object({
				title: z.string(),
				description: z.string(),
				author: z.string(),
			}),
		}),
});

const postsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			pubDate: z.date(),
			lastUpdateDate: z.date(),
			description: z.string(),
			author: z.string(),
			cover: z.optional(image()),
			tags: z.array(z.string()),
			hidden: z.optional(z.boolean()),
		}),
});

const servicesCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		lastUpdateDate: z.date(),
		description: z.string(),
	}),
});

export const collections = {
	posts: postsCollection,
	pages: pagesCollection,
	services: servicesCollection,
};
