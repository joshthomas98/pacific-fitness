import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

const Team = () => {
  return (
    <div className="team-section fade-in">
      <div className="team-header py-5" style={{
        background: "linear-gradient(to right, #000000, #222222)",
        borderBottom: "3px solid #d4af37"
      }}>
        <Container>
          <h1 className="display-4 mb-3" style={{ fontWeight: "700", color: "#d4af37" }}>The Team</h1>
        </Container>
      </div>
      
      <Container className="py-5">
        <Row className="g-4 justify-content-center">
          {/* Member 1: Ali */}
          <Col lg={4} md={6} className="slide-up" style={{animationDelay: '0.1s'}}>
            <Card className="team-card h-100 border-0" style={{
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}>
              <Card.Img 
                variant="top" 
                src="../../images/team-members/ali.png" 
                alt="Ali - Gym Owner"
                className="img-fluid"
                style={{ 
                  width: "100%",
                  transition: "transform 0.5s ease"
                }}
              />
              <Card.Body className="text-center p-4">
                <div className="team-role mb-2" style={{ 
                  color: "#d4af37", 
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "0.85rem"
                }}>Gym Owner</div>
                <Card.Title className="fs-4 mb-3">Ali</Card.Title>
                <div className="accent-line mx-auto mb-3" style={{ width: "40px", height: "2px", background: "#d4af37" }}></div>
                <Card.Text style={{ fontSize: "0.95rem", color: "#777" }}>
                  Ali, the gym owner, deeply passionate about bodybuilding, has
                  been involved in the industry for years and has travelled
                  extensively to expos and competitions like The Arnold Classic
                  and The Mr. Olympia.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Member 2: Cath */}
          <Col lg={4} md={6} className="slide-up" style={{animationDelay: '0.2s'}}>
            <Card className="team-card h-100 border-0" style={{
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}>
              <Card.Img
                variant="top"
                src="../../images/team-members/cath.png"
                alt="Cath - Gym Manager"
                className="img-fluid"
                style={{ 
                  width: "100%",
                  transition: "transform 0.5s ease"
                }}
              />
              <Card.Body className="text-center p-4">
                <div className="team-role mb-2" style={{ 
                  color: "#d4af37", 
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "0.85rem"
                }}>Manager</div>
                <Card.Title className="fs-4 mb-3">Cath</Card.Title>
                <div className="accent-line mx-auto mb-3" style={{ width: "40px", height: "2px", background: "#d4af37" }}></div>
                <Card.Text style={{ fontSize: "0.95rem", color: "#777" }}>
                  Cath brings her dance background and love for group exercise
                  classes to the gym. She teaches Spin, HIIT, and Boogie Bounce,
                  and is also manager and therefore the go-to person for any
                  concerns.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Member 3: Geraint */}
          <Col lg={4} md={6} className="slide-up" style={{animationDelay: '0.3s'}}>
            <Card className="team-card h-100 border-0" style={{
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}>
              <Card.Img
                variant="top"
                src="../../images/team-members/geraint.jpeg"
                alt="Geraint - Powerlifting Coach"
                className="img-fluid"
                style={{ 
                  width: "100%",
                  transition: "transform 0.5s ease"
                }}
              />
              <Card.Body className="text-center p-4">
                <div className="team-role mb-2" style={{ 
                  color: "#d4af37", 
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "0.85rem"
                }}>Team Member</div>
                <Card.Title className="fs-4 mb-3">Geraint</Card.Title>
                <div className="accent-line mx-auto mb-3" style={{ width: "40px", height: "2px", background: "#d4af37" }}></div>
                <Card.Text style={{ fontSize: "0.95rem", color: "#777" }}>
                  A keen powerlifter, Geraint loves all things strength training
                  and has even put on his own powerlifting competition. Beyond
                  the gym, he enjoys outdoor adventures and camping in remote
                  areas like a Welsh Bear Grylls.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Member 4: Richard */}
          <Col lg={4} md={6} className="slide-up" style={{animationDelay: '0.4s'}}>
            <Card className="team-card h-100 border-0" style={{
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}>
              <Card.Img
                variant="top"
                src="../../images/team-members/peachy.png"
                alt="Richard - Powerlifting Champion"
                className="img-fluid"
                style={{ 
                  width: "100%",
                  transition: "transform 0.5s ease"
                }}
              />
              <Card.Body className="text-center p-4">
                <div className="team-role mb-2" style={{ 
                  color: "#d4af37", 
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "0.85rem"
                }}>Team Member</div>
                <Card.Title className="fs-4 mb-3">Richard</Card.Title>
                <div className="accent-line mx-auto mb-3" style={{ width: "40px", height: "2px", background: "#d4af37" }}></div>
                <Card.Text style={{ fontSize: "0.95rem", color: "#777" }}>
                  Richard, a former Welsh Champion Powerlifter with a range of
                  talents, is a dab hand at almost everything. His versatility
                  makes him a valuable asset, contributing to various aspects of
                  the gym.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="join-team-section text-center mt-5 pt-5" style={{
          borderTop: "1px solid rgba(212, 175, 55, 0.2)",
          marginTop: "50px"
        }}>
        </div>
      </Container>
      
      {/* Add CSS for hover effects */}
      <style jsx>{`
        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        .team-card:hover img {
          transform: scale(1.05);
        }
        
        .btn:hover {
          background: #b89829 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(212, 175, 55, 0.4) !important;
        }
      `}</style>
    </div>
  );
};

export default Team;
