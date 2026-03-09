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

		checkAPI();
	}, []);

	return (
		<div style={{ marginTop: "20px", fontSize: "0.9rem", opacity: 0.8 }}>
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
