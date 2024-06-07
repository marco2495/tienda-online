import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container); // Create root using the new API

root.render(
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>
);
