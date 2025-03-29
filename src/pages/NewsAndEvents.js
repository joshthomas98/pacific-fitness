import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import SocialMediaIcons from "../components/SocialMediaIcons";

const NewsAndEvents = () => {
  const goldColor = "#eccf42";
  
  return (
    <Container fluid className="py-5 px-md-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <div className="mb-5 text-center">
            <h1 className="display-4 fw-bold mb-4" style={{ color: goldColor }}>
              News and Events
            </h1>
            <div className="bg-dark py-4 px-3 rounded shadow-sm mb-5">
              <h3 className="text-light">
                For all the latest news and updates from Pacific Supergym
                <br />
                be sure to follow us on our social media platforms.
              </h3>
              <div className="d-flex justify-content-center pt-4">
                <SocialMediaIcons size={48} />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col md={10} lg={8}>
          <div className="position-relative mb-5">
            <h2 className="text-center fw-bold mb-5" style={{ color: goldColor }}>
              Past Events
            </h2>
            <div className="position-absolute" style={{ height: "3px", width: "60px", backgroundColor: goldColor, bottom: "-10px", left: "50%", transform: "translateX(-50%)" }}></div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center g-4">
        <Col xs={12} md={6} className="mb-4">
          <Card className="h-100 bg-dark border-0 shadow">
            <Card.Body className="text-center p-4">
              <h3 className="text-light mb-4">
                7x Mr. Olympia Phil Heath at Pacific Supergym
              </h3>
              <div className="ratio ratio-16x9 mb-3">
                <iframe
                  title="YouTube video player"
                  src="https://www.youtube.com/embed/ACs7VfLcy00"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} className="mb-4">
          <Card className="h-100 bg-dark border-0 shadow">
            <Card.Body className="text-center p-4">
              <h3 className="text-light mb-4">
                Team Pacific at the INVNCBL <br />challenge
              </h3>
              <div className="ratio ratio-16x9 mb-3">
                <img
                  src="../../images/INVNCBL.jpeg"
                  alt="Team Pacific at INVNCBL challenge"
                  className="img-fluid rounded"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} className="mb-4">
          <Card className="h-100 bg-dark border-0 shadow">
            <Card.Body className="text-center p-4">
              <h3 className="text-light mb-4">
                Behind the scenes of the Phil Heath mural
              </h3>
              <div className="ratio ratio-16x9 mb-3">
                <iframe
                  title="Facebook video player"
                  src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Ftllewellyn1%2Fvideos%2F10157194343428617%2F&show_text=false&width=560&t=0"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsAndEvents;
