import { useParams } from "react-router-dom";

import projects from "../../data/fallbackProjects";

import Container from "../../components/ui/Container/Container";
import ProjectHero from "../../components/projects/ProjectHero/ProjectHero";
import { Link } from "react-router-dom";
import "./ProjectDetails.css";

function ProjectDetails() {
	const { slug } = useParams();

	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		return (
			<Container>
				<h1>Project not found</h1>
			</Container>
		);
	}

	return (
		<main>
			<section className="project-back">
				<Container>
					<Link to="/" className="project-back__link">
						← Back to Home
					</Link>
				</Container>
			</section>
			<ProjectHero project={project} />

			<section className="project-body">
				<Container>
					<img
						src={project.image}
						alt={project.title}
						style={{ marginBottom: "3rem", borderRadius: "14px" }}
					/>

					<h2>Overview</h2>

					<p>
						This project demonstrates building a modern web
						application with scalable architecture and clean UI.
					</p>

					<div style={{ marginTop: "2rem" }}>
						{project.live && (
							<a href={project.live} target="_blank">
								View Live
							</a>
						)}

						{project.github && (
							<a
								href={project.github}
								target="_blank"
								style={{ marginLeft: "1rem" }}>
								GitHub
							</a>
						)}
					</div>
				</Container>
			</section>
		</main>
	);
}

export default ProjectDetails;
