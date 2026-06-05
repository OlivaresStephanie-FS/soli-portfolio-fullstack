import { useEffect, useRef, useState } from "react";
import Container from "../../ui/Container/Container";
import GeneralContactForm from "./GeneralContactForm";
import QuoteRequestForm from "./QuoteRequestForm";
import "./Contact.css";

const commonServices = [
	"Business Websites",
	"Customer Portals",
	"Admin Dashboards",
	"Quote Management Systems",
	"Review & Testimonial Platforms",
	"Internal Business Tools",
	"API Integrations",
	"Ongoing Maintenance & Support",
];

function Contact() {
	const [activeForm, setActiveForm] = useState("general");
	const statusRef = useRef(null);

	const [status, setStatus] = useState({
		loading: false,
		error: "",
		success: "",
	});

	useEffect(() => {
		if ((status.error || status.success) && statusRef.current) {
			statusRef.current.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	}, [status.error, status.success]);

	function resetStatus() {
		setStatus({
			loading: false,
			error: "",
			success: "",
		});
	}

	async function submitToApi(payload, successMessage) {
		setStatus({
			loading: true,
			error: "",
			success: "",
		});

		try {
			const apiUrl = import.meta.env.VITE_API_URL;

			if (!apiUrl) {
				throw new Error(
					"API URL is missing. Please check your environment variables.",
				);
			}

			const res = await fetch(`${apiUrl}/api/contact`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

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
				success: successMessage,
			});

			return true;
		} catch (error) {
			setStatus({
				loading: false,
				error: error.message || "Server error. Please try again.",
				success: "",
			});

			return false;
		}
	}

	function renderStatusMessage() {
		return (
			<div ref={statusRef}>
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
			</div>
		);
	}

	return (
		<section className="contact-section" id="contact">
			<Container>
				<div className="contact-section__inner">
					<div className="contact-section__content">
						<p className="eyebrow">Contact</p>
						<h2>
							Need a website, business platform, or custom
							workflow solution?
						</h2>

						<p className="contact-section__text">
							I’m open to freelance opportunities, collaborative
							projects, and roles where I can contribute as a
							full-stack developer.
						</p>

						<p className="contact-section__text">
							Whether you're launching a new business, improving
							an existing process, or replacing spreadsheets and
							manual workflows, I can help design and build a
							solution tailored to your needs.
						</p>

						<div className="contact-section__services-card">
							<h3>Services I Commonly Build</h3>

							<ul>
								{commonServices.map((service) => (
									<li key={service}>{service}</li>
								))}
							</ul>
						</div>
					</div>

					<div className="contact-section__card">
						<div className="contact-section__helper">
							<p>
								<strong>Choose "General Inquiry"</strong> for
								questions and collaboration opportunities.
							</p>
							<p>
								<strong>Choose "Request a Quote"</strong> for
								websites, dashboards, business platforms, or
								custom software projects.
							</p>
						</div>

						<div className="contact-section__tabs">
							<button
								type="button"
								className={`contact-section__tab ${
									activeForm === "general"
										? "contact-section__tab--active"
										: ""
								}`}
								onClick={() => {
									setActiveForm("general");
									resetStatus();
								}}>
								General Inquiry
							</button>

							<button
								type="button"
								className={`contact-section__tab ${
									activeForm === "quote"
										? "contact-section__tab--active"
										: ""
								}`}
								onClick={() => {
									setActiveForm("quote");
									resetStatus();
								}}>
								Request a Quote
							</button>
						</div>

						{renderStatusMessage()}

						{activeForm === "general" ? (
							<GeneralContactForm
								status={status}
								submitToApi={submitToApi}
							/>
						) : (
							<QuoteRequestForm
								status={status}
								submitToApi={submitToApi}
							/>
						)}
					</div>
				</div>
			</Container>
		</section>
	);
}

export default Contact;