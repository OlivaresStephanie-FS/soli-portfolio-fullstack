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

const LOGO_URL =
	process.env.EMAIL_LOGO_URL ||
	"https://soli.nyc/favicon/android-chrome-512x512.png";

function escapeHtml(value = "") {
	return String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

function formatMessageText(message = "") {
	return escapeHtml(message).replace(/\n/g, "<br />");
}

function buildEmailTemplate({ name, email, subject, message }) {
	const isQuoteRequest = subject.toLowerCase().includes("quote request");

	return `
		<div style="font-family: Arial, sans-serif; background:#f6f1f7; padding:24px; color:#1b1020;">
			<div style="max-width:720px; margin:0 auto; background:#ffffff; border-radius:18px; overflow:hidden; border:1px solid rgba(97,1,88,0.16);">
				
				<div style="background:#610158; color:#ffffff; padding:24px 26px 26px; text-align:center;">
					<img
						src="${LOGO_URL}"
						alt="SOLINYC LLC"
						width="76"
						style="display:block; margin:0 auto 16px; max-width:76px; height:auto; border:0;"
					/>

					<h2 style="margin:0; font-size:24px; line-height:1.25;">
						${isQuoteRequest ? "New Quote Request" : "New Contact Form Submission"}
					</h2>
				</div>

				<div style="padding:26px;">
					<div style="margin-bottom:24px;">
						<h3 style="margin:0 0 12px; color:#610158;">
							Contact Information
						</h3>

						<p style="margin:6px 0;">
							<strong>Name:</strong>
							${escapeHtml(name)}
						</p>

						<p style="margin:6px 0;">
							<strong>Email:</strong>
							<a
								href="mailto:${escapeHtml(email)}"
								style="color:#0f627c;">
								${escapeHtml(email)}
							</a>
						</p>

						<p style="margin:6px 0;">
							<strong>Subject:</strong>
							${escapeHtml(subject)}
						</p>
					</div>

					<div style="border-top:1px solid rgba(97,1,88,0.14); padding-top:24px;">
						<h3 style="margin:0 0 12px; color:#610158;">
							${isQuoteRequest ? "Project Intake Details" : "Message"}
						</h3>

						<div style="line-height:1.7; font-size:15px;">
							${formatMessageText(message)}
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
}

const submitContactForm = async (req, res) => {
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
		to: process.env.EMAIL_TO || process.env.EMAIL_USER,
		subject: `Portfolio Contact: ${subject}`,
		html: buildEmailTemplate({
			name,
			email,
			subject,
			message,
		}),
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

		if (error.code === "ENOAUTH") {
			return res.status(500).json({
				ok: false,
				message:
					"Email service configuration error. Please contact support.",
			});
		}

		return res.status(500).json({
			ok: false,
			message: "Server error. Please try again later.",
		});
	}
};

module.exports = { submitContactForm };