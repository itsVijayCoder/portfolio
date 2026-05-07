"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { FilterHorizontalIcon, Search02Icon } from "@hugeicons/core-free-icons";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

type SnippetToolbarProps = {
	query: string;
	languages: string[];
	activeLanguage: string;
	isPending: boolean;
	onQueryChange: (query: string) => void;
	onLanguageChange: (language: string) => void;
};

export function SnippetToolbar({
	query,
	languages,
	activeLanguage,
	isPending,
	onQueryChange,
	onLanguageChange,
}: SnippetToolbarProps) {
	return (
		<div className="flex flex-col gap-3 border-b-2 border-foreground bg-background p-3 xl:flex-row xl:items-center xl:justify-between">
			<InputGroup className="max-w-2xl border-2 border-foreground shadow-[4px_4px_0_var(--comic-ink)]">
				<InputGroupAddon>
					<InputGroupText>
						<HugeiconsIcon icon={Search02Icon} strokeWidth={2} />
					</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput
					value={query}
					placeholder="Search snippets, tags, and frameworks..."
					onChange={(event) => onQueryChange(event.target.value)}
					aria-label="Search snippets"
				/>
			</InputGroup>

			<div className="flex items-center gap-2 overflow-x-auto">
				<div className="comic-button flex shrink-0 items-center gap-1 bg-secondary px-3 py-2 text-xs font-black uppercase text-muted-foreground">
					<HugeiconsIcon icon={FilterHorizontalIcon} strokeWidth={2} />
					{isPending ? "Filtering" : "Language"}
				</div>
				{languages.map((language) => (
					<button
						key={language}
						type="button"
						className={cn(
							"comic-button h-9 shrink-0 bg-background px-3 text-sm font-black uppercase text-muted-foreground",
							activeLanguage === language && "bg-foreground text-background",
						)}
						onClick={() => onLanguageChange(language)}
					>
						{language === "all" ? "All" : language}
					</button>
				))}
			</div>
		</div>
	);
}
