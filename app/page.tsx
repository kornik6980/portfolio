import Info from "./components/Info";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div>
			<Header />

			<section>
				<Hero />
			</section>

			<section id="info">
				<Info />
			</section>

			<section id="skills">
				<Skills />
			</section>

			<section id="projects">
				<Projects />
			</section>

			<Footer />
		</div>
	);
}
