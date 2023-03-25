import React, { useMemo } from 'react';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import { Box, Typography } from '@mui/material';

type Fruit = {
  id: number;
  fruit: string | null | undefined;
};

const happyData: Fruit[] = [
  { id: 12, fruit: "Poire" },
  { id: 13, fruit: "Banane" },
  { id: 23, fruit: "Oirange" },
];

const leadNullData: Fruit[] = [
  { id: 40, fruit: null },
  { id: 12, fruit: "Poire" },
  { id: 13, fruit: "Banane" },
  { id: 23, fruit: "Oirange" },
];

const trailNullData: Fruit[] = [
  { id: 12, fruit: "Poire" },
  { id: 13, fruit: "Banane" },
  { id: 23, fruit: "Oirange" },
  { id: 44, fruit: null },
];

const leadUndefinedData: Fruit[] = [
  { id: 40, fruit: undefined },
  { id: 12, fruit: "Poire" },
  { id: 13, fruit: "Banane" },
  { id: 23, fruit: "Oirange" },
];

const trailUndefinedData: Fruit[] = [
  { id: 12, fruit: "Poire" },
  { id: 13, fruit: "Banane" },
  { id: 23, fruit: "Oirange" },
  { id: 44, fruit: undefined },
];

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<Fruit>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
      },
      {
        accessorKey: 'fruit',
        header: 'Fruit',
      }
    ],
    [],
  );

  return <>
    <Box sx={{pb: 2}}>
      <Typography variant="subtitle1">Sample with no null values:</Typography>
      <MaterialReactTable columns={columns} data={happyData} />
    </Box>
    <Box sx={{pb: 2}}>
      <Typography variant="subtitle1">Sample with leading null values:</Typography>
      <MaterialReactTable columns={columns} data={leadNullData} />
    </Box>
    <Box sx={{pb: 2}}>
      <Typography variant="subtitle1">Sample with leading null values sorted by ascending IDs:</Typography>
      <MaterialReactTable columns={columns} data={leadNullData.sort((a, b) => a.id > b.id ? 1 : a.id === b.id ? 0 : -1)} />
    </Box>
    <Box sx={{pb: 2}}>
      <Typography variant="subtitle1">Sample with trailling null values:</Typography>
      <MaterialReactTable columns={columns} data={trailUndefinedData} />
    </Box>
    <Box sx={{pb: 2}}>
      <Typography variant="subtitle1">Sample with leading undefined values:</Typography>
      <MaterialReactTable columns={columns} data={leadNullData} />
    </Box>
    <Box sx={{pb: 2}}>
      <Typography variant="subtitle1">Sample with leading undefined values sorted by ascending IDs:</Typography>
      <MaterialReactTable columns={columns} data={leadNullData.sort((a, b) => a.id > b.id ? 1 : a.id === b.id ? 0 : -1)} />
    </Box>
    <Box sx={{pb: 2}}>
      <Typography variant="subtitle1">Sample with trailling undefined values:</Typography>
      <MaterialReactTable columns={columns} data={trailUndefinedData} />
    </Box>
  </>
};

export default Example;
