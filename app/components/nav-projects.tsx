import { type LucideIcon } from "lucide-react";
import { Link } from "react-router";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "~/components/ui/sidebar";

export function NavProjects({
  projects,
}: {
  projects: {
    title: string;
    items: {
      name: string;
      url: string;
      icon: LucideIcon;
    }[];
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="">
      <SidebarGroupLabel>{projects.title}</SidebarGroupLabel>
      <SidebarMenu>
        {projects.items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link to={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
