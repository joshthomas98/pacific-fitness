import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMediaIcons = ({ size = "1.2rem" }) => {
  return (
    <div className="social-icons">
      <a
        target="_blank"
        rel="noopener noreferrer" 
        href="https://www.facebook.com/PacificFitness"
        className="social-icon facebook-icon"
        aria-label="Facebook"
      >
        <FaFacebook style={{ fontSize: size }} />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/pacific_supergym/?hl=en"
        className="social-icon instagram-icon"
        aria-label="Instagram"
      >
        <FaInstagram style={{ fontSize: size }} />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/@pacificsupergymuk"
        className="social-icon youtube-icon"
        aria-label="YouTube"
      >
        <FaYoutube style={{ fontSize: size }} />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.twitter.com/pacificfitness"
        className="social-icon twitter-icon"
        aria-label="Twitter"
      >
        <FaTwitter style={{ fontSize: size }} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
