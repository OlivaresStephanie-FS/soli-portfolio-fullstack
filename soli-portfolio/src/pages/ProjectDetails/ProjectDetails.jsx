import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";
import PageShell from "../../components/layout/PageShell/PageShell";
import "./ProjectDetails.css";

export default function ProjectDetails() {
	const { slug } = useParams();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
	}, [slug]);

	const project = projects.find((p) => p.slug === slug);
	const currentIndex = projects.findIndex((p) => p.slug === slug);

	if (!project) {
		return (
			<PageShell>
				<div className="container project-details">
					<h1>Project not found.</h1>
				</div>
			</PageShell>
		);
	}

	const previousProject =
		currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];

	const nextProject =
		currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

	const liveUrl = project.liveUrl || project.live || "";
	const githubUrl = project.githubUrl || project.github || "";
	const techStack = project.tech || project.stack || [];
	const results = project.results || [];

	const gallery =
		project.gallery ||
		project.screenshots?.map((src) => ({
			src,
			alt: `${project.title} screenshot`,
			caption: "",
		})) ||
		(project.image
			? [
					{
						src: project.image,
						alt: project.title,
						caption: "",
					},
			  ]
			: []);

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
							<Link to="/#projects" className="project-back__link">
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

						{(project.role || project.duration) && (
							<div className="project-meta">
								{project.role && <span>{project.role}</span>}
								{project.duration && <span>{project.duration}</span>}
							</div>
						)}

						<div className="project-links">
							{liveUrl ? (
								<a
									href={liveUrl}
									target="_blank"
									rel="noreferrer"
									className="project-link-button">
									Live Demo
								</a>
							) : (
								<span className="project-link-button project-link-button--disabled">
									Live Demo Coming Soon
								</span>
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

				{gallery.length > 0 && (
					<section className="project-section">
						<div className="container">
							<h2>Project Preview</h2>

							<div className="project-gallery">
								{gallery.map((item, index) => (
									<figure
										className="project-gallery__item"
										key={`${item.src}-${index}`}>
										<img
											src={item.src}
											alt={
												item.alt ||
												`${project.title} screenshot ${index + 1}`
											}
											className="project-gallery__image"
											loading="lazy"
											decoding="async"
											onError={(event) => {
												event.currentTarget.style.visibility =
													"hidden";
											}}
										/>

										{item.caption && (
											<figcaption className="project-gallery__caption">
												{item.caption}
											</figcaption>
										)}
									</figure>
								))}
							</div>
						</div>
					</section>
				)}

				{project.overview && (
					<section className="project-section">
						<div className="container">
							<h2>Overview</h2>
							<p>{project.overview}</p>
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

				{results.length > 0 && (
					<section className="project-section">
						<div className="container">
							<h2>Results</h2>
							<ul className="project-list">
								{results.map((result) => (
									<li key={result}>{result}</li>
								))}
							</ul>
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

				<section className="project-navigation">
					<div className="container project-navigation__inner">
						<Link
							to={`/projects/${previousProject.slug}`}
							className="project-navigation__link">
							<span>Previous Project</span>
							<strong>← {previousProject.title}</strong>
						</Link>

						<Link
							to={`/projects/${nextProject.slug}`}
							className="project-navigation__link project-navigation__link--next">
							<span>Next Project</span>
							<strong>{nextProject.title} →</strong>
						</Link>
					</div>
				</section>
			</div>
		</PageShell>
	);
}