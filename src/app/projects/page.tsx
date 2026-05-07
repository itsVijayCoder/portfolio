import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { ContactPanel } from "@/components/sections/contact-panel";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
	title: "Projects | Vijay",
	description: "Project case files from Vijay's animated developer portfolio.",
};

export default function ProjectsPage() {
	return (
		<SiteShell>
			<section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
				<div className="max-w-3xl">
					<h1 className="font-heading text-5xl font-semibold leading-tight">Project episodes</h1>
					<p className="mt-4 text-base leading-7 text-muted-foreground">
						Each project is structured like a case file: role, stack, decisions, and outcomes.
					</p>
				</div>
			</section>
			<ProjectGallery projects={projects} title="All episodes" />
			<ContactPanel />
		</SiteShell>
	);
}

