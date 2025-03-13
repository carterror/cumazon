import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import CarouselDots from './CarouselDots';

export interface FeaturedProduct {
  id: number;
  title: string;
  price: number;
  discount?: number;
  image: string;
  position?: 'left' | 'center' | 'right';
}

export default function FeaturedProductsShowcase() {
  // Sample featured products data
  const featuredProducts: FeaturedProduct[] = [
    {
      id: 1,
      title: "Nike Air Max",
      price: 129.99,
      discount: 25,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    },
    {
      id: 2,
      title: "Apple iPhone 15 Pro",
      price: 999.99,
      discount: 15,
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600"
    },
    {
      id: 3,
      title: "Sony WH-1000XM5",
      price: 349.99,
      discount: 20,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  
  // Function to handle next slide
  const nextSlide = () => {
    if (isTransitioning) return;
    
    setDirection('right');
    setIsTransitioning(true);
    setActiveIndex(prevIndex => (prevIndex + 1) % featuredProducts.length);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
      setDirection(null);
    }, 500);
  };
  
  // Function to handle previous slide
  const prevSlide = () => {
    if (isTransitioning) return;
    
    setDirection('left');
    setIsTransitioning(true);
    setActiveIndex(prevIndex => 
      prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1
    );
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
      setDirection(null);
    }, 500);
  };
  
  // Auto rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isTransitioning]);
  
  // Get the products to display in the carousel
  const getCarouselProducts = () => {
    const productsCount = featuredProducts.length;
    const prevIndex = activeIndex === 0 ? productsCount - 1 : activeIndex - 1;
    const nextIndex = (activeIndex + 1) % productsCount;
    
    return [
      { ...featuredProducts[prevIndex], position: 'left' },
      { ...featuredProducts[activeIndex], position: 'center' },
      { ...featuredProducts[nextIndex], position: 'right' },
    ];
  };

  return (
    <div className="relative hidden md:block py-12">
      {/* Decorative circle element */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cuba-red/20 blur-xl"></div>
      
      <div className="relative z-10">
        <div className="relative flex justify-center items-center">
          {/* Navigation buttons */}
          <NavigationButton 
            direction="left" 
            onClick={prevSlide} 
            disabled={isTransitioning}
          />
          
          <div className="flex justify-center items-center h-96 w-full overflow-hidden relative perspective-1000">
            <ProductCarousel 
              products={getCarouselProducts()} 
              isTransitioning={isTransitioning} 
              direction={direction}
            />
          </div>
          
          <NavigationButton 
            direction="right" 
            onClick={nextSlide} 
            disabled={isTransitioning}
          />
        </div>
        
        {/* Indicator dots */}
        <CarouselDots 
          total={featuredProducts.length} 
          active={activeIndex} 
          onDotClick={(index) => {
            if (!isTransitioning && index !== activeIndex) {
              setIsTransitioning(true);
              setDirection(index > activeIndex ? 'right' : 'left');
              setActiveIndex(index);
              setTimeout(() => {
                setIsTransitioning(false);
                setDirection(null);
              }, 500);
            }
          }} 
        />
      </div>
    </div>
  );
}

// Navigation Button Component
interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick, disabled }) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`absolute ${direction === 'left' ? 'left-4' : 'right-4'} z-20 
                 bg-white/80 p-2 rounded-full shadow-md hover:bg-white 
                 transition-colors hover:scale-110 active:scale-95
                 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      aria-label={`Move ${direction}`}
    >
      {direction === 'left' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );
};

// Product Carousel Component
interface ProductCarouselProps {
  products: FeaturedProduct[];
  isTransitioning: boolean;
  direction: 'left' | 'right' | null;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, isTransitioning, direction }) => {
  return (
    <>
      {products.map((product) => {
        const isCenter = product.position === 'center';
        const isLeft = product.position === 'left';
        const isRight = product.position === 'right';
        
        // Calculate animation classes based on position and transition direction
        let animationClass = '';
        if (isTransitioning && direction) {
          if (direction === 'right') {
            if (isCenter) animationClass = 'animate-slide-from-right';
            if (isLeft) animationClass = 'animate-slide-to-left';
            if (isRight) animationClass = 'animate-slide-center-from-right';
          } else if (direction === 'left') {
            if (isCenter) animationClass = 'animate-slide-from-left';
            if (isRight) animationClass = 'animate-slide-to-right';
            if (isLeft) animationClass = 'animate-slide-center-from-left';
          }
        }
        
        return (
          <div
            key={`${product.id}-${product.position}`}
            className={`absolute transition-all duration-500 ease-in-out transform-gpu ${
              isCenter 
                ? 'z-30 scale-110 opacity-100 translate-y-0 rotateY-0 translate-z-0' 
                : (isLeft 
                  ? 'z-10 -translate-x-32 translate-z-[-100px] opacity-60 scale-90 -translate-y-5 rotateY-15' 
                  : 'z-10 translate-x-32 translate-z-[-100px] opacity-60 scale-90 -translate-y-5 rotateY-[-15deg]')
            } ${animationClass}`}
          >
            <ProductCard product={product} isCenter={isCenter} />
          </div>
        );
      })}
    </>
  );
};
