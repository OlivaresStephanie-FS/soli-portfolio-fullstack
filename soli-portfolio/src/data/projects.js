import contractorplatform from "../assets/images/contractorplatform.png";
import netflix from "../assets/images/netflix.png";
import severance from "../assets/images/severance.png";
import darap from "../assets/images/darapsauna.png";
import dv from "../assets/images/call-to-action.png";

export const projects = [
	{
		slug: "contractor-platform",
		title: "Contractor Quote Management Platform",
		description:
			"Full-stack contractor platform for managing quote requests, image uploads, project workflows, and customer reviews.",
		tagline: "Full-stack quote management and client review system.",
		stack: [
			"React",
			"Node.js",
			"MongoDB",
			"Netlify Functions",
			"Cloudinary",
			"Nodemailer",
		],
		tech: [
			"React",
			"Node.js",
			"MongoDB",
			"Netlify Functions",
			"Cloudinary",
			"Nodemailer",
		],
		image: contractorplatform,
		featured: true,
		category: "Full Stack",
		live: "https://mannyspaintingcompany.com",
		liveUrl: "https://mannyspaintingcompany.com",
		github: "https://github.com/OlivaresStephanie-FS/mannyspaintcompany",
		githubUrl:
			"https://github.com/OlivaresStephanie-FS/mannyspaintcompany",
		overview:
			"This project is being built as a full-stack platform for managing quote requests, uploads, workflows, and customer reviews through a clean admin experience.",
		problem:
			"Manny’s Painting needed a modern way to collect quote requests, manage client photos, and track project statuses without relying on spreadsheets or phone calls.",
		solution:
			"I built a full-stack system that allows customers to submit quote requests with photos while giving the business owner an admin dashboard to manage projects and track progress.",
		features: [
			"Customer quote submission form",
			"Secure Cloudinary image uploads",
			"MongoDB database persistence",
			"Admin dashboard with quote status updates",
			"Email notifications for new quote requests",
			"Customer review system",
		],
		architecture: [
			"React frontend",
			"Serverless API with Netlify Functions",
			"MongoDB Atlas database",
			"Cloudinary image hosting",
		],
		screenshots: [
			"/screenshots/home.png",
			"/screenshots/projects.png",
			"/screenshots/contact.png",
		],
		gallery: [
			{
				src: "/screenshots/home.png",
				alt: "Contractor platform homepage",
				caption: "Homepage and quote entry experience.",
			},
			{
				src: "/screenshots/projects.png",
				alt: "Contractor platform projects view",
				caption: "Projects and workflow presentation.",
			},
			{
				src: "/screenshots/contact.png",
				alt: "Contractor platform contact and quote form",
				caption: "Lead capture and contact experience.",
			},
		],
	},
	{
		slug: "severance-promo-site",
		title: "Severance Promo Site",
		description:
			"Promotional website inspired by the visual style and storytelling tone of the series Severance.",
		tagline:
			"Branded promo experience focused on visual storytelling and atmosphere.",
		stack: ["HTML", "CSS", "JavaScript"],
		tech: ["HTML", "CSS", "JavaScript"],
		image: severance,
		featured: true,
		category: "UI / Visual",
		live: "",
		liveUrl: "",
		github: "",
		githubUrl: "",
		overview:
			"This project explores visual storytelling, layout, and branded presentation through a promo-style website experience.",
		gallery: [
			{
				src: severance,
				alt: "Severance promo homepage",
				caption:
					"Landing page and visual presentation for the promo concept.",
			},
		],
	},
	{
		slug: "netflix-clone",
		title: "Netflix UI Clone",
		description:
			"Frontend recreation of the Netflix browsing interface with responsive layout and media-focused UI design.",
		tagline:
			"Responsive streaming-style interface focused on layout and UI fidelity.",
		stack: ["React", "JavaScript", "CSS"],
		tech: ["React", "JavaScript", "CSS"],
		image: netflix,
		featured: true,
		category: "Frontend",
		live: "",
		liveUrl: "",
		github: "",
		githubUrl: "",
		overview:
			"This project focuses on recreating a recognizable streaming interface with strong layout control, responsive behavior, and polished visual hierarchy.",
		gallery: [
			{
				src: netflix,
				alt: "Netflix clone homepage",
				caption: "Hero banner and browsing layout.",
			},
			{
				src: severance,
				alt: "Netflix clone supporting visual",
				caption: "Secondary media-inspired visual for the case study.",
			},
		],
	},
	{
		slug: "da-rap-sauna",
		title: "Da Rap Sauna Studio",
		description:
			"Music studio portfolio website showcasing artists, media content, and studio branding.",
		tagline:
			"Artist- and media-focused website built around studio branding and presentation.",
		stack: ["HTML", "CSS", "JavaScript"],
		tech: ["HTML", "CSS", "JavaScript"],
		image: darap,
		featured: true,
		category: "Client",
		live: "",
		liveUrl: "",
		github: "",
		githubUrl: "",
		overview:
			"This site was designed to present music and multimedia content in a way that feels expressive, branded, and easy to navigate across devices.",
		gallery: [
			{
				src: darap,
				alt: "Da Rap Sauna homepage",
				caption: "Studio branding and media-forward landing page.",
			},
		],
	},
	{
		slug: "domestic-violence-awareness",
		title: "Domestic Violence Awareness",
		description:
			"Educational and advocacy site focused on awareness and support resources.",
		tagline:
			"Content-first advocacy site built for clarity, empathy, and accessibility.",
		stack: ["HTML", "CSS"],
		tech: ["HTML", "CSS"],
		image: dv,
		featured: true,
		category: "Client",
		live: "",
		liveUrl: "",
		github: "",
		githubUrl: "",
		overview:
			"This project centers meaningful content, structured information hierarchy, and accessible presentation for an awareness-focused web experience.",
		gallery: [
			{
				src: dv,
				alt: "Domestic violence awareness project",
				caption:
					"Content-first layout built around educational and support resources.",
			},
		],
	},
];
