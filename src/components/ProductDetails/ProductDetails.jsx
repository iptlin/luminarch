import React from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
  const productDetails = [
    {
      id: 1,
      category: "Modern Fixtures",
      tagline: "Redefining Contemporary Architecture",
      description: "Our modern fixtures collection represents the pinnacle of contemporary lighting design. Each piece is meticulously crafted using premium materials and cutting-edge LED technology to deliver exceptional performance and aesthetic appeal.",
      features: [
        "Ultra-efficient LED technology with 50,000+ hour lifespan",
        "Customizable color temperature from 2700K to 6500K",
        "Precision-engineered aluminum housing with premium finishes",
        "Seamless integration with smart building systems",
        "Energy consumption reduction up to 80% compared to traditional lighting"
      ],
      applications: ["Corporate Offices", "Retail Spaces", "Museums", "High-end Residential"],
      image: "/images/modern-fixtures.jpeg"
    },
    {
      id: 2,
      category: "Ambient Systems",
      tagline: "Creating Immersive Light Environments",
      description: "Transform any space with our ambient lighting systems that create dynamic, mood-enhancing environments. Perfect for hospitality, retail, and residential applications where atmosphere is paramount.",
      features: [
        "Dynamic color-changing capabilities with millions of hues",
        "Synchronized lighting scenes and sequences",
        "Integration with music and audio systems",
        "Wireless control via mobile applications",
        "Weather-resistant options for outdoor installations"
      ],
      applications: ["Hotels & Restaurants", "Event Venues", "Luxury Homes", "Entertainment Centers"],
      image: "/images/ambient-systems.jpeg"
    },
    {
      id: 3,
      category: "Architectural Elements",
      tagline: "Illuminating Structural Beauty",
      description: "Our architectural lighting elements seamlessly integrate with building structures to highlight design features and create stunning visual impacts. From facade lighting to structural accents.",
      features: [
        "Custom-designed fixtures for unique architectural features",
        "Linear LED systems for continuous light lines",
        "Facade and building outline illumination",
        "Structural integration with minimal visual impact",
        "Weather-resistant and maintenance-free designs"
      ],
      applications: ["Commercial Buildings", "Bridges & Infrastructure", "Historical Buildings", "Public Spaces"],
      image: "/images/architectural-elements.png"
    },
    {
      id: 4,
      category: "Outdoor Installations",
      tagline: "Extending Light Beyond Boundaries",
      description: "Illuminate exterior spaces with our robust outdoor lighting solutions. Designed to withstand harsh weather conditions while delivering consistent, beautiful illumination for landscapes and architectural features.",
      features: [
        "IP65/IP67 weatherproof ratings for all conditions",
        "Corrosion-resistant marine-grade materials",
        "Low-voltage options for safety and efficiency",
        "Photocell and timer controls for automatic operation",
        "Ground stakes, wall mounts, and pole-mounting options"
      ],
      applications: ["Landscape Architecture", "Parking Areas", "Walkways & Paths", "Building Perimeters"],
      image: "/images/outdoor-installations.jpeg"
    }
  ];

  return (
    <section id="product-details" className="product-details section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Engineering Excellence in Every Detail</h2>
          <p>
            Discover the innovative features and applications that make our lighting solutions 
            the preferred choice for architects and designers worldwide.
          </p>
        </div>

        <div className="details-showcase">
          {productDetails.map((product, index) => (
            <div key={product.id} className={`detail-section ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="detail-content">
                <div className="detail-text">
                  <h3>{product.category}</h3>
                  <h4 className="tagline">{product.tagline}</h4>
                  <p className="description">{product.description}</p>
                  
                  <div className="features">
                    <h5>Key Features:</h5>
                    <ul>
                      {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="applications">
                    <h5>Applications:</h5>
                    <div className="application-tags">
                      {product.applications.map((app, idx) => (
                        <span key={idx} className="tag">{app}</span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="btn-secondary">Learn More</button>
                </div>
                
                <div className="detail-image">
                  <img src={product.image} alt={product.category} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section text-center">
          <h3>Ready to Transform Your Space?</h3>
          <p>Contact our lighting specialists to discuss your project requirements</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Consultation</button>
            <button className="btn-secondary">Download Catalog</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;