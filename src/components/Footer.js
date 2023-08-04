import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <div className="row">
          <div className="col-md-4">
            <p className="pt-3">
              <i className="bi-telephone-fill text-light"></i> 01443 843230
            </p>
          </div>
          <div className="col-md-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-2"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-2"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-2"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-2"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </MDBBtn>
          </div>
          <div className="col-md-4">
            <p className="pt-3">
              <i className="bi bi-envelope"></i> info@pacificfitness.co.uk
            </p>
          </div>
        </div>
      </MDBContainer>
      <div className="text-center pb-3">
        © 2023 Copyright {""}
        <a className="text-white" href="https://mdbootstrap.com/">
          Pacific Fitness
        </a>
      </div>
    </MDBFooter>
  );
}
