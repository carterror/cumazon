import React from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import FadeIn from '../FadeIn';

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-cuba-darkBlue to-cuba-blue text-white py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="down" delay={0.2}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Package size={32} className="text-cuba-red" />
              <div>
                <h2 className="text-xl font-bold">Conectando Cuba con el mundo</h2>
                <p className="text-sm text-cuba-secondary">Lo que necesitas, donde lo necesitas</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              <div className="flex items-center gap-2">
                <Truck size={18} className="text-cuba-secondary" />
                <span className="text-sm">Entrega en toda Cuba</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-cuba-secondary" />
                <span className="text-sm">Tu tienda en línea, tu isla, tu elección</span>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="bg-cuba-red hover:bg-cuba-accent text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Conocer más
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}