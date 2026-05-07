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
		<div className="flex flex-col gap-3 border-b border-border bg-background p-3 xl:flex-row xl:items-center xl:justify-between">
			<InputGroup className="max-w-2xl">
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
				<div className="flex shrink-0 items-center gap-1 rounded-full border border-border bg-secondary px-3 py-2 text-xs font-medium text-muted-foreground">
					<HugeiconsIcon icon={FilterHorizontalIcon} strokeWidth={2} />
					{isPending ? "Filtering" : "Language"}
				</div>
				{languages.map((language) => (
					<button
						key={language}
						type="button"
						className={cn(
							"h-9 shrink-0 rounded-full border border-border px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
							activeLanguage === language && "border-foreground bg-foreground text-background hover:bg-foreground hover:text-background",
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

