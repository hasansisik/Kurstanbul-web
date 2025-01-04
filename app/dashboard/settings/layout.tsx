import { Metadata } from "next"
import { Breadcrumbs } from '@/components/breadcrumbs';

import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "./components/sidebar-nav"
import { Heading } from "@/components/ui/heading";
import PageContainer from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Hesap",
    href: "/dashboard/settings",
  },
  {
    title: "Görünüm",
    href: "/dashboard/settings/appearance",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Settings', link: '/dashboard/settings' }
];

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <PageContainer >
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <Heading
          title={`Ayarlar`}
          description="Ayarlar sayfasından tüm tercihlerinizi yönetebilir ve platformumuzu ihtiyaçlarınıza göre özelleştirebilirsiniz."
        />
        <Separator />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex lg:max-w-2xl px-2 overflow-y-scroll scrollbar-hide h-[calc(100vh-200px)]">
            {children}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
