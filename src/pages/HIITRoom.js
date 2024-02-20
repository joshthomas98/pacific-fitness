import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HIITRoom = () => {
  return (
    <Container className="text-center">
      <h1 className="pb-3" style={{ color: "#eccf42" }}>
        HIIT Room
      </h1>

      <Container className="text-light" style={{ fontSize: "18px" }}>
        <div className="text-container">
          <p>
            Up next is our HIIT Room at Pacific Supergym, the ultimate
            destination for high-intensity training enthusiasts! As you step
            into this dynamic space, you'll be greeted by a fully astroturfed
            floor, setting the stage for an energetic and invigorating workout.
            Our HIIT Room boasts an impressive collection of state-of-the-art
            equipment, including Concept 2's rowing machines, Watt bikes for
            intense cycling sessions, Skierg's for a challenging full-body
            workout, and Rouge Assault bikes for a heart-pounding cardio
            experience.
          </p>

          <p>
            The HIIT Room is designed to cater to individuals who thrive on
            pushing their limits and embracing the intensity of their workouts.
            Whether you're a seasoned athlete or just beginning your fitness
            journey, our HIIT Room offers a diverse range of equipment to cater
            to all fitness levels and goals. Concept 2 rowing machines provide a
            full-body workout, engaging your legs, core, and upper body in a
            coordinated effort to build strength and endurance. These machines
            are ideal for anyone looking to boost cardiovascular fitness,
            improve muscular strength, and burn calories efficiently. For those
            seeking the ultimate cycling experience, our Watt bikes are a
            game-changer. With precise power measurement and performance
            tracking capabilities, you can monitor your progress and challenge
            yourself to reach new heights in every session. Looking to sculpt a
            powerful upper body and core? The Skierg's offer a unique and
            effective workout that mimics the movements of cross-country skiing,
            engaging your arms, shoulders, and core muscles in a dynamic manner.
          </p>

          <p>
            If you're after an intense cardio workout, our Rouge Assault bikes
            are the perfect choice. With their air resistance system, you
            control the intensity by pedaling harder, making them suitable for
            both beginners and advanced users.
          </p>
        </div>
      </Container>

      <Container className="pt-3">
        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/hiit-room/DSC08849.jpg"
              alt="Image 1"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/hiit-room/DSC08851.jpg"
              alt="Image 2"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/hiit-room/DSC08853.jpg"
              alt="Image 3"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/hiit-room/DSC08854.jpg"
              alt="Image 4"
            />
          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/hiit-room/DSC08855.jpg"
              alt="Image 5"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/hiit-room/DSC08856.jpg"
              alt="Image 6"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/hiit-room/DSC08857.jpg"
              alt="Image 7"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/hiit-room/DSC08858.jpg"
              alt="Image 8"
            />
          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/hiit-room/DSC08859.jpg"
              alt="Image 9"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HIITRoom;
