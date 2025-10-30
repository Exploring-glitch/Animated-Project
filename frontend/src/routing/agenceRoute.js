import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree"
import AgencePage from "../pages/AgencePage";


export const agenceRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/agence',
    component: AgencePage,
})