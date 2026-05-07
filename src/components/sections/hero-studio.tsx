import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, CodeIcon, SparklesIcon } from "@hugeicons/core-free-icons";

import { GsapStudioScene } from "@/components/animation/gsap-studio-scene";
import { MotionSection } from "@/components/animation/motion-section";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";

export function HeroStudio() {
	return (
		<MotionSection className="overflow-hidden border-b border-border">
			<div className="absolute inset-0 studio-grid opacity-60" />
			<div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
				<div className="relative z-10 flex flex-col gap-8">
					<div className="flex flex-wrap gap-2">
						<Badge variant="secondary">Animated developer series</Badge>
						<Badge variant="outline">React 19</Badge>
						<Badge variant="outline">Cloudflare ready</Badge>
					</div>

					<div className="flex flex-col gap-5">
						<h1 className="max-w-3xl font-heading text-5xl font-semibold leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
							{profile.name} builds interfaces like animated episodes.
						</h1>
						<p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
							{profile.intro}
						</p>
					</div>

					<div className="flex flex-col gap-3 sm:flex-row">
						<Link
							href="/projects"
							className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
						>
							Start episodes
							<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
						</Link>
						<Link
							href="/snippets"
							className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-semibold transition-colors hover:bg-secondary"
						>
							<HugeiconsIcon icon={CodeIcon} strokeWidth={2} />
							Open snippets
						</Link>
					</div>

					<div className="grid gap-3 sm:grid-cols-3">
						{profile.stats.map((stat) => (
							<div
								key={stat.label}
								className="rounded-2xl border border-border bg-background/85 p-4 backdrop-blur"
							>
								<div className="font-mono text-xs text-muted-foreground">{stat.label}</div>
								<div className="mt-2 text-sm font-semibold">{stat.value}</div>
							</div>
						))}
					</div>
				</div>

				<div className="relative z-10">
					<div className="absolute -left-6 top-8 hidden size-16 rotate-[-8deg] items-center justify-center rounded-3xl border border-border bg-accent text-accent-foreground shadow-lg lg:flex">
						<HugeiconsIcon icon={SparklesIcon} strokeWidth={2} />
					</div>
					<GsapStudioScene />
				</div>
			</div>
		</MotionSection>
	);
}

