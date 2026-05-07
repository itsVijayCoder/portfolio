"use client";

import { Toaster } from "sonner";

export function AppProviders() {
	return (
		<Toaster
			closeButton
			position="bottom-right"
			toastOptions={{
				classNames: {
					toast: "font-sans",
				},
			}}
		/>
	);
}

