"use client"

import * as React from "react"
import {
  Smartphone,
  Frame,
  Map,
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
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { loadUser } from '@/redux/actions/companyActions'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const dispatch = useDispatch<AppDispatch>();
  const company = useSelector((state: RootState) => state.company);
  const pathname = usePathname();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // Data objesini component içine taşıdık
  const data = {
    user: {
      name: `${company?.company.courseName}`,
      email: `${company?.company.courseEmail }`,
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: `${company?.company.courseName }`,
        logo: Car,
        plan: `${company?.company.courseCode }`,
      }
    ],
    navMain: [
      {
        title: "Kurstanbul Mobil",
        url: "/dashboard/soon",
        icon: Smartphone,
        isActive: pathname.startsWith('/dashboard/mobile'),
        items: [
          {
            title: "Kursum",
            url: "/dashboard/soon",
          },
          {
            title: "Personellerim",
            url: "/dashboard/soon",
          },
          {
            title: "Değerlendirmelerim",
            url: "/dashboard/soon",
          },
          {
            title:"Mevcut Ehliyet Sınıfları",
            url:"/dashboard/soon"
          },
          {
            title: "Uygulama Ders Kayıt",
            url: "/dashboard/mobile/class",
          },
        ],
      },
      {
        title: "Kurum İşlemleri",
        url: "/dashboard/organization",
        icon: Home,
        isActive: pathname.startsWith('/dashboard/organization'),
        items: [
          {
            title: "Kurum Bilgisi",
            url: "/dashboard/organization",
          },
          {
            title: "Kurum Araç",
            url: "/dashboard/organization/car",
          },
          {
            title: "Kurum Derslik",
            url: "/dashboard/organization/class",
          },
          {
            title: "Kurum Personelleri",
            url: "/dashboard/organization/person",
          },

        ],
      },
      {
        title: "Kurum Aday Kayıt",
        url: "/dashboard/soon",
        icon: User,
        isActive: pathname.startsWith('/dashboard/candidate'),
        items: [
          {
            title: "Aday Dönem Kayıt",
            url: "/dashboard/candidate",
          },
          {
            title: "Aday Evrak Kayıt",
            url: "/dashboard/candidate",
          },
          {
            title: "Aday Listeleme/Kontrol",
            url: "/dashboard/candidate",
          },
          {
            title: "Aday Durum Görüntüleme",
            url: "/dashboard/candidate",
          },
        ],
      },
      {
        title: "Ayarlar",
        url: "/dashboard/settings",
        icon: Settings2,
        isActive: pathname.startsWith('/dashboard/settings'),
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
        url: "/dashboard/soon",
        icon: Map,
      },
      {
        name: "MEBBİS Aktarım",
        url: "/dashboard/soon",
        icon: Frame,
      },
      {
        name: "Mağaza",
        url: "/dashboard/soon",
        icon: Store,
      },
      {
        name: "Kurum Bilgisi",
        url: "/dashboard/soon",
        icon: Map,
      },
     
    ],
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher team={data.teams[0]} />
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
