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

        <section className="py-5">
          <MembershipCard />
        </section>
      </Container>
    </div>
  );
};

export default Homepage;
