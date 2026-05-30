import React, { useState } from 'react';
import './Header.css';

const Header = ({ currentPath, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isPrivacyPage = currentPath === '/privacy';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeNavigation = (e) => {
    if (!onNavigate) {
      return;
    }

    e.preventDefault();
    setIsMenuOpen(false);
    onNavigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" itemScope itemType="https://schema.org/Organization">
            <a href="/" aria-label="Luminarch - Home page" onClick={handleHomeNavigation}>
              <h2 itemProp="name">LUMINARCH</h2>
            </a>
          </div>
          
          {isPrivacyPage ? (
            <div className="header-page-link">
              <a href="/" onClick={handleHomeNavigation} aria-label="Back to the home page">
                Back to Home
              </a>
            </div>
          ) : (
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} role="navigation" aria-label="Main navigation">
              <ul className="nav-list">
                <li><a href="#products" aria-label="View our architectural lighting products">Products</a></li>
                <li><a href="#product-details" aria-label="Detailed product specifications and features">Product Details</a></li>
                <li><a href="#about" aria-label="About Luminarch company">About Us</a></li>
                <li><a href="#contact" aria-label="Contact Luminarch for inquiries">Contact</a></li>
              </ul>
            </nav>
          )}
          
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
