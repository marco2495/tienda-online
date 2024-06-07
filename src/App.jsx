import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import InvoicePage from './pages/InvoicePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />  {/* Update with element prop */}
      <Route path="/dashboard" element={<Dashboard></Dashboard>} />  {/* This is okay for older routes */}
      <Route path="/product/:id" element={<ProductPage/>} />
      <Route path="/cart" element={<CartPage></CartPage>} />
      <Route path="/invoice" element={<InvoicePage></InvoicePage>} />
    </Routes>

  );
};

export default App;
