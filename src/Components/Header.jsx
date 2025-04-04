/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#home">Blxnk</a>
        </div>
        
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a></li>
            <li><a href="#footer" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
