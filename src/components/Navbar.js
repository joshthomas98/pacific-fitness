import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";

const hamburgerIcon = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="4" fill="transparent" fillOpacity="0" />
    <rect
      x="4"
      y="12"
      width="16"
      height="2"
      rx="1"
      fill="#FFFFFF" // White color for the bars
    />
    <rect
      x="4"
      y="6"
      width="16"
      height="2"
      rx="1"
      fill="#FFFFFF" // White color for the bars
    />
    <rect
      x="4"
      y="18"
      width="16"
      height="2"
      rx="1"
      fill="#FFFFFF" // White color for the bars
    />
  </svg>
);

const NavbarComponent = () => {
  return (
    <>
      <style>
        {`
          /* Custom CSS for medium screens and below (<= 991px) */
          @media (max-width: 991px) {
            .gold-text-navbar .navbar-nav {
              display: none; /* Hide the nav links */
            }

            .gold-text-navbar .navbar-collapse.collapse.show .navbar-nav {
              display: flex; /* Show the nav links when the hamburger menu is open */
            }

            /* Change the color of the hamburger icon to transparent */
            .gold-text-navbar .navbar-toggler {
              background-color: transparent;
              border-color: transparent;
            }
          }
        `}
      </style>
      <Navbar className="gold-text-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="/">
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
              <Nav.Link style={{ fontSize: "22px", color: "#eccf42" }} href="/">
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
                style={{ fontSize: "22px", color: "#eccf42" }}
                href="/theteam"
              >
                The Team
              </Nav.Link>

              <Nav.Link
                style={{ fontSize: "22px", color: "#eccf42" }}
                href="/newsandevents"
              >
                News
              </Nav.Link>

              <Nav.Link
                style={{ fontSize: "22px", color: "#eccf42" }}
                href="/contact"
              >
                Contact
              </Nav.Link>

              <Nav.Link
                style={{ fontSize: "22px", color: "#eccf42" }}
                href="/membership"
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
