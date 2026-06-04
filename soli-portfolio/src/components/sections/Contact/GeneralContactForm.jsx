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
		<form className="contact-section__form" onSubmit={handleSubmit}>
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
		</form>
	);
}

export default GeneralContactForm;