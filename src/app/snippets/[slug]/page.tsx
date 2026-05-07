import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

import { CopySnippetButton } from "@/components/snippets/copy-snippet-button";
import { Badge } from "@/components/ui/badge";
import { getSnippetBySlug, snippets } from "@/data/snippets";

type SnippetPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export function generateStaticParams() {
	return snippets.map((snippet) => ({
		slug: snippet.slug,
	}));
}

export async function generateMetadata({ params }: SnippetPageProps): Promise<Metadata> {
	const { slug } = await params;
	const snippet = getSnippetBySlug(slug);

	if (!snippet) {
		return {
			title: "Snippet not found | Vijay",
		};
	}

	return {
		title: `${snippet.title} snippet | Vijay`,
		description: snippet.description,
	};
}

export default async function SnippetDetailPage({ params }: SnippetPageProps) {
	const { slug } = await params;
	const snippet = getSnippetBySlug(slug);

	if (!snippet) {
		notFound();
	}

	return (
		<main className="min-h-screen bg-secondary/50 text-foreground">
			<div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
				<Link
					href="/snippets"
					className="mb-8 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-semibold transition-colors hover:bg-secondary"
				>
					<HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
					Back to snippets
				</Link>

				<section className="rounded-[2rem] border border-border bg-background">
					<div className="flex flex-col gap-4 border-b border-border p-6 md:flex-row md:items-start md:justify-between">
						<div>
							<div className="mb-3 flex flex-wrap gap-2">
								<Badge>{snippet.language}</Badge>
								<Badge variant="secondary">{snippet.category}</Badge>
								{snippet.tags.map((tag) => (
									<Badge key={tag} variant="outline">
										{tag}
									</Badge>
								))}
							</div>
							<h1 className="font-heading text-4xl font-semibold">{snippet.title}</h1>
							<p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
								{snippet.description}
							</p>
						</div>
						<CopySnippetButton code={snippet.code} />
					</div>
					<div className="p-4 sm:p-6">
						<pre className="overflow-x-auto rounded-2xl bg-foreground p-5 font-mono text-xs leading-6 text-background">
							<code>{snippet.code}</code>
						</pre>
						<div className="mt-5 grid gap-3">
							{snippet.notes.map((note) => (
								<p key={note} className="rounded-2xl border border-border bg-secondary/60 p-4 text-sm leading-6 text-muted-foreground">
									{note}
								</p>
							))}
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

