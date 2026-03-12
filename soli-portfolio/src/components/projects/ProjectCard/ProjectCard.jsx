import "./ProjectCard.css";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
	const hasLiveDemo = project.live || project.liveUrl;

	return (
		<Link to={`/projects/${project.slug}`} className="project-card">
			<div className="project-card__image">
				<img src={project.image} alt={project.title} />

				{hasLiveDemo && (
					<span className="project-card__badge">Live Demo</span>
				)}
			</div>

			<div className="project-card__content">
				<h3>{project.title}</h3>

				<p className="project-card__description">
					{project.description}
				</p>

				<ul className="project-card__stack">
					{project.stack.map((tech) => (
						<li key={tech}>{tech}</li>
					))}
				</ul>

				<span className="project-card__cta">
					View Case Study →
				</span>
			</div>
		</Link>
	);
}

export default ProjectCard;