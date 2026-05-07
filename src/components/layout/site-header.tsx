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
		<header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
				<Link href="/" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
					<div className="flex size-10 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground text-background transition-transform group-hover:-rotate-3">
						<span className="font-heading text-sm font-bold">VS</span>
					</div>
					<div className="leading-tight">
						<div className="font-heading text-sm font-semibold">{siteConfig.name}</div>
						<div className="font-mono text-xs text-muted-foreground">CodeToon Studios</div>
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
									"flex h-9 items-center gap-2 rounded-full px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
									active && "bg-foreground text-background hover:bg-foreground hover:text-background",
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
						className="inline-flex h-9 items-center justify-center rounded-full border border-border bg-background px-3 text-sm font-medium transition-colors hover:bg-secondary"
					>
						Copy snippets
					</Link>
					<Link
						href="/contact"
						className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
					>
						Contact
					</Link>
				</div>

				<button
					type="button"
					className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background md:hidden"
					aria-label="Toggle navigation"
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((open) => !open)}
				>
					<HugeiconsIcon icon={menuOpen ? Cancel01Icon : Menu01Icon} strokeWidth={2} />
				</button>
			</div>

			{menuOpen ? (
				<div className="border-t border-border bg-background px-4 py-4 md:hidden">
					<nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Mobile navigation">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
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

