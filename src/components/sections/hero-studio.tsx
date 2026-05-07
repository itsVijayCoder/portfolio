import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, CodeIcon, SparklesIcon, ZapIcon } from "@hugeicons/core-free-icons";

import { GsapStudioScene } from "@/components/animation/gsap-studio-scene";
import { MotionSection } from "@/components/animation/motion-section";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";

export function HeroStudio() {
	return (
		<MotionSection className="overflow-hidden border-b-2 border-foreground">
			<div className="absolute inset-0 studio-grid opacity-80" />
			<div className="absolute -right-20 top-24 hidden size-72 rotate-12 bg-secondary opacity-80 comic-burst lg:block" />
			<div className="absolute bottom-10 left-0 hidden h-40 w-1/2 opacity-60 speed-lines lg:block" />
			<div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
				<div className="relative z-10 flex flex-col gap-8">
					<div className="flex flex-wrap gap-2">
						<Badge className="comic-shake border-2 border-foreground bg-secondary text-foreground">
							Sketch powered
						</Badge>
						<Badge className="border-2 border-foreground bg-background text-foreground">React 19</Badge>
						<Badge className="border-2 border-foreground bg-accent text-accent-foreground">
							Cloudflare ready
						</Badge>
					</div>

					<div className="flex flex-col gap-5">
						<h1 className="comic-title max-w-3xl font-heading text-6xl font-black uppercase leading-[0.86] tracking-normal sm:text-7xl lg:text-8xl">
							Amazing Coder
						</h1>
						<div className="comic-panel-soft max-w-2xl rotate-[-0.6deg] p-5">
							<p className="text-base leading-8 text-muted-foreground sm:text-lg">
								{profile.name} turns Next.js apps into hand-drawn, animation-rich product
								experiences with clean architecture under the mask.
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-3 sm:flex-row">
						<Link
							href="/projects"
							className="comic-button inline-flex h-12 items-center justify-center gap-2 bg-primary px-5 text-sm font-black uppercase text-primary-foreground"
						>
							Swing into projects
							<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
						</Link>
						<Link
							href="/snippets"
							className="comic-button inline-flex h-12 items-center justify-center gap-2 bg-background px-5 text-sm font-black uppercase"
						>
							<HugeiconsIcon icon={CodeIcon} strokeWidth={2} />
							Copy code
						</Link>
					</div>

					<div className="grid gap-3 sm:grid-cols-3">
						{profile.stats.map((stat) => (
							<div
								key={stat.label}
								className="comic-panel-soft p-4 backdrop-blur transition-transform hover:-translate-y-1 hover:rotate-[-1deg]"
							>
								<div className="font-mono text-xs text-muted-foreground">{stat.label}</div>
								<div className="mt-2 text-sm font-semibold">{stat.value}</div>
							</div>
						))}
					</div>
				</div>

				<div className="relative z-10">
					<div className="comic-burst comic-pulse absolute -left-8 top-4 hidden size-24 items-center justify-center bg-secondary text-foreground lg:flex">
						<HugeiconsIcon icon={SparklesIcon} strokeWidth={2} />
					</div>
					<div className="comic-panel-soft comic-float absolute -right-2 bottom-8 z-20 hidden rotate-6 px-4 py-2 font-heading text-xl font-black uppercase text-primary lg:block">
						<HugeiconsIcon icon={ZapIcon} strokeWidth={2} className="mr-2 inline" />
						Ship!
					</div>
					<GsapStudioScene />
				</div>
			</div>
		</MotionSection>
	);
}
