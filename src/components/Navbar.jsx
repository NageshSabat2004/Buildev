import React, { useState } from 'react';
import '../index.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        BUILDEV<span className="highlight">.</span>
        <span className="logo2">in</span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li onClick={() => scrollToSection('home')}>HOME</li>
        <li onClick={() => scrollToSection('services')}>SERVICES</li>
        <li onClick={() => scrollToSection('portfolio')}>PORTFOLIO</li>
        <li onClick={() => scrollToSection('team')}>OUR TEAM</li>
      </ul>

      <div className="contact-menu">
        {/* Contact button always visible */}
      <button className="contact-btn" onClick={() => scrollToSection('contact')}>
        CONTACT
      </button>

      {/* Menu button (hamburger) */}
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
