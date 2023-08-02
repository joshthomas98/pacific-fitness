import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar className="text-light" expand="sm">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="../../images/pacific_logo.png"
            className="d-inline-block align-top mb-5 mt-3"
            alt="Gig Mania Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Nav className="ms-auto">
            <Nav.Link className="text-light" href="/homepage">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="/thegym">
              The Gym
            </Nav.Link>
            <Nav.Link className="text-light" href="/theteam">
              The Team
            </Nav.Link>
            <Nav.Link className="text-light" href="/classes">
              Classes
            </Nav.Link>
            <Nav.Link className="text-light" href="/news">
              News
            </Nav.Link>
            <Nav.Link className="text-light" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
