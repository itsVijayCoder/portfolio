"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight02Icon, CodeIcon } from "@hugeicons/core-free-icons";

import { CopySnippetButton } from "@/components/snippets/copy-snippet-button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Snippet } from "@/lib/schemas/snippet.schema";
import type { SnippetPanelView } from "@/stores/snippets-store";

type SnippetPreviewProps = {
	snippet: Snippet | undefined;
	view: SnippetPanelView;
	onViewChange: (view: SnippetPanelView) => void;
};

export function SnippetPreview({ snippet, view, onViewChange }: SnippetPreviewProps) {
	if (!snippet) {
		return (
			<div className="flex min-h-96 items-center justify-center p-6 text-center">
				<div>
					<div className="font-heading text-lg font-semibold">Select a snippet</div>
					<p className="mt-2 text-sm text-muted-foreground">Choose a utility to preview and copy.</p>
				</div>
			</div>
		);
	}

	return (
		<section className="flex min-h-0 flex-col bg-background" aria-label="Snippet preview">
			<div className="flex flex-col gap-4 border-b border-border p-4 xl:flex-row xl:items-start xl:justify-between">
				<div className="min-w-0">
					<div className="mb-3 flex flex-wrap gap-2">
						<Badge>{snippet.language}</Badge>
						<Badge variant="secondary">{snippet.category}</Badge>
					</div>
					<h2 className="font-heading text-2xl font-semibold">{snippet.title}</h2>
					<p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
						{snippet.description}
					</p>
				</div>
				<div className="flex shrink-0 flex-wrap gap-2">
					<CopySnippetButton code={snippet.code} />
					<Link
						href={`/snippets/${snippet.slug}`}
						className="inline-flex h-8 items-center justify-center gap-2 rounded-full border border-border bg-background px-3 text-sm font-medium transition-colors hover:bg-secondary"
					>
						Open
						<HugeiconsIcon icon={ArrowUpRight02Icon} strokeWidth={2} />
					</Link>
				</div>
			</div>

			<div className="flex items-center gap-2 border-b border-border p-3">
				{(["code", "notes"] as const).map((tab) => (
					<button
						key={tab}
						type="button"
						className={cn(
							"h-9 rounded-full px-4 text-sm font-medium capitalize text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
							view === tab && "bg-foreground text-background hover:bg-foreground hover:text-background",
						)}
						onClick={() => onViewChange(tab)}
					>
						{tab}
					</button>
				))}
			</div>

			<div className="min-h-0 flex-1 overflow-y-auto p-4">
				{view === "code" ? (
					<pre className="min-h-96 overflow-x-auto rounded-2xl bg-foreground p-5 font-mono text-xs leading-6 text-background shadow-inner">
						<code>{snippet.code}</code>
					</pre>
				) : (
					<div className="flex flex-col gap-3">
						{snippet.notes.map((note) => (
							<div key={note} className="flex gap-3 rounded-2xl border border-border bg-secondary/60 p-4">
								<div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-background">
									<HugeiconsIcon icon={CodeIcon} strokeWidth={2} />
								</div>
								<p className="text-sm leading-6 text-muted-foreground">{note}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

