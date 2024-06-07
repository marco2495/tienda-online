import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import ProductItem from './ProductItem';
import { Button, Row, Col } from 'reactstrap';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        getProducts(page).then((data) => {
            if (data && data.products) {
                setProducts((prevProducts) => [...prevProducts, ...data.products]);
                setHasMore(data.hasMore);
            } else {
                console.error('Unexpected data format from getProducts');
            }
        });
    }, [page]);

    const loadMore = () => {
        if (hasMore) {
            setPage(page + 1);
        }
    };

    return (
        <div>
            <Row>
                {products.map((product) => (
                    <Col sm="4" key={product.id}>
                        <ProductItem product={product} />
                    </Col>
                ))}
            </Row>
            {hasMore && (
                <Button color="primary" onClick={loadMore}>
                    Load More
                </Button>
            )}
        </div>
    );
};

export default ProductList;
