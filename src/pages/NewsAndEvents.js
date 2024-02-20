import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SocialMediaIcons from "../components/SocialMediaIcons";

const NewsAndEvents = () => {
  return (
    <Container className="text-center">
      <h1 className="text-center pb-4" style={{ color: "#eccf42" }}>
        News and Events
      </h1>

      <Container>
        <h3 className="text-light text-center">
          For all the latest news and updates from Pacific Supergym
          <br />
          be sure to follow us on our social media platforms.
        </h3>

        {/* Set a larger size prop for the SocialMediaIcons component */}
        <SocialMediaIcons size={48} />
      </Container>

      <h2 className="pt-5 pb-4" style={{ color: "#eccf42" }}>
        Past Events
      </h2>

      <Row className="justify-content-center pt-sm-2">
        <Col xs={12} lg={6} md={8} className="justify-content-center">
          <h3 className="text-light pb-3">
            7x Mr. Olympia Phil Heath at Pacific Supergym
          </h3>
          <iframe
            title="YouTube video player"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ACs7VfLcy00"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ margin: "0 auto" }}
          ></iframe>
        </Col>

        <Col lg={6} md={8} className="pt-sm-4">
          <h3 className="text-light pb-3">
            Team Pacific at the INVNCBL challenge
          </h3>
          <img
            src="../../images/INVNCBL.jpeg"
            alt=""
            width="560"
            height="315"
            style={{ color: "#eccf42" }}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={6} md={8} className="pt-sm-4">
          <h3 className="text-light pb-3">
            Behind the scenes of the Phil Heath mural
          </h3>
          <iframe
            title="Facebook video player"
            src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Ftllewellyn1%2Fvideos%2F10157194343428617%2F&show_text=false&width=560&t=0"
            width="560"
            height="317"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsAndEvents;
