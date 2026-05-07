import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight02Icon } from "@hugeicons/core-free-icons";

import { MotionCard } from "@/components/animation/motion-card";
import { MotionSection } from "@/components/animation/motion-section";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/schemas/project.schema";

type ProjectGalleryProps = {
	projects: Project[];
	title?: string;
	description?: string;
};

export function ProjectGallery({
	projects,
	title = "Episode gallery",
	description = "Projects are framed as case-study episodes with the problem, role, stack, and outcome kept easy to scan.",
}: ProjectGalleryProps) {
	return (
		<MotionSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
			<div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
				<div>
					<h2 className="comic-title font-heading text-4xl font-black uppercase sm:text-5xl">
						{title}
					</h2>
					<p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>
				</div>
				<Link
					href="/projects"
					className="comic-button inline-flex h-10 items-center justify-center gap-2 bg-background px-4 text-sm font-black uppercase"
				>
					View all projects
					<HugeiconsIcon icon={ArrowUpRight02Icon} strokeWidth={2} />
				</Link>
			</div>

			<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
				{projects.map((project, index) => (
					<MotionCard key={project.slug}>
						<Card className="comic-panel h-full rounded-none">
							<CardHeader>
								<div className="flex items-center justify-between gap-3">
									<Badge
										className="border-2 border-foreground font-black uppercase"
										variant={project.status === "live" ? "default" : "secondary"}
									>
										{project.status}
									</Badge>
									<span className="comic-panel-soft rotate-2 px-2 py-1 font-mono text-xs text-muted-foreground">
										EP {String(index + 1).padStart(2, "0")}
									</span>
								</div>
								<CardTitle className="font-heading text-2xl font-black uppercase leading-tight">
									{project.title}
								</CardTitle>
								<CardDescription>{project.summary}</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-col gap-5">
								<div className="aspect-video rounded-[1rem] border-2 border-foreground bg-secondary p-4 shadow-[5px_5px_0_var(--comic-ink)]">
									<div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-2 border-foreground bg-background p-4">
										<div className="absolute inset-0 opacity-60 halftone-dots" />
										<div className="flex items-center justify-between">
											<span className="relative font-mono text-xs text-muted-foreground">
												{project.category}
											</span>
											<span className="comic-pulse relative size-3 rounded-full bg-primary" />
										</div>
										<div className="relative max-w-[14rem] font-heading text-3xl font-black uppercase leading-[0.95]">
											{project.title}
										</div>
									</div>
								</div>
								<div className="flex flex-wrap gap-2">
									{project.stack.slice(0, 4).map((item) => (
										<Badge key={item} className="border-2 border-foreground" variant="outline">
											{item}
										</Badge>
									))}
								</div>
							</CardContent>
							<CardFooter>
								<Link
									href={`/projects/${project.slug}`}
									className="comic-button inline-flex h-10 items-center justify-center gap-2 bg-foreground px-4 text-sm font-black uppercase text-background"
								>
									Open case file
									<HugeiconsIcon icon={ArrowUpRight02Icon} strokeWidth={2} />
								</Link>
							</CardFooter>
						</Card>
					</MotionCard>
				))}
			</div>
		</MotionSection>
	);
}
