import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
type BreadcrumbItemProps = {
  title: string;
  link: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItemProps[] }) {
  return (
    <div className="flex items-center gap-2">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => (
            <Fragment key={item.title}>
              <BreadcrumbItem className={index !== items.length - 1 ? "hidden md:block" : ""}>
                {index === items.length - 1 ? (
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.link}>
                    {item.title}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && (
                <BreadcrumbSeparator className="hidden md:block" />
              )}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
