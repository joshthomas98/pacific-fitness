import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const ShouldersAndArmsRoom = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#121212" }}>
      <Container>
        {/* Header Section with improved styling */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center py-3" style={{borderRadius: "8px" }}>
            <h1 className="display-4 fw-bold" style={{ color: "#eccf42" }}>
              Shoulders And Arms Room
            </h1>
          </div>
        </motion.div>

        {/* Content Section with improved layout */}
        <Row className="mb-5 align-items-center">
          <Col lg={12}>
            <Container className="text-light py-4" style={{ 
              fontSize: "18px", 
              backgroundColor: "rgba(20, 20, 20, 0.7)", 
              borderRadius: "8px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}>
              <div className="text-container px-4">
                <p className="lead">
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
          </Col>
        </Row>

        {/* Gallery Section with improved styling */}
        <div className="text-center mb-4">
          <h2 className="text-light">Facility Gallery</h2>
        </div>

        <Row xs={1} md={3} className="g-4 pb-4 justify-content-center">
          {[
            "../../images/shoulders-and-arms-room/DSC08841.jpg",
            "../../images/shoulders-and-arms-room/DSC08842.jpg",
            "../../images/shoulders-and-arms-room/DSC08843.jpg",
          ].map((img, idx) => (
            <Col key={idx}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{ 
                  borderRadius: "8px", 
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)"
                }}>
                  <img
                    className="img-fluid w-100"
                    src={img}
                    alt={`Equipment ${idx + 1}`}
                  />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row xs={1} md={2} className="g-4 justify-content-center">
          {[
            "../../images/shoulders-and-arms-room/DSC08844.jpg",
            "../../images/shoulders-and-arms-room/DSC08846.jpg",
          ].map((img, idx) => (
            <Col key={idx}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{ 
                  borderRadius: "8px", 
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)"
                }}>
                  <img
                    className="img-fluid w-100"
                    src={img}
                    alt={`Equipment ${idx + 4}`}
                  />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default ShouldersAndArmsRoom;
