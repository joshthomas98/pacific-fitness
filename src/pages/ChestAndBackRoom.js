import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ChestAndBackRoom = () => {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold" style={{ color: "#eccf42" }}>
          Chest And Back Room
        </h1>
      </div>

      <Container className="text-light mb-5" style={{ fontSize: "18px" }}>
        <div className="text-container bg-dark p-4 rounded shadow-sm" style={{ lineHeight: "1.8" }}>
          <p>
            Next up is the Chest and Back Room. At Pacific Supergym, we believe
            in providing our members with nothing but the best, and this room is
            a testament to that commitment. Our owner, Ali, has handpicked each
            piece of equipment with utmost care and precision to ensure you have
            access to cutting-edge tools to maximise your training experience.
          </p>

          <div className="my-4" style={{ height: "1px", background: "rgba(255,255,255,0.1)" }}></div>

          <p>
            First, let's talk about chest training. Our room boasts an
            impressive array of state-of-the-art machines and free weights,
            allowing you to challenge your chest muscles from every conceivable
            angle. Whether you're looking to sculpt a defined chest, enhance
            your bench press strength, or increase overall upper body power, we
            have the perfect equipment for you. We have custom-made, Pacific
            Supergym branded dumbbells ranging from 2.5 kg to 50 kg as well as
            Smith machines, incline press, decline press, flat press, and fly
            machines.
          </p>

          <p>
            Also in our Chest and Back Room is the legendary Nautilus Pullover,
            a rare gem in the fitness world. There are only a handful of these
            machines left in the entire world, and we're thrilled to be one of
            the few gyms that houses it. The Nautilus Pullover is renowned for
            its unique design, targeting the chest, upper back, and shoulders
            simultaneously, providing an unrivalled training experience. You'll
            be able to isolate and work those muscles like never before and
            unlock hidden potential.
          </p>

          <p>
            Now, let's shift our focus to the back training section. Your back
            muscles play a crucial role in supporting overall strength and
            posture. To optimise your back workouts, we have curated an
            extensive collection of cutting-edge equipment that targets every
            aspect of your back muscles. From rowing machines, lat pulldowns,
            and pull-up bars to cable stations and hyperextension benches,
            you'll find an extensive array of options that cater to every
            fitness level and training preference.
          </p>
        </div>
      </Container>

      <Container className="py-4">
        <h2 className="text-center mb-4" style={{ color: "#eccf42" }}>Our Equipment Gallery</h2>
        <Row xs={1} md={3} className="g-4 justify-content-center">
          {[
            "../../images/chest-and-back-room/DSC08832.jpg",
            "../../images/chest-and-back-room/DSC08833.jpg",
            "../../images/chest-and-back-room/DSC08834.jpg",
            "../../images/chest-and-back-room/DSC08837.jpg",
            "../../images/chest-and-back-room/DSC08839.jpg",
            "../../images/chest-and-back-room/DSC08840.jpg"
          ].map((img, idx) => (
            <Col key={idx}>
              <Card className="bg-dark border-0 shadow h-100 overflow-hidden">
                <Card.Img 
                  variant="top" 
                  src={img} 
                  alt={`Chest and Back Room Equipment ${idx+1}`}
                  className="img-fluid"
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="text-center mt-5 mb-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtube.com/shorts/ZF5MYbBnb_A?feature=share"
          className="btn btn-lg px-4 py-3"
          style={{ 
            backgroundColor: "#eccf42", 
            color: "#000", 
            fontWeight: "bold",
            borderRadius: "30px",
            transition: "all 0.3s"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          Watch Our Chest & Back Room Tour
        </a>
      </div>
    </Container>
  );
};

export default ChestAndBackRoom;
