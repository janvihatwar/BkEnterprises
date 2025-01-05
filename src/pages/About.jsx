import React, { useEffect } from "react";
import styled,{ createGlobalStyle }  from 'styled-components';
const backgroundImage = require("../assets/img6.jpg");
const backImageWebp = require("../assets/img6.webp");
const Helmet = React.lazy(() => import('react-helmet'));

const icons = {
  GoGoal: React.lazy(() => import('react-icons/go').then(module => ({ default: module.GoGoal }))),
  FaHandHoldingHeart: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaHandHoldingHeart }))),
  FaCogs: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaCogs }))),
  FaRegClock: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaRegClock }))),
  FaHandsHelping: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaHandsHelping }))),
  FaUsers: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaUsers }))),
  FaExclamationTriangle: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaExclamationTriangle }))),
  FaTools: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaTools }))),
  FaShieldAlt: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaShieldAlt }))),
  FaBullhorn: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBullhorn }))),
  FaRegLightbulb: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaRegLightbulb }))),
  FaHandshake: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaHandshake }))),
  FaUsersCog: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaUsersCog }))),
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;  /* Hides horizontal scrollbar */
    overflow-y: scroll;  /* Allows vertical scrolling */
    scrollbar-width: none;  /* Firefox */
  }

  /* For Webkit browsers (Chrome, Safari, Edge) */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const isWebpSupported = () => {
  const canvas = document.createElement("canvas");
  return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
};

// Styled components
const AboutContainer = styled.div`
  font-family: Arial, sans-serif;
  color: rgba(249, 174, 147, 0.3);
   overflow: hidden;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 70vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.75)),
    url(${() => (isWebpSupported() ? backImageWebp : backgroundImage)});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; 
  color: "#fff";
  overflow: hidden;

  h1 {
    z-index: 1;
    font-size: 3rem;
    color: white;
    animation: fadeIn 2s ease-in-out;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  svg {
    fill: white;
    width: 45px;
    height: 45px;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  gap: 2rem;
  background-color: 'rgba(249, 174, 147, 0.3)';
  animation: fadeUp 1.5s ease-out;

  @keyframes fadeUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  color:#f4a261;
  margin-bottom: 1rem;
`;

const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: black;
  max-width: 800px;
`;

const SectionIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color:#f4a261;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    width: 40px;
    height: 40px;
    color: white;
  }
`;

const CoreValuesList = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 1.1rem;
  line-height: 1.8;
  color: black;
  max-width: 800px;
  margin-top: 2rem;

  li {
    margin-bottom: 2rem;
    display: flex;
    align-items: flex-start;
    gap: 15px;
    transition: transform 0.3s ease;
  }

  li:hover {
    transform: translateX(5px);
  }

  h3 {
    font-size: 1.3rem;
    color: black;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    color: black;
  }
`;

const MissionDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  max-width: 800px;
  color: black;
`;

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <Helmet>
        <meta
          name="description"
          content="BK Enterprises is committed to providing exceptional business solutions that cater to the unique needs of your organization. Our expertise drives innovation and results across various industries."
        />
        <meta
          name="keywords"
          content="about BK Enterprises, business expertise, innovation, company mission"
        />
      </Helmet>
    {/* Apply the global styles */}
    <GlobalStyle />
    <AboutContainer>
      {/* Hero Section */}
      <HeroSection>
        <h1>About Us</h1>
      </HeroSection>

      {/* Mission Section */}
      <Section bgColor="#f0f8ff">
        <SectionIcon>
        <icons.GoGoal />
        </SectionIcon>
        <div>
          <SectionTitle>Our Mission</SectionTitle>
          <MissionDescription>
          Our mission is to be a trusted leader in providing top-notch electrical and mechanical services, offering innovative, energy-efficient, and cost-effective solutions. We prioritize customer satisfaction, safety, and sustainability in every project, ensuring seamless execution and long-lasting results. Choose us for reliable, professional services tailored to your unique needs.
          </MissionDescription>
        </div>
      </Section>

      {/* Team Section */}
      <Section >
        <SectionIcon>
          <icons.FaUsers />
        </SectionIcon>
        <div>
          <SectionTitle>Our Team</SectionTitle>
          <SectionText>
          Our team comprises skilled professionals dedicated to delivering exceptional electrical and mechanical services. With a commitment to innovation, expertise, and reliability, we work collaboratively to ensure every project exceeds expectations. We prioritize safety, efficiency, and customer satisfaction, making us a dependable partner for all your service needs.
          </SectionText>
        </div>
      </Section>

      {/* Core Values Section */}
      <Section>
        <div>
          <SectionTitle>Core Values</SectionTitle>
          <SectionText>Integrity, excellence, and innovation guide everything we do.</SectionText>
          <CoreValuesList>
            <li>
              <icons.FaExclamationTriangle  size={50} color="#f4a261" />
              <p><b>Safety First, Quality Always:</b> We prioritize the safety and health of our employees, clients, and partners, ensuring that all projects are executed with the utmost attention to quality and safety standards.</p>
            </li>
            <li>
            <icons.FaHandHoldingHeart size={50} color="#f4a261" />
              <p><b>Integrity:</b> We maintain uncompromising standards of integrity and ethical conduct, building trust through transparency and honesty in all our dealings.</p>
            </li>
            <li>
              <icons.FaBullhorn  size={40} color="#f4a261" />
              <p><b>Service Leadership:</b> We lead with professionalism and responsiveness, consistently delivering superior service quality to our clients.</p>
            </li>
            <li>
              <icons.FaRegLightbulb  size={36} color="#f4a261" />
              <p><b>Innovation: </b> We support continuous growth and improvement, embracing new ideas and technologies to provide advanced solutions.</p>
            </li>
            <li>
              <icons.FaHandshake  size={50} color="#f4a261" />
              <p><b>Pride and Respect:</b> We hold deep respect for our clients, each other, and all stakeholders, taking pride in our work and the relationships we build. </p>
            </li>
            <li>
              <icons.FaUsersCog  size={50} color="#f4a261" />
              <p><b>Teamwork: </b>  We believe in global teamwork and collaboration, working together to achieve common goals and deliver exceptional results.</p>
            </li>
          </CoreValuesList>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section >
        <div>
          <SectionTitle>Why Choose Us?</SectionTitle>
          <SectionText>
            We offer top-notch quality, innovative solutions, and a customer-first approach.
          </SectionText>
          <CoreValuesList>
            <li>
              <icons.FaTools  size={45} color="#f4a261" />
              <p><b>Expertise and Experience:</b>Our team comprises highly skilled professionals with extensive experience in both electrical and mechanical services, ensuring top-notch solutions tailored to your specific requirements.</p>
            </li>
            <li>
              <icons.FaShieldAlt  size={40} color="#f4a261" />
              <p><b>Quality Assurance:</b> We adhere to the highest industry standards, utilizing premium materials and advanced techniques to deliver reliable and durable results.</p>
            </li>
            <li>
              <icons.FaHandsHelping  size={45} color="#f4a261" />
              <p><b>Customer-Centric Approach:</b> Your satisfaction is our priority. We work closely with you to understand your needs, providing personalized services that exceed expectations.</p>
            </li>
            <li>
              <vFaRegClock  size={40} color="#f4a261" />
              <p><b>Timely and Efficient Service:</b> We value your time and are dedicated to completing projects within agreed timelines without compromising on quality.</p>
            </li>
            <li>
              <icons.FaCogs  size={45} color="#f4a261" />
              <p><b>Comprehensive Solutions:</b> From installation and maintenance to emergency repairs, we offer a wide range of services to meet all your electrical and mechanical needs.</p>
            </li>
          </CoreValuesList>
        </div>
      </Section>
    </AboutContainer>
    </>
  );
}

export default About;
