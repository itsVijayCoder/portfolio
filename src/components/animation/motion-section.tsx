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
			initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
			whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.55, ease: "easeOut", delay }}
		>
			{children}
		</motion.section>
	);
}

