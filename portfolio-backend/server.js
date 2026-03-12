require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB();

// ============================================
// SECURITY MIDDLEWARE (Order matters!)
// ============================================

// 1. Security Headers - Helmet (FIRST)
// Protects against XSS, clickjacking, MIME sniffing, etc.
app.use(
	helmet({
		contentSecurityPolicy: {
			directives: {
				defaultSrc: ["'self'"],
				styleSrc: ["'self'", "'unsafe-inline'"], // Allow inline styles for React
				scriptSrc: ["'self'"],
				imgSrc: ["'self'", "data:", "https:"],
				connectSrc: ["'self'"],
				fontSrc: ["'self'", "data:"],
				objectSrc: ["'none'"],
				mediaSrc: ["'self'"],
				frameSrc: ["'none'"],
			},
		},
		crossOriginEmbedderPolicy: false, // Adjust based on your needs
	})
);

// 2. Request Size Limits - BEFORE body parsers
// Prevents DoS attacks via large payloads
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// 3. NoSQL Injection Prevention
// Sanitizes user input to prevent MongoDB operator injection
app.use(mongoSanitize());

// 4. HTTP Parameter Pollution Protection
// Prevents attacks using duplicate parameters
app.use(hpp());

// 5. CORS Configuration
const allowedOrigins = [
	"https://soli.nyc",
	"https://soli-portfolio-fullstack.netlify.app",
];

app.use(
	cors({
		origin: function (origin, callback) {
			// Allow requests with no origin (mobile apps, Postman, etc.)
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
		credentials: true,
	})
);

// ============================================
// RATE LIMITING
// ============================================

// General API rate limiter
const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // 100 requests per 15 minutes
	message: {
		ok: false,
		message: "Too many requests from this IP. Please try again later.",
	},
	standardHeaders: true,
	legacyHeaders: false,
});

// Strict rate limiter for contact form
const contactLimiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 1 hour
	max: 5, // 5 submissions per hour
	message: {
		ok: false,
		message: "Too many contact requests. Please try again later.",
	},
	standardHeaders: true,
	legacyHeaders: false,
});

// ============================================
// ROUTES
// ============================================

// Health check (no rate limit)
app.get("/health", (req, res) => {
	res.status(200).json({ ok: true, status: "online" });
});

// Root endpoint (no rate limit)
app.get("/", (req, res) => {
	res.json({ ok: true, message: "Portfolio backend is running." });
});

// API routes with rate limiting
app.use("/api", apiLimiter); // Apply general rate limit to all /api routes
app.use("/api/contact", contactLimiter, require("./routes/contactRoutes"));

// ============================================
// ERROR HANDLING
// ============================================

// 404 Handler
app.use((req, res) => {
	res.status(404).json({
		ok: false,
		message: "Route not found",
	});
});

// Global Error Handler
app.use((err, req, res, next) => {
	// Log error for debugging (consider using Winston/Pino in production)
	console.error(err.stack);

	// Don't leak error details in production
	const isDevelopment = process.env.NODE_ENV === "development";

	res.status(err.status || 500).json({
		ok: false,
		message: isDevelopment ? err.message : "Internal server error",
		...(isDevelopment && { stack: err.stack }),
	});
});

// ============================================
// SERVER
// ============================================

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`);
	console.log(`🔒 Security: Helmet, Rate Limiting, Input Sanitization enabled`);
	console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
});