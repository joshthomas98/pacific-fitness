import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ChestAndBackRoom = () => {
  return (
    <Container className="text-center">
      <h1 className="pb-3" style={{ color: "#eccf42" }}>
        Chest And Back Room
      </h1>

      <Container className="text-light" style={{ fontSize: "18px" }}>
        <div className="text-container">
          <p>
            Next up is the Chest and Back Room. At Pacific Supergym, we believe
            in providing our members with nothing but the best, and this room is
            a testament to that commitment. Our owner, Ali, has handpicked each
            piece of equipment with utmost care and precision to ensure you have
            access to cutting-edge tools to maximize your training experience.
          </p>

          <p>
            First, let’s talk about chest training. Our room boasts an
            impressive array of state-of-the-art machines and free weights,
            allowing you to challenge your chest muscles from every conceivable
            angle. Whether you’re looking to sculpt a defined chest, enhance
            your bench press strength, or increase overall upper body power, we
            have the perfect equipment for you. We have custom-made, Pacific
            Supergym branded dumbbells ranging from 2.5 kg to 50 kg as well as
            Smith machines, incline press, decline press, flat press, and fly
            machines.
          </p>

          <p>
            Also in our Chest and Back Room is the legendary Nautilus Pullover,
            a rare gem in the fitness world. There are only a handful of these
            machines left in the entire world, and we’re thrilled to be one of
            the few gyms that houses it. The Nautilus Pullover is renowned for
            its unique design, targeting the chest, upper back, and shoulders
            simultaneously, providing an unrivaled training experience. You’ll
            be able to isolate and work those muscles like never before and
            unlock hidden potential.
          </p>

          <p>
            Now, let’s shift our focus to the back training section. Your back
            muscles play a crucial role in supporting overall strength and
            posture. To optimize your back workouts, we have curated an
            extensive collection of cutting-edge equipment that targets every
            aspect of your back muscles. From rowing machines, lat pulldowns,
            and pull-up bars to cable stations and hyperextension benches,
            you’ll find an extensive array of options that cater to every
            fitness level and training preference.
          </p>
        </div>
      </Container>

      <Container className="pt-3">
        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/chest-and-back-room/DSC08832.jpg"
              alt="Image 1"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/chest-and-back-room/DSC08833.jpg"
              alt="Image 2"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/chest-and-back-room/DSC08834.jpg"
              alt="Image 3"
            />
          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/chest-and-back-room/DSC08837.jpg"
              alt="Image 4"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/chest-and-back-room/DSC08839.jpg"
              alt="Image 5"
            />
          </Col>
          <Col>
            <img
              className="img-fluid w-100"
              src="../../images/chest-and-back-room/DSC08840.jpg"
              alt="Image 6"
            />
          </Col>
        </Row>
      </Container>

      <div>
        <p className="py-4">
          <a
            target="blank"
            href="https://youtube.com/shorts/ZF5MYbBnb_A?feature=share"
            style={{ fontSize: "22px", color: "#eccf42" }}
          >
            Click here to see more of our Chest and Back Room
          </a>
        </p>
      </div>
    </Container>
  );
};

export default ChestAndBackRoom;
