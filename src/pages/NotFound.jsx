import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Add your image import here
import notFoundImage from "./assets/PageNotFound.jpg";  // Update with your actual image path
import notFoundImageWebp from "./assets/PageNotFound.webp";
const NotFound = () => {
  return (
    <NotFoundContainer>
      <picture>
            <source srcSet={notFoundImageWebp} type="image/webp" />
            <img src={notFoundImage} alt="404" loading="lazy" style={imageStyle} />
          </picture>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go Back to Home</Link>
    </NotFoundContainer>
  );
};

// Styled-component with media queries for responsiveness
const NotFoundContainer = styled.div`
  text-align: center;
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 3em;
    color: #333;
  }

  p {
    font-size: 1.2em;
    color: #666;
  }

  a {
    font-size: 1.2em;
    color: #007BFF;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
  }

  /* Media Query for Smaller Screens */
  @media (max-width: 768px) {
    padding: 20px;

    h1 {
      font-size: 2.5em;
    }

    p {
      font-size: 1.1em;
    }

    a {
      font-size: 1.1em;
    }

    img {
      max-width: 90%;
      margin-top: 15px;
    }
  }

  /* Media Query for Extra Small Screens */
  @media (max-width: 480px) {
    h1 {
      font-size: 2em;
    }

    p {
      font-size: 1em;
    }

    a {
      font-size: 1em;
    }

    img {
      max-width: 80%;
      margin-top: 10px;
    }
  }
`;

export default NotFound;
