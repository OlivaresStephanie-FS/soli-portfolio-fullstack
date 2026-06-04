import { useState } from "react";

const projectTypes = [
	"Custom Website",
	"Full-Stack Web App",
	"Admin Dashboard",
	"Quote Request System",
	"Customer Portal",
	"Review/Testimonial System",
	"API Integration",
	"Maintenance / Updates",
	"Other",
];

const projectGoals = [
	"Get more leads",
	"Improve business workflow",
	"Replace manual tracking",
	"Add customer accounts",
	"Manage quotes or requests",
	"Showcase services/products",
	"Other",
];

const desiredFeatures = [
	"Contact form",
	"Quote request form",
	"Admin dashboard",
	"Authentication/login",
	"Database",
	"Image uploads",
	"Email notifications",
	"Reviews/testimonials",
	"SEO setup",
	"Analytics",
	"Hosting/deployment help",
];

const timelines = ["ASAP", "2–4 weeks", "1–2 months", "Flexible"];

const investmentRanges = [
	"Under $5,000",
	"$5,000 – $10,000",
	"$10,000 – $15,000",
	"$15,000 – $25,000",
	"$25,000+",
	"Let’s Discuss",
];

const initialQuoteForm = {
	name: "",
	businessName: "",
	email: "",
	phone: "",
	projectName: "",
	projectType: "",
	timeline: "",
	investmentRange: "",
	projectDescription: "",
	goals: [],
	features: [],
	hasDomain: false,
	hasHosting: false,
	hasLogo: false,
	hasContent: false,
	hasImages: false,
	additionalNotes: "",
};

function QuoteRequestForm({ status, submitToApi }) {
	const [quoteForm, setQuoteForm] = useState(initialQuoteForm);

	function handleQuoteChange(e) {
		const { name, value, type, checked } = e.target;

		setQuoteForm((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	}

	function handleMultiSelect(e, field) {
		const { value, checked } = e.target;

		setQuoteForm((prev) => ({
			...prev,
			[field]: checked
				? [...prev[field], value]
				: prev[field].filter((item) => item !== value),
		}));
	}

	async function handleQuoteSubmit(e) {
		e.preventDefault();

		const alreadyHas =
			[
				quoteForm.hasDomain && "Domain",
				quoteForm.hasHosting && "Hosting",
				quoteForm.hasLogo && "Logo/branding",
				quoteForm.hasContent && "Written content",
				quoteForm.hasImages && "Images/photos",
			]
				.filter(Boolean)
				.join(", ") || "None selected";

		const quoteMessage = `
Quote Request

Name: ${quoteForm.name}
Business Name: ${quoteForm.businessName}
Email: ${quoteForm.email}
Phone: ${quoteForm.phone}

Project Name: ${quoteForm.projectName}
Project Type: ${quoteForm.projectType}
Timeline: ${quoteForm.timeline}
Project Investment Range: ${quoteForm.investmentRange}

Project Description:
${quoteForm.projectDescription}

Primary Goals:
${quoteForm.goals.join(", ") || "None selected"}

Desired Features:
${quoteForm.features.join(", ") || "None selected"}

Already Has:
${alreadyHas}

Additional Notes:
${quoteForm.additionalNotes || "None provided"}
		`;

		const sent = await submitToApi(
			{
				name: quoteForm.name,
				email: quoteForm.email,
				subject: `Quote Request: ${
					quoteForm.projectName || quoteForm.projectType
				}`,
				message: quoteMessage,
			},
			"Quote request sent successfully.",
		);

		if (sent) {
			setQuoteForm(initialQuoteForm);
		}
	}

	return (
		<form
			className="contact-section__form contact-section__form--quote"
			onSubmit={handleQuoteSubmit}>
			<div className="contact-section__grid">
				<input
					className="contact-section__input"
					type="text"
					name="name"
					placeholder="Your name"
					value={quoteForm.name}
					onChange={handleQuoteChange}
					required
				/>

				<input
					className="contact-section__input"
					type="text"
					name="businessName"
					placeholder="Business name"
					value={quoteForm.businessName}
					onChange={handleQuoteChange}
				/>
			</div>

			<div className="contact-section__grid">
				<input
					className="contact-section__input"
					type="email"
					name="email"
					placeholder="Email"
					value={quoteForm.email}
					onChange={handleQuoteChange}
					required
				/>

				<input
					className="contact-section__input"
					type="tel"
					name="phone"
					placeholder="Phone"
					value={quoteForm.phone}
					onChange={handleQuoteChange}
				/>
			</div>

			<input
				className="contact-section__input"
				type="text"
				name="projectName"
				placeholder="Project name"
				value={quoteForm.projectName}
				onChange={handleQuoteChange}
			/>

			<select
				className="contact-section__input"
				name="projectType"
				value={quoteForm.projectType}
				onChange={handleQuoteChange}
				required>
				<option value="">Project type</option>
				{projectTypes.map((type) => (
					<option key={type} value={type}>
						{type}
					</option>
				))}
			</select>

			<div className="contact-section__grid">
				<select
					className="contact-section__input"
					name="timeline"
					value={quoteForm.timeline}
					onChange={handleQuoteChange}
					required>
					<option value="">Timeline</option>
					{timelines.map((timeline) => (
						<option key={timeline} value={timeline}>
							{timeline}
						</option>
					))}
				</select>

				<select
					className="contact-section__input"
					name="investmentRange"
					value={quoteForm.investmentRange}
					onChange={handleQuoteChange}
					required>
					<option value="">Investment Range</option>
					{investmentRanges.map((range) => (
						<option key={range} value={range}>
							{range}
						</option>
					))}
				</select>
			</div>

			<textarea
				className="contact-section__textarea"
				name="projectDescription"
				placeholder="Tell me about the project."
				value={quoteForm.projectDescription}
				onChange={handleQuoteChange}
				rows="5"
				required
			/>

			<details className="contact-section__details">
				<summary>Project goals</summary>

				<div className="contact-section__options contact-section__options--compact">
					{projectGoals.map((goal) => (
						<label className="contact-section__option" key={goal}>
							<input
								type="checkbox"
								value={goal}
								checked={quoteForm.goals.includes(goal)}
								onChange={(e) => handleMultiSelect(e, "goals")}
							/>
							<span>{goal}</span>
						</label>
					))}
				</div>
			</details>

			<details className="contact-section__details">
				<summary>Desired features</summary>

				<div className="contact-section__options contact-section__options--compact">
					{desiredFeatures.map((feature) => (
						<label className="contact-section__option" key={feature}>
							<input
								type="checkbox"
								value={feature}
								checked={quoteForm.features.includes(feature)}
								onChange={(e) =>
									handleMultiSelect(e, "features")
								}
							/>
							<span>{feature}</span>
						</label>
					))}
				</div>
			</details>

			<details className="contact-section__details">
				<summary>Existing assets</summary>

				<div className="contact-section__options contact-section__options--compact">
					{[
						["hasDomain", "Domain"],
						["hasHosting", "Hosting"],
						["hasLogo", "Logo/branding"],
						["hasContent", "Written content"],
						["hasImages", "Images/photos"],
					].map(([name, label]) => (
						<label className="contact-section__option" key={name}>
							<input
								type="checkbox"
								name={name}
								checked={quoteForm[name]}
								onChange={handleQuoteChange}
							/>
							<span>{label}</span>
						</label>
					))}
				</div>
			</details>

			<textarea
				className="contact-section__textarea contact-section__textarea--small"
				name="additionalNotes"
				placeholder="Additional notes, links, inspiration, or questions."
				value={quoteForm.additionalNotes}
				onChange={handleQuoteChange}
				rows="4"
			/>

			<p className="contact-section__note">
				Most custom business platforms range from $5,000–$25,000+
				depending on scope, integrations, and workflow requirements.
			</p>

			<p className="contact-section__legal">
				Submitting this form does not create a service agreement. After
				reviewing your request, SOLINYC LLC will follow up with a custom
				proposal and service agreement.
			</p>

			<button
				className="contact-section__button"
				type="submit"
				disabled={status.loading}>
				{status.loading ? "Sending..." : "Submit Quote Request"}
			</button>
		</form>
	);
}

export default QuoteRequestForm;