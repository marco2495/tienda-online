import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import InvoicePage from './pages/InvoicePage';
import Receipt from './components/Receipt';
const App = () => {
  return (
    <Routes>
      <Route path="/tienda-online" element={<Dashboard />} /> 
      <Route path="tienda-online/dashboard" element={<Dashboard></Dashboard>} />
      <Route path="tienda-online/product/:id" element={<ProductPage/>} />
      <Route path="tienda-online/cart" element={<CartPage></CartPage>} />
      <Route path="tienda-online/invoice" element={<InvoicePage></InvoicePage>} />
      <Route path="/tienda-online/receipt" element={<Receipt />} />
    </Routes>

  );
};

export default App;
