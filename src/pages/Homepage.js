import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "../components/Carousel";
import Testimonials from "../components/Testimonials";
import MembershipCard from "../components/MembershipCard";

const Homepage = () => {
  return (
    <div>
      <Container>
        {/* Carousel section */}
        <section>
          <Carousel />
        </section>

        <section className="py-5">
          <Testimonials />
        </section>

        <section className="text-center">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/6x-jAOL-DV8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>

        <section className="py-5">
          <MembershipCard />
        </section>
      </Container>
    </div>
  );
};

export default Homepage;
