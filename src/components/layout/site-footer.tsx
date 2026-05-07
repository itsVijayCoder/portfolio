import Link from "next/link";

import { navItems } from "@/config/nav";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
	return (
		<footer className="border-t-2 border-foreground bg-secondary/70">
			<div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
				<div className="max-w-lg">
					<div className="comic-wordmark font-heading text-xl font-black uppercase">
						Amazing Coder
					</div>
					<p className="mt-3 text-sm leading-6 text-muted-foreground">
						A sketchy comic portfolio with production-minded Next.js architecture,
						typed content, and copy-ready developer snippets.
					</p>
				</div>
				<div className="flex flex-wrap gap-2 md:justify-end">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="comic-button bg-background px-3 py-1.5 text-sm font-black uppercase text-muted-foreground hover:text-foreground"
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
