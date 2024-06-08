import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const MyNavbar = () => (
    <Navbar color="dark" light expand="md">
        <NavbarBrand href="/tienda-online" >
            <img width={70} style={{borderRadius:"50%"}} src="/tienda-online/src/assets/icono.png" alt="Mi logo" />
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink tag={Link} to="../tienda-online/cart"  style={{ fontSize: '30px', color: 'white' }} >Carrito</NavLink>
            </NavItem>
        </Nav>
    </Navbar>
);

export default MyNavbar;
