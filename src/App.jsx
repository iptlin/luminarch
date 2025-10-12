import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Products />
        <ProductDetails />
      </main>
      <Footer />
    </div>
  );
}

export default App;
