import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const ProductItem = ({ product }) => (
    <Card>
        <CardImg top width="100%" src={product.image} alt={product.title} />
        <CardBody>
            <CardTitle tag="h5">{product.title}</CardTitle>
            <CardText>{product.description}</CardText>
            <CardText>${product.price}</CardText>
            <div className='d-flex justify-content-center'>
                <Button color="primary" tag={Link} to={`../tienda-online/product/${product.id}`}>
                    Ver detalles
                </Button>
            </div>
        </CardBody>
    </Card>
);

export default ProductItem;
