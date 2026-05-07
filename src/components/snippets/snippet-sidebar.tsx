"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { DashboardSquare03Icon, StarIcon } from "@hugeicons/core-free-icons";

import { cn } from "@/lib/utils";

type SnippetSidebarProps = {
	categories: string[];
	activeCategory: string;
	favoriteCount: number;
	onCategoryChange: (category: string) => void;
};

export function SnippetSidebar({
	categories,
	activeCategory,
	favoriteCount,
	onCategoryChange,
}: SnippetSidebarProps) {
	return (
		<aside className="border-b-2 border-foreground bg-background p-3 lg:border-b-0 lg:border-r-2">
			<div className="comic-panel-soft mb-4 flex items-center gap-3 bg-foreground p-3 text-background">
				<div className="comic-burst flex size-12 items-center justify-center bg-secondary text-foreground">
					<HugeiconsIcon icon={DashboardSquare03Icon} strokeWidth={2} />
				</div>
				<div>
					<div className="text-sm font-black uppercase">Control Room</div>
					<div className="font-mono text-xs text-background/60">copy utilities</div>
				</div>
			</div>
			<nav className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible" aria-label="Snippet categories">
				{categories.map((category) => {
					const active = category === activeCategory;
					const label = category === "all" ? "All snippets" : category;

					return (
						<button
							key={category}
							type="button"
							className={cn(
								"comic-button flex h-10 shrink-0 items-center justify-between gap-3 bg-background px-3 text-left text-sm font-black uppercase text-muted-foreground lg:w-full",
								active && "bg-secondary text-foreground",
							)}
							onClick={() => onCategoryChange(category)}
						>
							<span>{label}</span>
							{category === "favorites" ? (
								<span className="flex items-center gap-1 font-mono text-xs">
									<HugeiconsIcon icon={StarIcon} strokeWidth={2} />
									{favoriteCount}
								</span>
							) : null}
						</button>
					);
				})}
			</nav>
		</aside>
	);
}
