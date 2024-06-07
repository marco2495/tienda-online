import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const MyNavbar = () => (
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Online Store</NavbarBrand>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink tag={Link} to="/cart">Cart</NavLink>
            </NavItem>
        </Nav>
    </Navbar>
);

export default MyNavbar;
