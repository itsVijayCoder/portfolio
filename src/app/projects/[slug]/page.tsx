import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowUpRight02Icon } from "@hugeicons/core-free-icons";

import { SiteShell } from "@/components/layout/site-shell";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return {
			title: "Project not found | Vijay",
		};
	}

	return {
		title: `${project.title} | Vijay`,
		description: project.summary,
	};
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	return (
		<SiteShell>
			<article className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
				<Link
					href="/projects"
					className="mb-8 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-semibold transition-colors hover:bg-secondary"
				>
					<HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
					Back to projects
				</Link>

				<div className="flex flex-col gap-6">
					<div className="flex flex-wrap gap-2">
						<Badge>{project.status}</Badge>
						<Badge variant="secondary">{project.category}</Badge>
					</div>
					<h1 className="font-heading text-5xl font-semibold leading-tight">{project.title}</h1>
					<p className="max-w-3xl text-lg leading-8 text-muted-foreground">{project.description}</p>
				</div>

				<div className="mt-10 grid gap-5 md:grid-cols-[0.75fr_1.25fr]">
					<Card className="rounded-2xl">
						<CardHeader>
							<CardTitle>Role</CardTitle>
							<CardDescription>{project.role}</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col gap-4">
							<div>
								<div className="mb-2 text-sm font-semibold">Stack</div>
								<div className="flex flex-wrap gap-2">
									{project.stack.map((item) => (
										<Badge key={item} variant="outline">
											{item}
										</Badge>
									))}
								</div>
							</div>
							{project.links.caseStudy ? (
								<Link
									href={project.links.caseStudy}
									className="inline-flex h-9 w-fit items-center justify-center gap-2 rounded-full bg-foreground px-4 text-sm font-semibold text-background"
								>
									Case file
									<HugeiconsIcon icon={ArrowUpRight02Icon} strokeWidth={2} />
								</Link>
							) : null}
						</CardContent>
					</Card>

					<Card className="rounded-2xl">
						<CardHeader>
							<CardTitle>Highlights</CardTitle>
							<CardDescription>What this episode demonstrates.</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid gap-3">
								{project.highlights.map((highlight) => (
									<div key={highlight} className="rounded-2xl border border-border bg-secondary/60 p-4">
										<p className="text-sm leading-6 text-muted-foreground">{highlight}</p>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</article>
		</SiteShell>
	);
}

