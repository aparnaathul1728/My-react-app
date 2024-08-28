import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <UserContext.Provider value={{ users, setUsers, pageSize, setPageSize, searchTerm, setSearchTerm, currentPage, setCurrentPage }}>
      {children}
    </UserContext.Provider>
  );
};
