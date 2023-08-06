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
      <h1 className="text-center pb-4" style={{ color: "#eccf42" }}>
        The Team
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <MDBCard>
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
            <MDBCard>
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
            <MDBCard>
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
                  A dedicated powerlifter, Geraint loves all things strength.
                  Beyond the gym, he enjoys outdoor adventures, often camping in
                  remote areas like a Welsh Bear Grylls!
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div className="col-md-4"></div>

          <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-4 pt-3">
              {" "}
              <MDBCard>
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
                    Liam, with a masters degree in Sport and Exercise Science
                    and a background in boxing and rugby, plays a pivotal role
                    instructing the gym's Circuits, Bootcamp, and Boxing
                    circuits classes.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="col-md-4 pt-3" style={{ margin: "25px" }}>
              {" "}
              <MDBCard>
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
                    Richard, a former Welsh Champion Powerlifter with an
                    impressive range of talents, is a dab hand at almost
                    everything. His versatility makes him a valuable asset,
                    contributing to various aspects of the gym.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
