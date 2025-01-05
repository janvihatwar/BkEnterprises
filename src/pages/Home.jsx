import React, { useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/mainimg.jpg"; // Add a suitable background image
import backgImageWebp from "../assets/mainimg.webp";
import contactImageJpg from "../assets/Raju.jpg";
import contactImageWebp from "../assets/Raju.webp";
import { keyframes } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon directly
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Import icon directly
import { Helmet } from "react-helmet";
const isWebpSupported = () => {
  const canvas = document.createElement("canvas");
  return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
};

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>BK Enterprises - Your Trusted Business Solutions Partner</title>
        <meta
          name="description"
          content="Welcome to BK Enterprises, a leading provider of innovative business solutions. We help businesses streamline operations and achieve sustainable growth through technology and expertise."
        />
        <meta
          name="keywords"
          content="business solutions, business services, technology, consulting, BK Enterprises"
        />
      </Helmet>

      {/* Home Section */}
      <div className="home" style={homeStyle}>
        <h2 style={headingStyle}>Welcome to B K Enterprises</h2>

        <h3 style={subheadingStyle}>Electrical & Rewinding Works</h3>
      </div>

      {/* Overview Section */}
      <section className="overview" style={overviewStyle}>
        <h2 style={headingStyle}>Overview</h2>
        <p style={paragraphStyle}>
          At B K Enterprises, we believe in providing not just services but
          solutions that make a difference. With years of experience in the
          electrical and mechanical industries, we are a trusted partner for
          businesses and individuals alike. Our team combines expertise,
          innovation, and precision to meet the unique challenges faced by every
          client. Whether it's the installation of cutting-edge mechanical
          systems or delivering dependable electrical support, we pride
          ourselves on delivering exceptional results that exceed expectations.
          But our commitment doesn't stop at service; it's about building
          lasting relationships based on trust and responsibility. At B K
          Enterprises, your needs are our priority, and we are dedicated to
          delivering the highest standards of quality with every project. Join
          us in creating smarter, safer, and more efficient solutions for a
          better tomorrow.
        </p>
        <p style={boldTextStyle}>Your Trust And Our Responsibility</p>
        <Link to="/about">
          <button
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = buttonStyle.backgroundColor)
            }
          >
            Learn More About Us
          </button>
        </Link>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview" style={servicesOverviewStyle}>
        <h3 style={servicesHeadingStyle}>Explore Our Expertise</h3>
        <p style={servicesDescriptionStyle}>
          We specialize in two core areas that drive innovation and efficiency
          in industries across the board:
        </p>
        <div style={servicesListStyle}>
          <div style={serviceItemStyle}>
            <h4 style={serviceTitleStyle}>Electrical Services</h4>
            <p style={serviceDescriptionStyle}>
              From complex electrical installations to regular maintenance, our
              team ensures your electrical needs are met with safety and
              precision. We focus on innovative solutions that optimize energy
              use and increase reliability.
            </p>
          </div>
          <div style={serviceItemStyle}>
            <h4 style={serviceTitleStyle}>Mechanical Services</h4>
            <p style={serviceDescriptionStyle}>
              Our mechanical expertise covers a wide range of services, from
              equipment installation to troubleshooting. We deliver solutions
              that are both cost-effective and high-performing, tailored to the
              specific needs of your projects.
            </p>
          </div>
        </div>

        <Link to="/services#start">
          <button
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = buttonStyle.backgroundColor)
            }
          >
            Discover Our Full Range of Services
          </button>
        </Link>
      </section>

      <section className="contact-info" style={contactInfoStyle}>
        <div style={contactContentStyle}>
          <picture>
            <source srcSet={contactImageWebp} type="image/webp" />
            <img
              src={contactImageJpg}
              alt="Contact Us"
              loading="lazy"
              style={imageStyle}
            />
          </picture>
          <div style={textContentStyle}>
            <h1>
              We are here to help!!
              <br />
              Call us Today
            </h1>
            <p>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ marginRight: "10px", color: "#f4a261" }}
              />
              +9190 214 62299
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// Home Section Styles
const bodyStyle = {
  fontFamily: "Arial, sans-serif",
  margin: "0", // Removes default margin
  padding: "0", // Removes default padding
};
const homeStyle = {
  backgroundImage: `
    linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.75)),
    url(${isWebpSupported() ? backgImageWebp : backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  textAlign: "center",
};
const headingStyle = {
  fontSize: "2.4rem",
  padding: "0.5rem",
  fontWeight: "bold",
  margin: "0",
};

const subheadingStyle = {
  fontSize: "1.4rem",
  padding: "0.5rem",
  fontWeight: "300",
};
// Overview Section Styles
const overviewStyle = {
  padding: "1rem",
  textAlign: "center", // Ensure text is centered
};

const paragraphStyle = {
  fontSize: "1.2 rem",
  padding: "2rem",
  marginBottom: "30px",
  lineHeight: "1.6",
};

const boldTextStyle = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginTop: "10px",
  padding: "1.5rem",
  letterSpacing: "2px",
  color: "#333",
};

// Services Overview Section Styles
const servicesOverviewStyle = {
  padding: "3rem",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow for depth
};

const servicesHeadingStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#333",
};

const servicesDescriptionStyle = {
  fontSize: "1.2rem",
  marginBottom: "30px",
  lineHeight: "1.6",
  color: "#333",
};

const servicesListStyle = {
  display: "flex",
  flexDirection: "row", // Default to horizontal layout
  gap: "2rem", // Horizontal spacing between items
  marginBottom: "30px", // Bottom margin for spacing
};

const serviceItemStyle = {
  width: "45%",
  padding: "1rem",
  backgroundColor: "#fff",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Box shadow for depth
};

const serviceTitleStyle = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "#e76f51",
  marginBottom: "10px",
};

const serviceDescriptionStyle = {
  fontSize: "1rem",
  color: "#333",
  lineHeight: "1.5",
};

const styles = {
  "@media (max-width: 768px)": {
    servicesOverviewStyle: {
      padding: "2rem",
    },
    servicesHeadingStyle: {
      fontSize: "2rem",
    },
    servicesDescriptionStyle: {
      fontSize: "1.1rem",
    },
    servicesListStyle: {
      flexDirection: "column", // Stack the services vertically on mobile
      gap: "1rem",
    },
    serviceItemStyle: {
      width: "100%", // Make the service items take up the full width on small screens
      padding: "1.5rem",
    },
    serviceTitleStyle: {
      fontSize: "1.5rem", // Adjust title size on mobile
    },
    serviceDescriptionStyle: {
      fontSize: "0.9rem",
    },
    buttonStyle: {
      padding: "12px 25px",
      fontSize: "1rem",
    },
  },
};

// Contact Info Section Styles
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

const contactInfoStyle = {
  padding: "2rem",
  backgroundColor: "rgba(211, 70, 19, 0.14)",
  color: "black",
  display: "flex", // Added for horizontal alignment
  alignItems: "center",
  justifyContent: "center", // Center horizontally
  gap: "2rem",
  flexWrap: "wrap", // Ensures responsiveness
  animation: `${fadeIn} 1s ease-in-out`,
};

const contactContentStyle = {
  display: "flex",
  fontSize: "1.3rem",
  alignItems: "center",
  justifyContent: "center",
  gap: "10rem", // Gap between image and text
  flexWrap: "wrap", // Adjust layout for smaller screens
};

const imageStyle = {
  width: "200px",
  height: "190px",
  borderRadius: "1%", // Slightly rounded corners
  border: "2px solid #f4a261",
  animation: `${pulse} 2s infinite`,
};

const textContentStyle = {
  maxWidth: "500px",
  textAlign: "center", // Optional for better alignment
};

// Button Styles
const buttonStyle = {
  backgroundColor: "#f4a261",
  border: "none",
  padding: "10px 20px",
  fontSize: "1rem",
  color: "#000000",
  cursor: "pointer",
  borderRadius: "5px",
  transition: "background-color 0.3s",
};

const buttonHoverStyle = {
  backgroundColor: "#e76f51",
};

// Media Query for Smaller Screens (Mobile Responsiveness)
const mediaQuery = `
  @media (max-width: 768px) {
    .overview {
      padding: 1.5rem;
    }
    .overview h1 {
      font-size: 2rem;
    }
    .overview p {
      font-size: 1.2rem;
    }
    .overview .bold-text {
      font-size: 1.5rem;
    }
  }
`;

export default Home;
