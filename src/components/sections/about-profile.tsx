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
				<Card className="rounded-2xl">
					<CardHeader>
						<div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
							<HugeiconsIcon icon={UserStoryIcon} strokeWidth={2} />
						</div>
						<CardTitle className="text-2xl">{profile.name}</CardTitle>
						<CardDescription>{profile.role}</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-5">
						<p className="leading-7 text-muted-foreground">{profile.intro}</p>
						<div className="flex flex-wrap gap-2">
							<Badge variant="secondary">{profile.location}</Badge>
							<Badge variant="outline">{profile.availability}</Badge>
						</div>
					</CardContent>
				</Card>

				<div className="grid gap-4 md:grid-cols-3">
					{profile.values.map((value) => (
						<Card key={value.title} className="rounded-2xl">
							<CardHeader>
								<div className="flex size-9 items-center justify-center rounded-xl bg-secondary">
									<HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
								</div>
								<CardTitle>{value.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm leading-6 text-muted-foreground">{value.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</MotionSection>

			<MotionSection>
				<div className="rounded-[2rem] border border-border bg-secondary/40 p-4 sm:p-6">
					<div className="mb-6 flex flex-col gap-2">
						<h2 className="font-heading text-3xl font-semibold">Origin timeline</h2>
						<p className="max-w-2xl text-sm leading-6 text-muted-foreground">
							A practical story arc from fundamentals to scalable animated product interfaces.
						</p>
					</div>
					<div className="grid gap-4 lg:grid-cols-3">
						{profile.timeline.map((item) => (
							<div
								key={item.episode}
								className="rounded-2xl border border-border bg-background p-5"
							>
								<div className="font-mono text-xs text-muted-foreground">{item.episode}</div>
								<h3 className="mt-3 font-heading text-xl font-semibold">{item.title}</h3>
								<p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</MotionSection>
		</div>
	);
}

