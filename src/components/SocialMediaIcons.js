import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="d-flex text-light pt-3">
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
          href="https://www.youtube.com/@pacificfitnessuk"
          className="social-icon youtube-icon mr-3 h2 px-1 ml-auto"
        >
          <FaYoutube />
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
