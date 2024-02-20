import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Carousel from "../components/Carousel";
import Testimonials from "../components/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
  };

  const navigateToMembership = () => {
    navigate("/membership");
  };

  return (
    <Container>
      {/* Carousel section */}
      <section>
        <Carousel />
      </section>

      {/* Gym tour YouTube video section */}
      <section className="text-center pt-5 pb-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8} sm={10} className="pr-lg-4">
              <h2 className="pb-2" style={{ color: "#eccf42" }}>
                Want to find out more about us?
              </h2>

              <p className="text-light lead">
                Take a virtual tour of Pacific Supergym with our owner, Ali, as
                he guides you through each of our state-of-the-art rooms.
                Discover our Strength Room, Leg Room, Cardio and Abs Room, Chest
                and Back Room, Shoulders and Arms Room, HIIT Room, and Boxing
                and Bikes Room.
              </p>

              <p className="text-light lead">
                Get a sneak peek at the top-notch equipment and facilities we
                offer to enhance your workout experience and help you achieve
                your fitness goals. Watch the video and see why Pacific Supergym
                is the perfect place for your fitness journey!
              </p>

              <p className="text-light lead">
                If you want to see more of the gym then check out our YouTube
                channel and social media platforms
              </p>

              <div className="d-flex justify-content-center">
                {/* Replace with your SocialMediaIcons component */}
                <SocialMediaIcons />
              </div>
            </Col>

            <Col
              lg={6}
              md={8}
              sm={10}
              className="d-flex align-items-center justify-content-center"
            >
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/6x-jAOL-DV8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="d-flex justify-content-center align-items-center p-5">
        <div className="membership-section">
          <div className="membership-container px-4 text-center">
            <img
              src="../../images/pacific_logo.png"
              alt="Gym Logo"
              className="logo mx-3"
            />
            <div className="membership-details pt-5">
              <h2>Pacific Membership</h2>
              <p className="price">£50.00 per month</p>
              <p>
                Ready to become a Pacific member? Give us a call, drop us a
                message, or pop into the gym to see us today!
              </p>
              <div className="cta-buttons pb-5">
                <Button
                  onClick={navigateToContact}
                  style={{
                    backgroundColor: "#eccf42",
                    color: "#000",
                    borderColor: "#eccf42",
                  }}
                  className="text-center mb-3"
                >
                  Get in touch
                </Button>
                <Button
                  onClick={navigateToMembership}
                  style={{
                    backgroundColor: "#eccf42",
                    color: "#000",
                    borderColor: "#eccf42",
                  }}
                  className="text-center mb-3 mx-3"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="pt-5 pb-4">
        <Testimonials />
      </section>

      {/* Info boxes section */}
      <section className="pb-5" id="functionality boxes">
        <Container>
          <Row className="text-center g-4">
            <Col md>
              <div className="homepage-card bg-secondary">
                <div className="card-body text-center p-3">
                  <div className="h1 mb-3">
                    <FontAwesomeIcon
                      icon={faDumbbell}
                      style={{ color: "#eccf42" }}
                    />
                  </div>
                  <h3 className="card-title mb-3" style={{ color: "#eccf42" }}>
                    Quality Equipment
                  </h3>
                  <p className="text-light card-text">
                    A diverse selection of state-of-the-art equipment, carefully
                    selected to enhance your workout experience and maximise
                    results.
                  </p>
                </div>
              </div>
            </Col>

            <Col md>
              <div className="homepage-card bg-secondary">
                <div className="card-body text-center p-3">
                  <div className="h1 mb-3">
                    <FontAwesomeIcon
                      icon={faHandshake}
                      style={{ color: "#eccf42" }}
                    />
                  </div>
                  <h3 className="card-title mb-3" style={{ color: "#eccf42" }}>
                    Motivation & Support
                  </h3>
                  <p className="text-light card-text">
                    With our supportive team of trainers and staff, you'll stay
                    inspired, driven and motivated throughout your fitness
                    journey.
                  </p>
                </div>
              </div>
            </Col>

            <Col md>
              <div className="homepage-card bg-secondary text-light">
                <div className="card-body text-center p-3">
                  <div className="h1 mb-3">
                    <GiWeightLiftingUp style={{ color: "#eccf42" }} />
                  </div>
                  <h3 className="card-title mb-3" style={{ color: "#eccf42" }}>
                    Achieve your goals
                  </h3>
                  <p className="text-light card-text">
                    Witness your fitness aspirations turn into achievements, as
                    we provide a motivating environment for your success.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default Homepage;
