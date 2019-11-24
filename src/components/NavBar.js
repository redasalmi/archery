import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <div>
      <Navbar dark color="dark" className="bg-primary p-0 m-0" expand="md">
        <div className="container">
          <NavbarBrand href="/" className="p-0 ml-2">
            <img src="/src/img/logo/target.png" alt="archery target" />
            <p className="navbrand-title">Archery</p>
          </NavbarBrand>
          <NavbarToggler
            onClick={() => setNavIsOpen(!navIsOpen)}
            className="mr-2"
          />
          <Collapse isOpen={navIsOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="nav-link-active"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="nav-link-active"
                  to="/articles"
                >
                  Articles
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="nav-link-active"
                  to="/videos"
                >
                  Videos
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
