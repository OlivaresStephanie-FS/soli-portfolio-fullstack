import PageShell from "../../components/layout/PageShell/PageShell";
import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import FeaturedProjects from "../../components/sections/FeaturedProjects/FeaturedProjects";
import Skills from "../../components/sections/Skills/Skills";
import Experience from "../../components/sections/Experience/Experience";
import Contact from "../../components/sections/Contact/Contact";
import Footer from "../../components/layout/Footer/Footer";
import Reveal from "../../components/ui/Reveal/Reveal";

function Home() {
	return (
		<PageShell>
			<Hero />

			<Reveal>
				<About />
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

			<Footer />
		</PageShell>
	);
}

export default Home;
