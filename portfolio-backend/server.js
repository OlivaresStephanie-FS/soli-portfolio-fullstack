require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
	}),
);

app.use(express.json());

const contactLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 5,
	message: {
		ok: false,
		message: "Too many contact requests. Please try again later.",
	},
	standardHeaders: true,
	legacyHeaders: false,
});

app.get("/", (req, res) => {
	res.json({ ok: true, message: "Portfolio backend is running." });
});

app.get("/health", (req, res) => {
	res.status(200).json({ ok: true, status: "online" });
});

app.use("/api/contact", contactLimiter, require("./routes/contactRoutes"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
