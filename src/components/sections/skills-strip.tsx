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
					<h2 className="comic-title font-heading text-4xl font-black uppercase sm:text-5xl">
						Skill powers
					</h2>
					<p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
						A focused stack for shipping clean, typed, animated, cloud-ready interfaces.
					</p>
				</div>
			</div>
			<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
				{profile.skillGroups.map((group, index) => (
					<Card key={group.title} className="comic-panel h-full rounded-none bg-card">
						<CardHeader>
							<div className="comic-burst flex size-14 items-center justify-center bg-secondary">
								<HugeiconsIcon icon={icons[index]} strokeWidth={2} />
							</div>
							<CardTitle className="font-heading text-xl font-black uppercase">
								{group.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{group.skills.map((skill) => (
									<span
										key={skill}
										className="comic-button bg-background px-3 py-1 text-xs font-black uppercase text-muted-foreground"
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
