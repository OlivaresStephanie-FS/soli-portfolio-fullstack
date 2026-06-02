import { Link } from "react-router-dom";
import Container from "../../ui/Container/Container";
import SystemStatus from "../../SystemStatus";
import { solinycLogo } from "@/assets/branding";
import "./Footer.css";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<Container className="site-footer__inner">
				<Link to="/" className="site-footer__brand">
					<img
						src={solinycLogo}
						alt="SOLINYC logo"
						className="site-footer__logo"
					/>

					<div className="site-footer__brand-text">
						<p className="site-footer__name">
							Stephanie Olivares
						</p>

						<p className="site-footer__role">
							Full-Stack MERN Developer
						</p>
					</div>
				</Link>

				<div className="site-footer__meta">
					<p>© {year} SOLINYC LLC</p>
					<SystemStatus />
				</div>
			</Container>
		</footer>
	);
}

export default Footer;