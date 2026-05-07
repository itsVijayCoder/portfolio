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
		<header className="sticky top-0 z-40 border-b-2 border-foreground bg-background/92 backdrop-blur-xl">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
				<Link href="/" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
					<div className="comic-button flex size-10 items-center justify-center bg-foreground text-background transition-transform group-hover:-rotate-6">
						<span className="font-heading text-sm font-black">AC</span>
					</div>
					<div className="leading-tight">
						<div className="comic-wordmark font-heading text-sm font-black uppercase">
							Amazing Coder
						</div>
						<div className="font-mono text-xs text-muted-foreground">{siteConfig.name} Studio</div>
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
									"flex h-9 items-center gap-2 rounded-full border-2 border-transparent px-3 text-sm font-black uppercase text-muted-foreground transition-all hover:-translate-y-0.5 hover:rotate-[-1deg] hover:border-foreground hover:bg-secondary hover:text-foreground hover:shadow-[3px_3px_0_var(--comic-ink)]",
									active &&
										"border-foreground bg-foreground text-background shadow-[3px_3px_0_var(--comic-red)] hover:bg-foreground hover:text-background",
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
						className="comic-button inline-flex h-9 items-center justify-center bg-background px-3 text-sm font-black uppercase"
					>
						Copy snippets
					</Link>
					<Link
						href="/contact"
						className="comic-button inline-flex h-9 items-center justify-center bg-primary px-4 text-sm font-black uppercase text-primary-foreground"
					>
						Contact
					</Link>
				</div>

				<button
					type="button"
					className="comic-button inline-flex size-10 items-center justify-center bg-background md:hidden"
					aria-label="Toggle navigation"
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((open) => !open)}
				>
					<HugeiconsIcon icon={menuOpen ? Cancel01Icon : Menu01Icon} strokeWidth={2} />
				</button>
			</div>

			{menuOpen ? (
				<div className="border-t-2 border-foreground bg-background px-4 py-4 md:hidden">
					<nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Mobile navigation">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="comic-panel-soft flex items-center gap-3 px-3 py-3 text-sm font-black uppercase text-muted-foreground hover:bg-secondary hover:text-foreground"
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
