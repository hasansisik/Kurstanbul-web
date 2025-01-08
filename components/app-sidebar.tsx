"use client"

import * as React from "react"
import {
  Smartphone,
  Frame,
  Map,
  PieChart,
  Settings2,
  Car,
  Home,
  User,
  Store
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
    name: "Aktif Görsel",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Aktif Görsel",
      logo: Car,
      plan: "999942101",
    }
  ],
  navMain: [
    {
      title: "Kurstanbul Mobil",
      url: "/dashboard/user",
      icon: Smartphone,
      isActive: true,
      items: [
        {
          title: "Uygulama Ders Kayıt",
          url: "/dashboard/mobile/class",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Uygulama Ders Kayıt",
      url: "/dashboard/mobile/class",
      icon: Frame,
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
