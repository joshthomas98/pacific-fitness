import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const HIITRoom = () => {
  return (
    <>
      {/* Hero Section */}
      <div 
        className="position-relative d-flex align-items-center justify-content-center py-5 mb-4"
        style={{
          backgroundImage: "url('../../images/hiit-room/DSC08851.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          minHeight: "300px"
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{ opacity: 0.7 }}></div>
        <div className="position-relative z-1">
          <h1 className="display-4 fw-bold text-center" style={{ color: "#eccf42" }}>
            HIIT ROOM
          </h1>
        </div>
      </div>

      <Container>
        {/* Introduction Section */}
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-light">
            <div className="text-container p-4 rounded" style={{ background: "rgba(0,0,0,0.2)" }}>
              <p className="lead" style={{ fontSize: "19px", lineHeight: "1.7" }}>
                Up next is our HIIT Room at Pacific Supergym, the ultimate
                destination for high-intensity training enthusiasts! As you step
                into this dynamic space, you'll be greeted by a fully astroturfed
                floor, setting the stage for an energetic and invigorating workout.
              </p>

              <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
                Our HIIT Room boasts an impressive collection of state-of-the-art
                equipment, including Concept 2's rowing machines, Watt bikes for
                intense cycling sessions, Skierg's for a challenging full-body
                workout, and Rouge Assault bikes for a heart-pounding cardio
                experience.
              </p>
            </div>
          </Col>
        </Row>

        {/* Equipment Highlights Section */}
        <Row className="justify-content-center mb-5">
          <Col lg={10} className="text-light">
            <div className="p-4 rounded" style={{ background: "rgba(0,0,0,0.2)" }}>
              <h3 className="mb-3" style={{ color: "#eccf42" }}>World-Class Equipment</h3>
              <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
                The HIIT Room is designed to cater to individuals who thrive on
                pushing their limits and embracing the intensity of their workouts.
                Whether you're a seasoned athlete or just beginning your fitness
                journey, our HIIT Room offers a diverse range of equipment to cater
                to all fitness levels and goals.
              </p>
              <Row className="mt-4">
                <Col md={6} className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <div className="me-3 bg-warning rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: "40px", height: "40px", fontWeight: "bold" }}>
                      1
                    </div>
                    <h5 className="mb-0" style={{ color: "#eccf42" }}>Concept 2 Rowing</h5>
                  </div>
                  <p>Provides a full-body workout, engaging your legs, core, and upper body 
                     to build strength and endurance.</p>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <div className="me-3 bg-warning rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: "40px", height: "40px", fontWeight: "bold" }}>
                      2
                    </div>
                    <h5 className="mb-0" style={{ color: "#eccf42" }}>Watt Bikes</h5>
                  </div>
                  <p>With precise power measurement and performance tracking capabilities for 
                     the ultimate cycling experience.</p>
                </Col>
              </Row>
              <p className="mt-3" style={{ fontSize: "18px", lineHeight: "1.6" }}>
                If you're after an intense cardio workout, our Rouge Assault bikes 
                are the perfect choice. With their air resistance system, you
                control the intensity by pedaling harder, making them suitable for
                both beginners and advanced users.
              </p>
            </div>
          </Col>
        </Row>

        {/* Gallery Section */}
        <h2 className="text-center mb-4" style={{ color: "#eccf42" }}>Explore Our HIIT Room</h2>
        <div className="mb-5">
          <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
            <Col>
              <Card className="bg-transparent border-0 h-100 image-card">
                <div className="overflow-hidden rounded shadow">
                  <Card.Img 
                    variant="top" 
                    src="../../images/hiit-room/DSC08851.jpg" 
                    alt="HIIT Room Image 1"
                    className="gallery-image" 
                    style={{ transition: "transform 0.5s ease" }}
                  />
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="bg-transparent border-0 h-100 image-card">
                <div className="overflow-hidden rounded shadow">
                  <Card.Img 
                    variant="top" 
                    src="../../images/hiit-room/DSC08853.jpg" 
                    alt="HIIT Room Image 2"
                    className="gallery-image" 
                    style={{ transition: "transform 0.5s ease" }}
                  />
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="bg-transparent border-0 h-100 image-card">
                <div className="overflow-hidden rounded shadow">
                  <Card.Img 
                    variant="top" 
                    src="../../images/hiit-room/DSC08853.jpg" 
                    alt="HIIT Room Image 3"
                    className="gallery-image" 
                    style={{ transition: "transform 0.5s ease" }}
                  />
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="bg-transparent border-0 h-100 image-card">
                <div className="overflow-hidden rounded shadow">
                  <Card.Img 
                    variant="top" 
                    src="../../images/hiit-room/DSC08854.jpg" 
                    alt="HIIT Room Image 4"
                    className="gallery-image" 
                    style={{ transition: "transform 0.5s ease" }}
                  />
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="bg-transparent border-0 h-100 image-card">
                <div className="overflow-hidden rounded shadow">
                  <Card.Img 
                    variant="top" 
                    src="../../images/hiit-room/DSC08855.jpg" 
                    alt="HIIT Room Image 5"
                    className="gallery-image" 
                    style={{ transition: "transform 0.5s ease" }}
                  />
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="bg-transparent border-0 h-100 image-card">
                <div className="overflow-hidden rounded shadow">
                  <Card.Img 
                    variant="top" 
                    src="../../images/hiit-room/DSC08856.jpg" 
                    alt="HIIT Room Image 6"
                    className="gallery-image" 
                    style={{ transition: "transform 0.5s ease" }}
                  />
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="bg-transparent border-0 h-100 image-card">
                <div className="overflow-hidden rounded shadow">
                  <Card.Img 
                    variant="top" 
                    src="../../images/hiit-room/DSC08857.jpg" 
                    alt="HIIT Room Image 7"
                    className="gallery-image" 
                    style={{ transition: "transform 0.5s ease" }}
                  />
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="bg-transparent border-0 h-100 image-card">
                <div className="overflow-hidden rounded shadow">
                  <Card.Img 
                    variant="top" 
                    src="../../images/hiit-room/DSC08858.jpg" 
                    alt="HIIT Room Image 8"
                    className="gallery-image" 
                    style={{ transition: "transform 0.5s ease" }}
                  />
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="bg-transparent border-0 h-100 image-card">
                <div className="overflow-hidden rounded shadow">
                  <Card.Img 
                    variant="top" 
                    src="../../images/hiit-room/DSC08859.jpg" 
                    alt="HIIT Room Image 9"
                    className="gallery-image" 
                    style={{ transition: "transform 0.5s ease" }}
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      <style jsx>{`
        .image-card:hover .gallery-image {
          transform: scale(1.05);
        }
        .gallery-image {
          height: 200px;
          object-fit: cover;
        }
        @media (max-width: 768px) {
          .gallery-image {
            height: 250px;
          }
        }
      `}</style>
    </>
  );
};

export default HIITRoom;
