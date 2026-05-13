"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { DashboardSquare03Icon, StarIcon } from "@hugeicons/core-free-icons";

import { cn } from "@/lib/utils";

type SnippetSidebarProps = {
	categories: string[];
	categoryCounts: Record<string, number>;
	activeCategory: string;
	favoriteCount: number;
	onCategoryChange: (category: string) => void;
};

export function SnippetSidebar({
	categories,
	categoryCounts,
	activeCategory,
	favoriteCount,
	onCategoryChange,
}: SnippetSidebarProps) {
	return (
		<aside className="border-b border-foreground/10 bg-background/35 p-3 lg:border-b-0 lg:border-r">
			<div className="mb-4 flex items-center gap-3 border border-foreground/10 bg-foreground/[0.03] p-3">
				<div className="flex size-10 items-center justify-center border border-secondary/50 bg-secondary/10 text-secondary">
					<HugeiconsIcon icon={DashboardSquare03Icon} strokeWidth={2} />
				</div>
				<div>
					<div className="text-sm font-black uppercase">Code rail</div>
					<div className="font-mono text-xs uppercase text-muted-foreground">filter notes</div>
				</div>
			</div>
			<nav className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible" aria-label="Snippet categories">
				{categories.map((category) => {
					const active = category === activeCategory;
					const label =
						category === "all" ? "All snippets" : category === "favorites" ? "Pinned" : category;
					const count = category === "favorites" ? favoriteCount : (categoryCounts[category] ?? 0);

					return (
						<button
							key={category}
							type="button"
							className={cn(
								"snippet-rail-button flex h-11 shrink-0 items-center justify-between gap-3 px-3 text-left text-sm font-black uppercase text-muted-foreground lg:w-full",
								active && "is-active",
							)}
							onClick={() => onCategoryChange(category)}
						>
							<span>{label}</span>
							{category === "favorites" ? (
								<span className="flex items-center gap-1 font-mono text-xs">
									<HugeiconsIcon icon={StarIcon} strokeWidth={2} />
									{count}
								</span>
							) : (
								<span className="font-mono text-xs">{count}</span>
							)}
						</button>
					);
				})}
			</nav>
		</aside>
	);
}
