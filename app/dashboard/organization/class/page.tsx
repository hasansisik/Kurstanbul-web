import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { columns } from "@/components/tables/class-tables/columns";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Class } from "@/constants/data";
import { AddClassSheet } from "@/components/sheets/add-class-sheet";
import { ClassTable } from "@/components/tables/class-tables/class-table";

const breadcrumbItems = [
  { title: "Anasayfa", link: "/dashboard" },
  { title: "Kurum Araç", link: "/dashboard/organization/car" },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const offset = (page - 1) * pageLimit;

  // Örnek araç verileri
  const carData: Class[] = [
    {
      id: 1,
      classType: 'Trafik ve Çevre Bilgisi',
      className: 'Derslik-1',
      roomQuata: '15',
      registerDate: '2022-01-15',
      classStatus: 'Aktif'
    },
    {
      id: 2,
      classType: 'İlk Yardım',
      className: 'Derslik-1',
      roomQuata: '15',
      registerDate: '2022-01-15',
      classStatus: 'Aktif'
    },
    // Daha fazla örnek veri eklenebilir
  ];

  const totalCars = carData.length;
  const pageCount = Math.ceil(totalCars / pageLimit);
  
  // Sayfalama için veriyi dilimle
  const paginatedData = carData.slice(offset, offset + pageLimit);

  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title={`Kurum Sınıf Listesi (${totalCars})`}
            description="Kurumunuza ait sınıf listesi"
          />
          <AddClassSheet />
        </div>
        <Separator />
        <ClassTable
          searchKey="carPlate"
          pageNo={page}
          columns={columns}
          totalUsers={totalCars}
          data={paginatedData}
          pageCount={pageCount}
        />
      </div>
    </PageContainer>
  );
}
