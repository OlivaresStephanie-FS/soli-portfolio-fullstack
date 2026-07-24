export const spotifyPrototype = {
	slug: "spotify-prototype",
	title: "Spotify Prototype",
	description:
		"A full-stack music discovery app that authenticates with Spotify OAuth and surfaces personalized profile, search, and library data through a React and Express architecture.",
	tagline:
		"Soli Music Search — authenticated Spotify browsing with React, Express, MongoDB, and Docker.",
	role: "Full Stack Developer",
	status: "School Project",
	duration: "2026",
	stack: [
		"React",
		"Express",
		"Node.js",
		"MongoDB",
		"Docker",
		"Spotify Web API",
		"Spotify OAuth",
	],
	tech: [
		"React",
		"Express",
		"Node.js",
		"MongoDB",
		"Docker",
		"Spotify Web API",
		"Spotify OAuth",
	],
	image: "/screenshots/projects/spotify-prototype/dashboard.png",
	cardImageClass: "project-card__img--focus-top",
	featured: true,
	category: "Full Stack",
	live: "https://music.soli.nyc/",
	liveUrl: "https://music.soli.nyc/",
	github: "https://github.com/OlivaresStephanie-FS/SpotifyPrototype",
	githubUrl: "https://github.com/OlivaresStephanie-FS/SpotifyPrototype",
	overview:
		"Spotify Prototype (Soli Music Search) is a completed full-stack application built around the Spotify Web API. After signing in with Spotify OAuth, users can review their profile, search artists, albums, and tracks, browse followed artists and liked songs, and open results directly in Spotify—all within a responsive interface styled with SOLINYC branding.",
	problem:
		"I needed a practical full-stack project that combined third-party OAuth, authenticated API access, and a clear separation between a React frontend and an Express backend—beyond a static UI clone.",
	solution:
		"I built Soli Music Search with Spotify OAuth, session-backed authenticated requests, MongoDB for application data needs, Docker for local development, and a responsive React UI that surfaces profile, search, followed artists, and liked songs with links that open in Spotify.",
	results: [
		"Implemented Spotify OAuth authorization and authenticated user sessions.",
		"Connected React and Express layers to Spotify Web API data for profile, search, followed artists, and liked songs.",
		"Used Docker to standardize the local development environment.",
		"Delivered responsive desktop and mobile layouts under SOLINYC branding.",
	],
	features: [
		"Spotify OAuth authorization",
		"Authenticated user sessions",
		"Spotify user profile",
		"Search for artists, albums, and tracks",
		"Followed artists",
		"Liked songs",
		"Links that open results in Spotify",
		"Responsive desktop and mobile layouts",
		"Docker-based local development environment",
	],
	architecture: [
		"React frontend for authenticated views, search UI, and responsive SOLINYC-branded layouts",
		"Express and Node.js backend that handles routing, session-aware requests, and Spotify API proxying",
		"MongoDB for application-side data persistence supporting the authenticated workflow",
		"Spotify OAuth authorization flow for secure sign-in without storing Spotify passwords",
		"Spotify Web API integration for profile, search, followed artists, and liked songs",
		"Docker-based local development environment for consistent frontend and backend setup",
	],
	gallery: [
		{
			src: "/screenshots/projects/spotify-prototype/login.png",
			alt: "Soli Music Search login page",
			caption:
				"Sign-in screen for connecting a Spotify account via OAuth.",
		},
		{
			src: "/screenshots/projects/spotify-prototype/dashboard.png",
			alt: "Soli Music Search dashboard",
			caption:
				"Authenticated home dashboard with shortcuts to profile, followed artists, and liked songs.",
		},
		{
			src: "/screenshots/projects/spotify-prototype/search-results.png",
			alt: "Soli Music Search results",
			caption:
				"Artist search results with links to open each result in Spotify.",
		},
		{
			src: "/screenshots/projects/spotify-prototype/profile.png",
			alt: "Soli Music Search profile page",
			caption:
				"Spotify profile overview with followed artists and liked songs previews.",
		},
		{
			src: "/screenshots/projects/spotify-prototype/followed-artists.png",
			alt: "Followed Artists page",
			caption:
				"Followed artists list loaded from the authenticated Spotify account.",
		},
		{
			src: "/screenshots/projects/spotify-prototype/liked-songs.png",
			alt: "Liked Songs page",
			caption:
				"Liked songs library with Open in Spotify links for each track.",
		},
		{
			src: "/screenshots/projects/spotify-prototype/search-empty.png",
			alt: "Soli Music Search empty search state",
			caption:
				"Search page empty state prompting the user to enter a Spotify query.",
		},
	],
};
