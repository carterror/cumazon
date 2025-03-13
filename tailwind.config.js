/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cuba: {
          blue: '#0B60B0',
          red: '#CC0000',
          white: '#FFFFFF',
          darkBlue: '#003366',
          lightBlue: '#1A8FE3',
          secondary: '#D0CAB2',
          accent: '#E25822',
          trust: '#2A5783'
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideIn: 'slideIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.4s ease-in-out',
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        floating: 'floating 6s ease-in-out infinite',
        'card-transition': 'cardTransition 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-from-right': 'slideFromRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-from-left': 'slideFromLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-to-left': 'slideToLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-to-right': 'slideToRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-center-from-right': 'slideCenterFromRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-center-from-left': 'slideCenterFromLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px) rotate(3deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        cardTransition: {
          '0%': { transform: 'translateZ(-50px) scale(0.85)', opacity: 0 },
          '100%': { transform: 'translateZ(0) scale(1)', opacity: 1 },
        },
        slideFromRight: {
          '0%': { opacity: 0.3, transform: 'translateX(100px) translateZ(-100px) scale(0.8) rotateY(-15deg)' },
          '100%': { opacity: 1, transform: 'translateZ(0) scale(1.1) rotateY(0)' },
        },
        slideFromLeft: {
          '0%': { opacity: 0.3, transform: 'translateX(-100px) translateZ(-100px) scale(0.8) rotateY(15deg)' },
          '100%': { opacity: 1, transform: 'translateZ(0) scale(1.1) rotateY(0)' },
        },
        slideToLeft: {
          '0%': { opacity: 1, transform: 'translateZ(0) scale(1.1) rotateY(0)' },
          '100%': { opacity: 0.6, transform: 'translateX(-32px) translateZ(-100px) scale(0.9) translateY(-5px) rotateY(15deg)' },
        },
        slideToRight: {
          '0%': { opacity: 1, transform: 'translateZ(0) scale(1.1) rotateY(0)' },
          '100%': { opacity: 0.6, transform: 'translateX(32px) translateZ(-100px) scale(0.9) translateY(-5px) rotateY(-15deg)' },
        },
        slideCenterFromRight: {
          '0%': { opacity: 0.6, transform: 'translateX(32px) translateZ(-100px) scale(0.9) translateY(-5px) rotateY(-15deg)' },
          '100%': { opacity: 1, transform: 'translateZ(0) scale(1.1) rotateY(0)' },
        },
        slideCenterFromLeft: {
          '0%': { opacity: 0.6, transform: 'translateX(-32px) translateZ(-100px) scale(0.9) translateY(-5px) rotateY(15deg)' },
          '100%': { opacity: 1, transform: 'translateZ(0) scale(1.1) rotateY(0)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      // Add transform style for 3D animations
      transformStyle: {
        '3d': 'preserve-3d',
      },
    },
  },
  plugins: [],
};
