import { HugeiconsIcon } from "@hugeicons/react";
import {
	CloudServerIcon,
	CodeIcon,
	MagicWand02Icon,
	Settings02Icon,
} from "@hugeicons/core-free-icons";

import { MotionSection } from "@/components/animation/motion-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/data/profile";

const icons = [CodeIcon, Settings02Icon, MagicWand02Icon, CloudServerIcon];

export function SkillsStrip() {
	return (
		<MotionSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
			<div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
				<div>
					<h2 className="font-heading text-3xl font-semibold sm:text-4xl">Skill powers</h2>
					<p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
						A focused stack for shipping clean, typed, animated, cloud-ready interfaces.
					</p>
				</div>
			</div>
			<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
				{profile.skillGroups.map((group, index) => (
					<Card key={group.title} className="rounded-2xl">
						<CardHeader>
							<div className="flex size-10 items-center justify-center rounded-2xl bg-secondary">
								<HugeiconsIcon icon={icons[index]} strokeWidth={2} />
							</div>
							<CardTitle>{group.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{group.skills.map((skill) => (
									<span
										key={skill}
										className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
									>
										{skill}
									</span>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</MotionSection>
	);
}

