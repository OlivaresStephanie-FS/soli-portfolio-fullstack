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
				threshold: 0.16,
				rootMargin: "0px 0px -40px 0px",
				...options,
			},
		);

		observer.observe(node);

		return () => observer.disconnect();
	}, [options]);

	return { ref, isVisible };
}

export default useReveal;
