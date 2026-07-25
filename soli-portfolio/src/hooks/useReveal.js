import { useEffect, useRef, useState } from "react";

function useReveal(options = {}) {
	const ref = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(node);
				}
			},
			{
				// threshold must stay near 0: a ratio like 0.16 is relative to the
				// *element* height, so sections taller than ~viewport/0.16 (e.g.
				// the Projects grid on mobile) can never reach the threshold and
				// stay stuck at opacity 0. rootMargin still requires a meaningful
				// viewport inset before reveal fires.
				threshold: 0,
				rootMargin: "0px 0px -12% 0px",
				...options,
			},
		);

		observer.observe(node);

		return () => observer.disconnect();
	}, [options]);

	return { ref, isVisible };
}

export default useReveal;
