import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const NewsAndEvents = () => {
  return (
    <div>
      <h1 className="text-center pb-4" style={{ color: "#eccf42" }}>
        News and Events
      </h1>

      <div className="container">
        <h3 className="text-light text-center">
          For all the latest news and updates from Pacific Supergym<br></br> be
          sure to follow us on our social media platforms.
        </h3>

        {/* Set a larger size prop for the SocialMediaIcons component */}
        <SocialMediaIcons size={48} />
      </div>

      <h2 className="text-center pt-5 pb-5" style={{ color: "#eccf42" }}>
        Past Events
      </h2>

      <div className="row">
        <div className="col-md-6 text-center">
          <h3 className="text-light pb-3">
            7x Mr. Olympia Phil Heath at Pacific Supergym
          </h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ACs7VfLcy00"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ margin: "0 auto" }}
          ></iframe>
        </div>

        <div className="col-md-6 text-center">
          <h3 className="text-light pb-3">
            Team Pacific at the INVNCBL challenge
          </h3>
          <img
            src="../../images/INVNCBL.jpeg"
            alt=""
            width="560"
            height="315"
            style={{ color: "#eccf42" }}
          />
        </div>

        <div className="row">
          <div className="col-md-12 text-center pt-5">
            <h3 className="text-light pb-3">
              Behind the scenes of the Phil Heath mural
            </h3>
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Ftllewellyn1%2Fvideos%2F10157194343428617%2F&show_text=false&width=560&t=0"
              width="560"
              height="317"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
