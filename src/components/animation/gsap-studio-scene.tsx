"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	CodeIcon,
	MagicWand02Icon,
	PlayCircleIcon,
	Rocket01Icon,
	SparklesIcon,
} from "@hugeicons/core-free-icons";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const sceneCards = [
	{ title: "Design", meta: "systems", icon: PlayCircleIcon },
	{ title: "Build", meta: "typed UI", icon: CodeIcon },
	{ title: "Polish", meta: "motion", icon: SparklesIcon },
];

export function GsapStudioScene() {
	const rootRef = useRef<HTMLDivElement>(null);
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (!rootRef.current || prefersReducedMotion) {
			return;
		}

		const context = gsap.context(() => {
			const query = gsap.utils.selector(rootRef);

			gsap.from(query("[data-scene-piece]"), {
				opacity: 0,
				y: 34,
				rotate: -4,
				duration: 0.75,
				ease: "power3.out",
				stagger: 0.08,
			});

			gsap.to(query("[data-float]"), {
				y: -12,
				rotate: 2,
				duration: 2.4,
				ease: "sine.inOut",
				repeat: -1,
				yoyo: true,
				stagger: 0.18,
			});

			gsap.to(query("[data-speed-line]"), {
				x: 22,
				duration: 1.4,
				ease: "none",
				repeat: -1,
				yoyo: true,
				stagger: 0.06,
			});
		}, rootRef);

		return () => context.revert();
	}, [prefersReducedMotion]);

	return (
		<div
			ref={rootRef}
			className="snippet-surface relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden p-4 shadow-[0_22px_80px_rgb(0_0_0_/_0.45)]"
			aria-label="Animated production studio scene"
		>
			<div className="absolute inset-0 studio-grid opacity-70" />
			<div className="absolute -right-10 top-12 size-44 rounded-full border border-secondary/40" data-speed-line />
			<div className="absolute inset-x-0 top-20 h-32 rotate-[-7deg] opacity-40 speed-lines" data-speed-line />
			<div
				data-scene-piece
				className="relative z-10 flex h-full flex-col justify-between border border-foreground/15 bg-card/80 p-4 backdrop-blur"
			>
				<div className="flex items-center justify-between gap-3">
					<div className="neo-button flex items-center gap-2 px-3 py-1.5 text-xs font-black uppercase">
						<span className="size-2 rounded-full bg-primary" />
						Vijay
					</div>
					<div className="snippet-surface rotate-2 px-3 py-1.5 text-xs font-black uppercase text-secondary">
						portfolio
					</div>
				</div>

				<div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
					<div
						data-scene-piece
						data-float
						className="comic-code min-h-48 p-4 text-foreground"
					>
						<div className="flex items-center justify-between gap-3">
							<HugeiconsIcon icon={MagicWand02Icon} strokeWidth={2} />
							<span className="font-mono text-xs text-foreground/50">FRAME 24</span>
						</div>
						<div className="mt-8 max-w-52 font-heading text-4xl font-black uppercase leading-[0.92] text-foreground">
							Craft. clarity. impact.
						</div>
					</div>
					<div className="flex flex-col gap-3">
						{sceneCards.map((card) => (
							<div
								key={card.title}
								data-scene-piece
								className="snippet-surface flex items-center justify-between gap-3 p-3 transition-transform hover:-translate-y-1 hover:border-secondary/70"
							>
								<div className="flex items-center gap-3">
									<div className="flex size-9 items-center justify-center border border-secondary/50 bg-secondary/10 text-secondary">
										<HugeiconsIcon icon={card.icon} strokeWidth={2} />
									</div>
									<div>
										<div className="text-sm font-semibold">{card.title}</div>
										<div className="font-mono text-xs uppercase text-muted-foreground">{card.meta}</div>
									</div>
								</div>
								<div className="comic-pulse size-3 rounded-full bg-primary" />
							</div>
						))}
					</div>
				</div>

				<div data-scene-piece className="grid grid-cols-3 gap-2">
					{["Next.js", "React 19", "Cloudflare"].map((label) => (
						<div
							key={label}
							className="border border-foreground/15 bg-background/70 px-3 py-2 text-center text-xs font-black uppercase text-muted-foreground"
						>
							{label}
						</div>
					))}
				</div>
			</div>
			<div
				data-scene-piece
				data-float
				className="comic-burst absolute right-6 top-20 z-20 flex size-20 items-center justify-center bg-primary text-primary-foreground"
			>
				<HugeiconsIcon icon={Rocket01Icon} strokeWidth={2} />
			</div>
		</div>
	);
}
