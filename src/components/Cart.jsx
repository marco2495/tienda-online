import React, { useContext, useState } from 'react';
import { Button, Input, ListGroup, ListGroupItem } from 'reactstrap';
import { CartContext } from '../context/CartContext';

// **QuantityInput Component**
const QuantityInput = ({ item }) => {
    const { cart, setCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(item.quantity || 1);

    // **Handle Quantity Change**
    const handleChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (newQuantity > 0) {
            const updatedCart = cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: newQuantity };
                }
                return cartItem;
            });
            setCart(updatedCart);
            setQuantity(newQuantity);
        }
    };

    // **Increase Quantity**
    const handleIncrease = () => {
        handleChange({ target: { value: quantity + 1 } });
    };

    // **Decrease Quantity**
    const handleDecrease = () => {
        if (quantity > 1) {
            handleChange({ target: { value: quantity - 1 } });
        }
    };

    return (
        <div className="d-flex align-items-center">
            <Button size="sm" onClick={handleDecrease}>-</Button>
            <Input
                type="number"
                value={quantity}
                onChange={handleChange}
                min={1}
                style={{ width: '100px' }}
            />
            <Button size="sm" onClick={handleIncrease}>+</Button>
        </div>
    );
};

// **Calculate Total Price**
const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

// **Cart Component**
const Cart = () => {
    const { cart, checkout } = useContext(CartContext);

    return (
        <div>
            {cart.length === 0 ? (
                <p className="h1 text-center">Tu carrito está vacío</p>
            ) : (
                <ListGroup>
                    {cart.map((item) => (
                        <ListGroupItem key={item.id}>
                            <h2>{item.title}</h2>
                            <p>${item.price}</p>
                            <QuantityInput item={item} />
                        </ListGroupItem>
                    ))}
                    <ListGroupItem>
                        <p>Total: ${calculateTotalPrice(cart)}</p>
                    </ListGroupItem>
                    <div className="d-flex justify-content-center">
                        <Button color="success" onClick={checkout}>
                            Resumen de pago
                        </Button>
                    </div>
                </ListGroup>
            )}
        </div>
    );
};

export default Cart;
