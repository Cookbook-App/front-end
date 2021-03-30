
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function HeaderNav(props) {
    const [collapsed, setCollapsed] = useState(true)

    const toggleNavbar = () => setCollapsed(!collapsed);


    return (
        <div>
                 <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">My Secret Cookbook</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/dashboard">Create Recipe</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">My Recipes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        </div>
    )
}
