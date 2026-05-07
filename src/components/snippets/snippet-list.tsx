"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Snippet } from "@/lib/schemas/snippet.schema";

type SnippetListProps = {
	snippets: Snippet[];
	selectedSlug: string | null;
	favoriteSlugs: string[];
	onSelect: (slug: string) => void;
	onToggleFavorite: (slug: string) => void;
};

export function SnippetList({
	snippets,
	selectedSlug,
	favoriteSlugs,
	onSelect,
	onToggleFavorite,
}: SnippetListProps) {
	if (snippets.length === 0) {
		return (
			<div className="flex min-h-80 items-center justify-center p-6 text-center">
				<div>
					<div className="font-heading text-lg font-semibold">No snippets found</div>
					<p className="mt-2 text-sm text-muted-foreground">Try a different search or filter.</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex min-h-0 flex-col overflow-y-auto">
			{snippets.map((snippet) => {
				const selected = snippet.slug === selectedSlug;
				const favorite = favoriteSlugs.includes(snippet.slug);

				return (
					<div
						key={snippet.slug}
						className={cn(
							"border-b-2 border-foreground bg-background transition-all hover:bg-secondary/70",
							selected && "bg-secondary",
						)}
					>
						<button
							type="button"
							className="flex w-full flex-col gap-3 p-4 text-left"
							onClick={() => onSelect(snippet.slug)}
						>
							<div className="flex items-start justify-between gap-3">
									<div>
									<div className="font-heading text-lg font-black uppercase">{snippet.title}</div>
									<p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">
										{snippet.description}
									</p>
								</div>
								<span className="font-mono text-xs text-muted-foreground">{snippet.language}</span>
							</div>
							<div className="flex flex-wrap gap-2">
									<Badge className="border-2 border-foreground" variant="secondary">
										{snippet.category}
									</Badge>
									{snippet.tags.slice(0, 2).map((tag) => (
									<Badge key={tag} className="border-2 border-foreground" variant="outline">
										{tag}
									</Badge>
								))}
							</div>
						</button>
						<button
							type="button"
							className={cn(
								"comic-button mb-3 ml-4 inline-flex h-8 items-center gap-2 bg-background px-3 text-xs font-black uppercase text-muted-foreground",
								favorite && "bg-primary text-primary-foreground",
							)}
							onClick={() => onToggleFavorite(snippet.slug)}
							aria-pressed={favorite}
						>
							<HugeiconsIcon icon={StarIcon} strokeWidth={2} />
							{favorite ? "Pinned" : "Pin"}
						</button>
					</div>
				);
			})}
		</div>
	);
}
