import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import PageShell from "../../components/layout/PageShell/PageShell";
import "./projectDetails.css";

export default function ProjectDetails() {
	const { slug } = useParams();

	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		return (
			<PageShell>
				<div className="container project-details">
					<h1>Project not found.</h1>
				</div>
			</PageShell>
		);
	}

	return (
		<PageShell>
			<div className="project-details">
				<section className="project-hero">
					<div className="container">
						<div className="project-eyebrow-group">
							<p className="project-eyebrow">Case Study</p>
							<p className="project-eyebrow project-eyebrow--muted">
								Client Project
							</p>
						</div>

						<h1 className="project-title">{project.title}</h1>

						<p className="project-tagline">{project.tagline}</p>

						<div className="project-links">
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noreferrer"
								className="project-link-button">
								Live Site
							</a>

							<a
								href={project.githubUrl}
								target="_blank"
								rel="noreferrer"
								className="project-link-button project-link-button--ghost">
								GitHub Repository
							</a>
						</div>
					</div>
				</section>

				{project.screenshots?.length > 0 && (
					<section className="project-section">
						<div className="container">
							<h2>Project Preview</h2>

							<div className="project-gallery">
								{project.screenshots.map((shot, index) => (
									<div
										className="project-gallery__item"
										key={shot}>
										<img
											src={shot}
											alt={`${project.title} screenshot ${index + 1}`}
											className="project-gallery__image"
										/>
									</div>
								))}
							</div>
						</div>
					</section>
				)}

				<section className="project-section">
					<div className="container">
						<h2>Problem</h2>
						<p>{project.problem}</p>
					</div>
				</section>

				<section className="project-section">
					<div className="container">
						<h2>Solution</h2>
						<p>{project.solution}</p>
					</div>
				</section>

				<section className="project-section">
					<div className="container">
						<h2>Key Features</h2>
						<ul className="project-list">
							{project.features.map((feature) => (
								<li key={feature}>{feature}</li>
							))}
						</ul>
					</div>
				</section>

				<section className="project-section">
					<div className="container">
						<h2>Architecture</h2>
						<ul className="project-list">
							{project.architecture.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</section>

				<section className="project-section">
					<div className="container">
						<h2>Tech Stack</h2>
						<ul className="project-list project-tech-list">
							{project.tech.map((tech) => (
								<li key={tech}>{tech}</li>
							))}
						</ul>
					</div>
				</section>
			</div>
		</PageShell>
	);
}
