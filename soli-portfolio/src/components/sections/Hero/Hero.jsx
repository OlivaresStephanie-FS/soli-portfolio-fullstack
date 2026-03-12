import Container from "../../ui/Container/Container";
import profile from "../../../assets/images/Profile.png";
import "./Hero.css";

function Hero() {
	return (
		<section className="hero">
			<Container className="hero__inner">
				<div className="hero__content">
					<div className="hero__intro">
						<div className="hero__identity">
							<p className="eyebrow">Soli NYC</p>

							<h1 className="hero__title">
								Stephanie Olivares
								<span className="hero__title-accent">
									Full-Stack MERN Developer
								</span>
							</h1>
						</div>

						<div className="hero__profile">
							<img
								src={profile}
								alt="Stephanie Olivares"
								className="hero__profile-image"
							/>
						</div>
					</div>

					<div className="hero__copy">
						<p className="hero__summary">
							I build modern, scalable web applications with
							React, Node.js, MongoDB, and cloud-based tools.
						</p>

						<p className="hero__supporting-copy">
							With a background in operations and systems
							management, I bring a practical, problem-solving
							mindset to development — creating applications that
							are both technically sound and genuinely useful.
						</p>
					</div>

					<div className="hero__actions">
						<a href="#projects" className="button button--primary">
							View Projects
						</a>

						<a href="#contact" className="button button--secondary">
							Contact Me
						</a>
					</div>
				</div>

				<div className="hero__panel" aria-hidden="true">
					<div className="hero-card">
						<div className="hero-card__glow" />

						<div className="hero-card__content">
							<p className="hero-card__label">Current Focus</p>

							<h2 className="hero-card__title">
								Full-Stack Portfolio Rebuild
							</h2>

							<p className="hero-card__text">
								React front end, MongoDB project data,
								Cloudinary media, and Netlify deployment.
							</p>

							<ul className="hero-card__stack">
								<li>React</li>
								<li>Node.js</li>
								<li>MongoDB Atlas</li>
								<li>Cloudinary</li>
								<li>Netlify</li>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default Hero;
