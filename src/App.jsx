import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import InvoicePage from './pages/InvoicePage';

const App = () => {
  return (
    <Routes>
      <Route path="/tienda-online" element={<Dashboard />} /> 
      <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      <Route path="/product/:id" element={<ProductPage/>} />
      <Route path="/cart" element={<CartPage></CartPage>} />
      <Route path="/invoice" element={<InvoicePage></InvoicePage>} />
    </Routes>

  );
};

export default App;
