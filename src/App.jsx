import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from "react-helmet";

// Lazy load the page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

// Global styles
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

function App() {
  return (
    <div>
       <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "B K Enterprises",
  "description": "BK Enterprises provides top-notch electrical and mechanical services, catering to residential, commercial, and industrial needs.",
  "url": "https://bkenterprises.netlify.app",
  "telephone": "+91 90214 62299",
  "email": "bkelerewinding@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Aamrawati Road",
    "addressLocality": "Nagpur",
    "addressRegion": "Maharashtra",
    "postalCode": "440023",
    "addressCountry": "India"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "image": "../assets/mainimg.webp",
  "serviceArea": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagpur",
    "addressRegion": "Maharashtra",
      "addressCountry": "India"
    }
  },
  "priceRange": "Rs",
  "services": [
    {
      "@type": "Service",
      "name": "Electrical Services",
      "description": "Complete electrical installation, repair, and maintenance for residential, commercial, and industrial projects."
    },
    {
      "@type": "Service",
      "name": "Mechanical Services",
      "description": "High-quality mechanical solutions including HVAC systems, machinery repair, and custom fabrication."
    }
  ]
}
)}
        </script>
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
