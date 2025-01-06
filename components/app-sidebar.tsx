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
    name: "shadcn",
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
          title: "Kursum",
          url: "/dashboard/user",
        },
        {
          title: "Personellerim",
          url: "/dashboard/user",
        },
        {
          title: "Değerlendirmelerim",
          url: "/dashboard/user",
        },
        {
          title:"Mevcut Ehliyet Sınıfları",
          url:"/dashboard"
        },
        {
          title: "Uygulama Ders Kayıt",
          url: "/dashboard/kanban",
        },
      ],
    },
    {
      title: "Kurum İşlemleri",
      url: "/dashboard/courseProcess",
      icon: Home,
      items: [
        {
          title: "Kurum Bilgisi",
          url: "/dashboard/courseProcess",
        },
        {
          title: "Kurum Araç",
          url: "/dashboard/courseProcess",
        },
        {
          title: "Kurum Derslik",
          url: "/dashboard/courseProcess",
        },
        {
          title: "Kurum Personelleri",
          url: "/dashboard/courseProcess",
        },

      ],
    },
    {
      title: "Kurum Aday Kayıt",
      url: "/dashboard/employee",
      icon: User,
      items: [
        {
          title: "Aday Dönem Kayıt",
          url: "/dashboard/employee",
        },
        {
          title: "Aday Evrak Kayıt",
          url: "/dashboard/employee",
        },
        {
          title: "Aday Listeleme/Kontrol",
          url: "/dashboard/employee",
        },
        {
          title: "Aday Durum Görüntüleme",
          url: "/dashboard/employee",
        },
      ],
    },
    {
      title: "Ayarlar",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        {
          title: "Profil",
          url: "/dashboard/settings",
        },
        {
          title: "Hesap",
          url: "/dashboard/settings/account",
        },
        {
          title: "Görünüm",
          url: "/dashboard/settings/appearance",
        },
        {
          title: "Bildirimler",
          url: "/dashboard/settings/notifications",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Aday Dönem Kayıt",
      url: "/dashboard/profile",
      icon: Map,
    },
    {
      name: "MEBBİS Aktarım",
      url: "/dashboard/profile",
      icon: Frame,
    },
    {
      name: "Mağaza",
      url: "/dashboard/profile",
      icon: Store,
    },
    {
      name: "Kurum Bilgisi",
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
