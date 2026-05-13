"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function ScrollReveal() {
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		gsap.registerPlugin(ScrollTrigger);

		const context = gsap.context(() => {
			const revealItems = gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]");

			revealItems.forEach((item) => {
				const delay = Number(item.dataset.gsapDelay ?? 0);

				gsap.fromTo(
					item,
					{
						autoAlpha: 0,
						y: 42,
						rotate: -0.35,
						filter: "blur(10px)",
					},
					{
						autoAlpha: 1,
						y: 0,
						rotate: 0,
						filter: "blur(0px)",
						duration: 0.82,
						delay,
						ease: "power3.out",
						scrollTrigger: {
							trigger: item,
							start: "top 86%",
							end: "top 48%",
							toggleActions: "play none none reverse",
						},
					},
				);
			});

			gsap.utils.toArray<HTMLElement>("[data-gsap-fade]").forEach((item) => {
				gsap.to(item, {
					autoAlpha: 0.42,
					y: -34,
					scale: 0.985,
					ease: "none",
					scrollTrigger: {
						trigger: item,
						start: "bottom 82%",
						end: "bottom 24%",
						scrub: true,
					},
				});
			});

			gsap.utils.toArray<HTMLElement>("[data-gsap-float]").forEach((item, index) => {
				gsap.to(item, {
					y: index % 2 === 0 ? -12 : 12,
					x: index % 2 === 0 ? 10 : -8,
					rotate: index % 2 === 0 ? 4 : -3,
					duration: 2.8 + index * 0.2,
					ease: "sine.inOut",
					repeat: -1,
					yoyo: true,
				});
			});
		}, document.body);

		return () => context.revert();
	}, [prefersReducedMotion]);

	return null;
}
