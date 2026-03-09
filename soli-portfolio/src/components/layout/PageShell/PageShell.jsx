import Navbar from "../Navbar/Navbar";
import ScrollToHash from "../ScrollToHash/ScrollToHash";

function PageShell({ children }) {
	return (
		<div className="page-shell">
			<ScrollToHash />
			<Navbar />
			{children}
		</div>
	);
}

export default PageShell;