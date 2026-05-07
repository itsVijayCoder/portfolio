import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { AboutProfile } from "@/components/sections/about-profile";
import { ContactPanel } from "@/components/sections/contact-panel";
import { SkillsStrip } from "@/components/sections/skills-strip";

export const metadata: Metadata = {
	title: "About | Vijay",
	description: "About Vijay, his engineering style, stack, values, and animated portfolio story.",
};

export default function AboutPage() {
	return (
		<SiteShell>
			<AboutProfile />
			<SkillsStrip />
			<ContactPanel />
		</SiteShell>
	);
}

