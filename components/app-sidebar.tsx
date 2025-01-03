"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: BookOpen,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "User",
      url: "/dashboard/user",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "History",
          url: "/dashboard/user",
        },
        {
          title: "Starred",
          url: "/dashboard/user",
        },
        {
          title: "Settings",
          url: "/dashboard/user",
        },
      ],
    },
    {
      title: "Kanban",
      url: "/dashboard/kanban",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "/dashboard/kanban",
        },
        {
          title: "Explorer",
          url: "/dashboard/kanban",
        },
        {
          title: "Quantum",
          url: "/dashboard/kanban",
        },
      ],
    },
    {
      title: "Employee",
      url: "/dashboard/employee",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/dashboard/employee",
        },
        {
          title: "Get Started",
          url: "/dashboard/employee",
        },
        {
          title: "Tutorials",
          url: "/dashboard/employee",
        },
        {
          title: "Changelog",
          url: "/dashboard/employee",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/dashboard/settings",
        },
        {
          title: "Team",
          url: "/dashboard/settings",
        },
        {
          title: "Billing",
          url: "/dashboard/settings",
        },
        {
          title: "Limits",
          url: "/dashboard/settings",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "/dashboard/profile",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "/dashboard/profile",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "/dashboard/profile",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
