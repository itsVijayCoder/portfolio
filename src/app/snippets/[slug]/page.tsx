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
		<main className="comic-dashboard min-h-screen text-foreground">
			<div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
				<Link
					href="/snippets"
					className="comic-button mb-8 inline-flex h-10 items-center justify-center gap-2 bg-background px-4 text-sm font-black uppercase"
				>
					<HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
					Back to snippets
				</Link>

				<section className="comic-panel bg-background">
					<div className="flex flex-col gap-4 border-b-2 border-foreground p-6 md:flex-row md:items-start md:justify-between">
						<div>
							<div className="mb-3 flex flex-wrap gap-2">
								<Badge className="border-2 border-foreground font-black uppercase">
									{snippet.language}
								</Badge>
								<Badge className="border-2 border-foreground font-black uppercase" variant="secondary">
									{snippet.category}
								</Badge>
								{snippet.tags.map((tag) => (
									<Badge key={tag} className="border-2 border-foreground" variant="outline">
										{tag}
									</Badge>
								))}
							</div>
							<h1 className="comic-wordmark font-heading text-5xl font-black uppercase">
								{snippet.title}
							</h1>
							<p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
								{snippet.description}
							</p>
						</div>
						<CopySnippetButton code={snippet.code} />
					</div>
					<div className="p-4 sm:p-6">
						<pre className="comic-code overflow-x-auto p-5 font-mono text-xs leading-6 text-background">
							<code>{snippet.code}</code>
						</pre>
						<div className="mt-5 grid gap-3">
							{snippet.notes.map((note) => (
								<p key={note} className="comic-panel-soft bg-secondary/70 p-4 text-sm leading-6 text-muted-foreground">
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
