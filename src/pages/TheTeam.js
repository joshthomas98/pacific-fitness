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
                <MDBCardTitle className="text-center text-light">
                  Ali
                </MDBCardTitle>
                <MDBCardText className="text-center text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                <MDBCardTitle className="text-center text-light">
                  Cath
                </MDBCardTitle>
                <MDBCardText className="text-center text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                <MDBCardTitle className="text-center text-light">
                  Geraint
                </MDBCardTitle>
                <MDBCardText className="text-center text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  <MDBCardTitle className="text-center text-light">
                    Liam
                  </MDBCardTitle>
                  <MDBCardText className="text-center text-light">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                  <MDBCardTitle className="text-center text-light">
                    Peachy
                  </MDBCardTitle>
                  <MDBCardText className="text-center text-light">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
