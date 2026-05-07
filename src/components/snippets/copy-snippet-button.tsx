"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, CopyCheckIcon } from "@hugeicons/core-free-icons";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

type CopySnippetButtonProps = {
	code: string;
	label?: string;
};

export function CopySnippetButton({ code, label = "Copy" }: CopySnippetButtonProps) {
	const { copied, copy } = useCopyToClipboard();

	const handleCopy = async () => {
		const success = await copy(code);

		if (success) {
			toast.success("Snippet copied", {
				description: "The code is ready on your clipboard.",
			});
			return;
		}

		toast.error("Copy failed", {
			description: "Your browser blocked clipboard access.",
		});
	};

	return (
		<Button
			type="button"
			size="sm"
			className="comic-button font-black uppercase"
			onClick={handleCopy}
		>
			<HugeiconsIcon icon={copied ? CopyCheckIcon : Copy01Icon} strokeWidth={2} data-icon="inline-start" />
			{copied ? "Copied" : label}
		</Button>
	);
}
