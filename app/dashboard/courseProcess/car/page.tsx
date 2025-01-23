import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { columns } from "@/components/tables/car-tables/columns";
import { CarTable } from "@/components/tables/car-tables/car-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Car } from "@/constants/data";
import { AddCarSheet } from "@/components/sheets/add-car-sheet";

const breadcrumbItems = [
  { title: "Anasayfa", link: "/dashboard" },
  { title: "Kurum Araç", link: "/dashboard/courseProcess/car" },
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
  const carData: Car[] = [
    {
      id: 1,
      carPlate: '34 ABC 123',
      licenseClass: 'B',
      carBrand: 'Toyota Corolla',
      registerDate: '2022-01-15',
      serviceDate: '2022-02-01',
      inspectionDate: '2024-01-15',
      gear: 'Otomatik',
      carStatus: 'Aktif'
    },
    {
      id: 2,
      carPlate: '34 XYZ 789',
      licenseClass: 'B',
      carBrand: 'Honda Civic',
      registerDate: '2021-11-20',
      serviceDate: '2021-12-01',
      inspectionDate: '2023-11-20',
      gear: 'Manuel',
      carStatus: 'Bakımda'
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
            title={`Kurum Araç Listesi (${totalCars})`}
            description="Kurumunuza ait araç listesi"
          />
          <AddCarSheet />
        </div>
        <Separator />

        <CarTable
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
