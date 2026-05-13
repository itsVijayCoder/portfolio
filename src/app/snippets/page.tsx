import type { Metadata } from "next";

import { SnippetShell } from "@/components/snippets/snippet-shell";
import { snippets } from "@/data/snippets";

export const metadata: Metadata = {
	title: "Snippets | Vijay",
	description: "Vijay's creative code notes, snippets, and reusable frontend utilities.",
};

export default function SnippetsPage() {
	return <SnippetShell snippets={snippets} />;
}
