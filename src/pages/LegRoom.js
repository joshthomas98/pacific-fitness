import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faUsers,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

const LegRoom = () => {
  return (
    <div className="leg-room-page">
      {/* Hero section with improved styling */}
      <div
        className="hero-section py-5"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/leg-room/DSC08862.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <Container className="text-center">
          <h1
            className="display-4 mb-4"
            style={{ color: "#eccf42", fontWeight: "bold" }}
          >
            Leg Room
          </h1>
          <div className="mx-auto" style={{ maxWidth: "800px" }}>
            <p className="lead text-light mb-4" style={{ fontSize: "22px" }}>
              A standout feature here at Pacific Supergym that we're truly proud
              of and that we believe is the best leg room Wales has ever had…
            </p>
          </div>
        </Container>
      </div>

      {/* Main content section with improved formatting */}
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <div
              className="text-light"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
            >
              <div className="content-section mb-5">
                <h2
                  className="section-title mb-4 d-flex justify-content-center"
                  style={{ color: "#eccf42", fontSize: "28px" }}
                >
                  State-of-the-Art Training Experience
                </h2>
                <div
                  className="text-container p-4"
                  style={{
                    backgroundColor: "rgba(20, 20, 20, 0.7)",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Row className="feature-row mb-4">
                    <Col md={4} className="text-center mb-3 mb-md-0">
                      <div
                        className="feature-icon mb-3"
                        style={{ color: "#eccf42", fontSize: "40px" }}
                      >
                        <FontAwesomeIcon icon={faDumbbell} />
                      </div>
                      <h4 style={{ color: "#eccf42" }}>Top-notch Equipment</h4>
                      <p>
                        Experience the latest technology with our premium
                        equipment from well-known brands like Atlantis, Rogers
                        Athletics, Panatta, and Cybex.
                      </p>
                    </Col>
                    <Col md={4} className="text-center mb-3 mb-md-0">
                      <div
                        className="feature-icon mb-3"
                        style={{ color: "#eccf42", fontSize: "40px" }}
                      >
                        <FontAwesomeIcon icon={faUsers} />
                      </div>
                      <h4 style={{ color: "#eccf42" }}>
                        Something for Everyone
                      </h4>
                      <p>
                        No matter your fitness level, our leg room caters to all
                        experiences. From beginners to seasoned athletes, we've
                        got the right equipment for you.
                      </p>
                    </Col>
                    <Col md={4} className="text-center">
                      <div
                        className="feature-icon mb-3"
                        style={{ color: "#eccf42", fontSize: "40px" }}
                      >
                        <FontAwesomeIcon icon={faMedal} />
                      </div>
                      <h4 style={{ color: "#eccf42" }}>Expert Guidance</h4>
                      <p>
                        Our certified trainers provide personalised guidance,
                        form tips, and tailored training programs to help you
                        exceed your own expectations.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Gallery section with improved layout */}
        <div className="gallery-section mb-5">
          <h2
            className="text-center mb-4"
            style={{ color: "#eccf42", fontSize: "28px" }}
          >
            Equipment Gallery
          </h2>

          <Row
            xs={1}
            sm={2}
            md={3}
            lg={4}
            className="g-4 justify-content-center"
          >
            {[...Array(8)].map((_, idx) => (
              <Col key={idx}>
                <Card
                  className="gallery-card h-100"
                  style={{
                    backgroundColor: "rgba(30, 30, 30, 0.8)",
                    border: "1px solid rgba(236, 207, 66, 0.3)",
                    overflow: "hidden",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  <div
                    className="card-img-container"
                    style={{
                      height: "220px",
                      overflow: "hidden",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={`/images/leg-room/DSC0886${idx + 2}.jpg`}
                      alt={`Leg room equipment ${idx + 1}`}
                      className="img-fluid"
                      style={{
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Call to action section */}
        <Row className="pt-4">
          <Col md={10} className="mx-auto text-center">
            <div
              className="cta-section p-5"
              style={{
                backgroundColor: "rgba(30, 30, 30, 0.7)",
                borderRadius: "10px",
                border: "1px solid rgba(236, 207, 66, 0.3)",
              }}
            >
              <h3 className="mb-4" style={{ color: "#eccf42" }}>
                Ready to Experience the Best Leg Room in Wales?
              </h3>
              <p className="text-light mb-4">
                Join us today and take your leg training to the next level with
                our state-of-the-art equipment.
              </p>
              <a href="/membership" className="text-decoration-none">
                <button
                  className="btn btn-lg px-5"
                  style={{
                    backgroundColor: "#eccf42",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  Join Pacific Supergym
                </button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LegRoom;
