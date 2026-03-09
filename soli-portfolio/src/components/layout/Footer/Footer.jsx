import { Link } from "react-router-dom";
import Container from "../../ui/Container/Container";
import SystemStatus from "../../SystemStatus";
import logo from "../../../assets/branding/solinyc-logo-footer.png";
import "./Footer.css";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<Container className="site-footer__inner">
				<Link to="/" className="site-footer__brand">
					<div className="site-footer__brand">
						<img
							src={logo}
							alt="Soli NYC logo"
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
					</div>
				</Link>
				<div className="site-footer__meta">
					<p>© {year} soli.nyc</p>
					<SystemStatus />
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
