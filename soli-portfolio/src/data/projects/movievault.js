export const movievault = {
	slug: "movievault",
	title: "MovieVault",
	description:
		"Full-stack MERN application for registering, authenticating with JWT, and managing a personal movie collection through a secure REST API—with React web and React Native mobile clients.",
	tagline:
		"JWT-secured movie CRUD across a shared Express API, React web app, and React Native mobile client.",
	role: "Full Stack Developer",
	status: "School Project",
	duration: "2026",
	stack: [
		"React",
		"React Native",
		"Expo",
		"Node.js",
		"Express",
		"MongoDB",
		"Mongoose",
		"JWT",
		"bcryptjs",
		"REST API",
		"JavaScript",
	],
	tech: [
		"React",
		"React Native",
		"Expo",
		"Node.js",
		"Express",
		"MongoDB",
		"Mongoose",
		"JWT",
		"bcryptjs",
		"REST API",
		"JavaScript",
	],
	image: "/screenshots/projects/movievault/dashboard.png",
	cardImageClass: "project-card__img--mobile-contain",
	featured: true,
	category: "Full Stack",
	live: "",
	liveUrl: "",
	github: "https://github.com/OlivaresStephanie-FS/Movie-API",
	githubUrl: "https://github.com/OlivaresStephanie-FS/Movie-API",
	overview:
		"MovieVault is a full-stack MERN application that lets users register, authenticate with JWT, and manage a personal movie collection through a secure REST API. A shared Express backend powers both a React web application and a React Native (Expo) mobile client for creating, updating, and deleting movies stored in MongoDB Atlas.",
	problem:
		"I needed a full-stack project that connected authentication, protected CRUD endpoints, and multiple clients—web and mobile—to one backend API rather than building a single-surface demo.",
	solution:
		"I built MovieVault with JWT authentication and bcryptjs password hashing on an Express REST API, MongoDB Atlas persistence through Mongoose, and two consumers of the same API: a React web interface and a React Native mobile experience using React Navigation.",
	results: [
		"Implemented user registration and JWT authentication with protected movie routes.",
		"Delivered full CRUD movie management against MongoDB Atlas.",
		"Connected both React web and React Native mobile clients to the same Express API.",
		"Strengthened end-to-end skills across authentication, API design, and multi-client consumption.",
	],
	features: [
		"User registration and login",
		"JWT authentication",
		"Password hashing with bcryptjs",
		"Protected CRUD movie endpoints",
		"Add, update, and delete movies",
		"Movie dashboard and movie details views",
		"React web application",
		"React Native mobile application with Expo",
		"React Router for web navigation",
		"React Navigation for mobile navigation",
		"Responsive web interface",
		"Mobile-first React Native experience",
	],
	architecture: [
		"MERN architecture with a shared Express REST API serving web and mobile clients",
		"JWT authentication protecting CRUD movie endpoints",
		"MongoDB Atlas persistence with Mongoose models",
		"React web client using React Router for authenticated flows",
		"React Native (Expo) mobile client using React Navigation",
		"bcryptjs for secure password hashing on the backend",
	],
	gallery: [
		{
			src: "/screenshots/projects/movievault/login.png",
			alt: "MovieVault mobile login screen",
			caption:
				"JWT login screen for authenticating into the MovieVault mobile client.",
		},
		{
			src: "/screenshots/projects/movievault/register.png",
			alt: "MovieVault mobile register screen",
			caption:
				"Registration screen for creating a MovieVault account with email and password.",
		},
		{
			src: "/screenshots/projects/movievault/home.png",
			alt: "MovieVault mobile home screen",
			caption:
				"Authenticated home screen with entry into the movie collection dashboard.",
		},
		{
			src: "/screenshots/projects/movievault/dashboard.png",
			alt: "MovieVault movie dashboard",
			caption:
				"Movie dashboard for adding titles and reviewing the personal collection.",
		},
		{
			src: "/screenshots/projects/movievault/movie-details.png",
			alt: "MovieVault movie details screen",
			caption:
				"Movie details view for updating or deleting a selected movie record.",
		},
	],
};
