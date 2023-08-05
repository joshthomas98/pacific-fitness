import React from "react";

const ContactInfoAndLocation = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#eccf42" }}>
        Contact Info and Location
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          padding: "20px",
          color: "#fff",
        }}
      >
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "2px solid white",
          }}
        >
          <tr>
            <th
              className="px-3 py-3"
              style={{ borderBottom: "1px solid white" }}
            >
              Address:
            </th>
            <td style={{ borderBottom: "1px solid white" }}>
              5, Taff Business Centre, Treforest Industrial Estate, Tonteg Rd,
              Pontypridd
            </td>
          </tr>
          <tr>
            <th
              className="px-3 py-2"
              style={{ borderBottom: "1px solid white" }}
            >
              Postcode:
            </th>
            <td style={{ borderBottom: "1px solid white" }}>CF37 5UA</td>
          </tr>
          <tr>
            <th
              className="px-3 py-2"
              style={{ borderBottom: "1px solid white" }}
            >
              Phone number:
            </th>
            <td style={{ borderBottom: "1px solid white" }}>01443 843230</td>
          </tr>
          <tr>
            <th
              className="px-3 py-2"
              style={{ borderBottom: "1px solid white" }}
            >
              Email:
            </th>
            <td style={{ borderBottom: "1px solid white" }}>
              info@pacificfitness.co.uk
            </td>
          </tr>
          <tr>
            <th className="px-3" style={{ borderBottom: "1px solid white" }}>
              Opening Hours:
            </th>
            <td style={{ borderBottom: "1px solid white" }}>
              Monday: Open 24 hours
              <br />
              Tuesday: Open 24 hours
              <br />
              Wednesday: Open 24 hours
              <br />
              Thursday: Open 24 hours
              <br />
              Friday: Open 24 hours
              <br />
              Saturday: 08:00 - 20:00
              <br />
              Sunday: 08:00 - 20:00
            </td>
          </tr>
        </table>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.568162854924!2d-3.300873323973249!3d51.57614960567935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e19ddcef916eb%3A0xf21b5f70d6da6f55!2sPacific%20Fitness!5e0!3m2!1sen!2suk!4v1691108045533!5m2!1sen!2suk"
          width="600"
          height="474"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfoAndLocation;
