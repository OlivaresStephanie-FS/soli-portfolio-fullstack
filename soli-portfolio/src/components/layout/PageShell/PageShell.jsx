import NavBar from "../Navbar/Navbar";
import ScrollToHash from "../ScrollToHash/ScrollToHash";

function PageShell({ children }) {
	return (
		<div className="page-shell">
			<ScrollToHash />
			<NavBar />
			{children}
		</div>
	);
}

export default PageShell;