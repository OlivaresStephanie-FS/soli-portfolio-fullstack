import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/projects/:slug",
		element: <ProjectDetails />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
