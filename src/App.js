// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/products';
import UserPage from './pages/users';
import { UserProvider } from './context/userContext';
import { ProductProvider } from './context/productContext';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <UserProvider>
        <ProductProvider>
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </ProductProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
