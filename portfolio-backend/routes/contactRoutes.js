const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { submitContactForm } = require("../controllers/contactController");

// Validation middleware
const contactValidation = [
	body("name")
		.trim()
		.notEmpty()
		.withMessage("Name is required")
		.isLength({ min: 2, max: 100 })
		.withMessage("Name must be between 2 and 100 characters"),

	body("email")
		.trim()
		.notEmpty()
		.withMessage("Email is required")
		.isEmail()
		.withMessage("Must be a valid email address")
		.isLength({ max: 254 })
		.withMessage("Email must not exceed 254 characters")
		.normalizeEmail(),

	body("subject")
		.trim()
		.notEmpty()
		.withMessage("Subject is required")
		.isLength({ min: 2, max: 200 })
		.withMessage("Subject must be between 2 and 200 characters"),

	body("message")
		.trim()
		.notEmpty()
		.withMessage("Message is required")
		.isLength({ min: 10, max: 10000 })
		.withMessage("Message must be between 10 and 10,000 characters"),
];

// POST /api/contact - Submit contact form
router.post("/", contactValidation, submitContactForm);

module.exports = router;