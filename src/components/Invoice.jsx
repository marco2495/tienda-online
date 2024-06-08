import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const Invoice = ({ cart }) => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <h1>Resumen de pago</h1>
            <ListGroup>
                {cart.map((item) => (
                    <ListGroupItem key={item.id}>
                        <h2>{item.title}</h2>
                        <p>${item.price}</p>
                    </ListGroupItem>
                ))}
            </ListGroup>
            <h2>Total: ${total}</h2>
            <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-center">
                    <Link to="/tienda-online">
                        <Button color="primary">
                            Regresa a inicio
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
