import {
	Globe,
	LayoutDashboard,
	LockKeyhole,
	FileText,
	Plug,
	Wrench,
} from "lucide-react";

export const services = [
	{
		title: "Custom Websites",
		description:
			"Professional websites designed to showcase your business and generate leads.",
		icon: Globe,
		items: ["Business Sites", "Landing Pages", "Portfolios"],
	},
	{
		title: "Business Dashboards",
		description:
			"Custom tools that help teams manage operations, data, and daily workflows.",
		icon: LayoutDashboard,
		items: ["Dashboards", "CRM Tools", "Workflows"],
	},
	{
		title: "Client Portals",
		description:
			"Secure online portals where clients can access information and submit requests.",
		icon: LockKeyhole,
		items: ["Login", "Client Accounts", "Protected"],
	},
	{
		title: "Quote Request Systems",
		description:
			"Streamlined forms and workflows that turn website visitors into qualified leads.",
		icon: FileText,
		items: ["Services", "Lead Capture", "Projects"],
	},
	{
		title: "API Integrations",
		description:
			"Connect your website with third-party platforms, services, and business tools.",
		icon: Plug,
		items: ["APIs", "Cloud", "Automation"],
	},
	{
		title: "Ongoing Support",
		description:
			"Maintenance, updates, troubleshooting, and improvements after launch.",
		icon: Wrench,
		items: ["Maintenance", "Updates", "Support"],
	},
];