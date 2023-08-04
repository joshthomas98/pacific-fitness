import React from "react";

const Testimonials = () => {
  return (
    <>
      <div id="testimonials" className="px-5 pb-5 text-light">
        <div className="container">
          <h2 className="text-center text-white">Testimonials</h2>
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
                  <h3 className="card-title mb-3 text-light">Samantha</h3>
                  <p className="card-text text-light">
                    "Pacific Fitness transformed my life! The supportive
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
                  <h3 className="card-title mb-3 text-light">Michael</h3>
                  <p className="card-text text-light">
                    "Joining Pacific Fitness was the best decision ever. The
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
                  <h3 className="card-title mb-3 text-light">Emily</h3>
                  <p className="card-text text-light">
                    "I love the positive atmosphere at Pacific Fitness. The
                    state-of-the-art equipment and friendly staff make every
                    workout enjoyable." — Emily
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
                  <h3 className="card-title mb-3 text-light">Jason</h3>
                  <p className="card-text text-light">
                    "Pacific Fitness is amazing! Thanks to their personalized
                    training, I've seen incredible progress in my strength and
                    confidence." — Jason
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
