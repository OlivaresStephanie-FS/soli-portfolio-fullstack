import Container from "../../ui/Container/Container";
import "./Experience.css";

function Experience() {
	return (
		<section className="experience-section" id="experience">
			<Container>
				<div className="experience-section__intro">
					<p className="eyebrow">Approach</p>
					<h2>
						Bringing operational thinking into software development.
					</h2>
					<p className="experience-section__description">
						My background in administration, coordination, and
						systems support shapes the way I build. I’m especially
						interested in applications that improve workflows, solve
						real business problems, and make complex processes feel
						more intuitive.
					</p>
				</div>

				<div className="experience-section__grid">
					<article className="experience-card">
						<h3>Systems Mindset</h3>
						<p>
							I think in terms of workflows, dependencies, and
							structure — which helps me build applications that
							are organized, scalable, and easier to maintain.
						</p>
					</article>

					<article className="experience-card">
						<h3>User-Focused Solutions</h3>
						<p>
							I care about clean interfaces and practical
							functionality, with a focus on tools that feel
							clear, efficient, and genuinely useful to the people
							using them.
						</p>
					</article>

					<article className="experience-card">
						<h3>Real-World Problem Solving</h3>
						<p>
							Because I’ve worked in fast-moving operational
							environments, I approach development with
							adaptability, attention to detail, and an emphasis
							on solving real business needs.
						</p>
					</article>
				</div>
			</Container>
		</section>
	);
}

export default Experience;
