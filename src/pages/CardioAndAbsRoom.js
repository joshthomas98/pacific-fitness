import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const CardioAndAbsRoom = () => {
  return (
    <Container fluid className="px-0">
      {/* Hero Section with Title */}
        <Container>
          <h1 className="text-center display-4 fw-bold pt-5 pb-3" style={{ color: "#eccf42" }}>
            Cardio And Abs Room
          </h1>
        </Container>

      {/* Content Section */}
      <Container className="mb-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="text-light" style={{ fontSize: "18px", lineHeight: "1.8" }}>
              <p className="lead" style={{ fontSize: "20px", fontWeight: "300" }}>
                Welcome to our state-of-the-art cardio and abs room at Pacific
                Supergym! This ultimate haven for fitness enthusiasts elevates your
                cardiovascular training and helps you achieve your health goals.
              </p>

              <p>
                Step into a world of cutting-edge fitness equipment and get a great
                workout every time. At Pacific Supergym, we value the importance of
                cardiovascular exercise for overall fitness and well-being. That's
                why we've spared no expense in curating a top-notch selection of
                cardio equipment, catering to all fitness levels and preferences.
              </p>

              <p>
                Ready to elevate your cardio sessions? Our cardio room offers an
                impressive lineup of premium equipment, including ever-popular
                StairMasters and high-intensity steppers that challenge while being
                gentle on your joints. Engage multiple muscle groups with our
                cross-trainers, providing a fantastic full-body workout that leaves
                you invigorated and accomplished.
              </p>

              <p>
                Discover the next level of cardio training with our cutting-edge interval runners. 
                Customize your workout with varying intensities to push boundaries and maximize
                calorie burn. Whether you're a seasoned athlete or just starting
                your fitness journey, these interval runners will help you achieve
                your desired results more efficiently.
              </p>

              <p>
                And that's not all! Our cardio and abs room also features
                specialized ab machines designed to target every angle of your
                abdominal muscles. Strengthen your core and achieve a sculpted
                midsection with our range of equipment.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Gallery Section */}
      <Container fluid className="pt-4" style={{ backgroundColor: "#1a1a1a" }}>
        <Container className="text-center">
          <h2 className="mb-4" style={{ color: "#eccf42" }}>Our Equipment</h2>
          <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            <Col>
              <Card className="bg-dark border-0 h-100 shadow">
                <Card.Img 
                  variant="top" 
                  src="../../images/cardio-and-abs-room/DSC08815.jpg" 
                  alt="Cardio Equipment"
                  className="img-fluid" 
                />
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark border-0 h-100 shadow">
                <Card.Img 
                  variant="top" 
                  src="../../images/cardio-and-abs-room/DSC08816.jpg" 
                  alt="Abs Equipment"
                  className="img-fluid" 
                />
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark border-0 h-100 shadow">
                <Card.Img 
                  variant="top" 
                  src="../../images/cardio-and-abs-room/DSC08817.jpg" 
                  alt="Training Area"
                  className="img-fluid" 
                />
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark border-0 h-100 shadow">
                <Card.Img 
                  variant="top" 
                  src="../../images/cardio-and-abs-room/DSC08818.jpg" 
                  alt="Workout Space"
                  className="img-fluid" 
                />
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark border-0 h-100 shadow">
                <Card.Img 
                  variant="top" 
                  src="../../images/cardio-and-abs-room/DSC08822.jpg" 
                  alt="Training Equipment"
                  className="img-fluid" 
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* YouTube Link Section */}
      <Container className="text-center pt-5">
        <div className="py-3 px-4 bg-dark d-inline-block rounded shadow-sm mx-auto">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtube.com/shorts/eeeI43qQS6U?feature=share"
            className="d-flex align-items-center text-decoration-none"
          >
            <i className="fab fa-youtube me-2" style={{ color: "#eccf42", fontSize: "24px" }}></i>
            <span style={{ fontSize: "20px", color: "#eccf42" }}>
              Watch our Cardio and Abs Room in action
            </span>
          </a>
        </div>
      </Container>
    </Container>
  );
};

export default CardioAndAbsRoom;
