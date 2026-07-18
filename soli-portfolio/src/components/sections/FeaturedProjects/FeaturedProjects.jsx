import { useEffect, useMemo, useRef, useState } from "react";
import Container from "../../ui/Container/Container";
import ProjectCard from "../../projects/ProjectCard/ProjectCard";
import { projects } from "../../../data/projects";

import "./FeaturedProjects.css";

function FeaturedProjects() {
	const featured = useMemo(
		() => projects.filter((project) => project.featured),
		[],
	);

	const filters = useMemo(() => {
		const categories = featured.map((project) => project.category);
		return ["All", ...new Set(categories)];
	}, [featured]);

	const [activeFilter, setActiveFilter] = useState("All");
	const [displayedProjects, setDisplayedProjects] = useState(featured);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const transitionTimeoutRef = useRef(null);

	useEffect(() => {
		return () => {
			if (transitionTimeoutRef.current) {
				clearTimeout(transitionTimeoutRef.current);
			}
		};
	}, []);

	function handleFilterChange(filter) {
		if (filter === activeFilter) {
			return;
		}

		setActiveFilter(filter);
		setIsTransitioning(true);

		if (transitionTimeoutRef.current) {
			clearTimeout(transitionTimeoutRef.current);
		}

		transitionTimeoutRef.current = setTimeout(() => {
			const nextProjects =
				filter === "All"
					? featured
					: featured.filter(
							(project) => project.category === filter,
						);

			setDisplayedProjects(nextProjects);
			setIsTransitioning(false);
			transitionTimeoutRef.current = null;
		}, 180);
	}

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
					role="group"
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
								onClick={() => handleFilterChange(filter)}
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
