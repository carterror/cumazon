import React, { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  duration?: number;
};

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.5,
}) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(20px)';
      case 'down': return 'translateY(-20px)';
      case 'left': return 'translateX(20px)';
      case 'right': return 'translateX(-20px)';
      case 'none': return 'none';
      default: return 'translateY(20px)';
    }
  };

  return (
    <div
      // @ts-ignore - TypeScript doesn't recognize ref correctly here
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : getTransform(),
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
