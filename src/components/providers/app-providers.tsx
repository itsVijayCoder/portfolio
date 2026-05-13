"use client";

import { Toaster } from "sonner";

import { ComicInteractions } from "@/components/animation/comic-interactions";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

export function AppProviders() {
	return (
		<>
			<ComicInteractions />
			<ScrollReveal />
			<Toaster
				closeButton
				position="bottom-right"
				toastOptions={{
					classNames: {
						toast: "font-sans comic-panel-soft",
					},
				}}
			/>
		</>
	);
}
