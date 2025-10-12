import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src="/images/ambient-systems.jpeg" 
          alt="Luminarch Architectural Lighting" 
          className="hero-image"
        />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Architectural lighting store with a vision for excellence.</h1>
            <p>
              Illuminating spaces with cutting-edge design and sustainable technology. 
              Each installation is crafted to transform environments and inspire experiences.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Discover Our Solutions</button>
              <button className="btn-secondary">View Projects</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;