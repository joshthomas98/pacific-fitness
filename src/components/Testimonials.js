import React from "react";

const Testimonials = () => {
  return (
    <>
      <div id="testimonials" className="px-5 pb-5 text-light">
        <div className="container">
          <h2 className="text-center" style={{ color: "#eccf42" }}>
            Testimonials
          </h2>
          <p className="lead text-center text-white mb-5">
            See what our members have to say about Pacific Supergym...
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3" style={{ color: "#eccf42" }}>
                    Samantha
                  </h3>
                  <p className="card-text text-light">
                    "Pacific Supergym transformed my life! The supportive
                    community and top-notch trainers helped me achieve my
                    fitness goals like never before." — Samantha
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3" style={{ color: "#eccf42" }}>
                    Michael
                  </h3>
                  <p className="card-text text-light">
                    "Joining Pacific Supergym was the best decision ever. The
                    variety of classes and motivating instructors keep me coming
                    back for more!" — Michael
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3" style={{ color: "#eccf42" }}>
                    Emily
                  </h3>
                  <p className="card-text text-light">
                    "I love the positive and friendly atmosphere at Pacific
                    Supergym. The state-of-the-art equipment and friendly staff
                    make every workout enjoyable." — Emily
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3" style={{ color: "#eccf42" }}>
                    Jason
                  </h3>
                  <p className="card-text text-light">
                    "Pacific Supergym is amazing! Thanks to their personalised
                    training, I've seen incredible progress in my strength and
                    confidence. Would definitely recommend." — Jason
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
