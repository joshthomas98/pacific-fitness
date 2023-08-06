import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function App() {
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
        <div className="row team-section">
          <div className="col-md-4">
            <MDBCard className="team-card">
              <MDBCardImage
                src="../../images/team-members/ali.png"
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle
                  className="text-center"
                  style={{ color: "#eccf42" }}
                >
                  Ali
                </MDBCardTitle>
                <MDBCardText className="text-center text-light">
                  Ali, the gym owner, deeply passionate about bodybuilding, has
                  been involved in the industry for years and has travelled
                  extensively to expos and competitions like Arnold Classic and
                  Mr. Olympia.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div className="col-md-4">
            <MDBCard className="team-card">
              <MDBCardImage
                src="../../images/team-members/cath.png"
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle
                  className="text-center"
                  style={{ color: "#eccf42" }}
                >
                  Cath
                </MDBCardTitle>
                <MDBCardText className="text-center text-light">
                  Cath brings her dance background and love for group exercise
                  classes to the gym. She teaches Spin, HIIT, and Boogie Bounce,
                  and is also manager and therefore the go-to person for any
                  concerns.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div className="col-md-4">
            <MDBCard className="team-card">
              <MDBCardImage
                src="../../images/team-members/geraint.jpeg"
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle
                  className="text-center"
                  style={{ color: "#eccf42" }}
                >
                  Geraint
                </MDBCardTitle>
                <MDBCardText className="text-center text-light">
                  A keen powerlifter, Geraint loves all things strength training
                  and has even put on his own powerlifting competition. Beyond
                  the gym, he enjoys outdoor adventures and camping in remote
                  areas like a Welsh Bear Grylls.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>

          {/* Start of the new row for Liam and Richard */}
          <div className="col-md-4 pt-4 team-card">
            <MDBCard className="team-card">
              <MDBCardImage
                src="../../images/team-members/liam.png"
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle
                  className="text-center"
                  style={{ color: "#eccf42" }}
                >
                  Liam
                </MDBCardTitle>
                <MDBCardText className="text-center text-light">
                  Liam, with a masters degree in Sport and Exercise Science and
                  a background in boxing and rugby, plays a pivotal role
                  instructing the gym's Circuits, Bootcamp, and Boxing circuits
                  classes.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div className="col-md-4 pt-4 team-card">
            <MDBCard className="team-card">
              <MDBCardImage
                src="../../images/team-members/peachy.png"
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle
                  className="text-center"
                  style={{ color: "#eccf42" }}
                >
                  Richard
                </MDBCardTitle>
                <MDBCardText className="text-center text-light">
                  Richard, a former Welsh Champion Powerlifter with a range of
                  talents, is a dab hand at almost everything. His versatility
                  makes him a valuable asset, contributing to various aspects of
                  the gym.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          {/* End of the new row for Liam and Richard */}
        </div>
      </div>
    </div>
  );
}
