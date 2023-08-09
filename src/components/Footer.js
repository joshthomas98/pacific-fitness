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
import SocialMediaIcons from "./SocialMediaIcons";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <MDBRow className="justify-content-between align-items-center">
          <MDBCol md="4">
            <p className="pt-3" style={{ color: "#eccf42" }}>
              <i className="bi-telephone-fill" style={{ color: "#eccf42" }}></i>{" "}
              01443 843230
            </p>
          </MDBCol>
          <MDBCol md="4">
            <SocialMediaIcons />
          </MDBCol>
          <MDBCol md="4">
            <p className="pt-3" style={{ color: "#eccf42" }}>
              <i className="bi bi-envelope" style={{ color: "#eccf42" }}></i>{" "}
              info@pacificfitness.co.uk
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="text-center pb-2" style={{ color: "#eccf42" }}>
        © 2023 Copyright {""}
        <a style={{ color: "#eccf42" }} href="https://pacificfitness.co.uk/">
          Pacific Supergym
        </a>
        <p className="pt-1">Designed and Developed by Tech Minds Consulting</p>
      </div>
    </MDBFooter>
  );
}
