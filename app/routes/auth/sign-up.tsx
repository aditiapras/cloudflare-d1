import { SignUp } from "@clerk/react-router"
import type { Route } from "./+types/sign-up"

export function meta({ error }: Route.MetaArgs) {
    return [
        { title: "Sign Up" },
        { name: "description", content: "Sign Up" },
    ];
}

export default function Page() {
    return (
        <div className="flex h-screen items-center justify-center">
            <SignUp />
        </div>
    )
}
