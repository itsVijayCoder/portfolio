import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Copy01Icon, DashboardSquare03Icon } from "@hugeicons/core-free-icons";

import { MotionSection } from "@/components/animation/motion-section";
import { Badge } from "@/components/ui/badge";
import { snippets } from "@/data/snippets";

export function SnippetsTeaser() {
	return (
		<MotionSection className="border-y border-border bg-foreground text-background">
			<div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
				<div className="flex flex-col gap-5">
					<div className="flex size-12 items-center justify-center rounded-2xl bg-background text-foreground">
						<HugeiconsIcon icon={DashboardSquare03Icon} strokeWidth={2} />
					</div>
					<h2 className="font-heading text-3xl font-semibold sm:text-4xl">
						A dashboard route for daily-use snippets.
					</h2>
					<p className="max-w-xl text-sm leading-7 text-background/70">
						The snippets route follows a Cloudflare Dashboard-style layout: compact sidebar,
						search, filters, a preview panel, and one-click copy feedback.
					</p>
					<Link
						href="/snippets"
						className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
					>
						Open control room
						<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
					</Link>
				</div>
				<div className="rounded-[2rem] border border-background/10 bg-background/5 p-3">
					<div className="rounded-[1.5rem] border border-background/10 bg-background text-foreground">
						<div className="flex items-center justify-between gap-3 border-b border-border p-4">
							<div className="font-heading text-sm font-semibold">Snippet Control Room</div>
							<Badge variant="secondary">{snippets.length} snippets</Badge>
						</div>
						<div className="grid gap-0 md:grid-cols-[0.7fr_1fr]">
							<div className="border-b border-border p-4 md:border-b-0 md:border-r">
								<div className="flex flex-col gap-2">
									{["React", "Next.js", "Zod", "Animation"].map((category) => (
										<div
											key={category}
											className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground odd:bg-secondary"
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
									<div className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
										<HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
									</div>
								</div>
								<pre className="overflow-hidden rounded-2xl bg-foreground p-4 font-mono text-xs leading-6 text-background">
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

