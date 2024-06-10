import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

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
        navigate('/tienda-online/invoice');
    };

    const finalizePurchase = () => {
        localStorage.setItem('purchasedItems', JSON.stringify(cart));
        setCart([]);
        localStorage.removeItem('cart');
        navigate('/tienda-online/receipt');
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, checkout, finalizePurchase }}>
            {children}
        </CartContext.Provider>
    );
};
