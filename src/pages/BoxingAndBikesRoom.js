import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const BoxingAndBikesRoom = () => {
  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 
          className="display-4 text-center mb-4 pb-2" 
          style={{ 
            color: "#eccf42", 
            fontWeight: "700"
          }}
        >
          Boxing And Bikes Room
        </h1>
      </motion.div>

      <Container className="text-light my-4" style={{ fontSize: "18px" }}>
        <motion.div 
          className="text-container bg-dark bg-opacity-50 p-4 rounded shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="lead">
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
        </motion.div>
      </Container>

      <Container className="pt-4 pb-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-light mb-4 d-flex justify-content-center">Explore Our Facilities</h3>
          <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
            {[
              {
                src: "../../images/boxing-and-bikes-room/DSC08871.jpg",
                alt: "Boxing Equipment",
                caption: "Professional Boxing Equipment"
              },
              {
                src: "../../images/boxing-and-bikes-room/DSC08872.jpg",
                alt: "Spin Bikes",
                caption: "High-Quality Spin Bikes"
              },
              {
                src: "../../images/boxing-and-bikes-room/DSC08873.jpg",
                alt: "BoxMaster Station",
                caption: "BoxMaster Training Station"
              },
              {
                src: "../../images/boxing-and-bikes-room/DSC08874.jpg",
                alt: "Workout Area",
                caption: "Spacious Workout Area"
              }
            ].map((image, idx) => (
              <Col key={idx}>
                <Card className="h-100 bg-dark text-light border-0 shadow">
                  <Card.Img 
                    variant="top" 
                    src={image.src} 
                    alt={image.alt} 
                    className="img-fluid" 
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="p-3">
                    <Card.Text className="small text-center">{image.caption}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>

      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-center rounded shadow-sm">
            <h4 className="mb-3 text-light">Want to see more?</h4>
            <a
              target="blank"
              href="https://youtube.com/shorts/HJ9UimPMxIw?feature=share"
              className="btn btn-lg px-4 py-2"
              style={{ 
                fontSize: "18px", 
                backgroundColor: "#eccf42", 
                color: "#000",
                fontWeight: "600",
                borderRadius: "50px"
              }}
            >
              <i className="bi bi-play-circle me-2"></i>
              Watch a Video Tour
            </a>
          </div>
        </motion.div>
      </Container>
    </Container>
  );
};

export default BoxingAndBikesRoom;
