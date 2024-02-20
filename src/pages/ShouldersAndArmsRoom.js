import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ShouldersAndArmsRoom = () => {
  return (
    <Container className="text-center">
      <h1 className="pb-3" style={{ color: "#eccf42" }}>
        Shoulders And Arms Room
      </h1>

      <Container className="text-light" style={{ fontSize: "18px" }}>
        <div className="text-container">
          <p>
            Welcome to our dedicated Shoulders and Arms Room! In this room, you
            will find a comprehensive range of equipment designed to target your
            shoulders and arms effectively. We have seated shoulder press
            machines, side lateral machines, and the Viking press for shoulders,
            providing various options to work on your shoulder muscles.
            Additionally, we offer preacher curl machines, isolated bicep
            equipment, and accessories for bicep training to help you achieve
            your arm strength and definition goals.
          </p>

          <p>
            For those who prefer the versatility and challenge of free weights,
            we have provided an additional second set of dumbbells ranging from
            2.5 kg to 50 kg. These dumbbells offer you the flexibility to
            customise your exercises and adjust the intensity of your workouts
            according to your preferences and fitness level. Whether you're
            looking to tone and strengthen your shoulders or sculpt your arms,
            our Shoulders and Arms Room is equipped to meet your fitness needs.
          </p>
        </div>
      </Container>

      <Container className="pt-3">
        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/shoulders-and-arms-room/DSC08841.jpg"
              alt="Image 1"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/shoulders-and-arms-room/DSC08842.jpg"
              alt="Image 2"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/shoulders-and-arms-room/DSC08843.jpg"
              alt="Image 3"
            />
          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/shoulders-and-arms-room/DSC08844.jpg"
              alt="Image 4"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/shoulders-and-arms-room/DSC08846.jpg"
              alt="Image 5"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ShouldersAndArmsRoom;
