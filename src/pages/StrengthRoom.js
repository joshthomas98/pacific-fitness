import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDumbbell, 
  faWeightHanging, 
  faPersonRunning, 
  faArrowRight 
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const StrengthRoom = () => {
  const equipment = [
    "Power racks with safety spotters",
    "Competition-grade deadlift platforms",
    "Eleiko calibrated competition plates",
    "Olympic lifting platforms",
    "Specialised barbells (power bar, deadlift bar, squat bar)",
    "Competition benches",
    "Speciality bars (safety squat bar, trap bar)",
    "Resistance bands",
    "Chalk stations",
    "Plyometric boxes",
    "Specialised grip training equipment",
    "Belt squat machine"
  ];

  return (
    <div className="fade-in pt-5">
      <div className="room-header">
        <h1 className="display-4" style={{ color: "#eccf42" }}>Strength Room</h1>
        <p className="lead">
          Dedicated to serious strength training with premium equipment for powerlifting, 
          Olympic lifting, and strength sports
        </p>
      </div>
      
      <Container className="text-light">
        <div className="text-container slide-up mb-5">
          <Row className="align-items-center">
            <Col lg={8}>
              <p>
                First up is our Strength Room, which is entirely dedicated to
                strength training. It features a number of power racks and deadlift
                platforms, providing you with the perfect setup to work on improving
                your strength and power for any sport or fitness goal. The Strength
                Room is equipped with competition benches, resistance bands, and
                plyometric boxes to offer a wide variety of training options to suit
                your needs.
              </p>
              <p>
                In this room, you'll find an extensive selection of
                barbells, catering to every type of lift and exercise. Whether
                you're into powerlifting, Olympic weightlifting, or general strength
                training, we have the right equipment for you. To top it all off, we
                have calibrated Eleiko plates, ensuring precision and accuracy in
                your training.
              </p>
            </Col>
            <Col lg={4} className="d-flex justify-content-center">
              <div className="feature-icon" style={{ width: '140px', height: '140px', fontSize: '4rem' }}>
                <FontAwesomeIcon icon={faDumbbell} style={{ color: "#eccf42" }} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      
      <div className="room-gallery">
        <Container>
          <h1 className="text-center mb-4" style={{ color: "#eccf42" }}>Gallery</h1>
          <Row className="g-4">
            <Col md={4} className="slide-up" style={{animationDelay: '0.1s'}}>
              <div className="room-gallery-image">
                <Image
                  fluid
                  src="../../images/strength-room/DSC08823.jpg"
                  alt="Power racks in Strength Room"
                  className="h-100 w-100"
                />
              </div>
            </Col>
            <Col md={4} className="slide-up" style={{animationDelay: '0.2s'}}>
              <div className="room-gallery-image">
                <Image
                  fluid
                  src="../../images/strength-room/DSC08824.jpg"
                  alt="Deadlift platforms in Strength Room"
                  className="h-100 w-100"
                />
              </div>
            </Col>
            <Col md={4} className="slide-up" style={{animationDelay: '0.3s'}}>
              <div className="room-gallery-image">
                <Image
                  fluid
                  src="../../images/strength-room/DSC08825.jpg"
                  alt="Weights area in Strength Room"
                  className="h-100 w-100"
                />
              </div>
            </Col>
            <Col md={4} className="slide-up" style={{animationDelay: '0.4s'}}>
              <div className="room-gallery-image">
                <Image
                  fluid
                  src="../../images/strength-room/DSC08828.jpg"
                  alt="Equipment in Strength Room"
                  className="h-100 w-100"
                />
              </div>
            </Col>
            <Col md={4} className="slide-up" style={{animationDelay: '0.5s'}}>
              <div className="room-gallery-image">
                <Image
                  fluid
                  src="../../images/strength-room/DSC08829.jpg"
                  alt="Training area in Strength Room"
                  className="h-100 w-100"
                />
              </div>
            </Col>
            <Col md={4} className="slide-up" style={{animationDelay: '0.6s'}}>
              <div className="room-gallery-image">
                <Image
                  fluid
                  src="../../images/strength-room/DSC08830.jpg"
                  alt="Olympic weights in Strength Room"
                  className="h-100 w-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <Container className="equipment-section slide-up text-light">
        <Row>
          <Col lg={5}>
            <div className="mb-4">
              <h2 className="mb-4">
                <FontAwesomeIcon icon={faWeightHanging} className="me-3" style={{ color: "#eccf42" }} />
                Equipment
              </h2>
              <p>
                With all these top-notch facilities and equipment, our Strength Room
                is the perfect space to increase your strength, power, and overall
                performance, helping you reach new heights in your fitness journey.
                Get ready to take your strength training to the next level and
                achieve your fitness goals with the support of our well-equipped
                Strength Room.
              </p>
            </div>
          </Col>
          <Col lg={7}>
            <div className="ps-lg-4">
              <ul className="equipment-list">
                {equipment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      
      <Container>
        <div className="room-cta slide-up text-light">
          <h3 className="mb-3">Experience Our Strength Room in Action</h3>
          <p className="mb-4">
            See our professional-grade equipment in use and get a real feel for the training environment
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtube.com/shorts/6VYC_61NT9I?feature=share"
            className="btn btn-primary mb-3"
          >
            Watch Video Tour <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </a>
          <div className="mt-3">
            <Link to="/membership" className="btn btn-secondary">
              <FontAwesomeIcon icon={faPersonRunning} className="me-2" /> Join Today
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StrengthRoom;
