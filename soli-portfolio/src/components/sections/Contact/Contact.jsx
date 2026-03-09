import { useState } from "react";
import Container from "../../ui/Container/Container";
import "./Contact.css";

function Contact() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [status, setStatus] = useState({
		loading: false,
		error: "",
		success: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	async function handleSubmit(e) {
		e.preventDefault();

		setStatus({
			loading: true,
			error: "",
			success: "",
		});

		try {
			const res = await fetch(
				`${import.meta.env.VITE_API_URL}/api/contact`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(form),
				},
			);

			let data = {};

			try {
				data = await res.json();
			} catch {
				data = {};
			}

			if (!res.ok) {
				throw new Error(data.message || "Something went wrong.");
			}

			setStatus({
				loading: false,
				error: "",
				success: "Message sent successfully.",
			});

			setForm({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		} catch (error) {
			setStatus({
				loading: false,
				error: error.message || "Server error. Please try again.",
				success: "",
			});
		}
	}

	return (
		<section className="contact-section" id="contact">
			<Container>
				<div className="contact-section__inner">
					<div className="contact-section__content">
						<p className="eyebrow">Contact</p>
						<h2>Let’s build something thoughtful and useful.</h2>
						<p className="contact-section__text">
							I’m open to freelance opportunities, collaborative
							projects, and roles where I can contribute as a
							full-stack developer.
						</p>
						<p className="contact-section__text">
							The best way to reach me is by email, or through
							LinkedIn and GitHub.
						</p>
					</div>

					<div className="contact-section__card">
						<form
							className="contact-section__form"
							onSubmit={handleSubmit}>
							<input
								className="contact-section__input"
								type="text"
								name="name"
								placeholder="Your name"
								value={form.name}
								onChange={handleChange}
								required
							/>

							<input
								className="contact-section__input"
								type="email"
								name="email"
								placeholder="Your email"
								value={form.email}
								onChange={handleChange}
								required
							/>

							<input
								className="contact-section__input"
								type="text"
								name="subject"
								placeholder="Subject"
								value={form.subject}
								onChange={handleChange}
								required
							/>

							<textarea
								className="contact-section__textarea"
								name="message"
								placeholder="Your message"
								value={form.message}
								onChange={handleChange}
								rows="6"
								required
							/>

							<button
								className="contact-section__button"
								type="submit"
								disabled={status.loading}>
								{status.loading ? "Sending..." : "Send Message"}
							</button>

							{status.error ? (
								<p className="contact-section__status contact-section__status--error">
									{status.error}
								</p>
							) : null}

							{status.success ? (
								<p className="contact-section__status contact-section__status--success">
									{status.success}
								</p>
							) : null}
						</form>

						<a
							className="contact-section__link"
							href="mailto:solinyc@outlook.com">
							soli@soli.nyc
						</a>

						<a
							className="contact-section__link"
							href="https://www.linkedin.com/solinyc"
							target="_blank"
							rel="noreferrer">
							LinkedIn
						</a>

						<a
							className="contact-section__link"
							href="https://github.com/OlivaresStephanie-FS"
							target="_blank"
							rel="noreferrer">
							GitHub
						</a>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default Contact;
