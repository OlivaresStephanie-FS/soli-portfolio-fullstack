const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { submitContactForm } = require("../controllers/contactController");

// Validation middleware
const contactValidation = [
	body("name")
		.trim()
		.isLength({ min: 2, max: 100 })
		.withMessage("Name must be between 2 and 100 characters")
		.matches(/^[a-zA-Z\s\-'.]+$/)
		.withMessage("Name can only contain letters, spaces, hyphens, apostrophes, and periods")
		.escape(),

	body("email")
		.trim()
		.isEmail()
		.withMessage("Must be a valid email address")
		.isLength({ max: 254 })
		.withMessage("Email must not exceed 254 characters")
		.normalizeEmail(),

	body("subject")
		.trim()
		.isLength({ min: 2, max: 200 })
		.withMessage("Subject must be between 2 and 200 characters")
		.escape(),

	body("message")
		.trim()
		.isLength({ min: 10, max: 1000 })
		.withMessage("Message must be between 10 and 1000 characters")
		.escape(),
];

// POST /api/contact - Submit contact form
router.post("/", contactValidation, submitContactForm);

module.exports = router;