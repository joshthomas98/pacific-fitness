import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar 
        className={`gold-text-navbar ${scrolled ? 'scrolled' : ''}`} 
        expand="lg" 
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="py-2">
            <img
              src="/images/pacific_logo.png"
              className="d-inline-block align-top"
              alt="Pacific Supergym Logo"
              width="180"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav">
            <span className="navbar-toggler-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="7" width="30" height="2" rx="1" fill="#eccf42" />
                <rect y="15" width="30" height="2" rx="1" fill="#eccf42" />
                <rect y="23" width="30" height="2" rx="1" fill="#eccf42" />
              </svg>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link"
              >
                Home
              </Nav.Link>

              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  className="nav-link d-flex align-items-center"
                >
                  The Gym
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ms-1"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#eccf42"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
                className="nav-link"
              >
                The Team
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/newsandevents"
                className="nav-link"
              >
                News
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/contact"
                className="nav-link"
              >
                Contact
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/membership"
                className="nav-link highlight"
              >
                Membership
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="navbar-spacer"></div>
    </>
  );
};

export default NavbarComponent;
