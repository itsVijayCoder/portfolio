import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon, UserStoryIcon } from "@hugeicons/core-free-icons";

import { MotionSection } from "@/components/animation/motion-section";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { profile } from "@/data/profile";

export function AboutProfile() {
	return (
		<div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-20 sm:px-6 lg:px-8">
			<MotionSection className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
				<Card className="comic-panel rotate-[-0.4deg] rounded-none">
					<CardHeader>
						<div className="comic-burst flex size-16 items-center justify-center bg-primary text-primary-foreground">
							<HugeiconsIcon icon={UserStoryIcon} strokeWidth={2} />
						</div>
						<CardTitle className="font-heading text-3xl font-black uppercase">
							{profile.name}
						</CardTitle>
						<CardDescription>{profile.role}</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-5">
						<p className="leading-7 text-muted-foreground">{profile.intro}</p>
						<div className="flex flex-wrap gap-2">
							<Badge variant="secondary">{profile.location}</Badge>
							<Badge className="border-2 border-foreground" variant="outline">
								{profile.availability}
							</Badge>
						</div>
					</CardContent>
				</Card>

				<div className="grid gap-4 md:grid-cols-3">
					{profile.values.map((value) => (
						<Card key={value.title} className="comic-panel-soft transition-transform hover:-translate-y-1 hover:rotate-1">
							<CardHeader>
								<div className="flex size-10 items-center justify-center rounded-xl border-2 border-foreground bg-secondary">
									<HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
								</div>
								<CardTitle className="font-heading font-black uppercase">{value.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm leading-6 text-muted-foreground">{value.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</MotionSection>

			<MotionSection>
				<div className="comic-panel bg-secondary/80 p-4 sm:p-6">
					<div className="mb-6 flex flex-col gap-2">
						<h2 className="comic-title font-heading text-4xl font-black uppercase">
							Origin timeline
						</h2>
						<p className="max-w-2xl text-sm leading-6 text-muted-foreground">
							A practical story arc from fundamentals to scalable animated product interfaces.
						</p>
					</div>
					<div className="grid gap-4 lg:grid-cols-3">
						{profile.timeline.map((item) => (
							<div
								key={item.episode}
								className="comic-panel-soft bg-background p-5 transition-transform hover:-translate-y-1 hover:rotate-[-1deg]"
							>
								<div className="font-mono text-xs font-black uppercase text-primary">
									{item.episode}
								</div>
								<h3 className="mt-3 font-heading text-xl font-black uppercase">{item.title}</h3>
								<p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</MotionSection>
		</div>
	);
}
