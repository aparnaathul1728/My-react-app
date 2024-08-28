import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { ProductContext } from '../context/productContext';
import TableComponent from '../components/tableComponent';

const ProductPage = () => {
  const { products, setProducts, pageSize, setPageSize, searchTerm, setSearchTerm, currentPage, setCurrentPage } = useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products`, {
          params: {
            limit: pageSize,
            skip: (currentPage - 1) * pageSize,
          },
        });
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [pageSize, currentPage, setProducts]);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title' },
    { field: 'brand', headerName: 'Brand' },
    { field: 'category', headerName: 'Category' },
    { field: 'price', headerName: 'Price' },
    { field: 'description', headerName: 'Description' },
  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4  mt-10">Products</h1>
      <TableComponent
        data={filteredProducts}
        columns={columns}
        pageSize={pageSize}
        setPageSize={setPageSize}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductPage;
