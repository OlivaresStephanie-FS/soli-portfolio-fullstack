import Container from "../../ui/Container/Container";
import skillGroups from "../../../data/skills";
import "./Skills.css";

function Skills() {
	return (
		<section className="skills-section" id="skills">
			<Container>
				<div className="skills-section__intro">
					<p className="eyebrow">Skills</p>
					<h2>
						Technologies I use to build modern web applications.
					</h2>
					<p className="skills-section__description">
						My work centers on full-stack JavaScript development,
						with an emphasis on clean front-end experiences,
						scalable back-end structure, and practical deployment
						workflows.
					</p>
				</div>

				<div className="skills-section__grid">
					{skillGroups.map((group) => (
						<article className="skills-card" key={group.title}>
							<h3 className="skills-card__title">
								{group.title}
							</h3>

							<ul className="skills-card__list">
								{group.items.map((item) => (
									<li
										className="skills-card__item"
										key={item}>
										{item}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}

export default Skills;
