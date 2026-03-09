import { useEffect, useMemo, useState } from "react";
import Container from "../../ui/Container/Container";
import ProjectCard from "../../projects/ProjectCard/ProjectCard";
import projects from "../../../data/fallbackProjects";

import "./FeaturedProjects.css";

function FeaturedProjects() {
	const featured = projects.filter((project) => project.featured);

	const filters = useMemo(() => {
		const categories = featured.map((project) => project.category);
		return ["All", ...new Set(categories)];
	}, [featured]);

	const [activeFilter, setActiveFilter] = useState("All");
	const [displayedProjects, setDisplayedProjects] = useState(featured);
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		setIsTransitioning(true);

		const timeout = setTimeout(() => {
			const nextProjects =
				activeFilter === "All"
					? featured
					: featured.filter(
							(project) => project.category === activeFilter,
						);

			setDisplayedProjects(nextProjects);
			setIsTransitioning(false);
		}, 180);

		return () => clearTimeout(timeout);
	}, [activeFilter]);

	return (
		<section className="featured-projects" id="projects">
			<Container>
				<div className="featured-projects__intro">
					<p className="eyebrow">Projects</p>
					<h2>Selected Work</h2>
					<p className="featured-projects__description">
						A selection of projects demonstrating full-stack
						development, front-end architecture, and practical
						problem solving.
					</p>
				</div>

				<div
					className="featured-projects__filters"
					role="tablist"
					aria-label="Project filters">
					{filters.map((filter) => {
						const isActive = activeFilter === filter;

						return (
							<button
								key={filter}
								type="button"
								className={`featured-projects__filter${
									isActive
										? " featured-projects__filter--active"
										: ""
								}`}
								onClick={() => setActiveFilter(filter)}
								aria-pressed={isActive}>
								{filter}
							</button>
						);
					})}
				</div>

				<div
					className={`featured-projects__grid${
						isTransitioning
							? " featured-projects__grid--transitioning"
							: ""
					}`}>
					{displayedProjects.map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
				</div>
			</Container>
		</section>
	);
}

export default FeaturedProjects;
