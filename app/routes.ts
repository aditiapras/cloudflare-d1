import {
  index,
  layout,
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  // Main layout with navbar and footer
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("kontak", "routes/kontak.tsx"),
    route("blog", "routes/blog.tsx"),
  ]),

  // Portal layout without navbar and footer
  route("portal", "routes/portal/layout.tsx", [
    index("routes/portal/index.tsx"),
  ]),

  // Auth layout without navbar and footer
  layout("routes/auth/layout.tsx", [
    route("sign-in/*", "routes/auth/sign-in.tsx"),
    route("sign-up/*", "routes/auth/sign-up.tsx"),
  ]),
] satisfies RouteConfig;
