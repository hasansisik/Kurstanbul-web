import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordionHeader";
import { Heading } from "@/components/ui/heading";
import { Building2, Hash, Phone, MapPin, Calendar, Users } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const breadcrumbItems = [
  { title: "Anasayfa", link: "/dashboard" },
  { title: "User", link: "/dashboard/user" },
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
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
                  YILDIZ KURSU
                </span>
              </div>
              <div className="flex-1 md:text-center">
                <span className="text-xs text-gray-500 flex items-center gap-2 md:justify-center">
                  <Hash className="w-4 h-4" />
                  KURUM KODU
                </span>
                <span className="font-medium block">9990001</span>
              </div>
              <div className="flex-1 md:text-right">
                <span className="text-xs text-gray-500 flex items-center gap-2 md:justify-end">
                  <Phone className="w-4 h-4" />
                  KURUM TELEFON
                </span>
                <span className="font-medium block">21600000</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex-1">
                <span className="text-xs text-gray-500 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  KURUM ADRES
                </span>
                <span className="font-medium break-words block">
                  X MAH. T CAD. NO: 3 İÇ KAPI NO: 11 ATAŞEHİR /
                  İSTANBUL
                </span>
              </div>
              <div className="flex-1 md:text-center">
                <span className="text-xs text-gray-500 flex items-center gap-2 md:justify-center">
                  <Calendar className="w-4 h-4" />
                  AÇILMA TARİHİ
                </span>
                <span className="font-medium block">17/11/2012</span>
              </div>
              <div className="flex-1 md:text-right">
                <span className="text-xs text-gray-500 flex items-center gap-2 md:justify-end">
                  <Users className="w-4 h-4" />
                  BİNA KONTEJYAN
                </span>
                <span className="font-medium block">22</span>
              </div>
            </div>
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4 pt-5"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Ehliyet Sınıfları</AccordionTrigger>
            <AccordionContent className="bg-white p-4 rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ehliyet Sınıfı</TableHead>
                    <TableHead>Program Ruhsat Alma Tarihi</TableHead>
                    <TableHead>Program Kapanma Tarihi</TableHead>
                    <TableHead className="text-right">Durum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      A Sınıfı Sertifikası
                    </TableCell>
                    <TableCell>20/12/2015</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell className="text-right">Açık</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      A1 Sınıfı Sertifikası
                    </TableCell>
                    <TableCell>20/12/2015</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell className="text-right">Kapalı</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      A2 Sınıfı Sertifikası
                    </TableCell>
                    <TableCell>20/12/2015</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell className="text-right">Kapalı</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      B Sınıfı Sertifikası
                    </TableCell>
                    <TableCell>20/12/2015</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell className="text-right">Açık</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      C Sınıfı Sertifikası
                    </TableCell>
                    <TableCell>20/12/2015</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell className="text-right">Açık</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Araç Bilgileri</AccordionTrigger>
            <AccordionContent className="bg-white p-4 rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Aracın Plakası</TableHead>
                    <TableHead>Ehliyet Sınıfı</TableHead>
                    <TableHead>Markası</TableHead>
                    <TableHead>Modeli</TableHead>
                    <TableHead>Model Yılı</TableHead>
                    <TableHead>Tescil Tarihi</TableHead>
                    <TableHead>Hizmete Giriş Tarihi</TableHead>
                    <TableHead>Hizmetten Çıkış Tarihi</TableHead>
                    <TableHead>Aracın Durumu</TableHead>
                    <TableHead className="text-right">
                      MEM Onay Durumu
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>34ABC1234</TableCell>
                    <TableCell>B Sınıfı Sertifikası</TableCell>
                    <TableCell>Mercedes</TableCell>
                    <TableCell>C180</TableCell>
                    <TableCell>2018</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell>Hizmette</TableCell>
                    <TableCell className="text-right">Onaylandı</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>34ABC1234</TableCell>
                    <TableCell>B Sınıfı Sertifikası</TableCell>
                    <TableCell>Mercedes</TableCell>
                    <TableCell>C180</TableCell>
                    <TableCell>2018</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell>Hizmette</TableCell>
                    <TableCell className="text-right">Onaylandı</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Derslik Bilgileri</AccordionTrigger>
            <AccordionContent className="bg-white p-4 rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Derslik Türü</TableHead>
                    <TableHead>Derslik Adı</TableHead>
                    <TableHead>Oda Kontejyanı</TableHead>
                    <TableHead>Odanın Durumu</TableHead>
                    <TableHead>Oda Açılma Tarihi</TableHead>
                    <TableHead>Oda Kapanma Tarihi</TableHead>
                    <TableHead className="text-right">
                      MEM Onay Durumu
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Trafik Çevrek Bilgisi</TableCell>
                    <TableCell>Derslik-1</TableCell>
                    <TableCell>16</TableCell>
                    <TableCell>Açık</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-right">Onaylandı</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>İlk Yardım</TableCell>
                    <TableCell>Derslik-1</TableCell>
                    <TableCell>16</TableCell>
                    <TableCell>Açık</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-right">Onaylandı</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Araç Tekniği</TableCell>
                    <TableCell>Derslik-1</TableCell>
                    <TableCell>16</TableCell>
                    <TableCell>Açık</TableCell>
                    <TableCell>12/05/2018</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-right">Onaylandı</TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </PageContainer>
  );
}
