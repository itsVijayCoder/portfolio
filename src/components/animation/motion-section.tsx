import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MotionSectionProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	fadeOut?: boolean;
};

export function MotionSection({ children, className, delay = 0, fadeOut = true }: MotionSectionProps) {
	return (
		<section
			className={cn("relative", className)}
			data-gsap-reveal
			data-gsap-fade={fadeOut ? "" : undefined}
			data-gsap-delay={delay}
		>
			{children}
		</section>
	);
}
