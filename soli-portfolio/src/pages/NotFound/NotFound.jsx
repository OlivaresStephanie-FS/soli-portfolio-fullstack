import { Link } from "react-router-dom";
import Container from "../../components/ui/Container/Container";

function NotFound() {
	return (
		<main style={{ padding: "6rem 0" }}>
			<Container>
				<h1>Page not found</h1>

				<p>
					The page you're looking for doesn't exist or may have been moved.
				</p>

				<Link to="/" style={{ marginTop: "2rem", display: "inline-block" }}>
					Return to homepage
				</Link>
			</Container>
		</main>
	);
}

export default NotFound;
