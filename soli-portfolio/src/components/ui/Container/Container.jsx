import { createElement } from "react";

function Container({ as: Tag = "div", className = "", children }) {
	const classes = ["container", className].filter(Boolean).join(" ");

	return createElement(Tag, { className: classes }, children);
}

export default Container;
