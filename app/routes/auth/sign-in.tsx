import { SignIn } from "@clerk/react-router";
import type { Route } from "./+types/sign-in";

export function meta({ error }: Route.MetaArgs) {
  return [{ title: "Sign In" }, { name: "description", content: "Sign In" }];
}
export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn />
    </div>
  );
}
