import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function EnhancedCarousel() {
  return (
    <Carousel className="pb-5 fade-in" fade indicators={true} interval={5000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/carousel-image-1.jpg"
          alt="Pacific Fitness Gym"
        />
        <Carousel.Caption>
          <h3>WELCOME TO PACIFIC SUPERGYM</h3>
          <p>Wales' number one training facility</p>
          <Link to="/membership">
            <Button className="btn-primary me-2">Join Now</Button>
          </Link>
          <Link to="/contact">
            <Button className="btn-secondary">Contact Us</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/carousel-image-2.jpg"
          alt="Fitness Equipment"
        />
        <Carousel.Caption>
          <h3>SPECIALISED TRAINING AREAS</h3>
          <p>Dedicated rooms for every type of workout to maximise your fitness journey</p>
          <Link to="/strengthroom">
            <Button className="btn-primary">Explore Gym</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/carousel-image-3.jpg"
          alt="Fitness Classes"
        />
        <Carousel.Caption>
          <h3>EXPERT TRAINERS</h3>
          <p>Our professional team is ready to help you achieve your fitness goals</p>
          <Link to="/theteam">
            <Button className="btn-primary">Meet Our Team</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default EnhancedCarousel;
