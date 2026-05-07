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
			className="comic-panel relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden p-4"
			aria-label="Animated production studio scene"
		>
			<div className="absolute inset-0 studio-grid opacity-80" />
			<div className="absolute inset-x-0 top-20 h-32 rotate-[-7deg] opacity-70 speed-lines" data-speed-line />
			<div
				data-scene-piece
				className="relative z-10 flex h-full flex-col justify-between rounded-[1.1rem] border-2 border-foreground bg-card/95 p-4"
			>
				<div className="flex items-center justify-between gap-3">
					<div className="comic-button flex items-center gap-2 bg-background px-3 py-1.5 text-xs font-black uppercase">
						<span className="size-2 rounded-full bg-primary" />
						Amazing Coder
					</div>
					<div className="comic-panel-soft rotate-2 bg-secondary px-3 py-1.5 text-xs font-black uppercase">
						Issue 01
					</div>
				</div>

				<div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
					<div
						data-scene-piece
						data-float
						className="comic-code min-h-48 p-4 text-background"
					>
						<div className="flex items-center justify-between gap-3">
							<HugeiconsIcon icon={MagicWand02Icon} strokeWidth={2} />
							<span className="font-mono text-xs text-background/70">FRAME 24</span>
						</div>
						<div className="mt-8 max-w-52 font-heading text-4xl font-black uppercase leading-[0.92]">
							Sketchy UI. Serious code.
						</div>
					</div>
					<div className="flex flex-col gap-3">
						{sceneCards.map((card) => (
							<div
								key={card.title}
								data-scene-piece
								className="comic-panel-soft flex items-center justify-between gap-3 p-3 transition-transform hover:-translate-y-1 hover:rotate-1"
							>
								<div className="flex items-center gap-3">
									<div className="flex size-9 items-center justify-center rounded-xl border-2 border-foreground bg-secondary">
										<HugeiconsIcon icon={card.icon} strokeWidth={2} />
									</div>
									<div>
										<div className="text-sm font-semibold">{card.title}</div>
										<div className="font-mono text-xs text-muted-foreground">{card.meta}</div>
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
							className="rounded-xl border-2 border-foreground bg-secondary px-3 py-2 text-center text-xs font-black uppercase shadow-[3px_3px_0_var(--comic-ink)]"
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
