import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

//flat data that TanStack Table's getSubRows() function will parse into a tree
export const data = [
  {
    id: "9s41rp",
    firstName: "Kelvin",
    lastName: "Langosh",
    email: "Jerod14@hotmail.com",
    state: "Ohio",
    managerId: "08m6rx",
  },
  {
    id: "08m6rx",
    firstName: "Molly",
    lastName: "Purdy",
    email: "Hugh.Dach79@hotmail.com",
    state: "Rhode Island",
    managerId: "5ymtrc",
  },
  {
    id: "5ymtrc",
    firstName: "Henry",
    lastName: "Lynch",
    email: "Camden.Macejkovic@yahoo.com",
    state: "California",
    managerId: null, //top of a tree
  },
  {
    id: "ek5b97",
    firstName: "Glenda",
    lastName: "Douglas",
    email: "Eric0@yahoo.com",
    state: "Montana",
    managerId: "08m6rx",
  },
  {
    id: "xxtydd",
    firstName: "Leone",
    lastName: "Williamson",
    email: "Ericka_Mueller52@yahoo.com",
    state: "Colorado",
    managerId: "08m6rx",
  },
  {
    id: "wzxj9m",
    firstName: "Mckenna",
    lastName: "Friesen",
    email: "Veda_Feeney@yahoo.com",
    state: "New York",
    managerId: null, //top of a tree
  },
  {
    id: "21dwtz",
    firstName: "Wyman",
    lastName: "Jast",
    email: "Melvin.Pacocha@yahoo.com",
    state: "Montana",
    managerId: "wzxj9m",
  },
  {
    id: "o8oe4k",
    firstName: "Janick",
    lastName: "Willms",
    email: "Delfina12@gmail.com",
    state: "Nebraska",
    managerId: "wzxj9m",
  },
];

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
    ],
    []
  );

  //only root rows with no managerId
  const rootData = useMemo(() => data.filter((r) => !r.managerId), [data]);

  const table = useMaterialReactTable({
    columns,
    data: rootData,
    enableExpanding: true,
    //note: performance of this example should be improved with hash maps. This is currently 0(n^2)
    getSubRows: (row) => data.filter((r) => r.managerId === row.id),
    filterFromLeafRows: false,
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
