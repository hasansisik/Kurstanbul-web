'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Class } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Class, any>[] = [
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
    accessorKey: 'classType',
    header: 'Derslik Türü'
  },
  {
    accessorKey: 'className',
    header: 'Derslik Adı'
  },
  {
    accessorKey: 'roomQuata',
    header: 'Oda Kontejyanı'
  },
  {
    accessorKey: 'registerDate',
    header: 'Derslik Açılma Tarihi'
  },
  {
    accessorKey: 'classStatus',
    header: 'Kurum Onay'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
