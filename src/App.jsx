import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import './App.css';

const getCurrentPath = () => window.location.pathname || '/';

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getCurrentPath());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (path) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const isPrivacyPage = currentPath === '/privacy';

  return (
    <div className="App">
      <Header currentPath={currentPath} onNavigate={navigateTo} />
      <main>
        {isPrivacyPage ? (
          <PrivacyPolicy />
        ) : (
          <>
            <Hero />
            <Products />
            <ProductDetails />
          </>
        )}
      </main>
      <Footer currentPath={currentPath} onNavigate={navigateTo} />
    </div>
  );
}

export default App;
