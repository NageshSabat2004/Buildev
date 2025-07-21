import React from 'react';
import '../index.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        BUILDEV<span className="highlight">.</span>
        <span className="logo2">in</span>
      </div>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#team">Our Teams</a>
        <a href="#contact">Contact</a>
      </div>

      <p className="footer-text">
        © {new Date().getFullYear()} BUILDEV.in | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
