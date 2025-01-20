"use client";
import { Heading } from "@/components/ui/heading";
import { User } from "@/constants/data";
import {
  Plus,
  Building2,
  Hash,
  Phone,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordionHeader";

interface ProductsClientProps {
  data: User[];
}

export const CourseClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-start justify-between bg-sidebar p-10 gap-4 border rounded-md border-slate-450">
        <Heading title={`99943021`} description="Kurum Bilgileri" />
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex-1">
              <span className="text-xs text-gray-500 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                KURUM ADI
              </span>
              <span className="font-medium break-words block">
                ÖZEL AKTİF GÖRSEL MOTORLU TAŞIT SÜRÜCÜLERİ KURSU
              </span>
            </div>
            <div className="flex-1 md:text-center">
              <span className="text-xs text-gray-500 flex items-center gap-2 md:justify-center">
                <Hash className="w-4 h-4" />
                KURUM KODU
              </span>
              <span className="font-medium block">99943021</span>
            </div>
            <div className="flex-1 md:text-right">
              <span className="text-xs text-gray-500 flex items-center gap-2 md:justify-end">
                <Phone className="w-4 h-4" />
                KURUM TELEFON
              </span>
              <span className="font-medium block">2164501515</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex-1">
              <span className="text-xs text-gray-500 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                KURUM ADRES
              </span>
              <span className="font-medium break-words block">
                KAYIŞDAĞI MAH. USLU CAD. NO: 29 İÇ KAPI NO: 1 ATAŞEHİR /
                İSTANBUL
              </span>
            </div>
            <div className="flex-1 md:text-center">
              <span className="text-xs text-gray-500 flex items-center gap-2 md:justify-center">
                <Calendar className="w-4 h-4" />
                AÇILMA TARİHİ
              </span>
              <span className="font-medium block">17/07/2006</span>
            </div>
            <div className="flex-1 md:text-right">
              <span className="text-xs text-gray-500 flex items-center gap-2 md:justify-end">
                <Users className="w-4 h-4" />
                BİNA KONTEJYAN
              </span>
              <span className="font-medium block">54</span>
            </div>
          </div>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full flex flex-col gap-4 pt-5">
        <AccordionItem value="item-1">
          <AccordionTrigger>Ehliyet Sınıfları</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Araç Bilgileri</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Derslik Bilgileri</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
