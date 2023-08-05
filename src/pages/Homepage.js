import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "../components/Carousel";
import Testimonials from "../components/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Homepage = () => {
  return (
    <div>
      <Container>
        {/* Carousel section */}
        <section>
          <Carousel />
        </section>

        {/* Gym tour YouTube video section */}
        <section className="text-center pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2 className="pb-2" style={{ color: "#eccf42" }}>
                Want to find out more about us?
              </h2>

              <p className="text-light lead">
                Take a virtual tour of Pacific Fitness with our owner, Ali, as
                he guides you through each of our state-of-the-art rooms.
                Discover our Strength Room, Leg Room, Cardio and Abs Room, Chest
                and Back Room, Shoulders and Arms Room, HIIT Room, and Boxing
                and Bikes Room.
              </p>

              <p className="text-light lead">
                Get a sneak peek at the top-notch equipment and facilities we
                offer to enhance your workout experience and help you achieve
                your fitness goals. Watch the video and see why Pacific Fitness
                is the perfect place for your fitness journey!
              </p>

              <p className="text-light lead">
                If you want to see more of the gym then check out our YouTube
                channel and social media platforms
              </p>

              <div className="d-flex justify-content-center">
                <SocialMediaIcons />
              </div>
            </div>
            <div className="col-md-6">
              <iframe
                width="620"
                height="470"
                src="https://www.youtube.com/embed/6x-jAOL-DV8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="py-5">
          <Testimonials />
        </section>

        {/* Info boxes section */}
        <section className="pb-5" id="functionality boxes">
          <div className="container">
            <div className="row text-center g-4">
              <div className="col-md">
                <div className="homepage-card bg-secondary">
                  <div className="card-body text-center p-3">
                    <div className="h1 mb-3">
                      <FontAwesomeIcon
                        icon={faDumbbell}
                        style={{ color: "#eccf42" }}
                      />
                    </div>
                    <h3
                      className="card-title mb-3"
                      style={{ color: "#eccf42" }}
                    >
                      Quality Equipment
                    </h3>
                    <p className="text-light card-text">
                      A diverse selection of state-of-the-art equipment,
                      carefully selected to enhance your workout experience and
                      maximise results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md">
                <div className="homepage-card bg-secondary">
                  <div className="card-body text-center p-3">
                    <div className="h1 mb-3">
                      <FontAwesomeIcon
                        icon={faHandshake}
                        style={{ color: "#eccf42" }}
                      />
                    </div>
                    <h3
                      className="card-title mb-3"
                      style={{ color: "#eccf42" }}
                    >
                      Motivation & Support
                    </h3>
                    <p className="text-light card-text">
                      With our supportive team of trainers and staff, you'll
                      stay inspired, driven and motivated throughout your
                      fitness journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md">
                <div className="homepage-card bg-secondary text-light">
                  <div className="card-body text-center p-3">
                    <div className="h1 mb-3">
                      <GiWeightLiftingUp style={{ color: "#eccf42" }} />
                    </div>
                    <h3
                      className="card-title mb-3"
                      style={{ color: "#eccf42" }}
                    >
                      Achieve your goals
                    </h3>
                    <p className="text-light card-text">
                      Witness your fitness aspirations turn into achievements,
                      as we provide a motivating environment for your success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Homepage;
