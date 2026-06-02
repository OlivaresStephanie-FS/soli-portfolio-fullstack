import Container from "../../ui/Container/Container";
import Reveal from "../../ui/Reveal/Reveal";
import { services } from "../../../data/services";
import "./Services.css";

function Services() {
	return (
		<section
			id="services"
			className="services-section">
			<Container>
				<div className="services-section__intro">
					<p className="eyebrow">Services</p>

					<h2>
						Web solutions designed for real-world business needs.
					</h2>

					<p className="services-section__description">
						I build modern websites, client portals, internal
						dashboards, and custom business tools that help
						organizations operate more efficiently and serve their
						customers more effectively.
					</p>
				</div>

				<div className="services-section__grid">
					{services.map((service, index) => {
						const Icon = service.icon;

						return (
							<Reveal
								key={service.title}
								delay={index * 0.08}>
								<article className="services-card">
									<div className="services-card__icon">
										<Icon size={32} />
									</div>

									<h3 className="services-card__title">
										{service.title}
									</h3>

									<p className="services-card__description">
										{service.description}
									</p>

									<ul className="services-card__list">
										{service.items.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</article>
							</Reveal>
						);
					})}
				</div>
			</Container>
		</section>
	);
}

export default Services;