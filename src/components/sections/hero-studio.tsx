import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, CodeIcon, SparklesIcon, ZapIcon } from "@hugeicons/core-free-icons";

import { GsapStudioScene } from "@/components/animation/gsap-studio-scene";
import { MotionSection } from "@/components/animation/motion-section";
import { profile } from "@/data/profile";

export function HeroStudio() {
	return (
		<MotionSection className="hero-canvas overflow-hidden border-b border-foreground/10" fadeOut={false}>
			<div className="absolute inset-0 studio-grid opacity-50" />
			<div className="absolute left-4 top-28 hidden h-[62vh] w-px bg-foreground/20 lg:block" />
			<div className="absolute left-2 top-[22rem] hidden font-mono text-sm font-black text-primary lg:block">
				01
			</div>
			<div className="absolute bottom-0 left-0 h-20 w-[54vw] -skew-y-6 bg-accent/90 opacity-90 lg:h-28" />
			<div className="absolute bottom-20 right-0 hidden h-32 w-1/2 opacity-50 speed-lines lg:block" />
			<div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
				<div className="relative z-10 flex flex-col gap-8" data-gsap-reveal>
					<div className="flex flex-col gap-5">
						<h1 className="max-w-3xl font-heading text-7xl font-black uppercase leading-[0.78] tracking-normal text-foreground sm:text-8xl lg:text-[9.5rem]">
							{profile.name}
						</h1>
						<div className="h-3 w-56 -rotate-3 bg-primary" aria-hidden="true" />
						<div className="max-w-2xl">
							<h2 className="font-heading text-3xl font-black leading-tight text-foreground sm:text-4xl">
								{profile.role}
							</h2>
							<p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{profile.intro}</p>
						</div>
					</div>

					<div className="flex flex-col gap-3 sm:flex-row">
						<Link
							href="/projects"
							className="neo-button neo-button-primary inline-flex h-12 items-center justify-center gap-2 px-5 text-sm font-black uppercase"
						>
							View projects
							<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
						</Link>
						<Link
							href="/snippets"
							className="neo-button inline-flex h-12 items-center justify-center gap-2 px-5 text-sm font-black uppercase"
						>
							<HugeiconsIcon icon={CodeIcon} strokeWidth={2} />
							Open snippets
						</Link>
					</div>

					<div className="grid gap-3 sm:grid-cols-3" data-gsap-reveal>
						{profile.stats.map((stat) => (
							<div
								key={stat.label}
								className="snippet-surface p-4 backdrop-blur transition-transform hover:-translate-y-1 hover:border-secondary/70"
							>
								<div className="font-mono text-xs uppercase text-muted-foreground">{stat.label}</div>
								<div className="mt-2 text-sm font-semibold text-foreground">{stat.value}</div>
							</div>
						))}
					</div>

					<div className="relative hidden h-10 items-center gap-6 overflow-hidden font-mono text-xs uppercase text-muted-foreground lg:flex">
						<span className="text-primary">const focus =</span>
						<span className="text-secondary">&apos;craft + clarity + impact&apos;</span>
						<span className="h-px flex-1 bg-foreground/15" />
					</div>
				</div>

				<div className="relative z-10" data-gsap-reveal>
					<div className="comic-burst comic-pulse absolute -left-8 top-4 hidden size-24 items-center justify-center bg-secondary text-background lg:flex">
						<HugeiconsIcon icon={SparklesIcon} strokeWidth={2} />
					</div>
					<div className="snippet-surface comic-float absolute -right-2 bottom-8 z-20 hidden rotate-6 px-4 py-2 font-heading text-xl font-black uppercase text-primary lg:block">
						<HugeiconsIcon icon={ZapIcon} strokeWidth={2} className="mr-2 inline" />
						Ship!
					</div>
					<GsapStudioScene />
				</div>
			</div>
		</MotionSection>
	);
}
