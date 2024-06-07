import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const Invoice = ({ cart }) => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <h1>Invoice</h1>
            <ListGroup>
                {cart.map((item) => (
                    <ListGroupItem key={item.id}>
                        <h2>{item.title}</h2>
                        <p>${item.price}</p>
                    </ListGroupItem>
                ))}
            </ListGroup>
            <h2>Total: ${total}</h2>
            <Button color="primary" as={Link} to="/dashboard">
                Back to Dashboard
            </Button>
        </div>
    );
};

export default Invoice;
