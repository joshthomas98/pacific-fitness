import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  return (
    <div className="team-section fade-in">
      <div className="team-header">
        <h1 className="display-4 mb-3">The Team</h1>
        <p className="lead text-white-50 mb-5">Meet the fitness experts who will guide your journey</p>
      </div>
      
      <div className="container">
        <Row className="g-4 justify-content-center">
          {/* Member 1: Ali */}
          <Col lg={4} md={6} className="slide-up" style={{animationDelay: '0.1s'}}>
            <Card className="team-card">
              <Card.Img 
                variant="top" 
                src="../../images/team-members/ali.png" 
                alt="Ali - Gym Owner"
              />
              <Card.Body className="text-center p-4">
                <div className="team-role">Gym Owner</div>
                <Card.Title className="fs-4 mb-3">Ali</Card.Title>
                <Card.Text>
                  Ali, the gym owner, deeply passionate about bodybuilding, has
                  been involved in the industry for years and has travelled
                  extensively to expos and competitions like The Arnold Classic
                  and The Mr. Olympia.
                </Card.Text>
                <div className="team-social mt-4">
                  <a href="#" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Member 2: Cath */}
          <Col lg={4} md={6} className="slide-up" style={{animationDelay: '0.2s'}}>
            <Card className="team-card">
              <Card.Img
                variant="top"
                src="../../images/team-members/cath.png"
                alt="Cath - Gym Manager"
              />
              <Card.Body className="text-center p-4">
                <div className="team-role">Manager & Instructor</div>
                <Card.Title className="fs-4 mb-3">Cath</Card.Title>
                <Card.Text>
                  Cath brings her dance background and love for group exercise
                  classes to the gym. She teaches Spin, HIIT, and Boogie Bounce,
                  and is also manager and therefore the go-to person for any
                  concerns.
                </Card.Text>
                <div className="team-social mt-4">
                  <a href="#" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Member 3: Geraint */}
          <Col lg={4} md={6} className="slide-up" style={{animationDelay: '0.3s'}}>
            <Card className="team-card">
              <Card.Img
                variant="top"
                src="../../images/team-members/geraint.jpeg"
                alt="Geraint - Powerlifting Coach"
              />
              <Card.Body className="text-center p-4">
                <div className="team-role">Powerlifting Coach</div>
                <Card.Title className="fs-4 mb-3">Geraint</Card.Title>
                <Card.Text>
                  A keen powerlifter, Geraint loves all things strength training
                  and has even put on his own powerlifting competition. Beyond
                  the gym, he enjoys outdoor adventures and camping in remote
                  areas like a Welsh Bear Grylls.
                </Card.Text>
                <div className="team-social mt-4">
                  <a href="#" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Member 4: Richard */}
          <Col lg={4} md={6} className="slide-up" style={{animationDelay: '0.4s'}}>
            <Card className="team-card">
              <Card.Img
                variant="top"
                src="../../images/team-members/peachy.png"
                alt="Richard - Powerlifting Champion"
              />
              <Card.Body className="text-center p-4">
                <div className="team-role">Powerlifting Champion</div>
                <Card.Title className="fs-4 mb-3">Richard</Card.Title>
                <Card.Text>
                  Richard, a former Welsh Champion Powerlifter with a range of
                  talents, is a dab hand at almost everything. His versatility
                  makes him a valuable asset, contributing to various aspects of
                  the gym.
                </Card.Text>
                <div className="team-social mt-4">
                  <a href="#" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5 mb-4">
          <h3>Join Our Team</h3>
          <p className="mb-4">Passionate about fitness? We're always looking for talented instructors to join our team.</p>
          <a href="/contact" className="btn btn-primary">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Team;
