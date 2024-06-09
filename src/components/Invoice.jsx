import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { CartContext } from '../context/CartContext';

const Invoice = () => {
    const { cart, clearCart } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Resumen de pago</h1>
            <ListGroup>
                {cart.map((item) => (
                    <ListGroupItem key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.quantity} x ${item.price} = ${item.quantity * item.price}</p>
                    </ListGroupItem>
                ))}
            </ListGroup>
            <h2>Total: ${total}</h2>
            <Button color="primary" onClick={clearCart}>
                Finalizar compra
            </Button>
            <div className="d-flex justify-content-center" style={{ marginTop: '20px' }}>
                <Link to="/tienda-online">
                    <Button color="primary">
                        Regresa a inicio
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Invoice;
