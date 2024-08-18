import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_ExpandAllButton,
} from "material-react-table";

import { Box, Stack } from "@mui/material";

const data = [
  {
    maceta: 6,
    descripcion: "",
    edad: "6/12 meses",
    gender: "Tipica",
    state: "Venus",
    tipo: "Clasica",
    precio: 31404,
  },
  {
    maceta: 8,
    descripcion: "",
    edad: "6/12 meses",
    gender: "Tipica",
    state: "Venus",
    tipo: "Clasica",
    precio: 45801,
  },
  {
    maceta: 10,
    descripcion: "Color Rojo",
    edad: "6/12 meses",
    gender: "Cultivar",
    state: "Venus",
    tipo: "SawTooth",
    precio: 54027,
  },
  {
    maceta: 6,
    descripcion: "Color Rojo Pablo",
    edad: "6/12 meses",
    gender: "Cultivar",
    state: "Sarracenia",
    tipo: "Red Fire",
    precio: 60975,
  },
  {
    maceta: 10,
    descripcion: "Color Rojo Pablo",
    edad: "6/12 meses",
    gender: "Cultivar",
    state: "Sarracenia",
    tipo: "Red Fire",
    precio: 60975,
  },
  {
    maceta: 8,
    descripcion: "Color Rojo Pablo",
    edad: "6/12 meses",
    gender: "Cultivar",
    state: "Sarracenia",
    tipo: "Red Fire",
    precio: 27067,
  },
  {
    maceta: 6,
    descripcion: "",
    edad: "6/12 meses",
    gender: "Sin id",
    state: "Sarracenia",
    tipo: "Clasica",
    precio: 48423,
  },
  {
    maceta: 6,
    descripcion: "var. minor",
    edad: "6/12 meses",
    gender: "Pura",
    state: "Sarracenia",
    tipo: "Minor",
    precio: 36713,
  },
  {
    maceta: 6,
    descripcion: "var. atropurpurea",
    edad: "6/12 meses",
    gender: "Pura",
    state: "Sarracenia",
    tipo: "Purpurea",
    precio: 36713,
  },
  {
    maceta: 8,
    descripcion: "var. purpurea",
    edad: "6/12 meses",
    gender: "Pura",
    state: "Sarracenia",
    tipo: "Purpurea",
    precio: 36713,
  },
  {
    maceta: 8,
    descripcion: "var. minor",
    edad: "6/12 meses",
    gender: "Pura",
    state: "Sarracenia",
    tipo: "Minor",
    precio: 77658,
  },
  {
    maceta: 6,
    descripcion: "Color Rojo Pablo",
    edad: "6/12 meses",
    gender: "Cultivar",
    state: "Venus",
    tipo: "SawTooth",
    precio: 57634,
  },
  {
    maceta: 8,
    descripcion: "Color Rojo Pablo",
    edad: "6/12 meses",
    gender: "Cultivar",
    state: "Venus",
    tipo: "SawTooth",
    precio: 95427,
  },
  {
    maceta: 14,
    descripcion: "",
    edad: "6/12 meses",
    gender: "Tipica",
    state: "Venus",
    tipo: "Clasica",
    precio: 14272,
  },
  {
    maceta: 12,
    descripcion: "Color Rojo Pablo",
    edad: "6/12 meses",
    gender: "Cultivar",
    state: "Venus",
    tipo: "SawTooth",
    precio: 96293,
  },
  {
    maceta: 6,
    descripcion: "Color Verde",
    edad: "6/12 meses",
    gender: "Cultivar",
    state: "Venus",
    tipo: "Bristle",
    precio: 96293,
  },
];
const Example = () => {
  const columns = useMemo(
    () => [
      {
        header: "Tipo",
        accessorKey: "tipo",
      },
      {
        header: "Maceta N°",
        accessorKey: "maceta",
      },
      {
        header: "Descripcion",
        accessorKey: "descripcion",
      },
      {
        header: "Edad",
        accessorKey: "edad",
      },
      {
        header: "Gender",
        accessorKey: "gender",
      },
      {
        header: "Especie",
        accessorKey: "state",
      },
      {
        header: "Precio en pesos",
        accessorKey: "precio",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    displayColumnDefOptions: {
      "mrt-row-expand": {
        Header: () => (
          <Stack direction="row" alignItems="center">
            <MRT_ExpandAllButton table={table} />
            <Box>Grupos</Box>
          </Stack>
        ),
        GroupedCell: ({ row, table }) => {
          const { grouping } = table.getState();
          return row.getValue(grouping[grouping.length - 1]);
        },
        enableResizing: false,
        muiTableBodyCellProps: ({ row }) => ({
          sx: (theme) => ({
            color:
              row.depth === 0
                ? theme.palette.primary.main
                : row.depth === 1
                ? theme.palette.secondary.main
                : undefined,
          }),
        }),
        size: 200,
      },
    },
    muiTableBodyCellProps: ({ column }) => {
      return {
        sx: (theme) => ({
          borderBottom: `1px solid ${theme.palette.divider}`,
          border: `0.5px solid #00000010`,
        }),
      };
    },
    renderToolbarAlertBannerContent: () => {
      return <div className="hidden"></div>;
    },
    renderTopToolbarCustomActions: () => null,
    enableRowDragging: false,
    enableColumnDragging: false,
    enableDensityToggle: false,

    enableColumnActions: false,
    enableGrouping: true,
    enableColumnResizing: false,
    enableColumnFilters: false,
    groupedColumnMode: "remove",
    initialState: {
      showGlobalFilter: false,
      density: "compact",
      expanded: false, //expand all groups by default
      grouping: ["state", "gender", "tipo"], //an array of columns to group by by default (can be multiple)
      pagination: { pageIndex: 0, pageSize: 50 },
      sorting: [{ id: "maceta", desc: false }],
    },
    // dejo vacio para que no se muestre el texto: ordenado por ...
    // localization: {
    //   sortBy: "",
    // },
  });

  return (
    <div className="mt-8 px-4 min-h-screen">
      <MaterialReactTable table={table} />
    </div>
  );
};

export default Example;
