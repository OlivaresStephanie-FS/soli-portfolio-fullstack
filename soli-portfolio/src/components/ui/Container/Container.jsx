function Container({ as: Tag = "div", className = "", children }) {
	const classes = ["container", className].filter(Boolean).join(" ");

	return <Tag className={classes}>{children}</Tag>;
}

export default Container;