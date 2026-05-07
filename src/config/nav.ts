import {
	Briefcase01Icon,
	CodeIcon,
	ContactIcon,
	Home01Icon,
	UserIcon,
} from "@hugeicons/core-free-icons";

export const navItems = [
	{
		label: "Studio",
		href: "/",
		icon: Home01Icon,
	},
	{
		label: "About",
		href: "/about",
		icon: UserIcon,
	},
	{
		label: "Projects",
		href: "/projects",
		icon: Briefcase01Icon,
	},
	{
		label: "Snippets",
		href: "/snippets",
		icon: CodeIcon,
	},
	{
		label: "Contact",
		href: "/contact",
		icon: ContactIcon,
	},
] as const;

