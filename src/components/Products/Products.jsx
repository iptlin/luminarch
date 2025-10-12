import React from 'react';
import './Products.css';

const Products = () => {
  const productCategories = [
    {
      id: 1,
      title: "Modern Fixtures",
      description: "Contemporary lighting solutions for modern architectural spaces",
      image: "/images/modern-fixtures.jpeg",
      link: "/products/modern-fixtures"
    },
    {
      id: 2,
      title: "Ambient Systems",
      description: "Intelligent lighting compositions for immersive environments",
      image: "/images/ambient-systems.jpeg",
      link: "/products/ambient-systems"
    },
    {
      id: 3,
      title: "Architectural Elements",
      description: "Integrated lighting solutions for building facades and structures",
      image: "/images/architectural-elements.png",
      link: "/products/architectural-elements"
    },
    {
      id: 4,
      title: "Outdoor Installations",
      description: "Weather-resistant lighting for exterior architectural features",
      image: "/images/outdoor-installations.jpeg",
      link: "/products/outdoor-installations"
    }
  ];

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Illumination Solutions For Every Vision</h2>
          <p>
            Modern or traditional architecture? Single or multi-level installations? 
            Whatever your lighting needs may be, we have the perfect solution for you.
          </p>
          <button className="btn-primary">Discover All Products</button>
        </div>
        
        <div className="products-grid grid grid-2x2">
          {productCategories.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <div className="product-overlay">
                  <button className="product-link">View Category</button>
                </div>
              </div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;