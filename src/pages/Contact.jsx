import React, { useEffect } from "react";
import styled from "styled-components";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Helmet = React.lazy(() => import('react-helmet'));
// Main Contact Section
const ContactSection = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: white;
  color: #f39c12;
  text-align: center;
  padding: 3rem;
  position: relative;
  animation: fadeIn 2s ease-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

// Contact Heading
const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  letter-spacing: 1px;

  fontfamily: "Arial, sans-serif";

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

// Contact Info Section
const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 3rem;
  animation: slideIn 2s ease-in-out;

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

// Info Card for Contact Methods
const InfoCard = styled.div`
  background: rgba(211, 70, 19, 0.14);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: cardIn 1.5s ease-out;

  @keyframes cardIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: black;
  }

  p {
    font-size: 0.95rem;
    margin: 0.5rem 0;
    color: black;
  }

  .icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #f39c12;
  }

  .description {
    font-size: 0.8rem;
    color: rgb(216, 152, 120);
    margin-top: 1rem;
  }
`;

// Map Section (Embedded Map)
const MapWrapper = styled.div`
  margin-top: 4rem;
  animation: fadeInMap 2s ease-in-out;
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto;

  @keyframes fadeInMap {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  iframe {
    width: 100%;
    height: 450px;
    border: none;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

// Contact Form Section
const FormSection = styled.section`
  position: relative;
  margin-top: 5rem;
  padding: 3rem;
  background: #fff;
  width: 40%;
  max-width: 700px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  animation: fadeInForm 2s ease-in-out;
  margin: 2rem auto;
  z-index: 1;

  @keyframes fadeInForm {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #f39c12;
    text-align: center;
    letter-spacing: 1px;
    animation: fadeInHeader 1.5s ease-in-out;

    @keyframes fadeInHeader {
      0% {
        opacity: 0;
        transform: translateY(-30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    animation: slideIn 1.5s ease-out;

    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateX(-50px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  input,
  textarea {
    padding: 0.8rem;
    font-size: 1rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    transition: all 0.3s ease;
    outline: none;

    &:focus {
      border-color: #f39c12;
      box-shadow: 0 0 8px rgba(243, 156, 18, 0.2);
    }

    &::placeholder {
      color: #aaa;
      font-size: 1rem;
    }
  }

  textarea {
    resize: vertical;
  }

  button {
    padding: 0.7rem;
    font-size: 1rem;
    background-color: #f39c12;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    max-width: 150px;
    align-self: center;

    &:hover {
      background-color:#f4a261;
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  
  }
`;

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <ContactSection>
      <Heading>Contact Us</Heading>

      <Helmet>
        <meta
          name="description"
          content="Get in touch with BK Enterprises today. Whether you need consultation, have inquiries about our services, or wish to explore how we can help your business grow, we're here to assist you."
        />
        <meta
          name="keywords"
          content="contact BK Enterprises, business consultation, customer support, business inquiries"
        />
      </Helmet>

      {/* Contact Information */}
      <InfoSection>
        <InfoCard>
          <FaPhoneAlt className="icon" />
          <h3>Phone</h3>
          <p>+91 90214 62299</p>
          <p>+91 76664 74280</p>
          <p className="description">
            Call us for quick support and inquiries.
          </p>
        </InfoCard>

        <InfoCard>
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>bkelerewinding@gmail.com</p>
          <p>bkenterprises.rew2021@gmail.com</p>
          <p className="description">
            Send us an email for more detailed information.
          </p>
        </InfoCard>

        <InfoCard>
          <FaMapMarkerAlt className="icon" />
          <h3>Location</h3>
          <p>
            Plot no-5, Near Sai Mandir, Surksha Nagar, Dattawadi, Nagpur-440023
          </p>
          <p className="description">
            Come visit our office for in-person consultations.
          </p>
        </InfoCard>
      </InfoSection>

      {/* Google Map Embed */}
      <MapWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.2890437124006!2d78.99390655811506!3d21.153097198646304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eb01ecfd730d%3A0x6473f5674c8cbada!2sBK%20Electric%20%26%20Rewinding%20Works!5e0!3m2!1sen!2sin!4v1709907158997!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapWrapper>

      {/* Contact Form */}
      <FormSection>
        <h3>Send Us a Message</h3>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="e342433a-c3f1-4a7d-8aab-1bd606c2e33f"
          />

          <label
            htmlFor="name"
            style={{ position: "absolute", left: "-9999px" }}
          >
            Name
          </label>
          <input type="text" name="name" placeholder="Your Name" required />

          <label
            htmlFor="email"
            style={{ position: "absolute", left: "-9999px" }}
          >
            Email
          </label>
          <input type="email" name="email" placeholder="Your Email" required />

          <label
            htmlFor="message"
            style={{ position: "absolute", left: "-9999px" }}
          >
            Message
          </label>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </FormSection>
    </ContactSection>
  );
}

export default Contact;
