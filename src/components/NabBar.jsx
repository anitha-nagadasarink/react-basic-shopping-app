import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar color="dark" className="navbar-dark p-4https://fakestoreapi.com/products" light expand="md">
      <NavbarBrand href="/">ShopToday</NavbarBrand>


      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/components/">Electronic Gadgets</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>

    </Navbar>
  )
};


export default NavBar;