import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ShoppingCart } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function HeroContent() {
  return (
    <div className="text-white z-10">
      <FadeIn direction="left" delay={0.2}>
        <div className="mb-2 inline-flex items-center px-3 py-1 bg-cuba-red/80 rounded-full text-sm font-medium">
          <Package size={16} className="mr-2" />
          Envíos a toda Cuba
        </div>
        <h1 className="text-5xl font-bold mb-4">
          <span className="font-['Righteous'] mt-2">
            <span className="mr-1">📦🇨🇺</span>
            <span className="text-cuba-red">C</span>
            <span className="text-cuba-darkBlue">u</span>
            <span className="text-white">m</span>
            <span className="text-cuba-darkBlue">a</span>
            <span className="text-white">z</span>
            <span className="text-cuba-darkBlue">o</span>
            <span className="text-white">n</span>
          </span>
        </h1>
        <p className="text-2xl font-light mb-6">Conectando Cuba con el mundo digital</p>
        <p className="text-lg mb-8 max-w-md">Lo que necesitas, donde lo necesitas. Tu tienda en línea, tu isla, tu elección</p>
        <div className="flex gap-4">
          <Link to="/products" className="bg-cuba-red hover:bg-cuba-accent text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:-translate-y-1 flex items-center">
            <ShoppingCart size={18} className="mr-2" />
            Explorar Productos
          </Link>
          <Link to="/how-it-works" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:-translate-y-1">
            Cómo Funciona
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
