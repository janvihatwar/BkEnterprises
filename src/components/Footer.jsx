import React, { useState, useEffect } from "react";
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const footerStyle = {
  backgroundColor: "#1a1a1a",
  color: "#f4a261",
  padding: "4rem 2rem",
  textAlign: "center",
  fontSize: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
  alignItems: "center",
  position: "relative",
  fontFamily: "Arial, sans-serif",
  overflow: "hidden",
  animation: "slideInUp 1s ease-out",
};

const sectionContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "3rem",
  flexWrap: "wrap",
  maxWidth: "1200px",
  width: "100%",
};

const sectionStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  alignItems: "flex-start",
  flex: "1",
  minWidth: "200px",
  animation: "fadeIn 1.2s ease-in",
};
const socialIconsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  animation: "zoomIn 1s ease",
};

const socialIconStyle = {
  fontSize: "2rem",
  color: "#f4a261",
  transition: "transform 0.3s ease, color 0.3s ease",
  cursor: "pointer",
};

const hoverEffect = {
  transform: "scale(1.3) rotate(10deg)",
  color: "#ff8b51",
};

const footerCopyStyle = {
  marginTop: "2rem",
  fontSize: "0.9rem",
  color: "#ccc",
  animation: "fadeInUp 2s ease",
};

const animations = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes zoomIn {
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
@keyframes slideInUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}



@media (max-width: 768px) {
  .quick-links {
    margin-left: 0;  /* Remove left margin on small screens */
    text-align: center;  /* Center the text */
  }
}
`;

export default function Footer() {

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <style>{animations}</style>
      <footer style={footerStyle}>
        {/* Main Footer Content */}
        <div style={sectionContainerStyle}>
          {/* Contact Section */}
          <div style={sectionStyle}>
            <h3>Contact Us</h3>
            <div id="text" className="contact-text">
              <FontAwesomeIcon icon={faPhone} />
              +9190 214 62299
            </div>
            <div id="text" className="contact-text">
              <FontAwesomeIcon icon={faWhatsapp} />
              +9176 664 74280
            </div>
            <div id="text" className="contact-text">
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                href="bkenterprises.rew2021@gmail.com"
                style={{
                  color: "#f4a261",
                  textDecoration: "none",
                }}
              >
                bkenterprises.rew2021@gmail.com
              </a>
            </div>
            <div id="text" className="contact-text">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              Dattawadi, Nagpur-440023
            </div>
          </div>

          {/* Quick Links Section */}
          <div
            style={{ ...sectionStyle, marginLeft: isMobile ? "0px" : "220px" }}
            className="quick-links"
          >
            <h3>Quick Links</h3>
            <a href="/" style={{ color: "#f4a261", textDecoration: "none" }}>
              Home
            </a>
            <a
              href="/about"
              style={{ color: "#f4a261", textDecoration: "none" }}
            >
              About Us
            </a>
            <a
              href="/services"
              style={{ color: "#f4a261", textDecoration: "none" }}
            >
              Services
            </a>
            <a
              href="/contact"
              style={{ color: "#f4a261", textDecoration: "none" }}
            >
              Contact
            </a>
          </div>

          {/* Social Media Section */}
          <div style={sectionStyle}>
            <h3>Follow Us</h3>
            <div style={socialIconsContainerStyle}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = hoverEffect.transform)
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <FontAwesomeIcon icon={faFacebook} style={socialIconStyle} />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = hoverEffect.transform)
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <FontAwesomeIcon icon={faTwitter} style={socialIconStyle} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = hoverEffect.transform)
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <FontAwesomeIcon icon={faLinkedin} style={socialIconStyle} />
              </a> */}
            </div>
          </div>
        </div>

        {/* Footer Copy */}
        <div style={footerCopyStyle}>
  &copy; {new Date().getFullYear()} B K Enterprises. All rights reserved.
</div>

      </footer>
    </>
  );
}
