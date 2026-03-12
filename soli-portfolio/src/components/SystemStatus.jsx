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
		<div>
			<strong>System Status:</strong>{" "}
			{status === "checking" && "Checking API..."}
			{status === "online" && (
				<span>
					🟢 API Online —{" "}
					<a
						href="https://soli-portfolio-api.onrender.com"
						target="_blank"
						rel="noopener noreferrer">
						View Health
					</a>
				</span>
			)}
			{status === "offline" && "🔴 API Offline"}
		</div>
	);
}
