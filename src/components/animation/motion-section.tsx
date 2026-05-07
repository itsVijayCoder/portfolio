"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MotionSectionProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
};

export function MotionSection({ children, className, delay = 0 }: MotionSectionProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.section
			className={cn("relative", className)}
			initial={shouldReduceMotion ? false : { opacity: 0, y: 28, rotate: -0.45, scale: 0.985 }}
			whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0, scale: 1 }}
			viewport={{ once: true, margin: "-90px" }}
			transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay }}
		>
			{children}
		</motion.section>
	);
}
