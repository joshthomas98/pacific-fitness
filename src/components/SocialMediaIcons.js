import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div
      className="d-flex pt-3 social-media-icons-container justify-content-center"
      style={{ color: "#eccf42" }}
    >
      <a
        target={"_blank"}
        href="https://www.facebook.com/PacificFitness"
        className="social-icon facebook-icon mr-3 h2 px-1"
      >
        <FaFacebook />
      </a>

      <a
        target={"_blank"}
        href="https://www.instagram.com/pacific_supergym/?hl=en"
        className="social-icon instagram-icon mr-3 h2 px-1"
      >
        <FaInstagram />
      </a>

      <a
        target={"_blank"}
        href="https://www.youtube.com/@pacificfitnessuk"
        className="social-icon youtube-icon mr-3 h2 px-1"
      >
        <FaYoutube />
      </a>

      <a
        target={"_blank"}
        href="https://www.twitter.com/pacificfitness"
        className="social-icon twitter-icon mr-3 h2 px-1"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
