/**
 * Build a data table using Material-UI's Table component. 
 * Populate the table with sample data and add 
 * features like sorting and pagination
 */

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'abc', firstName: 'def', age: 35 },
  { id: 2, lastName: 'ghi', firstName: 'jkl', age: 42 },
  { id: 3, lastName: 'mno', firstName: 'pqr', age: 45 },
  { id: 4, lastName: 'stu', firstName: 'vwx', age: 16 },
  { id: 5, lastName: 'yza', firstName: 'bcd', age: null },
  { id: 6, lastName: 'efg', firstName: "hij", age: 150 },
  { id: 7, lastName: 'klm', firstName: 'nop', age: 44 },
  { id: 8, lastName: 'qrs', firstName: 'tuv', age: 36 },
  { id: 9, lastName: 'Wxy', firstName: 'zx', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}