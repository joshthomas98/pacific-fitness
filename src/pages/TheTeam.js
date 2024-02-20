import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Team = () => {
  return (
    <div>
      <style>
        {`
          /* Custom CSS for medium screens and below (<= 991px) */
          @media (max-width: 991px) {
            .team-card {
              margin-bottom: 30px; /* Add some margin between the cards */
            }
          }

          /* Custom CSS for large screens (>= 992px) */
          @media (min-width: 992px) {
            /* Center the entire team section */
            .team-section {
              display: flex;
              justify-content: center;
            }

            /* Center the cards within the team section */
            .team-card {
              margin: 0 15px; /* Add some horizontal space between the cards */
              height: 100%; /* Set a fixed height for the cards */
            }
          }
        `}
      </style>
      <h1 className="text-center pb-4" style={{ color: "#eccf42" }}>
        The Team
      </h1>
      <div className="container">
        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          {/* Team members go here */}
          {/* Member 1: Ali */}
          <Col md={4}>
            <Card className="team-card">
              <Card.Img variant="top" src="../../images/team-members/ali.png" />
              <Card.Body>
                <Card.Title
                  className="text-center"
                  style={{ color: "#eccf42" }}
                >
                  Ali
                </Card.Title>
                <Card.Text className="text-center text-light">
                  Ali, the gym owner, deeply passionate about bodybuilding, has
                  been involved in the industry for years and has travelled
                  extensively to expos and competitions like The Arnold Classic
                  and The Mr. Olympia.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Member 2: Cath */}
          <Col md={4}>
            <Card className="team-card">
              <Card.Img
                variant="top"
                src="../../images/team-members/cath.png"
              />
              <Card.Body>
                <Card.Title
                  className="text-center"
                  style={{ color: "#eccf42" }}
                >
                  Cath
                </Card.Title>
                <Card.Text className="text-center text-light">
                  Cath brings her dance background and love for group exercise
                  classes to the gym. She teaches Spin, HIIT, and Boogie Bounce,
                  and is also manager and therefore the go-to person for any
                  concerns.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Member 3: Geraint */}
          <Col md={4}>
            <Card className="team-card">
              <Card.Img
                variant="top"
                src="../../images/team-members/geraint.jpeg"
              />
              <Card.Body>
                <Card.Title
                  className="text-center"
                  style={{ color: "#eccf42" }}
                >
                  Geraint
                </Card.Title>
                <Card.Text className="text-center text-light">
                  A keen powerlifter, Geraint loves all things strength training
                  and has even put on his own powerlifting competition. Beyond
                  the gym, he enjoys outdoor adventures and camping in remote
                  areas like a Welsh Bear Grylls.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row xs={1} md={4} className="g-4 g-md-4 pb-4 justify-content-center">
          {/* Member 4: Liam */}
          <Col md={4}>
            <Card className="team-card">
              <Card.Img
                variant="top"
                src="../../images/team-members/liam.png"
              />
              <Card.Body>
                <Card.Title
                  className="text-center"
                  style={{ color: "#eccf42" }}
                >
                  Liam
                </Card.Title>
                <Card.Text className="text-center text-light">
                  Liam, with a masters degree in Sport and Exercise Science and
                  a background in boxing and rugby, plays a pivotal role
                  instructing the gym's Circuits, Bootcamp, and Boxing circuits
                  classes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Member 5: Richard */}
          <Col md={4}>
            <Card className="team-card">
              <Card.Img
                variant="top"
                src="../../images/team-members/peachy.png"
              />
              <Card.Body>
                <Card.Title
                  className="text-center"
                  style={{ color: "#eccf42" }}
                >
                  Richard
                </Card.Title>
                <Card.Text className="text-center text-light">
                  Richard, a former Welsh Champion Powerlifter with a range of
                  talents, is a dab hand at almost everything. His versatility
                  makes him a valuable asset, contributing to various aspects of
                  the gym.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Team;
