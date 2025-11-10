import React from 'react';
import HeroSection from './components/HeroSection';
import AuthCTA from './components/AuthCTA';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 antialiased dark:bg-[#0b0b12] dark:text-white">
      <HeroSection />
      <AuthCTA />
      <FeatureGrid />
      <Footer />
    </div>
  );
}

export default App;
