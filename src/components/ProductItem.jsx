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
            <Button color="primary" tag={Link} to={`/product/${product.id}`}>
                Ver detalles
            </Button>
        </CardBody>
    </Card>
);

export default ProductItem;