import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CardioAndAbsRoom = () => {
  return (
    <Container className="text-center">
      <h1 className="pb-3" style={{ color: "#eccf42" }}>
        Cardio And Abs Room
      </h1>

      <Container className="text-light" style={{ fontSize: "18px" }}>
        <div className="text-container">
          <p>
            Welcome to our state-of-the-art cardio and abs room at Pacific
            Supergym! This ultimate haven for fitness enthusiasts elevates your
            cardiovascular training and helps you achieve your health goals.
            Step into a world of cutting-edge fitness equipment and get a great
            workout every time. At Pacific Supergym, we value the importance of
            cardiovascular exercise for overall fitness and well-being. That’s
            why we’ve spared no expense in curating a top-notch selection of
            cardio equipment, catering to all fitness levels and preferences.
          </p>

          <p>
            Ready to elevate your cardio sessions? Our cardio room offers an
            impressive lineup of premium equipment, including ever-popular
            StairMasters and high-intensity steppers that challenge while being
            gentle on your joints. Engage multiple muscle groups with our
            cross-trainers, providing a fantastic full-body workout that leaves
            you invigorated and accomplished. Discover the next level of cardio
            training with our cutting-edge interval runners. Customize your
            workout with varying intensities to push boundaries and maximize
            calorie burn. Whether you’re a seasoned athlete or just starting
            your fitness journey, these interval runners will help you achieve
            your desired results more efficiently.
          </p>

          <p>
            And that’s not all! Our cardio and abs room also features
            specialized ab machines designed to target every angle of your
            abdominal muscles. Strengthen your core and achieve a sculpted
            midsection with our range of equipment.
          </p>
        </div>
      </Container>

      <Container className="pt-3">
        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/cardio-and-abs-room/DSC08815.jpg"
              alt="Image 1"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/cardio-and-abs-room/DSC08816.jpg"
              alt="Image 2"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/cardio-and-abs-room/DSC08817.jpg"
              alt="Image 3"
            />
          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/cardio-and-abs-room/DSC08818.jpg"
              alt="Image 4"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/cardio-and-abs-room/DSC08822.jpg"
              alt="Image 5"
            />
          </Col>
        </Row>
      </Container>

      <div>
        <p className="py-4">
          <a
            target="blank"
            href="https://youtube.com/shorts/eeeI43qQS6U?feature=share"
            style={{ fontSize: "22px", color: "#eccf42" }}
          >
            Click here to see more of our Cardio and Abs Room
          </a>
        </p>
      </div>
    </Container>
  );
};

export default CardioAndAbsRoom;
