import Container from "../../ui/Container/Container";
import "./About.css";

function About() {
	return (
		<section className="about-section" id="about">
			<Container className="about-section__inner">
				<div className="about-section__intro">
					<p className="eyebrow">About</p>
					<h2>Building practical applications with a systems mindset.</h2>
				</div>

				<div className="about-section__grid">
					<div className="about-section__card">
						<p>
							I’m a full-stack developer specializing in the MERN stack
							(MongoDB, Express, React, and Node.js). I enjoy building web
							applications that solve real-world problems and improve the way
							people interact with technology.
						</p>
					</div>

					<div className="about-section__card">
						<p>
							Before transitioning into software development, I worked in
							operational and administrative roles supporting large-scale
							facilities and teams. That experience shaped how I build today:
							with clarity, usability, and reliability in mind.
						</p>
					</div>

					<div className="about-section__card about-section__card--wide">
						<p>
							Today I build with modern tools like React, Node.js, MongoDB
							Atlas, Netlify, and Cloudinary — combining polished front-end
							interfaces with scalable backend architecture.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default About;