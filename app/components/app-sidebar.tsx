import * as React from "react";
import {
  Command,
  FileText,
  LayoutGrid,
  LifeBuoy,
  MessageCircle,
  Rss,
  Send,
  Settings2,
  Tag,
  Users2,
  Verified,
} from "lucide-react";
import { Link } from "react-router";
import { NavProjects } from "~/components/nav-projects";
import { NavSecondary } from "~/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

const data = {
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  blogs: {
    title: "Blog",
    items: [
      {
        name: "Semua Post",
        url: "#",
        icon: Rss,
      },
      {
        name: "Kategori",
        url: "#",
        icon: Tag,
      },
      {
        name: "Komentar",
        url: "#",
        icon: MessageCircle,
      },
    ],
  },
  ppdb: {
    title: "Penerimaan Peserta Didik Baru",
    items: [
      {
        name: "Kelola",
        url: "#",
        icon: Settings2,
      },
      {
        name: "Verifikasi",
        url: "#",
        icon: Verified,
      },
      {
        name: "Peserta",
        url: "#",
        icon: Users2,
      },
      {
        name: "Dokumen",
        url: "#",
        icon: FileText,
      },
    ],
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="#">
                <LayoutGrid /> <span>Beranda</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <NavProjects projects={data.blogs} />
        <NavProjects projects={data.ppdb} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
