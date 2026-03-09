import { Link } from "react-router-dom";
import Container from "../../ui/Container/Container";
import logo from "../../../assets/branding/solinyc-logo.png";
import "./NavBar.css";

function Navbar() {
	return (
		<header className="site-header">
			<Container className="site-header__inner">
				<Link to="/" className="site-brand" aria-label="Go to homepage">
					<img
						src={logo}
						alt="Soli NYC logo"
						className="site-brand__logo"
					/>
					<div className="site-brand__text">
						<span className="site-brand__name">
							Stephanie Olivares
						</span>
						<span className="site-brand__role">
							Full-Stack MERN Developer
						</span>
					</div>
				</Link>

				<nav className="site-nav" aria-label="Primary">
					<Link to="/#about" className="site-nav__link">
						About
					</Link>

					<Link to="/#projects" className="site-nav__link">
						Projects
					</Link>

					<Link to="/#skills" className="site-nav__link">
						Skills
					</Link>

					<Link to="/#experience" className="site-nav__link">
						Approach
					</Link>

					<Link to="/#contact" className="site-nav__link">
						Contact
					</Link>
				</nav>
			</Container>
		</header>
	);
}

export default Navbar;
