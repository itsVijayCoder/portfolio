import { z } from "zod";

export const snippetSchema = z.object({
	slug: z.string().min(1),
	title: z.string().min(1),
	description: z.string().min(1),
	category: z.string().min(1),
	language: z.string().min(1),
	tags: z.array(z.string().min(1)).min(1),
	code: z.string().min(1),
	notes: z.array(z.string().min(1)).default([]),
	createdAt: z.string().min(1),
	updatedAt: z.string().min(1),
});

export const snippetsSchema = z.array(snippetSchema);

export type Snippet = z.infer<typeof snippetSchema>;

