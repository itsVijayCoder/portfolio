"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";

import { navItems } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 border-b border-foreground/15 bg-background/86 backdrop-blur-xl">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
				<Link href="/" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
					<div className="portfolio-mark flex size-10 items-center justify-center text-primary transition-transform group-hover:-rotate-6">
						<span className="font-heading text-sm font-black">V</span>
					</div>
					<div className="leading-tight">
						<div className="font-heading text-sm font-black uppercase tracking-normal">{siteConfig.name}</div>
						<div className="font-mono text-[0.68rem] uppercase text-muted-foreground">
							Frontend systems
						</div>
					</div>
				</Link>

				<nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
					{navItems.map((item) => {
						const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"flex h-9 items-center gap-2 rounded-none border border-transparent px-3 text-sm font-black uppercase text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/10 hover:text-foreground",
									active &&
										"border-primary/70 bg-primary/10 text-primary shadow-[0_0_24px_color-mix(in_oklch,var(--primary)_24%,transparent)]",
								)}
							>
								<HugeiconsIcon icon={item.icon} strokeWidth={2} />
								{item.label}
							</Link>
						);
					})}
				</nav>

				<div className="hidden items-center gap-2 md:flex">
					<Link
						href="/snippets"
						className="neo-button inline-flex h-9 items-center justify-center px-3 text-sm font-black uppercase"
					>
						Copy snippets
					</Link>
					<Link
						href="/contact"
						className="neo-button neo-button-primary inline-flex h-9 items-center justify-center px-4 text-sm font-black uppercase"
					>
						Contact
					</Link>
				</div>

				<button
					type="button"
					className="neo-button inline-flex size-10 items-center justify-center md:hidden"
					aria-label="Toggle navigation"
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((open) => !open)}
				>
					<HugeiconsIcon icon={menuOpen ? Cancel01Icon : Menu01Icon} strokeWidth={2} />
				</button>
			</div>

			{menuOpen ? (
				<div className="border-t border-foreground/15 bg-background/96 px-4 py-4 backdrop-blur md:hidden">
					<nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Mobile navigation">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="snippet-surface flex items-center gap-3 px-3 py-3 text-sm font-black uppercase text-muted-foreground hover:border-primary/60 hover:text-foreground"
								onClick={() => setMenuOpen(false)}
							>
								<HugeiconsIcon icon={item.icon} strokeWidth={2} />
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			) : null}
		</header>
	);
}
