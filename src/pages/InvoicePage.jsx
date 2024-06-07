import React, { useContext } from 'react';
import Invoice from '../components/Invoice';
import { CartContext } from '../context/CartContext';
import MyNavbar from '../components/Navbar';
const InvoicePage = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <MyNavbar />
      <Invoice cart={cart} />;
    </>
  );
};

export default InvoicePage;