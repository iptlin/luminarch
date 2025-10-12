import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section brand-section">
            <div className="footer-logo">
              <h3>LUMINARCH</h3>
            </div>
            <p>
              Our creations are all unique pieces made with precision engineering 
              and fully customizable to your architectural vision.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Pinterest">📌</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">Our Story</a></li>
              <li><a href="/custom">Custom Solutions</a></li>
              <li><a href="/news">News & Updates</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/design">Design Consultation</a></li>
              <li><a href="/installation">Installation</a></li>
              <li><a href="/maintenance">Maintenance</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              {/* <p>📍 Innovation District<br />San Francisco, CA 94107<br />United States</p>
              <p>📞 +1 (555) 123-4567</p> */}
              <p>✉️ info@luminarch.com</p>
            </div>
          </div>

          <div className="footer-section newsletter-section">
            <h4>Stay Connected</h4>
            <p>Receive exclusive lighting innovations and project showcases straight to your inbox.</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Luminarch. All rights reserved. Illuminating architectural excellence worldwide.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;