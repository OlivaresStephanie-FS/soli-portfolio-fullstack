import contractorplatform from "../assets/images/contractorplatform.png";
import netflix from "../assets/images/netflix.png";
import severance from "../assets/images/severance.png";
import darap from "../assets/images/darapsauna.png";
import dv from "../assets/images/call-to-action.png";

const projects = [
	{
		slug: "contractor-platform",
		title: "Contractor Management Platform",
		description:
			"Full-stack contractor platform for managing quote requests, image uploads, project workflows, and customer reviews.",
		stack: ["React", "Node.js", "MongoDB", "Cloudinary", "Netlify"],
		image: contractorplatform,
		featured: true,
        category: "Full Stack",
		live: "",
		github: "",
		overview:
			"This project is being built as a full-stack platform for managing quote requests, uploads, workflows, and customer reviews through a clean admin experience.",
		gallery: [
			{
				src: "https://placehold.co/1200x700?text=Contractor+Platform+Gallery+1",
				alt: "Contractor platform placeholder preview",
				caption:
					"Temporary placeholder until final project screenshots are added.",
			},
			{
				src: "https://placehold.co/1200x700?text=Contractor+Platform+Gallery+2",
				alt: "Contractor platform secondary placeholder",
				caption:
					"Additional placeholder image for the case study layout.",
			},
		],
	},
	{
		slug: "severance-promo-site",
		title: "Severance Promo Site",
		description:
			"Promotional website inspired by the visual style and storytelling tone of the series Severance.",
		stack: ["HTML", "CSS", "JavaScript"],
		image: severance,
		featured: true,
		category: "UI / Visual",
		live: "",
		github: "",
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
		stack: ["React", "JavaScript", "CSS"],
		image: netflix,
		featured: true,
		category: "Frontend",
		live: "",
		github: "",
		overview:
			"This project focuses on recreating a recognizable streaming interface with strong layout control, responsive behavior, and polished visual hierarchy.",
		gallery: [
			{
				src: netflix,
				alt: "Netflix clone homepage",
				caption: "Hero banner and browsing layout",
			},
			{
				src: severance,
				alt: "Netflix clone related supporting image",
				caption:
					"Media-inspired secondary visual for case study context",
			},
		],
	},
	{
		slug: "da-rap-sauna",
		title: "Da Rap Sauna Studio",
		description:
			"Music studio portfolio website showcasing artists, media content, and studio branding.",
		stack: ["HTML", "CSS", "JavaScript"],
		image: darap,
		featured: true,
		category: "Client",
		live: "",
		github: "",
		overview:
			"This site was designed to present music and multimedia content in a way that feels expressive, branded, and easy to navigate across devices.",
		gallery: [
			{
				src: darap,
				alt: "Da Rap Sauna homepage",
				caption: "Studio branding and media-forward landing page",
			},
			{
				src: netflix,
				alt: "Da Rap Sauna supporting image placeholder",
				caption:
					"Additional supporting visual while expanding project assets",
			},
		],
	},
	{
		slug: "domestic-violence-awareness",
		title: "Domestic Violence Awareness",
		description:
			"Educational and advocacy site focused on awareness and support resources.",
		stack: ["HTML", "CSS"],
		image: dv,
		featured: true,
		category: "Client",
		live: "",
		github: "",
		overview:
			"This project centers meaningful content, structured information hierarchy, and accessible presentation for an awareness-focused web experience.",
		gallery: [
			{
				src: dv,
				alt: "Domestic violence awareness project",
				caption:
					"Content-first layout built around educational and support resources",
			},
			{
				src: darap,
				alt: "Secondary placeholder for awareness project",
				caption:
					"Additional placeholder visual while expanding project archive assets",
			},
		],
	},
];

export default projects;
