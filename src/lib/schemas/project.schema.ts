import { z } from "zod";

export const projectSchema = z.object({
	slug: z.string().min(1),
	title: z.string().min(1),
	summary: z.string().min(1),
	description: z.string().min(1),
	role: z.string().min(1),
	stack: z.array(z.string().min(1)).min(1),
	category: z.enum(["frontend", "fullstack", "cloud", "tooling", "experiment"]),
	featured: z.boolean().default(false),
	status: z.enum(["live", "building", "case-study"]),
	highlights: z.array(z.string().min(1)).min(1),
	links: z.object({
		live: z.string().url().optional(),
		repo: z.string().url().optional(),
		caseStudy: z.string().optional(),
	}),
});

export const projectsSchema = z.array(projectSchema);

export type Project = z.infer<typeof projectSchema>;

