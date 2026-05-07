import Link from "next/link";

import { navItems } from "@/config/nav";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
	return (
		<footer className="border-t border-border bg-secondary/40">
			<div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
				<div className="max-w-lg">
					<div className="font-heading text-lg font-semibold">CodeToon Studios</div>
					<p className="mt-3 text-sm leading-6 text-muted-foreground">
						An animated portfolio built with a production-minded Next.js architecture,
						typed content, and useful developer snippets.
					</p>
				</div>
				<div className="flex flex-wrap gap-2 md:justify-end">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
						>
							{item.label}
						</Link>
					))}
				</div>
				<div className="text-sm text-muted-foreground md:col-span-2">
					Designed and engineered by {siteConfig.name}. Built for maintainability, motion, and speed.
				</div>
			</div>
		</footer>
	);
}

