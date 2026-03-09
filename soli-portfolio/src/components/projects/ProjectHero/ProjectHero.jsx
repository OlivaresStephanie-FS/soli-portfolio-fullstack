import Container from "../../ui/Container/Container";
import "./ProjectHero.css";

function ProjectHero({ project }) {
	return (
		<section className="project-hero">
			<Container>
				<p className="eyebrow">Project</p>

				<h1 className="project-hero__title">{project.title}</h1>

				<p className="project-hero__description">
					{project.description}
				</p>

				<ul className="project-hero__stack">
					{project.stack.map((tech) => (
						<li key={tech}>{tech}</li>
					))}
				</ul>
			</Container>
		</section>
	);
}

export default ProjectHero;
