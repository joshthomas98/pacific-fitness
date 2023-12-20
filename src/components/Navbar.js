import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const hamburgerIcon = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="4" fill="transparent" fillOpacity="0" />
    <rect x="4" y="12" width="16" height="2" rx="1" fill="#FFFFFF" />
    <rect x="4" y="6" width="16" height="2" rx="1" fill="#FFFFFF" />
    <rect x="4" y="18" width="16" height="2" rx="1" fill="#FFFFFF" />
  </svg>
);

const NavbarComponent = () => {
  return (
    <>
      <style>
        {`
          @media (max-width: 991px) {
            .gold-text-navbar .navbar-nav {
              display: none;
            }

            .gold-text-navbar .navbar-collapse.collapse.show .navbar-nav {
              display: flex;
            }

            .gold-text-navbar .navbar-toggler {
              background-color: transparent;
              border-color: transparent;
            }
          }
        `}
      </style>
      <Navbar className="gold-text-navbar" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="../../images/pacific_logo.png"
              className="d-inline-block align-top mb-5 mt-3"
              alt="Pacific Supergym Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav">
            {hamburgerIcon}
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                style={{ fontSize: "22px", color: "#eccf42" }}
              >
                Home
              </Nav.Link>

              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  style={{ fontSize: "22px", color: "#eccf42" }}
                >
                  The Gym
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/strengthroom">
                    Strength Room
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/legroom">
                    Leg Room
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/cardioandabsroom">
                    Cardio and Abs Room
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/chestandbackroom">
                    Chest and Back Room
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/shouldersandarmsroom">
                    Shoulders and Arms Room
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/hiitroom">
                    HIIT Room
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/boxingandbikesroom">
                    Boxing And Bikes Room
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link
                as={Link}
                to="/theteam"
                style={{ fontSize: "22px", color: "#eccf42" }}
              >
                The Team
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/newsandevents"
                style={{ fontSize: "22px", color: "#eccf42" }}
              >
                News
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/contact"
                style={{ fontSize: "22px", color: "#eccf42" }}
              >
                Contact
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/membership"
                style={{ fontSize: "22px", color: "#eccf42" }}
              >
                Membership
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
