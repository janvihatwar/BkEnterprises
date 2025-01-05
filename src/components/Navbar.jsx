import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navbarStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '1000',
    padding: '20px 20px',
    width: '100%',  // Full-width for navbar
  };

  const navbarWrapperStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 10px',
  };

  const logoStyle = {
    color: '#f4a261',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    cursor: 'pointer',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '50px',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: '#f4a261',
    fontSize: '1.2rem',
    fontWeight: '600',
    transition: 'color 0.3s',
  };

  const navLinkHoverStyle = {
    color: '#f4a261',
  };

  const mobileMenuIconStyle = {
    display: 'none',
    fontSize: '2.5rem',
    color: 'rgb(244, 162, 97)',
    cursor: 'pointer',
  };

  const mobileMenuStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '80%',
    maxWidth: '300px',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '300%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0)',  // Initially hidden
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(211, 70, 19, 0.14)',
    borderRadius: '8px',
    opacity: '0',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
  };

  const mobileMenuVisibleStyle = {
    transform: 'translate(-50%, -50%) scale(1)',  // Show with scale effect
    opacity: '1',
  };

  const mobileNavLinkStyle = {
    textDecoration: 'none',
    color: '#f4a261',
    fontSize: '1.5rem',
    fontWeight: '500',
    padding: '10px',
    transition: 'color 0.3s',
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={navbarStyle}>
      <div style={navbarWrapperStyle}>
        <h1 style={logoStyle}>B K Enterprises</h1>

        {/* Mobile Menu Icon (☰) */}
        <div
          style={{
            ...mobileMenuIconStyle,
            display: windowWidth < 768 && !isMenuOpen ? 'block' : 'none',
          }}
          onClick={handleMenuToggle}
        >
          ☰
        </div>

        {/* Close Icon (✖) */}
        <div
          style={{
            ...mobileMenuIconStyle,
            display: windowWidth < 768 && isMenuOpen ? 'block' : 'none',
          }}
          onClick={handleMenuToggle}
        >
          ✖
        </div>

        {/* Desktop Navigation Links */}
        <ul
          style={{
            ...navLinksStyle,
            display: windowWidth >= 768 ? 'flex' : 'none',
          }}
        >
          <li>
            <Link
              to="/"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = navLinkHoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = navLinkHoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = navLinkHoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = navLinkHoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        style={{
          ...mobileMenuStyle,
          ...(isMenuOpen ? mobileMenuVisibleStyle : {}),
        }}
      >
        <Link
          to="/"
          style={mobileNavLinkStyle}
          onClick={handleMenuToggle}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={mobileNavLinkStyle}
          onClick={handleMenuToggle}
        >
          About
        </Link>
        <Link
          to="/services"
          style={mobileNavLinkStyle}
          onClick={handleMenuToggle}
        >
          Services
        </Link>
        <Link
          to="/contact"
          style={mobileNavLinkStyle}
          onClick={handleMenuToggle}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
