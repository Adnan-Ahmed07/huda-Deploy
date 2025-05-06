import React from 'react';
import { Heart } from 'lucide-react';

interface LoveButtonProps {
  onClick: () => void;
  isActive: boolean;
}

const LoveButton: React.FC<LoveButtonProps> = ({ onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`
        group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-full 
        transition-all duration-500 ease-in-out transform hover:scale-105
        ${isActive 
          ? 'bg-pink-100 text-rose-600 shadow-inner'
          : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg hover:shadow-pink-200/50'
        }
        focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50
      `}
    >
      <div className="relative z-10 flex items-center gap-2">
        <Heart 
          size={16} 
          className={`${!isActive && 'animate-pulse'} transition-all sm:w-5 sm:h-5`} 
          fill={isActive ? 'currentColor' : 'none'} 
        />
        <span className="text-sm sm:text-base font-medium whitespace-nowrap">
          {isActive ? 'Witness Our Love Story' : 'Reveal Our Love Story'}
        </span>
      </div>
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 
          transition-all duration-300 ease-out 
          ${isActive ? 'opacity-0' : 'opacity-100'}
        `}
      />
      {!isActive && (
        <div className="absolute -inset-full h-32 w-32 z-0 transform rotate-45 translate-x-12 -translate-y-2 opacity-20 bg-white rounded-full animate-pulse group-hover:animate-none" />
      )}
    </button>
  );
};

export default LoveButton;