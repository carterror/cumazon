import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  // Handle route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Track scroll position
  useEffect(() => {
    const checkScrollHeight = () => {
      // Show button when user scrolls down 300px
      if (!showButton && window.scrollY > 300) {
        setShowButton(true);
      } else if (showButton && window.scrollY <= 300) {
        setShowButton(false);
      }
    };
    
    window.addEventListener('scroll', checkScrollHeight);
    
    return () => {
      window.removeEventListener('scroll', checkScrollHeight);
    };
  }, [showButton]);
  
  // Handle smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Render the back to top button
  return (
    <button 
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 bg-cuba-trust hover:bg-cuba-darkBlue text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center ${
        showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <ArrowUp size={24} />
    </button>
  );
}
