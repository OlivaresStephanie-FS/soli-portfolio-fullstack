export const movievault = {
	slug: "movievault",
	title: "MovieVault",
	description:
		"Cross-platform full-stack movie collection platform with React web and React Native clients, JWT authentication, and protected CRUD operations through a shared Express and MongoDB API.",
	tagline:
		"One secure movie-library API powering both browser and mobile experiences.",
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
	image: "/screenshots/projects/movievault/web/dashboard.png",
	featured: true,
	category: "Full Stack",
	live: "",
	liveUrl: "",
	github: "https://github.com/OlivaresStephanie-FS/Movie-API",
	githubUrl: "https://github.com/OlivaresStephanie-FS/Movie-API",
	overview:
		"MovieVault is built around a shared authenticated REST API that powers two distinct client applications: a React web client and a React Native mobile client. Users register, log in with JWT, and manage a personal movie collection through protected CRUD endpoints backed by MongoDB Atlas. The project focuses on multi-client full-stack architecture—one backend serving browser and mobile interfaces with platform-appropriate navigation and UI—rather than a single-surface CRUD demo.",
	problem:
		"Supporting both browser and mobile users meant more than duplicating screens. Authentication had to behave consistently across clients, personal movie data needed protection, CRUD logic had to stay centralized in one API, data had to stay synchronized between interfaces, and authenticated mobile sessions needed to persist between launches.",
	solution:
		"I built an Express REST API as the shared application layer with MongoDB Atlas and Mongoose for persistence, bcryptjs for password hashing, and JWT issuance with middleware protecting movie routes. The React web client uses React Router for browser flows, while the React Native Expo client uses React Navigation and AsyncStorage for persistent mobile authentication—both consuming the same reusable API endpoints.",
	results: [
		"Completed registration and login flows on web and mobile clients.",
		"Protected all movie endpoints with JWT middleware.",
		"Implemented complete movie CRUD behavior through the shared API.",
		"Connected both React web and React Native clients to the same backend.",
		"Persisted movie data in MongoDB Atlas with Mongoose models.",
		"Deployed the REST API for client consumption.",
		"Created distinct web and mobile interfaces around shared backend behavior.",
		"Faced challenges coordinating JWT state across two client environments, persisting mobile sessions with AsyncStorage, and validating local versus deployed API configuration.",
		"Learned to design one API for multiple clients, separate backend behavior from presentation, and adapt navigation patterns by platform.",
	],
	features: [
		"User registration",
		"User login",
		"Password hashing with bcryptjs",
		"JWT authentication",
		"Protected routes",
		"Logout",
		"Persistent mobile sessions with AsyncStorage",
		"Create movie",
		"List movies",
		"View movie details",
		"Update movie",
		"Delete movie",
		"React web client",
		"React Native mobile client",
		"Shared Express REST API",
	],
	architecture: [
		"Dual-client architecture: React web client and React Native (Expo) mobile client",
		"Shared Express REST API as the single application backend",
		"MongoDB Atlas for cloud persistence",
		"Mongoose models for movie and user data",
		"bcryptjs password hashing",
		"JWT issuance and middleware protecting movie CRUD routes",
		"AsyncStorage for persistent mobile authentication sessions",
		"React Router navigation on the web client",
		"React Navigation on the mobile client",
		"Deployed REST API consumed by both clients",
		"GitHub repository: https://github.com/OlivaresStephanie-FS/Movie-API",
	],
	gallery: [
		{
			src: "/screenshots/projects/movievault/web/home-public.png",
			alt: "MovieVault React web public home page",
			caption:
				"Public landing page introducing MovieVault and directing users to log in or register.",
		},
		{
			src: "/screenshots/projects/movievault/web/login.png",
			alt: "MovieVault React web login page",
			caption:
				"Browser-based login form for authenticating an existing MovieVault account.",
		},
		{
			src: "/screenshots/projects/movievault/web/register.png",
			alt: "MovieVault React web registration page",
			caption:
				"Browser registration form for creating a new MovieVault account.",
		},
		{
			src: "/screenshots/projects/movievault/web/home-authenticated.png",
			alt: "MovieVault authenticated React web home page",
			caption:
				"Authenticated web landing page with direct access to the movie dashboard.",
		},
		{
			src: "/screenshots/projects/movievault/web/dashboard.png",
			alt: "MovieVault React web movie dashboard",
			caption:
				"Protected web dashboard for adding movies and viewing the saved collection.",
		},
		{
			src: "/screenshots/projects/movievault/web/movie-details.png",
			alt: "MovieVault React web movie details page",
			caption:
				"Web detail view for reviewing, updating, or deleting a selected movie.",
		},
		{
			src: "/screenshots/projects/movievault/login.png",
			alt: "MovieVault React Native login screen",
			caption:
				"React Native login screen for authenticating into the mobile MovieVault client.",
		},
		{
			src: "/screenshots/projects/movievault/register.png",
			alt: "MovieVault React Native registration screen",
			caption:
				"React Native registration screen for creating a MovieVault account on mobile.",
		},
		{
			src: "/screenshots/projects/movievault/home.png",
			alt: "MovieVault React Native home screen",
			caption:
				"React Native home screen with entry into the movie collection dashboard.",
		},
		{
			src: "/screenshots/projects/movievault/dashboard.png",
			alt: "MovieVault React Native movie dashboard",
			caption:
				"React Native dashboard for adding movies and reviewing the personal collection.",
		},
		{
			src: "/screenshots/projects/movievault/movie-details.png",
			alt: "MovieVault React Native movie details screen",
			caption:
				"React Native detail view for updating or deleting a selected movie.",
		},
	],
};
