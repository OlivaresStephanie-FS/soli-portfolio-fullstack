const nodemailer = require("nodemailer");
const { validationResult } = require("express-validator");

const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: Number(process.env.EMAIL_PORT),
	secure: false,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

const submitContactForm = async (req, res) => {
	// Check for validation errors
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({
			ok: false,
			message: "Validation failed",
			errors: errors.array().map((err) => ({
				field: err.path,
				message: err.msg,
			})),
		});
	}

	const { name, email, subject, message } = req.body;

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_USER,
		subject: `Portfolio Contact: ${subject}`,
		html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
		replyTo: email,
	};

	try {
		await transporter.sendMail(mailOptions);
		return res.status(200).json({
			ok: true,
			message: "Message sent successfully!",
		});
	} catch (error) {
		console.error("Contact form error:", error);

		// Handle nodemailer v8 authentication error
		if (error.code === "ENOAUTH") {
			return res.status(500).json({
				ok: false,
				message: "Email service configuration error. Please contact support.",
			});
		}

		return res.status(500).json({
			ok: false,
			message: "Server error. Please try again later.",
		});
	}
};

module.exports = { submitContactForm };