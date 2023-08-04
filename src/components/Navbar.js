import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";

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
            <Nav.Link
              className="text-light"
              style={{ fontSize: "20px" }}
              href="/"
            >
              Home
            </Nav.Link>

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                className="text-light"
                style={{ fontSize: "20px" }}
              >
                The Gym
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/strengthroom">
                  Strength Room
                </Dropdown.Item>
                <Dropdown.Item href="/legroom">Leg Room</Dropdown.Item>
                <Dropdown.Item href="/cardioandabsroom">
                  Cardio and Abs Room
                </Dropdown.Item>
                <Dropdown.Item href="/chestandbackroom">
                  Chest and Back Room
                </Dropdown.Item>
                <Dropdown.Item href="/shouldersandarmsroom">
                  Shoulders and Arms Room
                </Dropdown.Item>
                <Dropdown.Item href="/hiitroom">HIIT Room</Dropdown.Item>
                <Dropdown.Item href="/boxingandbikesroom">
                  Boxing And Bikes Room
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link
              className="text-light"
              style={{ fontSize: "20px" }}
              href="/theteam"
            >
              The Team
            </Nav.Link>

            <Nav.Link
              className="text-light"
              style={{ fontSize: "20px" }}
              href="/news"
            >
              News
            </Nav.Link>

            <Nav.Link
              className="text-light"
              style={{ fontSize: "20px" }}
              href="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
