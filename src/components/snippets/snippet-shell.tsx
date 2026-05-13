"use client";

import Link from "next/link";
import { useMemo, useTransition } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, CodeIcon, SparklesIcon } from "@hugeicons/core-free-icons";

import { SnippetList } from "@/components/snippets/snippet-list";
import { SnippetPreview } from "@/components/snippets/snippet-preview";
import { SnippetSidebar } from "@/components/snippets/snippet-sidebar";
import { SnippetToolbar } from "@/components/snippets/snippet-toolbar";
import { profile } from "@/data/profile";
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

	const categoryCounts = useMemo(() => {
		return snippets.reduce<Record<string, number>>(
			(counts, snippet) => {
				counts[snippet.category] = (counts[snippet.category] ?? 0) + 1;
				return counts;
			},
			{ all: snippets.length, favorites: favoriteSlugs.length },
		);
	}, [favoriteSlugs.length, snippets]);

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
	const categoryPreview = categories.filter((category) => !["all", "favorites"].includes(category)).slice(0, 5);

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
		<div className="snippets-studio min-h-screen text-foreground">
			<header className="sticky top-0 z-40 border-b border-foreground/15 bg-background/88 backdrop-blur-xl">
				<div className="mx-auto flex min-h-16 max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
					<div className="flex items-center gap-3">
						<Link
							href="/"
							className="neo-button inline-flex size-9 items-center justify-center"
							aria-label="Back to portfolio"
						>
							<HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
						</Link>
						<div>
							<h1 className="font-heading text-xl font-black uppercase">
								{profile.name}
								<span className="mx-3 text-muted-foreground">/</span>
								<span className="text-secondary">Snippets</span>
							</h1>
							<p className="font-mono text-xs uppercase text-muted-foreground">
								Code notes built around my own workflow
							</p>
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
						<Link href="/projects" className="snippet-nav-link">
							Projects
						</Link>
						<Link href="/snippets" className="snippet-nav-link text-secondary">
							Snippets
						</Link>
						<Link href="/contact" className="snippet-nav-link">
							Contact
						</Link>
						<span className="snippet-terminal" aria-hidden="true">
							&gt;_
						</span>
					</div>
				</div>
			</header>

			<main className="relative overflow-hidden">
				<div className="absolute right-0 top-0 hidden size-60 bg-[radial-gradient(circle,color-mix(in_oklch,var(--secondary)_45%,transparent)_1px,transparent_1px)] [background-size:14px_14px] lg:block" />
				<section className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8" data-gsap-reveal>
					<div className="flex flex-col justify-end gap-6">
						<div>
							<h2 className="max-w-2xl font-heading text-5xl font-black leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
								Code notes I{" "}
								<span className="relative inline-block text-secondary">
									actually
									<span className="absolute -bottom-1 left-0 h-2 w-full -rotate-2 bg-secondary/25" />
								</span>{" "}
								reuse
							</h2>
							<p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
								Searchable utilities, typed patterns, animation helpers, and deployment notes from the
								way I build this portfolio and product interfaces.
							</p>
						</div>
						<div className="grid gap-3 sm:grid-cols-3">
							{[
								{ label: "Total", value: snippets.length },
								{ label: "Visible", value: filteredSnippets.length },
								{ label: "Pinned", value: favoriteSlugs.length },
							].map((stat) => (
								<div key={stat.label} className="snippet-surface px-4 py-3">
									<div className="font-mono text-[0.68rem] uppercase text-muted-foreground">
										{stat.label}
									</div>
									<div className="mt-1 font-heading text-2xl font-black text-foreground">
										{stat.value}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="snippet-orbit relative hidden min-h-72 overflow-hidden border border-foreground/10 bg-card/40 p-5 sm:block">
						<div className="absolute inset-8 rounded-[50%] border border-dashed border-foreground/25" />
						<div className="absolute right-12 top-12 size-3 rounded-full bg-foreground" data-gsap-float />
						<div className="absolute bottom-16 left-16 size-3 rounded-full bg-secondary" data-gsap-float />
						{categoryPreview.map((category, index) => (
							<button
								key={category}
								type="button"
								className="snippet-orbit-card"
								style={{
									top: `${18 + (index % 3) * 24}%`,
									left: `${18 + ((index * 23) % 58)}%`,
								}}
								onClick={() => updateCategory(category)}
							>
								<HugeiconsIcon icon={index % 2 === 0 ? CodeIcon : SparklesIcon} strokeWidth={2} />
								{category}
							</button>
						))}
					</div>
					<div className="grid gap-3 sm:hidden">
						{categoryPreview.map((category, index) => (
							<button
								key={category}
								type="button"
								className="snippet-orbit-card-mobile"
								onClick={() => updateCategory(category)}
							>
								<HugeiconsIcon icon={index % 2 === 0 ? CodeIcon : SparklesIcon} strokeWidth={2} />
								{category}
							</button>
						))}
					</div>
				</section>

				<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" data-gsap-reveal>
					<div className="snippet-workspace">
						<SnippetToolbar
							query={query}
							languages={languages}
							activeLanguage={selectedLanguage}
							isPending={isPending}
							onQueryChange={updateQuery}
							onLanguageChange={updateLanguage}
						/>
						<div className="grid min-h-[42rem] lg:grid-cols-[12rem_minmax(20rem,0.88fr)_minmax(28rem,1.35fr)]">
							<SnippetSidebar
								categories={categories}
								categoryCounts={categoryCounts}
								activeCategory={selectedCategory}
								favoriteCount={favoriteSlugs.length}
								onCategoryChange={updateCategory}
							/>
							<section className="flex min-h-[32rem] flex-col border-b border-foreground/10 bg-background/35 lg:border-b-0 lg:border-r">
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
					<div className="snippet-tip mt-4 flex flex-col gap-2 px-4 py-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
						<span>
							<span className="font-heading font-black uppercase text-secondary">Tip</span> Tag snippets well
							so future-you finds them faster.
						</span>
						<span className="font-mono text-xs text-secondary">
							{snippets.length} snippets - keep building
						</span>
					</div>
				</section>
			</main>
		</div>
	);
}
