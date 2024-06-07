import React from 'react';
import MyNavbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import { Container } from 'reactstrap';

const Dashboard = () => (
    <div>
        <MyNavbar />
        <div className="py-5 bg-light text-center">
            <Container>
                <h1 className="display-3">Tienda Online</h1>
                <p className="lead"></p>
            </Container>
        </div>
        <Container>
            <ProductList />
        </Container>
    </div>
);

export default Dashboard;