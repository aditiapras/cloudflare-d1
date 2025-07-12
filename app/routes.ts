import {
	index,
	layout,
	type RouteConfig,
	route,
} from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("portal", "routes/portal/layout.tsx", [
		index("routes/portal/index.tsx"),
	]),
	route("sign-in/*", "routes/auth/sign-in.tsx"),
	route("sign-up/*", "routes/auth/sign-up.tsx"),
] satisfies RouteConfig;
