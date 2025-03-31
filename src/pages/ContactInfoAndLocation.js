import React from "react";

const ContactInfoAndLocation = () => {
  return (
    <div className="contact-page" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 className="pt-5" style={{ 
        textAlign: "center", 
        color: "#eccf42", 
        fontSize: "2.5rem", 
        marginBottom: "30px",
        fontWeight: "600",
        textTransform: "uppercase",
        borderBottom: "2px solid #eccf42",
        paddingBottom: "10px"
      }}>
        Contact Info and Location
      </h1>
      
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "20px",
        color: "#fff",
      }}>
        {/* Contact Info Card */}
        <div style={{
          background: "rgba(0, 0, 0, 0.7)",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(236, 207, 66, 0.2)",
          overflow: "hidden",
          border: "1px solid rgba(236, 207, 66, 0.3)"
        }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
          }}>
            <tbody>
              <tr>
                <th style={{ 
                  padding: "16px 20px",
                  textAlign: "left",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  width: "150px",
                  color: "#eccf42"
                }}>
                  Address:
                </th>
                <td style={{ 
                  padding: "16px 20px", 
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  lineHeight: "1.6"
                }}>
                  5, Taff Business Centre, Treforest Industrial Estate, Tonteg Rd,
                  Pontypridd
                </td>
              </tr>
              <tr>
                <th style={{ 
                  padding: "16px 20px",
                  textAlign: "left",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#eccf42"
                }}>
                  Postcode:
                </th>
                <td style={{ 
                  padding: "16px 20px", 
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                  CF37 5UA
                </td>
              </tr>
              <tr>
                <th style={{ 
                  padding: "16px 20px",
                  textAlign: "left",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#eccf42"
                }}>
                  Phone:
                </th>
                <td style={{ 
                  padding: "16px 20px", 
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                  <a href="tel:01443843230" style={{ color: "#fff", textDecoration: "none" }}>
                    01443 843230
                  </a>
                </td>
              </tr>
              <tr>
                <th style={{ 
                  padding: "16px 20px",
                  textAlign: "left",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#eccf42"
                }}>
                  Email:
                </th>
                <td style={{ 
                  padding: "16px 20px", 
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                  <a href="mailto:info@pacificfitness.co.uk" style={{ color: "#fff", textDecoration: "none" }}>
                    info@pacificfitness.co.uk
                  </a>
                </td>
              </tr>
              <tr>
                <th style={{ 
                  padding: "16px 20px",
                  textAlign: "left",
                  verticalAlign: "top",
                  color: "#eccf42"
                }}>
                  Hours:
                </th>
                <td style={{ 
                  padding: "16px 20px",
                  lineHeight: "1.8"
                }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
                    <div>
                      <span style={{ fontWeight: "bold" }}>Monday - Friday:</span> Open 24 hours
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>Saturday & Sunday:</span> 08:00 - 20:00
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Map Section */}
        <div style={{ marginTop: "20px" }}>
          <h1 className="d-flex justify-content-center" style={{ 
            color: "#eccf42", 
            marginBottom: "20px",
            fontWeight: "500" 
          }}>Find Us</h1>
          
          <div style={{ 
            borderRadius: "10px", 
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(236, 207, 66, 0.2)",
            border: "1px solid rgba(236, 207, 66, 0.3)"
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.568162854924!2d-3.300873323973249!3d51.57614960567935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e19ddcef916eb%3A0xf21b5f70d6da6f55!2sPacific%20Fitness!5e0!3m2!1sen!2suk!4v1691108045533!5m2!1sen!2suk"
              width="600"
              height="450"
              style={{ border: "0", width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoAndLocation;
