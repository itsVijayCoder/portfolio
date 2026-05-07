import type { Metadata } from "next";

import { SnippetShell } from "@/components/snippets/snippet-shell";
import { snippets } from "@/data/snippets";

export const metadata: Metadata = {
	title: "Snippets | Vijay",
	description: "A Cloudflare Dashboard-inspired collection of useful copy-ready code snippets.",
};

export default function SnippetsPage() {
	return <SnippetShell snippets={snippets} />;
}

