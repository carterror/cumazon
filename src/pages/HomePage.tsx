import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import Banner from '../components/shared/Banner';
import HeroContent from '../components/home/HeroContent';
import FeaturedProductsShowcase from '../components/home/FeaturedProductsShowcase';

export default function HomePage() {
  const categories = ['Electronics', 'Home & Kitchen', 'Fashion', 'Books'];

  return (
    <div>
      {/* Hero Section Mejorado */}
      <div 
        className="relative h-[500px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1574415698938-28032dcf1cc2?w=2000')"
        }}
      >
        {/* Overlay con gradiente y patrón */}
        <div className="absolute inset-0 bg-gradient-to-r from-cuba-darkBlue/80 to-cuba-blue/60 mix-blend-multiply">
          {/* Patrón de puntos sutiles */}
          <div className="absolute inset-0 opacity-10" 
               style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-4 grid md:grid-cols-2 gap-8 items-center">
            {/* Contenido del Hero */}
            <HeroContent />
            
            {/* Productos destacados */}
            <FeaturedProductsShowcase />
          </div>
        </div>
      </div>

      {/* Banner con Slogan */}
      <Banner />

      {/* Categories */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        <FadeIn delay={0.1} direction="up">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-cuba-darkBlue">Shop by Category</h2>
            <Link to="/categories" className="text-cuba-blue hover:text-cuba-darkBlue transition-colors text-sm flex items-center">
              View all categories <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <FadeIn key={category} delay={0.15 + index * 0.1} direction="up">
              <Link
                to={`/category/${category.toLowerCase()}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 overflow-hidden group"
              >
                <div className="h-32 bg-gradient-to-r from-cuba-blue/10 to-cuba-lightBlue/20 flex items-center justify-center">
                  {/* Icon placeholder - replace with actual category icons */}
                  <div className="w-16 h-16 rounded-full bg-cuba-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl text-cuba-blue">
                      {category[0]}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="font-medium text-gray-800">{category}</span>
                  <ChevronRight size={18} className="text-cuba-blue group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <FadeIn delay={0.2} direction="up">
          <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product, index) => (
            <FadeIn key={product.id} delay={0.2 + index * 0.1} direction="up">
              <ProductCard {...product} />
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Deals Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Today's Deals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="mt-2">
                  <p className="font-medium text-sm line-clamp-1">{product.title}</p>
                  <p className="text-green-600">Up to {Math.floor(Math.random() * 30 + 20)}% off</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}