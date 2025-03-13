import React from 'react';

interface CarouselDotsProps {
  total: number;
  active: number;
  onDotClick: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ total, active, onDotClick }) => {
  return (
    <div className="flex justify-center mt-6 gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button 
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            active === index ? 'bg-cuba-darkBlue w-4' : 'bg-gray-300 w-2 hover:bg-gray-400'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
