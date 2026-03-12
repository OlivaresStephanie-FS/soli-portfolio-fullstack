import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";
import PageShell from "../../components/layout/PageShell/PageShell";
import "./projectDetails.css";

export default function ProjectDetails() {
	const { slug } = useParams();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
	}, [slug]);

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

	const liveUrl = project.liveUrl || project.live || "";
	const githubUrl = project.githubUrl || project.github || "";
	const techStack = project.tech || project.stack || [];
	const screenshots =
		project.screenshots ||
		project.gallery?.map((item) => item.src) ||
		(project.image ? [project.image] : []);

	const tagline =
		project.tagline ||
		project.description ||
		"Project case study and technical overview.";

	return (
		<PageShell>
			<div className="project-details">
				<section className="project-hero">
					<div className="container">
						<div className="project-back">
							<Link
								to="/#projects"
								className="project-back__link">
								← Back to Projects
							</Link>
						</div>

						<div className="project-eyebrow-group">
							<p className="project-eyebrow">Case Study</p>
							<p className="project-eyebrow project-eyebrow--muted">
								{project.category || "Project"}
							</p>
						</div>

						<h1 className="project-title">{project.title}</h1>

						<p className="project-tagline">{tagline}</p>

						<div className="project-links">
							{liveUrl && (
								<a
									href={liveUrl}
									target="_blank"
									rel="noreferrer"
									className="project-link-button">
									Live Site
								</a>
							)}

							{githubUrl && (
								<a
									href={githubUrl}
									target="_blank"
									rel="noreferrer"
									className="project-link-button project-link-button--ghost">
									GitHub Repository
								</a>
							)}
						</div>
					</div>
				</section>

				{screenshots.length > 0 && (
					<section className="project-section">
						<div className="container">
							<h2>Project Preview</h2>

							<div className="project-gallery">
								{screenshots.map((shot, index) => (
									<div
										className="project-gallery__item"
										key={`${shot}-${index}`}>
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

				{project.problem && (
					<section className="project-section">
						<div className="container">
							<h2>Problem</h2>
							<p>{project.problem}</p>
						</div>
					</section>
				)}

				{project.solution && (
					<section className="project-section">
						<div className="container">
							<h2>Solution</h2>
							<p>{project.solution}</p>
						</div>
					</section>
				)}

				{project.features?.length > 0 && (
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
				)}

				{project.architecture?.length > 0 && (
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
				)}

				{techStack.length > 0 && (
					<section className="project-section">
						<div className="container">
							<h2>Tech Stack</h2>
							<ul className="project-list project-tech-list">
								{techStack.map((tech) => (
									<li key={tech}>{tech}</li>
								))}
							</ul>
						</div>
					</section>
				)}

				{project.overview && !project.solution && (
					<section className="project-section">
						<div className="container">
							<h2>Overview</h2>
							<p>{project.overview}</p>
						</div>
					</section>
				)}
			</div>
		</PageShell>
	);
}
