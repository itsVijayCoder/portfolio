"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type SnippetPanelView = "code" | "notes";

type SnippetsState = {
	query: string;
	selectedCategory: string;
	selectedLanguage: string;
	selectedSlug: string | null;
	panelView: SnippetPanelView;
	favoriteSlugs: string[];
	setQuery: (query: string) => void;
	setSelectedCategory: (category: string) => void;
	setSelectedLanguage: (language: string) => void;
	setSelectedSlug: (slug: string) => void;
	setPanelView: (view: SnippetPanelView) => void;
	toggleFavorite: (slug: string) => void;
};

export const useSnippetsStore = create<SnippetsState>()(
	persist(
		(set) => ({
			query: "",
			selectedCategory: "all",
			selectedLanguage: "all",
			selectedSlug: null,
			panelView: "code",
			favoriteSlugs: [],
			setQuery: (query) => set({ query }),
			setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
			setSelectedLanguage: (selectedLanguage) => set({ selectedLanguage }),
			setSelectedSlug: (selectedSlug) => set({ selectedSlug }),
			setPanelView: (panelView) => set({ panelView }),
			toggleFavorite: (slug) =>
				set((state) => ({
					favoriteSlugs: state.favoriteSlugs.includes(slug)
						? state.favoriteSlugs.filter((favoriteSlug) => favoriteSlug !== slug)
						: [...state.favoriteSlugs, slug],
				})),
		}),
		{
			name: "codetoon-snippets",
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				favoriteSlugs: state.favoriteSlugs,
			}),
		},
	),
);

