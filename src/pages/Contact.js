import React from "react";

const Contact = () => {
  return (
    <div className="text-light">
      <section className="pt-2 pb-5">
        <div className="container">
          <h1 className="text-center pb-4">Contact Info</h1>
          <div className="row g-4">
            <div className="col-md-6">
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Address:</span> 5, Taff Business
                  Centre, Treforest Industrial Estate, Tonteg Rd, Pontypridd
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Postcode:</span> CF37 5UA
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Phone number:</span> 01443 843230
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Email:</span>{" "}
                  info@pacificfitness.co.uk
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Opening Hours:</span>
                  <br></br>Monday: Open 24 hours<br></br>
                  Tuesday: Open 24 hours<br></br>Wednesday: Open 24 hours
                  <br></br>
                  Thursday: Open 24 hours<br></br>Friday: Open 24 hours<br></br>
                  Saturday 08:00 - 20:00<br></br>
                  Sunday 08:00 - 20:00
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.568162854924!2d-3.300873323973249!3d51.57614960567935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e19ddcef916eb%3A0xf21b5f70d6da6f55!2sPacific%20Fitness!5e0!3m2!1sen!2suk!4v1691108045533!5m2!1sen!2suk"
                width="600"
                height="474"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .list-group-item span {
          background-color: transparent; /* Set the background color of the spans to transparent */
        }
      `}</style>
    </div>
  );
};

export default Contact;
