import { createRootRoute } from "@tanstack/react-router";
import App from "../App"
import { homeRoute } from "./homeRoute";
import { agenceRoute } from'./agenceRoute'
import { projectsRoute } from "./projectsRoute";


export const rootRoute = createRootRoute({
    component: App 
})

export const routeTree =rootRoute.addChildren([
    homeRoute, 
    agenceRoute, 
    projectsRoute
])