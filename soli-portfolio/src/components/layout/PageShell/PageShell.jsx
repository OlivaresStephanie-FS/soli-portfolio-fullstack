import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ScrollToHash from "../ScrollToHash/ScrollToHash";

function PageShell({ children }) {
	return (
		<div className="page-shell">
			<a href="#main-content" className="skip-link">
				Skip to content
			</a>
			<ScrollToHash />
			<NavBar />
			<main id="main-content">{children}</main>
			<Footer />
		</div>
	);
}

export default PageShell;
