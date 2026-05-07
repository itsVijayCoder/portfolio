"use client";

import { Toaster } from "sonner";

import { ComicInteractions } from "@/components/animation/comic-interactions";

export function AppProviders() {
	return (
		<>
			<ComicInteractions />
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
