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
			whileHover={shouldReduceMotion ? undefined : { y: -6, rotate: -0.25 }}
			whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
			transition={{ type: "spring", stiffness: 360, damping: 28 }}
		>
			{children}
		</motion.div>
	);
}

