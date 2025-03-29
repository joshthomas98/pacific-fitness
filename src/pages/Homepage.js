import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import Carousel from "../components/Carousel";
import Testimonials from "../components/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDumbbell, 
  faHandshake, 
  faArrowRight, 
  faCalendar, 
  faUsers,
  faStar 
} from "@fortawesome/free-solid-svg-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
  };

  const navigateToMembership = () => {
    navigate("/membership");
  };

  return (
    <div className="homepage">
      {/* Hero Carousel section */}
      <section className="hero-section">
        <Carousel />
      </section>

      {/* Features section */}
      <section className="features-section py-5">
        <Container>
          <div className="section-header text-center mb-5 fade-in">
            <h2 className="display-5 mb-3">Why Choose Pacific Supergym?</h2>
            <p className="lead text-light mb-0">Experience fitness excellence at South Wales' premier gym</p>
          </div>
          
          <Row className="text-center g-4">
            <Col md={4} className="mb-4 slide-up" style={{animationDelay: '0.1s'}}>
              <Card className="feature-card h-100">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon mb-4">
                    <FontAwesomeIcon
                      icon={faDumbbell}
                      size="2x"
                      style={{ color: "#eccf42" }}
                    />
                  </div>
                  <h3 className="card-title mb-3">Quality Equipment</h3>
                  <p className="card-text">
                    State-of-the-art equipment carefully selected to enhance your workout experience and maximize results.
                  </p>
                  <Link to="/strengthroom" className="stretched-link mt-3">
                    <span className="text-eccf42">Explore our equipment</span>
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4 slide-up" style={{animationDelay: '0.2s'}}>
              <Card className="feature-card h-100">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon mb-4">
                    <FontAwesomeIcon
                      icon={faHandshake}
                      size="2x"
                      style={{ color: "#eccf42" }}
                    />
                  </div>
                  <h3 className="card-title mb-3">Motivation & Support</h3>
                  <p className="card-text">
                    Our supportive team of trainers and staff will keep you inspired and motivated throughout your fitness journey.
                  </p>
                  <Link to="/theteam" className="stretched-link mt-3">
                    <span className="text-eccf42">Meet our team</span>
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4 slide-up" style={{animationDelay: '0.3s'}}>
              <Card className="feature-card h-100">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon mb-4">
                    <GiWeightLiftingUp size="2em" style={{ color: "#eccf42" }} />
                  </div>
                  <h3 className="card-title mb-3">Achieve Your Goals</h3>
                  <p className="card-text">
                    Turn your fitness aspirations into achievements in our motivating environment designed for your success.
                  </p>
                  <Link to="/membership" className="stretched-link mt-3">
                    <span className="text-eccf42">Start your journey</span>
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Video tour section */}
      <section className="video-tour-section py-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0 fade-in">
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="550"
                  src="https://www.youtube.com/embed/6x-jAOL-DV8"
                  title="Pacific Supergym Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="video-frame"
                ></iframe>
              </div>
            </Col>
            <Col lg={6} className="ps-lg-5 slide-up">
              <div className="content-wrapper text-light">
                <h2 className="section-title mb-4">Tour Our Facility</h2>
                <p className="lead mb-4">
                  Take a virtual tour of Pacific Supergym with our owner, Ali, as
                  he guides you through each of our state-of-the-art specialised training rooms.
                </p>
                <ul className="facility-list mb-4">
                  <li>
                    <FontAwesomeIcon icon={faStar} className="me-3 text-eccf42" />
                    Strength Room with premium equipment
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStar} className="me-3 text-eccf42" />
                    Dedicated Leg, Chest & Back, and Shoulders & Arms Rooms
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStar} className="me-3 text-eccf42" />
                    Cardio and Abs Room for complete workouts
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStar} className="me-3 text-eccf42" />
                    High-intensity HIIT and Boxing & Bikes Rooms
                  </li>
                </ul>
                <p className="mb-4">
                  Want to see more? Follow us on our social channels for regular updates and workout inspiration:
                </p>
                <div className="d-flex mb-4">
                  <SocialMediaIcons size="1.5rem" />
                </div>
                <Link to="/contact" className="btn btn-primary mt-2">
                  Schedule an In-Person Tour
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Membership CTA section */}
      <section className="membership-cta-section py-5 text-light">
        <Container>
          <div className="cta-wrapper slide-up">
            <Row className="align-items-center">
              <Col lg={3} md={4} className="text-center text-md-start mb-4 mb-md-0">
                <img
                  src="../../images/pacific_logo.png"
                  alt="Pacific Supergym Logo"
                  className="cta-logo"
                />
              </Col>
              <Col lg={6} md={8} className="text-center text-lg-start">
                <h2 className="mb-3">Join Pacific Supergym Today</h2>
                <p className="lead mb-4">Premium membership for only £50.00 per month</p>
                <ul className="cta-features">
                  <li>
                    <FontAwesomeIcon icon={faUsers} className="me-2 text-eccf42" />
                    Access to all specialised training rooms
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCalendar} className="me-2 text-eccf42" />
                    Monthly member events and challenges
                  </li>
                </ul>
              </Col>
              <Col lg={3} className="text-center mt-4 mt-lg-0">
                <div className="cta-buttons">
                  <Button
                    onClick={navigateToMembership}
                    className="btn btn-primary btn-lg mb-3 w-100"
                  >
                    Learn More
                  </Button>
                  <Button
                    onClick={navigateToContact}
                    className="btn btn-secondary btn-lg w-100"
                  >
                    Contact Us
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Testimonials section */}
      <section className="testimonials-section py-5">
        <Container>
          <div className="section-header text-center mb-5 fade-in">
            <h2 className="display-5 mb-3">What Our Members Say</h2>
            <p className="lead text--light mb-0">Hear from the people who train with us</p>
          </div>
          <Testimonials />
        </Container>
      </section>
      
      {/* Gallery preview section */}
      <section className="gallery-preview-section py-5">
        <Container>
          <div className="section-header text-center mb-5 fade-in">
            <h2 className="display-5 mb-3">Explore Our Facilities</h2>
            <p className="lead text-white-50 mb-0">Take a peek at our specialized training areas</p>
          </div>
          
          <Row className="gallery-grid g-4">
            <Col md={4} sm={6} className="gallery-item slide-up" style={{animationDelay: '0.1s'}}>
              <Link to="/strengthroom" className="gallery-link">
                <div className="gallery-image">
                  <img src="../../images/strength-room/DSC08823.jpg" alt="Strength Room" className="img-fluid" />
                  <div className="gallery-overlay">
                    <h4>Strength Room</h4>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={4} sm={6} className="gallery-item slide-up" style={{animationDelay: '0.2s'}}>
              <Link to="/legroom" className="gallery-link">
                <div className="gallery-image">
                  <img src="../../images/leg-room/DSC08862.jpg" alt="Leg Room" className="img-fluid" />
                  <div className="gallery-overlay">
                    <h4>Leg Room</h4>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={4} sm={6} className="gallery-item slide-up" style={{animationDelay: '0.3s'}}>
              <Link to="/cardioandabsroom" className="gallery-link">
                <div className="gallery-image">
                  <img src="../../images/cardio-and-abs-room/DSC08815.jpg" alt="Cardio and Abs Room" className="img-fluid" />
                  <div className="gallery-overlay">
                    <h4>Cardio & Abs Room</h4>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
          
          <div className="text-center mt-5">
            <Link to="/strengthroom" className="btn btn-primary">View All Facilities</Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
