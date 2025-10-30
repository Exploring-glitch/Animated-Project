import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree"
import ProjectsPage from "../pages/ProjectsPage";


export const projectsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/projects',
    component: ProjectsPage,
})