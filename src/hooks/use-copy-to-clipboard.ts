"use client";

import { useCallback, useRef, useState } from "react";

export function useCopyToClipboard(resetDelay = 1400) {
	const [copied, setCopied] = useState(false);
	const timeoutRef = useRef<number | null>(null);

	const copy = useCallback(
		async (value: string) => {
			if (!navigator.clipboard) {
				return false;
			}

			try {
				await navigator.clipboard.writeText(value);
				setCopied(true);

				if (timeoutRef.current) {
					window.clearTimeout(timeoutRef.current);
				}

				timeoutRef.current = window.setTimeout(() => {
					setCopied(false);
				}, resetDelay);

				return true;
			} catch {
				return false;
			}
		},
		[resetDelay],
	);

	return { copied, copy };
}

