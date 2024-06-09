import React, { useContext, useState } from 'react';
import { Button, ListGroup, ListGroupItem, Input } from 'reactstrap';
import { CartContext } from '../context/CartContext';

const QuantityInput = ({ item }) => {
    const { cart, setCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(item.quantity || 1);

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

    return (
        <div>
            <label>Quantity:</label>
            <Input
                type="number"
                value={quantity}
                onChange={handleChange}
                min={1}
            />
        </div>
    );
};

const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

const Cart = () => {
    const { cart, checkout } = useContext(CartContext);

    return (
        <div >
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
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
                </ListGroup>
            )}
            <div className="d-flex justify-content-center">
                <Button color="success" onClick={checkout} >Resumen de pago</Button>
            </div>
        </div>
    );
};

export default Cart;
