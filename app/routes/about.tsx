import type { Route } from "./+types/about"

export function meta({ error }: Route.MetaArgs) {
    return [
        { title: "About Page" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Page() {
    return (
        <div>About Page</div>
    )
}
