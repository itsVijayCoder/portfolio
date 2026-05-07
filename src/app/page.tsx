import { SiteShell } from "@/components/layout/site-shell";
import { ContactPanel } from "@/components/sections/contact-panel";
import { HeroStudio } from "@/components/sections/hero-studio";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { SkillsStrip } from "@/components/sections/skills-strip";
import { SnippetsTeaser } from "@/components/sections/snippets-teaser";
import { getFeaturedProjects } from "@/data/projects";

export default function Home() {
	return (
		<SiteShell>
			<HeroStudio />
			<SkillsStrip />
			<ProjectGallery projects={getFeaturedProjects()} />
			<SnippetsTeaser />
			<ContactPanel />
		</SiteShell>
	);
}
