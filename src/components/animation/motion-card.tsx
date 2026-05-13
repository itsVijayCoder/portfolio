"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MotionCardProps = {
	children: ReactNode;
	className?: string;
};

export function MotionCard({ children, className }: MotionCardProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			className={cn("h-full", className)}
			data-gsap-reveal
			whileHover={shouldReduceMotion ? undefined : { y: -10, rotate: -1.2, scale: 1.015 }}
			whileTap={shouldReduceMotion ? undefined : { scale: 0.97, rotate: 0.4 }}
			transition={{ type: "spring", stiffness: 360, damping: 28 }}
		>
			{children}
		</motion.div>
	);
}
