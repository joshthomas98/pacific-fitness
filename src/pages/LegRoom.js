import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const LegRoom = () => {
  return (
    <Container className="text-center">
      <h1 className="pb-3" style={{ color: "#eccf42" }}>
        Leg Room
      </h1>

      <Container className="text-light" style={{ fontSize: "18px" }}>
        <div className="text-container">
          <p>
            Now, let’s dive into our leg room – a standout feature here at
            Pacific Supergym that we’re truly proud of and that we believe is
            the best leg room Wales has ever had…
          </p>

          <p>
            Top-notch equipment: Get ready to experience the latest in
            leg-training technology with our wide selection of premium
            equipment. We’ve carefully curated a range of machines from
            well-known brands like Atlantis, Rogers Athletics, Panatta, and
            Cybex. This means you’ll have access to top-quality tools that let
            you target every leg muscle with precision and efficiency.
          </p>

          <p>
            Something for everyone: No matter where you are in your fitness
            journey, the leg room is designed to cater to all levels of
            experience. From beginners to seasoned athletes, there’s a variety
            of leg exercises available. Whether you enjoy classic movements or
            prefer more specialised options, we’ve got you covered.
          </p>

          <p>
            Guidance from experts: Our certified trainers are committed to
            helping you succeed. They’ll be there to provide personalised
            guidance, offer tips on form and technique, and tailor training
            programs that suit your needs. With their expertise and
            encouragement, you’ll discover newfound strength and exceed your own
            expectations.
          </p>
        </div>
      </Container>

      <Container className="pt-3">
        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/leg-room/DSC08862.jpg"
              alt="1"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/leg-room/DSC08863.jpg"
              alt="2"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/leg-room/DSC08864.jpg"
              alt="3"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/leg-room/DSC08865.jpg"
              alt="4"
            />
          </Col>
        </Row>

        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/leg-room/DSC08866.jpg"
              alt="5"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/leg-room/DSC08867.jpg"
              alt="6"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/leg-room/DSC08868.jpg"
              alt="7"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/leg-room/DSC08869.jpg"
              alt="8"
            />
          </Col>
        </Row>

        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/leg-room/DSC08870.jpg"
              alt="9"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LegRoom;
