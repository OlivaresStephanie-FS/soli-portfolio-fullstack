import { useEffect, useState } from "react";

export default function SystemStatus() {
	const [status, setStatus] = useState("checking");

	useEffect(() => {
		async function checkAPI() {
			try {
				const res = await fetch(
					"https://soli-portfolio-api.onrender.com",
				);

				if (res.ok) {
					setStatus("online");
				} else {
					setStatus("offline");
				}
			} catch (err) {
				setStatus("offline");
			}
		}

		// run immediately
		checkAPI();

		// run every 5 minutes
		const interval = setInterval(checkAPI, 300000);

		// cleanup when component unmounts
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="system-status">
			<span className="system-status__label">System Status</span>

			<span
				className={`system-status__badge system-status__badge--${status}`}>
				<span className="system-status__dot"></span>

				{status === "checking" && "Checking"}
				{status === "online" && "Online"}
				{status === "offline" && "Offline"}
			</span>
		</div>
	);
}
