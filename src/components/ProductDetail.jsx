import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import { getProductById } from '../api';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart, checkout, cart } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [message, setMessage] = useState('');
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        getProductById(Number(id)).then(setProduct);
    }, [id]);

    useEffect(() => {
        if (product) {
            const existingProduct = cart.find((item) => item.id === product.id);
            setProductCount(existingProduct ? existingProduct.quantity : 0);
        }
    }, [cart, product]);

    const handleAddToCart = (product) => {
        addToCart(product);
        setMessage('Agregado correctamente');
        setTimeout(() => setMessage(''), 3000);
    };

    if (!product) return <p>No existe el producto</p>;

    return (
        <Container>
            <Row>
                <Col sm="6">
                    <img src={product.image} alt={product.title} className="img-fluid w-100" />
                </Col>
                <Col sm="6">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <Button color="primary" onClick={() => handleAddToCart(product)}>Agregar al carrito</Button>
                    {message && (
                        <div style={{ marginTop: '10px', backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>
                            {message}
                        </div>
                    )}
                    <div style={{ marginTop: '10px' }}>
                        Cantidad en el carrito: {productCount}
                    </div>
                    <Button color="success" onClick={checkout}>Pagar</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
