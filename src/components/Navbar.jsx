import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const MyNavbar = () => (
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/"  >
            <img width={150} src="src/assets/0117b640c950ff54c019b731bb658d92.jpg" alt="Mi logo" />
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink tag={Link} to="/cart">Cart</NavLink>
            </NavItem>
        </Nav>
    </Navbar>
);

export default MyNavbar;
