"use client";

import Link from "next/link";
import { useMemo, useTransition } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

import { SnippetList } from "@/components/snippets/snippet-list";
import { SnippetPreview } from "@/components/snippets/snippet-preview";
import { SnippetSidebar } from "@/components/snippets/snippet-sidebar";
import { SnippetToolbar } from "@/components/snippets/snippet-toolbar";
import type { Snippet } from "@/lib/schemas/snippet.schema";
import { useSnippetsStore } from "@/stores/snippets-store";

type SnippetShellProps = {
	snippets: Snippet[];
};

export function SnippetShell({ snippets }: SnippetShellProps) {
	const [isPending, startTransition] = useTransition();
	const query = useSnippetsStore((state) => state.query);
	const selectedCategory = useSnippetsStore((state) => state.selectedCategory);
	const selectedLanguage = useSnippetsStore((state) => state.selectedLanguage);
	const selectedSlug = useSnippetsStore((state) => state.selectedSlug);
	const panelView = useSnippetsStore((state) => state.panelView);
	const favoriteSlugs = useSnippetsStore((state) => state.favoriteSlugs);
	const setQuery = useSnippetsStore((state) => state.setQuery);
	const setSelectedCategory = useSnippetsStore((state) => state.setSelectedCategory);
	const setSelectedLanguage = useSnippetsStore((state) => state.setSelectedLanguage);
	const setSelectedSlug = useSnippetsStore((state) => state.setSelectedSlug);
	const setPanelView = useSnippetsStore((state) => state.setPanelView);
	const toggleFavorite = useSnippetsStore((state) => state.toggleFavorite);

	const categories = useMemo(() => {
		const uniqueCategories = Array.from(new Set(snippets.map((snippet) => snippet.category)));
		return ["all", "favorites", ...uniqueCategories];
	}, [snippets]);

	const languages = useMemo(() => {
		const uniqueLanguages = Array.from(new Set(snippets.map((snippet) => snippet.language)));
		return ["all", ...uniqueLanguages];
	}, [snippets]);

	const filteredSnippets = useMemo(() => {
		const normalizedQuery = query.trim().toLowerCase();

		return snippets.filter((snippet) => {
			const categoryMatch =
				selectedCategory === "all" ||
				snippet.category === selectedCategory ||
				(selectedCategory === "favorites" && favoriteSlugs.includes(snippet.slug));
			const languageMatch = selectedLanguage === "all" || snippet.language === selectedLanguage;
			const queryMatch =
				normalizedQuery.length === 0 ||
				[snippet.title, snippet.description, snippet.category, snippet.language, ...snippet.tags]
					.join(" ")
					.toLowerCase()
					.includes(normalizedQuery);

			return categoryMatch && languageMatch && queryMatch;
		});
	}, [favoriteSlugs, query, selectedCategory, selectedLanguage, snippets]);

	const activeSnippet =
		filteredSnippets.find((snippet) => snippet.slug === selectedSlug) ?? filteredSnippets[0];

	const updateQuery = (nextQuery: string) => {
		startTransition(() => setQuery(nextQuery));
	};

	const updateCategory = (category: string) => {
		startTransition(() => setSelectedCategory(category));
	};

	const updateLanguage = (language: string) => {
		startTransition(() => setSelectedLanguage(language));
	};

	return (
		<div className="min-h-screen bg-secondary/50 text-foreground">
			<header className="border-b border-border bg-background">
				<div className="flex min-h-14 flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
					<div className="flex items-center gap-3">
						<Link
							href="/"
							className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-secondary"
							aria-label="Back to portfolio"
						>
							<HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
						</Link>
						<div>
							<h1 className="font-heading text-lg font-semibold">Snippet Control Room</h1>
							<p className="font-mono text-xs text-muted-foreground">
								Search, pin, preview, and copy production utilities.
							</p>
						</div>
					</div>
					<div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
						<span className="rounded-full border border-border bg-secondary px-3 py-1.5">
							{snippets.length} total
						</span>
						<span className="rounded-full border border-border bg-secondary px-3 py-1.5">
							{filteredSnippets.length} visible
						</span>
						<span className="rounded-full border border-border bg-secondary px-3 py-1.5">
							{favoriteSlugs.length} pinned
						</span>
					</div>
				</div>
			</header>

			<div className="grid min-h-[calc(100vh-3.5rem)] lg:grid-cols-[17rem_minmax(20rem,0.9fr)_minmax(30rem,1.35fr)]">
				<SnippetSidebar
					categories={categories}
					activeCategory={selectedCategory}
					favoriteCount={favoriteSlugs.length}
					onCategoryChange={updateCategory}
				/>
				<section className="flex min-h-[32rem] flex-col border-b border-border bg-background lg:border-b-0 lg:border-r">
					<SnippetToolbar
						query={query}
						languages={languages}
						activeLanguage={selectedLanguage}
						isPending={isPending}
						onQueryChange={updateQuery}
						onLanguageChange={updateLanguage}
					/>
					<SnippetList
						snippets={filteredSnippets}
						selectedSlug={activeSnippet?.slug ?? null}
						favoriteSlugs={favoriteSlugs}
						onSelect={setSelectedSlug}
						onToggleFavorite={toggleFavorite}
					/>
				</section>
				<SnippetPreview snippet={activeSnippet} view={panelView} onViewChange={setPanelView} />
			</div>
		</div>
	);
}

