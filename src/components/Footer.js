import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock,
  faDumbbell
} from "@fortawesome/free-solid-svg-icons";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <MDBFooter className="footer" color="white">
      <MDBContainer className="p-4">
        <MDBRow className="gy-4 justify-content-between">
          <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Pacific Supergym</h5>
            <p className="lead mb-3">
              Your premier fitness destination with specialised training areas and expert coaching.
            </p>
            <div className="social-icons-wrapper mt-4">
              <SocialMediaIcons />
            </div>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled mb-0 footer-links">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faDumbbell} className="me-2" style={{ color: "#eccf42" }} />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faDumbbell} className="me-2" style={{ color: "#eccf42" }} />
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/strengthroom" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faDumbbell} className="me-2" style={{ color: "#eccf42" }} />
                  Gym Facilities
                </Link>
              </li>
              <li>
                <Link to="/theteam" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faDumbbell} className="me-2" style={{ color: "#eccf42" }} />
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faDumbbell} className="me-2" style={{ color: "#eccf42" }} />
                  Contact Us
                </Link>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <ul className="list-unstyled footer-contact">
              <li>
                <FontAwesomeIcon icon={faPhone} className="me-2" style={{ color: "#eccf42" }} />
                <span>01443 843230</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" style={{ color: "#eccf42" }} />
                <span>info@pacificfitness.co.uk</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" style={{ color: "#eccf42" }} />
                <span>5, Taff Business Centre, Treforest Industrial Estate, Tonteg Rd, Pontypridd CF37 5UA</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} className="me-2" style={{ color: "#eccf42" }} />
                <span>Open: 24hr Mon-Fri | 8am - 8pm Weekends</span>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="footer-copyright text-center p-3" style={{ backgroundColor: "#000" }}>
        <div className="container">
          © {new Date().getFullYear()} Copyright{" "}
          <a className="footer-brand-link" href="https://pacificfitness.co.uk/">
            Pacific Supergym
          </a>
          <p className="mt-2 mb-0">Designed and Developed by Tech Minds Consulting</p>
        </div>
      </div>
    </MDBFooter>
  );
}
