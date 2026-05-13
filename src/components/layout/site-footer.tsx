import Link from "next/link";

import { navItems } from "@/config/nav";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
	return (
		<footer className="border-t border-foreground/10 bg-card/40">
			<div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
				<div className="max-w-lg">
					<div className="font-heading text-xl font-black uppercase">{siteConfig.name}</div>
					<p className="mt-3 text-sm leading-6 text-muted-foreground">
						A creative portfolio with production-minded Next.js architecture, typed content,
						GSAP motion, and copy-ready developer snippets.
					</p>
				</div>
				<div className="flex flex-wrap gap-2 md:justify-end">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="neo-button px-3 py-1.5 text-sm font-black uppercase text-muted-foreground hover:text-foreground"
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
