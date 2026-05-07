import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Mail01Icon } from "@hugeicons/core-free-icons";

import { MotionSection } from "@/components/animation/motion-section";
import { siteConfig } from "@/config/site";

export function ContactPanel() {
	return (
		<MotionSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
			<div className="overflow-hidden rounded-[2rem] border border-border bg-secondary/60">
				<div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
					<div>
						<div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
							<HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
						</div>
						<h2 className="font-heading text-3xl font-semibold sm:text-4xl">
							Ready for the next episode?
						</h2>
						<p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
							Send a note about product UI, frontend systems, Cloudflare deployment, or a
							creative engineering idea that needs clean execution.
						</p>
					</div>
					<Link
						href={`mailto:${siteConfig.email}`}
						className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
					>
						Email {siteConfig.name}
						<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
					</Link>
				</div>
			</div>
		</MotionSection>
	);
}

