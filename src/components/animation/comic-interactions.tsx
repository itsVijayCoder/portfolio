"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ComicInteractions() {
	const shouldReduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 160,
		damping: 24,
		mass: 0.25,
	});
	const mouseX = useMotionValue(-200);
	const mouseY = useMotionValue(-200);

	useEffect(() => {
		if (shouldReduceMotion) {
			return;
		}

		const handlePointerMove = (event: PointerEvent) => {
			mouseX.set(event.clientX - 112);
			mouseY.set(event.clientY - 112);
		};

		window.addEventListener("pointermove", handlePointerMove, { passive: true });

		return () => window.removeEventListener("pointermove", handlePointerMove);
	}, [mouseX, mouseY, shouldReduceMotion]);

	return (
		<>
			<motion.div
				className="fixed left-0 top-0 z-[70] h-1 origin-left bg-primary"
				style={{ scaleX }}
				aria-hidden="true"
			/>
			{!shouldReduceMotion ? (
				<motion.div
					className="pointer-events-none fixed z-[60] size-56 rounded-full opacity-25 mix-blend-screen blur-2xl"
					style={{
						x: mouseX,
						y: mouseY,
						background:
							"radial-gradient(circle, color-mix(in oklch, var(--comic-yellow) 72%, transparent), transparent 68%)",
					}}
					aria-hidden="true"
				/>
			) : null}
		</>
	);
}
