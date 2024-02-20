import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const StrengthRoom = () => {
  return (
    <Container className="text-center">
      <h1 className="pb-3" style={{ color: "#eccf42" }}>
        Strength Room
      </h1>

      <Container className="text-light" style={{ fontSize: "18px" }}>
        <div className="text-container">
          <p>
            First up is our Strength Room, which is entirely dedicated to
            strength training. It features a number of power racks and deadlift
            platforms, providing you with the perfect setup to work on improving
            your strength and power for any sport or fitness goal. The Strength
            Room is equipped with competition benches, resistance bands, and
            plyometric boxes to offer a wide variety of training options to suit
            your needs. In this room, you'll find an extensive selection of
            barbells, catering to every type of lift and exercise. Whether
            you're into powerlifting, Olympic weightlifting, or general strength
            training, we have the right equipment for you. To top it all off, we
            have calibrated Eleiko plates, ensuring precision and accuracy in
            your training.
          </p>

          <p>
            With all these top-notch facilities and equipment, our Strength Room
            is the perfect space to increase your strength, power, and overall
            performance, helping you reach new heights in your fitness journey.
            Get ready to take your strength training to the next level and
            achieve your fitness goals with the support of our well-equipped
            Strength Room.
          </p>
        </div>
      </Container>

      <Container className="pt-3">
        <Row className="pb-4 g-4">
          <Col md={4}>
            <Image
              fluid
              src="../../images/strength-room/DSC08823.jpg"
              alt="Image 1"
            />
          </Col>
          <Col md={4}>
            <Image
              fluid
              src="../../images/strength-room/DSC08824.jpg"
              alt="Image 2"
            />
          </Col>
          <Col md={4}>
            <Image
              fluid
              src="../../images/strength-room/DSC08825.jpg"
              alt="Image 3"
            />
          </Col>
        </Row>
        <Row className="pb-4 g-4">
          <Col md={4}>
            <Image
              fluid
              src="../../images/strength-room/DSC08828.jpg"
              alt="Image 4"
            />
          </Col>
          <Col md={4}>
            <Image
              fluid
              src="../../images/strength-room/DSC08829.jpg"
              alt="Image 5"
            />
          </Col>
          <Col md={4}>
            <Image
              fluid
              src="../../images/strength-room/DSC08830.jpg"
              alt="Image 6"
            />
          </Col>
        </Row>
      </Container>

      <div>
        <p className="py-4">
          <a
            target="blank"
            href="https://youtube.com/shorts/6VYC_61NT9I?feature=share"
            style={{ fontSize: "22px", color: "#eccf42" }}
          >
            Click here to see more of our Strength Room
          </a>
        </p>
      </div>
    </Container>
  );
};

export default StrengthRoom;
