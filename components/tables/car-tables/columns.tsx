'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Car } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Car, any>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'carPlate',
    header: 'Araç Plakası'
  },
  {
    accessorKey: 'licenseClass',
    header: 'Ehliyet Sınıfı'
  },
  {
    accessorKey: 'carBrand',
    header: 'Markası'
  },
  {
    accessorKey: 'registerDate',
    header: 'Tescil Tarihi'
  },
  {
    accessorKey: 'serviceDate',
    header: 'Hizmete Giriş Tarihi'
  },
  {
    accessorKey: 'inspectionDate',
    header: 'Muayene Geçerlilik Tarihi'
  },
  {
    accessorKey: 'gear',
    header: 'Şanzıman'
  },
  {
    accessorKey: 'carStatus',
    header: 'Araç Durumu'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
