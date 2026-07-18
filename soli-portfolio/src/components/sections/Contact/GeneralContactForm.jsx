import { useState } from "react";

function GeneralContactForm({ status, submitToApi }) {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
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

		const sent = await submitToApi(form, "Message sent successfully.");

		if (sent) {
			setForm({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		}
	}

	return (
		<form
			className="contact-section__form"
			onSubmit={handleSubmit}
			aria-busy={status.loading}>
			<label className="visually-hidden" htmlFor="general-name">
				Your name
			</label>
			<input
				id="general-name"
				className="contact-section__input"
				type="text"
				name="name"
				placeholder="Your name"
				value={form.name}
				onChange={handleChange}
				required
				autoComplete="name"
			/>

			<label className="visually-hidden" htmlFor="general-email">
				Your email
			</label>
			<input
				id="general-email"
				className="contact-section__input"
				type="email"
				name="email"
				placeholder="Your email"
				value={form.email}
				onChange={handleChange}
				required
				autoComplete="email"
			/>

			<label className="visually-hidden" htmlFor="general-subject">
				Subject
			</label>
			<input
				id="general-subject"
				className="contact-section__input"
				type="text"
				name="subject"
				placeholder="Subject"
				value={form.subject}
				onChange={handleChange}
				required
			/>

			<label className="visually-hidden" htmlFor="general-message">
				Your message
			</label>
			<textarea
				id="general-message"
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
		</form>
	);
}

export default GeneralContactForm;
