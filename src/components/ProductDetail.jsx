import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import { getProductById } from '../api';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
    const {id}  = useParams();  // Use useParams to extract the id parameter
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    useEffect(() => {
        getProductById(Number(id)).then(setProduct);  // Fetch product data by id
    }, [id]);

    if (!product) return <p>No existe el producto</p>;

    return (
        <Container>
            <Row>
                <Col sm="6">
                    <img src={product.image} alt={product.title} className="img-fluid" />
                </Col>
                <Col sm="6">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <Button color="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
