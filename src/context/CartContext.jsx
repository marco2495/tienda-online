import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const checkout = () => {
        setCart([]); // Clear cart after checkout
        navigate('tienda-online/invoice'); // Navigate to invoice page
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, checkout }}>
            {children}
        </CartContext.Provider>
    );
};
