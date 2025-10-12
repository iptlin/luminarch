import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" itemScope itemType="https://schema.org/Organization">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src="/images/ambient-systems.jpeg" 
          alt="Luminarch premium architectural lighting solutions showcasing modern ambient lighting systems in contemporary building interior" 
          className="hero-image"
          itemProp="image"
        />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 itemProp="name">Architectural lighting solutions with a vision for excellence.</h1>
            <p itemProp="description">
              Illuminating spaces with cutting-edge design and sustainable technology. 
              Each installation is crafted to transform environments and inspire experiences.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" aria-label="Discover our architectural lighting solutions and products">Discover Our Solutions</button>
              <button className="btn-secondary" aria-label="View our portfolio of completed lighting projects">View Projects</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow" aria-hidden="true">
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