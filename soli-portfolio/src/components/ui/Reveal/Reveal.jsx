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

	return (
		<Tag ref={ref} className={classes}>
			{children}
		</Tag>
	);
}

export default Reveal;