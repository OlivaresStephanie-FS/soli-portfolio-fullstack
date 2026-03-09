const nodemailer = require("nodemailer");
const ContactMessage = require("../models/ContactMessage");

function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function submitContactForm(req, res) {
	try {
		const { name, email, subject, message } = req.body;

		if (!name || !email || !subject || !message) {
			return res.status(400).json({
				ok: false,
				message: "All fields are required.",
			});
		}

		if (!isValidEmail(email)) {
			return res.status(400).json({
				ok: false,
				message: "Please enter a valid email address.",
			});
		}

		const savedMessage = await ContactMessage.create({
			name,
			email,
			subject,
			message,
		});

		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: Number(process.env.EMAIL_PORT),
			secure: false,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
			to: process.env.EMAIL_TO,
			replyTo: email,
			subject: `New Portfolio Message: ${subject}`,
			html: `
				<h2>New Portfolio Contact Submission</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Subject:</strong> ${subject}</p>
				<p><strong>Message:</strong></p>
				<p>${message.replace(/\n/g, "<br>")}</p>
				<hr />
				<p><strong>Saved Message ID:</strong> ${savedMessage._id}</p>
			`,
		});

		return res.status(201).json({
			ok: true,
			message: "Message sent successfully.",
		});
	} catch (error) {
		console.error("Contact form error:", error);
		return res.status(500).json({
			ok: false,
			message: "Server error. Please try again later.",
		});
	}
}

module.exports = { submitContactForm };
