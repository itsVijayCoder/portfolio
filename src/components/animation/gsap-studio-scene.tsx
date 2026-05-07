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
	{ title: "Intro", meta: "00:01", icon: PlayCircleIcon },
	{ title: "Build", meta: "02:18", icon: CodeIcon },
	{ title: "Polish", meta: "04:40", icon: SparklesIcon },
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
				y: 24,
				rotate: -2,
				duration: 0.75,
				ease: "power3.out",
				stagger: 0.08,
			});

			gsap.to(query("[data-float]"), {
				y: -12,
				duration: 2.4,
				ease: "sine.inOut",
				repeat: -1,
				yoyo: true,
				stagger: 0.18,
			});
		}, rootRef);

		return () => context.revert();
	}, [prefersReducedMotion]);

	return (
		<div
			ref={rootRef}
			className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[2rem] border border-foreground/10 bg-background/80 p-4 shadow-2xl shadow-foreground/10"
			aria-label="Animated production studio scene"
		>
			<div className="absolute inset-0 studio-grid opacity-70" />
			<div
				data-scene-piece
				className="relative z-10 flex h-full flex-col justify-between rounded-[1.5rem] border border-foreground/10 bg-card/90 p-4"
			>
				<div className="flex items-center justify-between gap-3">
					<div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
						<span className="size-2 rounded-full bg-primary" />
						CodeToon Studios
					</div>
					<div className="rounded-full border border-foreground/10 bg-secondary px-3 py-1.5 text-xs font-medium">
						Season 01
					</div>
				</div>

				<div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
					<div
						data-scene-piece
						data-float
						className="min-h-48 rounded-2xl border border-foreground/10 bg-foreground p-4 text-background"
					>
						<div className="flex items-center justify-between gap-3">
							<HugeiconsIcon icon={MagicWand02Icon} strokeWidth={2} />
							<span className="font-mono text-xs text-background/70">FRAME 24</span>
						</div>
						<div className="mt-8 max-w-52 font-heading text-3xl font-semibold leading-tight">
							Animated systems. Serious code.
						</div>
					</div>
					<div className="flex flex-col gap-3">
						{sceneCards.map((card) => (
							<div
								key={card.title}
								data-scene-piece
								className="flex items-center justify-between gap-3 rounded-2xl border border-foreground/10 bg-background p-3"
							>
								<div className="flex items-center gap-3">
									<div className="flex size-9 items-center justify-center rounded-xl bg-secondary">
										<HugeiconsIcon icon={card.icon} strokeWidth={2} />
									</div>
									<div>
										<div className="text-sm font-semibold">{card.title}</div>
										<div className="font-mono text-xs text-muted-foreground">{card.meta}</div>
									</div>
								</div>
								<div className="size-2 rounded-full bg-primary" />
							</div>
						))}
					</div>
				</div>

				<div data-scene-piece className="grid grid-cols-3 gap-2">
					{["Next.js", "React 19", "Cloudflare"].map((label) => (
						<div
							key={label}
							className="rounded-2xl border border-foreground/10 bg-secondary px-3 py-2 text-center text-xs font-medium"
						>
							{label}
						</div>
					))}
				</div>
			</div>
			<div
				data-scene-piece
				data-float
				className="absolute right-8 top-24 z-20 flex size-14 items-center justify-center rounded-2xl border border-foreground/10 bg-primary text-primary-foreground shadow-xl"
			>
				<HugeiconsIcon icon={Rocket01Icon} strokeWidth={2} />
			</div>
		</div>
	);
}

