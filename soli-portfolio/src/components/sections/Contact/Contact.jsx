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

const FORM_TABS = [
	{
		id: "general",
		label: "General Inquiry",
		tabId: "contact-tab-general",
		panelId: "contact-panel-general",
	},
	{
		id: "quote",
		label: "Request a Quote",
		tabId: "contact-tab-quote",
		panelId: "contact-panel-quote",
	},
];

function Contact() {
	const [activeForm, setActiveForm] = useState("general");
	const statusRef = useRef(null);
	const tabRefs = useRef({});

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

	function selectForm(formId) {
		setActiveForm(formId);
		resetStatus();
	}

	function handleTabKeyDown(event, currentIndex) {
		if (
			event.key !== "ArrowLeft" &&
			event.key !== "ArrowRight" &&
			event.key !== "Home" &&
			event.key !== "End"
		) {
			return;
		}

		event.preventDefault();

		let nextIndex = currentIndex;

		if (event.key === "ArrowLeft") {
			nextIndex =
				(currentIndex - 1 + FORM_TABS.length) % FORM_TABS.length;
		} else if (event.key === "ArrowRight") {
			nextIndex = (currentIndex + 1) % FORM_TABS.length;
		} else if (event.key === "Home") {
			nextIndex = 0;
		} else if (event.key === "End") {
			nextIndex = FORM_TABS.length - 1;
		}

		const nextTab = FORM_TABS[nextIndex];
		selectForm(nextTab.id);
		tabRefs.current[nextTab.id]?.focus();
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
				const validationDetails = data.errors
					?.map((err) => `${err.field}: ${err.message}`)
					.join(", ");

				throw new Error(
					validationDetails ||
						data.message ||
						"Something went wrong.",
				);
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
			<div
				ref={statusRef}
				aria-live="polite"
				aria-atomic="true"
				aria-relevant="additions text">
				{status.loading ? (
					<p className="visually-hidden">Sending message...</p>
				) : null}

				{status.error ? (
					<p
						className="contact-section__status contact-section__status--error"
						role="alert">
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

	const activeTab = FORM_TABS.find((tab) => tab.id === activeForm);

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

						<div
							className="contact-section__tabs"
							role="tablist"
							aria-label="Contact form type">
							{FORM_TABS.map((tab, index) => {
								const isSelected = activeForm === tab.id;

								return (
									<button
										key={tab.id}
										ref={(node) => {
											tabRefs.current[tab.id] = node;
										}}
										type="button"
										id={tab.tabId}
										role="tab"
										aria-selected={isSelected}
										aria-controls={tab.panelId}
										tabIndex={isSelected ? 0 : -1}
										className={`contact-section__tab ${
											isSelected
												? "contact-section__tab--active"
												: ""
										}`}
										onClick={() => selectForm(tab.id)}
										onKeyDown={(event) =>
											handleTabKeyDown(event, index)
										}>
										{tab.label}
									</button>
								);
							})}
						</div>

						{renderStatusMessage()}

						<div
							id={activeTab.panelId}
							role="tabpanel"
							aria-labelledby={activeTab.tabId}>
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
				</div>
			</Container>
		</section>
	);
}

export default Contact;
