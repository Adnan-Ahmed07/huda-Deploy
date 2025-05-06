import React, { useState } from 'react';
import Header from '../components/Header';
import LoveButton from '../components/LoveButton';
import PhotoSlideshow from '../components/PhotoSlideshow';

const HomePage: React.FC = () => {
  const [showSlideshow, setShowSlideshow] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100">
      <div className="container mx-auto px-4 py-6 sm:py-12">
        <Header />

        <div className="max-w-2xl mx-auto mt-4 sm:mt-8 text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-rose-800 mb-4 sm:mb-6 leading-tight">
            See the <span className="text-rose-600">Huda bhai's</span> beautiful love story
          </h2>
          
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            A tale of romance, A celebration of Huda bhai's beautiful love journey
          </p>

          <div className="flex justify-center mb-8 sm:mb-12">
            <LoveButton 
              onClick={() => setShowSlideshow(!showSlideshow)} 
              isActive={showSlideshow}
            />
          </div>

          <div className={`mt-6 sm:mt-8 transition-all duration-700 ease-in-out ${
            showSlideshow ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12 pointer-events-none'
          }`}>
            <PhotoSlideshow isVisible={showSlideshow} />
          </div>
        </div>

        {!showSlideshow && (
          <div className="flex justify-center mt-12 sm:mt-20">
            <div className="flex flex-col items-center animate-bounce">
              <p className="text-rose-500 font-medium mb-2">Click to reveal</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L6 10H18L12 16Z" fill="#F43F5E" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <footer className="py-4 sm:py-6 bg-rose-900 text-white text-center mt-12 sm:mt-20">
        <p className="text-xs sm:text-sm text-rose-200">
          This Website Create By Adnan Ahmed &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default HomePage;