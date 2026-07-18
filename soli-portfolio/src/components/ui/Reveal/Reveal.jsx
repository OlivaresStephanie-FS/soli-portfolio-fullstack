import { createElement } from "react";
import useReveal from "../../../hooks/useReveal";
import "./Reveal.css";

function Reveal({ as: Tag = "div", className = "", children }) {
	const { ref, isVisible } = useReveal();

	const classes = [
		"reveal",
		isVisible ? "reveal--visible" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return createElement(
		Tag,
		{
			ref,
			className: classes,
		},
		children,
	);
}

export default Reveal;
