import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCheck, 
  faDumbbell, 
  faClock, 
  faUsers, 
  faPersonRunning 
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Membership() {
  return (
    <div className="membership-page fade-in pt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-3" style={{ color: "#eccf42" }}>Membership</h1>
        <p className="lead mb-0">Join our fitness community and transform your life</p>
      </div>

      <div className="membership-hero p-4 mb-5 rounded text-center text-light">
        <h2 className="mb-4">Limited Time Offer!</h2>
        <p className="lead mb-4">Sign up now and get your first month at 50% off</p>
        <Link to="/contact">
          <Button className="btn-primary btn-lg">Join Today</Button>
        </Link>
      </div>

      <Row className="gx-5 gy-4 text-light">
        <Col lg={6} className="slide-up">
          <div className="membership-benefits p-4 rounded d-flex flex-column h-100">
            <h2 className="mb-4">
              <FontAwesomeIcon icon={faDumbbell} className="me-3" style={{ color: "#eccf42" }} />
              Why Become a Pacific Member?
            </h2>

            <ul className="feature-list mb-0 d-flex flex-column justify-content-between" style={{ flex: "1 0 auto" }}>
              <li className="mb-3 d-flex">
                <div style={{ minWidth: "240px" }}>
                  <FontAwesomeIcon icon={faCheck} className="me-2" />
                  <span className="fw-bold">State-of-the-Art Equipment:</span>
                </div>
                <div>
                  Access to modern gym equipment that supports your fitness
                  journey effectively.
                </div>
              </li>
              <li className="mb-3 d-flex">
                <div style={{ minWidth: "240px" }}>
                  <FontAwesomeIcon icon={faCheck} className="me-2" />
                  <span className="fw-bold">Exclusive Member <br />Events:</span>
                </div>
                <div>
                  Participate in member-only events, challenges, and competitions
                  that foster a sense of community.
                </div>
              </li>
              <li className="mb-3 d-flex">
                <div style={{ minWidth: "240px" }}>
                  <FontAwesomeIcon icon={faCheck} className="me-2" />
                  <span className="fw-bold">Personal Training <br />Sessions:</span>
                </div>
                <div>
                  Individualised one-on-one training sessions with our resident
                  PT's to target your fitness goals.
                </div>
              </li>
              <li className="d-flex">
                <div style={{ minWidth: "240px" }}>
                  <FontAwesomeIcon icon={faCheck} className="me-2" />
                  <span className="fw-bold">Member's Bring-a-Friend Sunday:</span>
                </div>
                <div>
                  On the last Sunday of every month, you can bring 1 guest to the
                  gym for free, so they can experience our facilities firsthand.
                </div>
              </li>
            </ul>

            <h2 className="mt-5 mb-4">
              <FontAwesomeIcon icon={faUsers} className="me-3" style={{ color: "#eccf42" }} />
              Included in Your Membership:
            </h2>

            <ul className="feature-list mb-0 d-flex flex-column justify-content-between" style={{ flex: "1 0 auto" }}>
              <li className="mb-3">
                <FontAwesomeIcon icon={faCheck} className="me-2" />
                Full access to gym, classes, and bathroom facilities 24/7.
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faCheck} className="me-2" />
                Limited membership slots for the best member experience and to
                avoid overcrowding.
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faCheck} className="me-2" />
                Access to the latest state-of-the-art equipment for optimal
                workouts.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="me-2" />
                Diverse selection of fitness classes, including spin classes,
                HIIT, weightlifting technique classes, and more, led by
                certified instructors.
              </li>
            </ul>
          </div>
        </Col>

        <Col lg={6} className="slide-up">
          <div className="membership-plans">
            <div className="premium-plan p-4 rounded mb-4 position-relative overflow-hidden">
              <div className="plan-badge" style={{
                position: "absolute",
                top: "25px",
                right: "-35px",
                background: "#eccf42",
                color: "#333",
                padding: "10px 30px",
                fontWeight: "bold",
                transform: "rotate(45deg)",
                transformOrigin: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                zIndex: "1"
              }}>Most Popular</div>
              <div className="text-center mb-4">
                <img 
                  src="../../images/pacific_logo.png" 
                  alt="Pacific Fitness Logo" 
                  className="plan-logo mb-3"
                />
                <h3>Premium Membership</h3>
                <div className="price">
                  <span style={{ fontSize: "20px" }}>£50</span>
                  <small>/month</small>
                </div>
                <p className="text-white-50">Full access to all facilities and classes</p>
              </div>

              <hr className="my-4" />

              <ul className="plan-benefits">
                <li>
                  <FontAwesomeIcon icon={faCheck} className="me-2" />
                  24/7 Gym Access
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="me-2" />
                  All Training Rooms
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="me-2" />
                  Unlimited Fitness Classes
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="me-2" />
                  Free Parking
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="me-2" />
                  Bring-a-Friend Sundays
                </li>
              </ul>

              <div className="text-center mt-4">
                <Link to="/contact">
                  <Button className="btn-primary btn-lg w-100">Sign Up Now</Button>
                </Link>
                <div className="mt-3">
                  <Link to="/contact" className="text-eccf42 text-decoration-none">
                    Contact us for more information
                  </Link>
                </div>
              </div>
            </div>

            <div className="membership-info p-4 rounded">
              <h4>
                <FontAwesomeIcon icon={faClock} className="me-2" style={{ color: "#eccf42" }} />
                Opening Hours
              </h4>
              <ul className="hours-list">
                <li><span>Monday - Friday</span> <span>6:00 AM - 10:00 PM</span></li>
                <li><span>Saturday - Sunday</span> <span>8:00 AM - 8:00 PM</span></li>
                <li><span>Bank Holidays</span> <span>8:00 AM - 6:00 PM</span></li>
              </ul>
              
              <div className="text-center mt-4">
                <Link to="/" className="button secondary">
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <div className="membership-testimonials my-5 p-4 rounded text-center text-light">
        <h3 className="mb-4">What Our Members Say</h3>
        <blockquote className="blockquote">
          "Pacific Supergym has completely transformed my fitness journey. The specialised training rooms and top-notch equipment make every workout effective and enjoyable."
          <footer className="blockquote-footer mt-2">Sarah J., Member since 2022</footer>
        </blockquote>
      </div>
    </div>
  );
}

export default Membership;
