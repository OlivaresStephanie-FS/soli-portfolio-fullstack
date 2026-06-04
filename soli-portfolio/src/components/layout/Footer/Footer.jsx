import { Link } from "react-router-dom";
import Container from "../../ui/Container/Container";
import SystemStatus from "../../SystemStatus";
import { solinycLogo } from "@/assets/branding";
import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
						<p className="site-footer__name">Stephanie Olivares</p>

						<p className="site-footer__role">
							Full-Stack MERN Developer
						</p>
					</div>
				</Link>

				<div className="site-footer__socials">
					<a href="mailto:soli@soli.nyc" aria-label="Email">
						<MdEmail size={20} />
					</a>

					<a
						href="https://www.linkedin.com/in/solinyc"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn">
						<FaLinkedin size={20} />
					</a>

					<a
						href="https://github.com/OlivaresStephanie-FS"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub">
						<FaGithub size={20} />
					</a>

					<a
						href="https://www.facebook.com/solinyc.llc"
						target="_blank"
						rel="noreferrer"
						aria-label="Facebook">
						{" "}
						<FaFacebook size={20} />{" "}
					</a>
				</div>

				<div className="site-footer__meta">
					<p>© {year} SOLINYC LLC</p>
					<SystemStatus />
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
