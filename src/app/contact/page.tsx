import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { ContactPanel } from "@/components/sections/contact-panel";

export const metadata: Metadata = {
	title: "Contact | Vijay",
	description: "Contact Vijay for frontend engineering, animation-rich UI, and Cloudflare-ready apps.",
};

export default function ContactPage() {
	return (
		<SiteShell>
			<section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
				<div className="max-w-3xl">
					<h1 className="comic-title font-heading text-6xl font-black uppercase leading-none">
						Contact
					</h1>
					<p className="mt-4 text-base leading-7 text-muted-foreground">
						A simple final scene for starting a focused engineering conversation.
					</p>
				</div>
			</section>
			<ContactPanel />
		</SiteShell>
	);
}
