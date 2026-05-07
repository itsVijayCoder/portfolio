import { projectsSchema } from "@/lib/schemas/project.schema";

export const projects = projectsSchema.parse([
	{
		slug: "codetoon-studios-portfolio",
		title: "CodeToon Studios Portfolio",
		summary:
			"A cartoon-series-inspired developer portfolio with animated story beats and scalable content architecture.",
		description:
			"The portfolio itself is designed as an interactive animated series. The home page acts like a studio intro, projects become episodes, and snippets live inside a dashboard-style control room.",
		role: "Product designer and frontend engineer",
		stack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "GSAP", "Motion"],
		category: "frontend",
		featured: true,
		status: "building",
		highlights: [
			"Server-first App Router structure with small client islands.",
			"Motion system split between GSAP scenes and Motion micro-interactions.",
			"Typed project and snippet content validated with Zod.",
		],
		links: {
			caseStudy: "/projects/codetoon-studios-portfolio",
		},
	},
	{
		slug: "snippet-control-room",
		title: "Snippet Control Room",
		summary:
			"A Cloudflare-dashboard-inspired route for searchable, copy-ready engineering snippets.",
		description:
			"A fast utility route for daily development snippets with search, language filters, categories, favorites, and one-click copy feedback.",
		role: "Frontend architect",
		stack: ["Next.js", "Zustand", "Zod", "shadcn/ui", "Sonner"],
		category: "tooling",
		featured: true,
		status: "live",
		highlights: [
			"Dashboard shell optimized for scanability and keyboard-friendly actions.",
			"Favorites persisted locally with Zustand.",
			"Snippet content modeled as typed data so new entries do not touch UI logic.",
		],
		links: {
			caseStudy: "/projects/snippet-control-room",
		},
	},
	{
		slug: "cloudflare-ready-next-app",
		title: "Cloudflare Ready Next App",
		summary:
			"A deployment-ready Next.js setup using OpenNext and Cloudflare-friendly configuration.",
		description:
			"A project foundation focused on clean app structure, Cloudflare deployment scripts, typed environment access, and a maintainable frontend workflow.",
		role: "Full-stack frontend engineer",
		stack: ["Next.js", "OpenNext", "Cloudflare", "Wrangler", "TypeScript"],
		category: "cloud",
		featured: true,
		status: "case-study",
		highlights: [
			"Cloudflare deployment commands live directly in package scripts.",
			"Types are generated for Cloudflare bindings.",
			"Static-first routes keep the portfolio fast at the edge.",
		],
		links: {
			caseStudy: "/projects/cloudflare-ready-next-app",
		},
	},
	{
		slug: "animated-ui-systems-lab",
		title: "Animated UI Systems Lab",
		summary:
			"A focused lab for reusable animated UI patterns, interaction states, and design-system primitives.",
		description:
			"A collection of production-oriented interaction patterns, including animated cards, route transitions, reveal sections, active navigation indicators, and reduced-motion fallbacks.",
		role: "Interaction engineer",
		stack: ["React", "Motion", "GSAP", "Tailwind CSS", "Accessibility"],
		category: "experiment",
		featured: false,
		status: "building",
		highlights: [
			"Reusable wrappers keep animation logic out of route components.",
			"Reduced-motion behavior is treated as a first-class requirement.",
			"Micro-interactions are tied to feedback and hierarchy instead of decoration.",
		],
		links: {
			caseStudy: "/projects/animated-ui-systems-lab",
		},
	},
]);

export function getFeaturedProjects() {
	return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
	return projects.find((project) => project.slug === slug);
}

