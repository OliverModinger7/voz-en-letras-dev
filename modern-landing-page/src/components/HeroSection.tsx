import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Landing Page</h1>
      <p className="text-lg mb-8">Discover amazing features and benefits that will enhance your experience.</p>
      <a href="#contact" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition">
        Get Started
      </a>
    </section>
  );
};

export default HeroSection;