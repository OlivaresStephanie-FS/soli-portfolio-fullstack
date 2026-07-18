import PageShell from "../../components/layout/PageShell/PageShell";
import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Services from "../../components/sections/Services/Services";
import FeaturedProjects from "../../components/sections/FeaturedProjects/FeaturedProjects";
import Skills from "../../components/sections/Skills/Skills";
import Experience from "../../components/sections/Experience/Experience";
import Contact from "../../components/sections/Contact/Contact";
import Reveal from "../../components/ui/Reveal/Reveal";

function Home() {
	return (
		<PageShell>
			<Hero />

			<Reveal>
				<About />
			</Reveal>

			<Reveal>
				<Services />
			</Reveal>

			<Reveal>
				<FeaturedProjects />
			</Reveal>

			<Reveal>
				<Skills />
			</Reveal>

			<Reveal>
				<Experience />
			</Reveal>

			<Reveal>
				<Contact />
			</Reveal>

		</PageShell>
	);
}

export default Home;
