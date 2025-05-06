import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 sm:py-6 px-4 flex justify-center items-center">
      <div className="flex items-center gap-1 sm:gap-2">
        <Heart className="text-rose-500 animate-pulse w-4 h-4 sm:w-6 sm:h-6" />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-700">Huda Bhai's Love Story</h1>
        <Heart className="text-rose-500 animate-pulse w-4 h-4 sm:w-6 sm:h-6" />
      </div>
    </header>
  );
};

export default Header;