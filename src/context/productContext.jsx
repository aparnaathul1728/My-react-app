import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ProductContext.Provider value={{ products, setProducts, pageSize, setPageSize, searchTerm, setSearchTerm, currentPage, setCurrentPage }}>
      {children}
    </ProductContext.Provider>
  );
};
