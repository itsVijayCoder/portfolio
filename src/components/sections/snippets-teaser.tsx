import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Copy01Icon, DashboardSquare03Icon } from "@hugeicons/core-free-icons";

import { MotionSection } from "@/components/animation/motion-section";
import { Badge } from "@/components/ui/badge";
import { snippets } from "@/data/snippets";

export function SnippetsTeaser() {
	return (
		<MotionSection className="border-y border-foreground/10 bg-foreground text-background">
			<div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
				<div className="flex flex-col gap-5">
					<div className="comic-burst flex size-20 items-center justify-center bg-secondary text-foreground">
						<HugeiconsIcon icon={DashboardSquare03Icon} strokeWidth={2} />
					</div>
					<h2 className="font-heading text-4xl font-black uppercase leading-none text-background sm:text-5xl">
						Code notes I actually reuse.
					</h2>
					<p className="max-w-xl text-sm leading-7 text-background/70">
						The snippets route is now a creative code desk: searchable, filterable, pinned,
						previewable, and designed around my portfolio instead of a borrowed dashboard shell.
					</p>
					<Link
						href="/snippets"
						className="neo-button neo-button-primary inline-flex h-12 w-fit items-center justify-center gap-2 px-5 text-sm font-black uppercase"
					>
						Open snippets
						<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
					</Link>
				</div>
				<div className="snippet-surface rotate-1 bg-background/5 p-3 text-foreground">
					<div className="border border-foreground/10 bg-background text-foreground">
						<div className="flex items-center justify-between gap-3 border-b border-foreground/10 p-4">
							<div className="font-heading text-sm font-black uppercase">Vijay / Snippets</div>
							<Badge className="border border-secondary/50 bg-secondary/10 text-secondary" variant="secondary">
								{snippets.length} snippets
							</Badge>
						</div>
						<div className="grid gap-0 md:grid-cols-[0.7fr_1fr]">
							<div className="border-b border-foreground/10 p-4 md:border-b-0 md:border-r">
								<div className="flex flex-col gap-2">
									{["React", "Next.js", "Zod", "Animation"].map((category) => (
										<div
											key={category}
											className="border border-foreground/10 bg-background/70 px-3 py-2 text-sm font-black uppercase text-muted-foreground odd:border-secondary/50 odd:text-secondary"
										>
											{category}
										</div>
									))}
								</div>
							</div>
							<div className="p-4">
								<div className="mb-3 flex items-center justify-between gap-3">
									<div>
										<div className="text-sm font-semibold">useDebounce</div>
										<div className="text-xs text-muted-foreground">React utility</div>
									</div>
									<div className="comic-burst flex size-12 items-center justify-center bg-primary text-primary-foreground">
										<HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
									</div>
								</div>
								<pre className="comic-code overflow-hidden p-4 font-mono text-xs leading-6 text-foreground">
									<code>{`const value = useDebounce(query, 250);\nreturn filteredItems;`}</code>
								</pre>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MotionSection>
	);
}
