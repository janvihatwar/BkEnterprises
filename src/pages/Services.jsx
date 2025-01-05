import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';

function Services() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = {
    services: {
      margin: "0 auto",
      maxWidth: "1200px",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    servicesTitle: {
      textAlign: "center",
      fontSize: "2.5rem",
      marginBottom: "50px",
      color: "#2c3e50",
    },
    serviceSection: {
      marginBottom: "40px",
      padding: "20px",
      border: "1px solid #ecf0f1",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
    },
    electrical: {
      backgroundColor: "#f9f9f9",
    },
    mechanical: {
      backgroundColor: "#f9f9f9",
    },
    products: {
      backgroundColor: "#f9f9f9",
    },
    serviceHeading: {
      fontSize: "1.8rem",
      color: "#2980b9",
      marginBottom: "15px",
    },
    serviceDescription: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      color: "#7f8c8d",
      marginBottom: "15px",
    },
    serviceList: {
      listStyleType: "none",
      padding: "0",
      fontSize: "1.1rem",
      lineHeight: "1.6",
    },
    listItem: {
      marginBottom: "10px",
    },
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  
  return (
    
    <div style={{ ...styles.services, marginTop: "8rem" }}>

<Helmet>
        <meta
          name="description"
          content="At BK Enterprises, we offer a wide range of business services, including strategic consulting, operational improvements, and customized solutions that drive success. Our expertise empowers businesses to excel in competitive markets."
        />
        <meta
          name="keywords"
          content="business services, strategic consulting, operational improvements, custom business solutions"
        />
      </Helmet>


      <h2 style={styles.servicesTitle}>Top-notch Professional Services</h2>
      <section
  style={{
    ...styles.serviceSection,
    background: "rgba(211, 70, 19, 0.09)",
    color: "black",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(92, 78, 78, 0.3)",
    transition: "transform 0.3s ease-in-out",
  }}
  data-aos="fade-up"
>
  <h3
    style={{
      ...styles.serviceHeading,
      fontSize: "2rem",
      textAlign: "center",
      marginBottom: "1.5rem",
      textTransform: "uppercase",
      letterSpacing: "2px",
      color: "#f4a261",
    }}
  >
    Expert Electrical Services
  </h3>
  <p
    style={{
      ...styles.serviceDescription,
      fontSize: "1.1rem",
      lineHeight: "1.8",
      marginBottom: "2rem",
      textAlign: "center",
    }}
  >
    Our electrical services are designed to ensure safety, efficiency, and reliability in every project. Whether you need residential electrical repairs, commercial installations, or industrial system upgrades, our certified electricians deliver high-quality results.
  </p>
  <ul
  style={{
    ...styles.serviceList,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.5rem",
    listStyle: "none",
    padding: 0,
    margin: 0,
  }}
>
  {[
    "Electrical Wiring & Rewiring",
    "Repair and Maintaion All Type Of Industrial Motor",
    "Pump Repairs",
    "Welding Machine & Alternator",
    "Instrumentation & Automation",
    "Fire Alarm Panel & Fire Detector Installation",
    "Flame, Smoke Detector",
    "Industrial Lightning System",
    "Plant Electrification",
    "Energy Monitoring System",
    "Fire Fighting System",
    "Vfd, Pid Controller, Data Logger Configuration & Panel Works",
  ].map((item, index) => (
    <li
      key={index}
      style={{
        ...styles.listItem,
        padding: "1rem",
        backgroundColor: "rgba(211, 70, 19, 0.09)",
        borderRadius: "8px",
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "500",
        transition: "transform 0.3s ease-in-out", // Keep transition for smooth effect
        color: "black", // Default color
      }}
      data-aos="zoom-in"
      className="service-item"
    >
      {item}
    </li>
  ))}
</ul>

{/* Add your custom styles for hover effect */}
<style jsx>{`
  .service-item:hover {
    transform: scale(0.95); /* Zoom-out effect */
  }

  .service-item {
    transition: transform 0.3s ease-in-out, color 0.3s ease; /* Smooth transition */
  }
`}</style>

</section>



<section
  style={{
    ...styles.serviceSection,
    background: "rgba(211, 70, 19, 0.09)",
    color: "black",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(92, 78, 78, 0.3)",
    transition: "transform 0.3s ease-in-out",
  }}
  data-aos="fade-up"
>
  <h3
    style={{
      ...styles.serviceHeading,
      fontSize: "2rem",
      textAlign: "center",
      marginBottom: "1.5rem",
      textTransform: "uppercase",
      letterSpacing: "2px",
      color: "#f4a261",
    }}
  >
    Comprehensive Mechanical Services
  </h3>
  <p
    style={{
      ...styles.serviceDescription,
      fontSize: "1.1rem",
      lineHeight: "1.8",
      marginBottom: "2rem",
      textAlign: "center",
    }}
  >
    Our mechanical services offer cutting-edge solutions for HVAC systems, industrial machinery, and plumbing installations. We provide reliable maintenance and repairs to keep your systems operating at peak performance. Optimize your energy use and minimize downtime with our trusted mechanical experts.
  </p>
  <ul
    style={{
      ...styles.serviceList,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "1.5rem",
      listStyle: "none",
      padding: 0,
      margin: 0,
    }}
  >
    {[
      "Repair and Maintaion All Type Of Machines",
      "Febrication Works",
      "HVAC Installation & Repairs",
      "Hydrolic Cylinder",
      "Industrial Equipment Servicing",
      "Heating and Cooling System Upgrades",
      "Custom Mechanical Solutions",
    ].map((item, index) => (
      <li
        key={index}
        style={{
          ...styles.listItem,
          padding: "1rem",
          backgroundColor: "rgba(211, 70, 19, 0.09)",
          borderRadius: "8px",
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: "500",
          color: "black", // Set default text color
          transition: "transform 0.3s ease-in-out", // Smooth transition for hover effect
        }}
        data-aos="zoom-in"
        className="service-item" // Class for hover effect
      >
        {item}
      </li>
    ))}
  </ul>

  {/* Add your custom styles for hover zoom-out effect */}
  <style jsx>{`
    .service-item:hover {
      transform: scale(0.95); /* Zoom-out effect */
      color: black; /* Ensure the text color remains unchanged */
    }
    .service-item {
      transition: transform 0.3s ease-in-out; /* Smooth transition */
    }
  `}</style>
</section>



<section
  style={{
    background: "#f8f9fa",
    padding: "1.5rem 2rem",
    borderRadius: "15px",
    boxShadow: "0 15px 45px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    position: "relative",
    minHeight: "80vh",
  }}
  data-aos="fade-up"
>
  <h3
    style={{
      fontSize: "2.2rem",
      fontWeight: "bold",
      textAlign: "center",
      color: "#f39c12",
      marginBottom: "2rem",
      textTransform: "uppercase",
      letterSpacing: "3px",
    }}
  >
    High-quality Products for Your Needs
  </h3>
  <p
    style={{
      fontSize: "1.2rem",
      color: "#555",
      textAlign: "center",
      marginBottom: "3rem",
    }}
  >
    Explore our top-tier products that enhance electrical, mechanical, and plumbing applications. Perfect for both residential and commercial projects. Quality and durability guaranteed.
  </p>
  <ul className="product-list">
    {[{ name: "Energy-efficient Lighting Fixtures", icon: "💡" }, { name: "Advanced HVAC Components", icon: "🌬️" }, { name: "Durable Power Tools & Hand Tools", icon: "🔧" }, { name: "High-quality Plumbing Supplies", icon: "🚰" }, { name: "Industrial-grade Wiring & Cables", icon: "🔌" }].map((item, index) => (
      <li
        key={index}
        style={{
          padding: "1.2rem",
          background: "#fff",
          borderRadius: "10px",
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: "600",
          color: "black",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.4s ease-in-out",
        }}
        className="service-item"
        data-aos="flip-left"
      >
        <div style={{ fontSize: "2rem" }}>{item.icon}</div>
        <p>{item.name}</p>
      </li>
    ))}
  </ul>

  <style jsx>{`
    .service-item {
      transform: scale(1);
      transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .service-item:hover {
      transform: scale(1.05); /* Slight zoom effect */
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2); /* More prominent shadow */
      background: #f39c12; /* Hover background color change */
      color: #fff;
    }

    .hover-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    .service-item:hover .hover-overlay {
      opacity: 1; /* Show overlay on hover */
    }

    .service-item:hover p {
      transform: translateY(10px); /* Move the text down on hover */
    }

    /* Responsive Media Queries */
    .product-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* 4 columns by default */
      gap: 1.5rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    @media (max-width: 1024px) {
      .product-list {
        grid-template-columns: repeat(3, 1fr); /* 3 columns for medium screens */
      }
    }

    @media (max-width: 768px) {
      .product-list {
        grid-template-columns: repeat(2, 1fr); /* 2 columns for small screens */
      }

      h3 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      .product-list {
        grid-template-columns: 1fr; /* 1 column for very small screens */
      }

      h3 {
        font-size: 1.8rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  `}</style>
</section>

    </div>
  );
}

export default Services;
