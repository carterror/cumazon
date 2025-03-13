import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function Logo({ size = 'medium', className = '' }: LogoProps) {
  // Load Google Font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Righteous&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Clean up
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const sizeClasses = {
    small: 'text-xl',
    medium: 'text-3xl',
    large: 'text-6xl',
  };

  return (
    <Link to="/" className={`font-bold flex items-center transition-transform hover:scale-105 ${className}`}>
      <h1 className={`font-['Righteous'] ${sizeClasses[size]}`} style={{ letterSpacing: '0.5px' }}>
        <span className="text-cuba-red">C</span>
        <span className="text-cuba-darkBlue">u</span>
        <span className="text-white">m</span>
        <span className="text-cuba-darkBlue">a</span>
        <span className="text-white">z</span>
        <span className="text-cuba-darkBlue">o</span>
        <span className="text-white">n</span>
      </h1>
    </Link>
  );
}
