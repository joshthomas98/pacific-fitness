import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Samantha",
      role: "Member since 2022",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
      quote: "Pacific Supergym transformed my life! The supportive community and top-notch trainers helped me achieve my fitness goals like never before.",
    },
    {
      id: 2,
      name: "Michael",
      role: "Member since 2021",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      quote: "Joining Pacific Supergym was the best decision ever. The variety of specialised rooms and motivating instructors keep me coming back for more!",
    },
    {
      id: 3,
      name: "Emily",
      role: "Member since 2023",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      quote: "I love the positive and friendly atmosphere at Pacific Supergym. The state-of-the-art equipment and friendly staff make every workout enjoyable.",
    },
    {
      id: 4,
      name: "Jason",
      role: "Member since 2020",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      quote: "Pacific Supergym is amazing! Thanks to their personalised training, I've seen incredible progress in my strength and confidence. Would definitely recommend.",
    }
  ];

  return (
    <div className="testimonials-wrapper">
      <Row className="g-4">
        {testimonials.map((testimonial) => (
          <Col md={6} key={testimonial.id} className="slide-up" style={{animationDelay: `${0.1 * testimonial.id}s`}}>
            <Card className="testimonial-card h-100">
              <Card.Body>
                <div className="quote-icon" style={{ color: "#eccf42" }}>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <Card.Text className="testimonial-quote mb-4 text-dark">
                  {testimonial.quote}
                </Card.Text>
                <div className="testimonial-author d-flex align-items-center">
                  <img
                    src={testimonial.image}
                    className="testimonial-image"
                    alt={testimonial.name}
                  />
                  <div className="author-info">
                    <h4 className="mb-0">{testimonial.name}</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Testimonials;
