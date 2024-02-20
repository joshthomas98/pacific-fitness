import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BoxingAndBikesRoom = () => {
  return (
    <Container className="text-center">
      <h1 className="pb-3" style={{ color: "#eccf42" }}>
        Boxing And Bikes Room
      </h1>

      <Container className="text-light" style={{ fontSize: "18px" }}>
        <div className="text-container">
          <p>
            Last but certainly not least is our action-packed Boxing and Bikes
            Room! This room is equipped with an array of equipment designed to
            cater to your boxing and cardio training needs.
          </p>

          <p>
            Let’s start with the essentials for an empowering boxing experience.
            Our heavy bags and top-quality boxing gloves are ready to help you
            unleash your inner fighter and enhance your cardiovascular
            endurance. In addition to the heavy bags and gloves, we have the
            popular BoxMaster, a versatile boxing training system that
            challenges your speed, accuracy, and power. Whether you’re a
            seasoned boxer or new to the sport, the BoxMaster offers an engaging
            and effective way to elevate your boxing skills.
          </p>

          <p>
            But that’s not all – we’ve got you covered for your cardio fix as
            well. Our spin bikes are geared up and ready to take you on a
            thrilling ride. Pedal your way to better cardiovascular health, burn
            calories, and boost your endurance in our exhilarating spin classes.
            In the Boxing and Bikes Room, we believe in the power of group
            motivation. Many of our classes are held in this dynamic space,
            including the ever-popular spin class. Join us for an energetic and
            sweat-inducing session that guarantees to get your heart pumping.
          </p>
        </div>
      </Container>

      <Container className="pt-3">
        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/boxing-and-bikes-room/DSC08871.jpg"
              alt="Image 1"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/boxing-and-bikes-room/DSC08872.jpg"
              alt="Image 2"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/boxing-and-bikes-room/DSC08873.jpg"
              alt="Image 3"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/boxing-and-bikes-room/DSC08874.jpg"
              alt="Image 4"
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <p className="py-4">
          <a
            target="blank"
            href="https://youtube.com/shorts/HJ9UimPMxIw?feature=share"
            style={{ fontSize: "22px", color: "#eccf42" }}
          >
            Click here to see more of our Boxing and Bikes Room
          </a>
        </p>
      </Container>
    </Container>
  );
};

export default BoxingAndBikesRoom;
