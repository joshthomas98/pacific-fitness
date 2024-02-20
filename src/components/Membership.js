import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function Membership() {
  return (
    <div>
      <h1 className="text-center pb-5" style={{ color: "#eccf42" }}>
        Membership
      </h1>
      <Row className="justify-content-center">
        <Col lg={6} md={8}>
          <div className="offset-md-2">
            <h2 className="pb-2" style={{ color: "#eccf42" }}>
              Why become a Pacific Member?
            </h2>

            <ul className="text-light">
              <li className="pb-2">
                <span className="fw-bold">State-of-the-Art Equipment:</span>{" "}
                Access to modern gym equipment that supports your fitness
                journey effectively.
              </li>
              <li className="pb-2">
                <span className="fw-bold">Exclusive Member Events:</span>{" "}
                Participate in member-only events, challenges, and competitions
                that foster a sense of community.
              </li>
              <li className="pb-2">
                <span className="fw-bold">Personal Training Sessions:</span>{" "}
                Individualized one-on-one training sessions with our resident
                PT's to target your fitness goals.
              </li>
              <li className="pb-2">
                <span className="fw-bold">Member's Bring-a-Friend Sunday:</span>{" "}
                On the last Sunday of every month, you can bring 1 guest to the
                gym for free, so they can experience our facilities firsthand.
              </li>
            </ul>

            <h2 className="pt-md-3 pb-2" style={{ color: "#eccf42" }}>
              Included in your membership:
            </h2>

            <ul className="text-light">
              <li className="pb-2">
                Full access to gym, classes, and bathroom facilities 24/7.
              </li>
              <li className="pb-2">
                Limited membership slots for the best member experience and to
                avoid overcrowding.
              </li>
              <li className="pb-2">
                Access to the latest state-of-the-art equipment for optimal
                workouts.
              </li>
              <li className="pb-2">
                Diverse selection of fitness classes, including spin classes,
                HIIT, weightlifting technique classes, and more, led by
                certified instructors.
              </li>
            </ul>
          </div>
        </Col>

        <Col lg={6} md={8}>
          <div className="offset-md-2 pt-sm-3 d-flex justify-content-center">
            <Card className="text-light" style={{ width: "22rem" }}>
              <Card.Img
                variant="top"
                src="../../images/pacific_logo.png"
                style={{ width: "100%", height: "auto" }}
                className="p-4"
              />
              <Card.Body>
                <Card.Title
                  className="text-center"
                  style={{ color: "#eccf42" }}
                >
                  Pacific Membership
                </Card.Title>
                <Card.Text className="text-center pb-3">
                  £50.00 per month
                </Card.Text>
                <hr
                  style={{ borderTop: "3px solid #fff", margin: "-10px 0" }}
                />
              </Card.Body>
              <Card.Body>
                <Card.Text className="text-center">
                  Ready to become a Pacific member?<br></br> Give us a call,
                  drop us a message, or pop into the gym to see us today!
                </Card.Text>

                <div className="text-center pb-2">
                  <Card.Link href="/#/contact" style={{ color: "#eccf42" }}>
                    Get in touch
                  </Card.Link>
                  <Card.Link href="/" style={{ color: "#eccf42" }}>
                    Back to homepage
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Membership;
