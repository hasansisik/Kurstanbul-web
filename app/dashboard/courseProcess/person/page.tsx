import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Person } from "@/constants/data";
import { AddPersonSheet } from "@/components/sheets/add-person-sheet";
import { PersonTable } from "@/components/tables/person-tables/person-table";
import { columns } from "@/components/tables/person-tables/columns";

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
  const personData: Person[] = [
    {
      id: 1,
      personName: "Erman İkitemur",
      personAge: '27',
      experienceYear: '8',
      licanceClass: 'B,A1',
      personStatus: 'Aktif'
    },
    {
      id: 2,
      personName: "Ayşe Can",
      personAge: '25',
      experienceYear: '5',
      licanceClass: 'B',
      personStatus: 'İzinli'
    },    // Daha fazla örnek veri eklenebilir
  ];

const totalCars = personData.length;
const pageCount = Math.ceil(totalCars / pageLimit);

// Sayfalama için veriyi dilimle
const paginatedData = personData.slice(offset, offset + pageLimit);

return (
  <PageContainer>
    <div className="space-y-4">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="flex items-start justify-between">
        <Heading
          title={`Kurum Eğitmen Listesi (${totalCars})`}
          description="Kurumunuza ait eğitmenlerin listesi"
        />
        <AddPersonSheet />
      </div>
      <Separator />
      <PersonTable
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
