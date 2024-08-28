
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, Button, TextField } from '@mui/material';

const TableComponent = ({
  data,
  columns,
  pageSize,
  setPageSize,
  searchTerm,
  setSearchTerm,
  currentPage,
  setCurrentPage,
  onFilterChange,
  uniqueIdentifier = 'id'
}) => {
  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="mx-6 font-neutra">
      <div className="mb-4">
      <div className="flex justify-end p-4">
  <a href="/" className="text-blue-500 hover:text-blue-700 flex items-center">
    <svg className="mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
    Home
  </a>
</div>
        <label className="mr-2">Page Size:</label>
        <Select value={pageSize} onChange={handlePageSizeChange}>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      
      </div>
   

      <div className="mb-4">
        <TextField 
          label="Search" 
          variant="outlined" 
          value={searchTerm}
          onChange={handleSearch}
          fullWidth
        />
      </div>

      <TableContainer component={Paper}>
        <Table className='bg-bblue'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row[uniqueIdentifier]}>
                {columns.map((column) => (
                  <TableCell key={column.field}>{row[column.field]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="mt-6 flex justify-between">
        <Button 
          variant="contained" 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>Page {currentPage}</span>
        <Button 
          variant="contained" 
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TableComponent;
