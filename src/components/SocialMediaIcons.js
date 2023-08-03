import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="d-flex justify-content-end text-light pt-2">
      <div className="d-flex mb-3">
        <a
          target={"_blank"}
          href="https://www.facebook.com/PacificFitness"
          className="social-icon facebook-icon mr-3 h2 px-1 ml-auto"
        >
          <FaFacebook />
        </a>

        <a
          target={"_blank"}
          href="https://www.instagram.com/pacific_supergym/?hl=en"
          className="social-icon instagram-icon mr-3 h2 px-1 ml-auto"
        >
          <FaInstagram />
        </a>

        <a
          target={"_blank"}
          href="https://www.twitter.com/pacificfitness"
          className="social-icon twitter-icon mr-3 h2 px-1 ml-auto"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
