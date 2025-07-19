import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/react-router";
import { getAuth } from "@clerk/react-router/ssr.server";
import { Outlet, redirect } from "react-router";
import { AppSidebar } from "~/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Separator } from "~/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { Skeleton } from "~/components/ui/skeleton";
import type { Route } from "./+types/layout";

export async function loader(args: Route.LoaderArgs) {
  const { userId, sessionClaims } = await getAuth(args);

  if (!userId) {
    return redirect("/sign-in");
  }
  return sessionClaims;
}

export default function Page({ loaderData }: Route.ComponentProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex justify-between h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2 px-4">
            <p className="text-sm font-medium">Hi, {loaderData?.first_name}!</p>
            <ClerkLoading>
              <Skeleton className="size-7 rounded-full" />
            </ClerkLoading>
            <ClerkLoaded>
              <UserButton />
            </ClerkLoaded>
          </div>
        </header>
        <div className="px-4 mb-4">
          <Separator />
        </div>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
