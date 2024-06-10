import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const Receipt = () => {
    const [purchasedItems, setPurchasedItems] = useState([]);

    useEffect(() => {
        const storedPurchasedItems = localStorage.getItem('purchasedItems');
        if (storedPurchasedItems) {
            setPurchasedItems(JSON.parse(storedPurchasedItems));
            localStorage.removeItem('purchasedItems');
        }
    }, []);

    const total = purchasedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Factura</h1>
            <ListGroup>
                {purchasedItems.map((item) => (
                    <ListGroupItem key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.quantity} x ${item.price} = ${item.quantity * item.price}</p>
                    </ListGroupItem>
                ))}
            </ListGroup>
            <h2>Total: ${total}</h2>
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

export default Receipt;
