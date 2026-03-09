import Container from "../../ui/Container/Container";
import "./Footer.css";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<Container className="site-footer__inner">
				<div className="system-status">
					<h4>System Status</h4>
					<p>
						🟢 API Operational —{" "}
						<a
							href="https://soli-portfolio-api.onrender.com"
							target="_blank"
							rel="noopener noreferrer">
							View API Health
						</a>
					</p>
				</div>
				<div className="site-footer__brand">
					<p className="site-footer__name">Stephanie Olivares</p>
					<p className="site-footer__role">
						Full-Stack MERN Developer
					</p>
				</div>

				<div className="site-footer__meta">
					<p>© {year} soli.nyc</p>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
