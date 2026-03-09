import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
	const location = useLocation();

	useEffect(() => {
		if (!location.hash) {
			window.scrollTo({ top: 0, behavior: "smooth" });
			return;
		}

		const id = location.hash.replace("#", "");

		const scrollToElement = () => {
			const element = document.getElementById(id);

			if (element) {
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		};

		// slight delay helps after route changes/render
		setTimeout(scrollToElement, 50);
	}, [location]);

	return null;
}

export default ScrollToHash;