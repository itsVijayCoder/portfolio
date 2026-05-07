import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Mail01Icon } from "@hugeicons/core-free-icons";

import { MotionSection } from "@/components/animation/motion-section";
import { siteConfig } from "@/config/site";

export function ContactPanel() {
	return (
		<MotionSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
			<div className="comic-panel overflow-hidden bg-secondary/80">
				<div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
					<div>
						<div className="comic-burst mb-5 flex size-20 items-center justify-center bg-primary text-primary-foreground">
							<HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
						</div>
						<h2 className="comic-title font-heading text-4xl font-black uppercase sm:text-5xl">
							Ready for the next episode?
						</h2>
						<p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
							Send a note about product UI, frontend systems, Cloudflare deployment, or a
							creative engineering idea that needs clean execution.
						</p>
					</div>
					<Link
						href={`mailto:${siteConfig.email}`}
						className="comic-button inline-flex h-12 items-center justify-center gap-2 bg-foreground px-5 text-sm font-black uppercase text-background"
					>
						Email {siteConfig.name}
						<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
					</Link>
				</div>
			</div>
		</MotionSection>
	);
}
