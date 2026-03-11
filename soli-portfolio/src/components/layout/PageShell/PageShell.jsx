import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ScrollToHash from "../ScrollToHash/ScrollToHash";

function PageShell({ children }) {
	return (
		<div className="page-shell">
			<ScrollToHash />
			<NavBar />
			{children}
			<Footer />
		</div>
	);
}

export default PageShell;