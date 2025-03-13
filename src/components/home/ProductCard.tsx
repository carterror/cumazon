import React from 'react';
import { Link } from 'react-router-dom';
import { FeaturedProduct } from './FeaturedProductsShowcase';

interface ProductCardProps {
  product: FeaturedProduct;
  isCenter: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isCenter }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div 
        className={`bg-white p-4 rounded-lg transition-all duration-300 transform-gpu
                   hover:scale-[1.02] ${
                     isCenter ? 'shadow-2xl' : 'shadow-lg'
                   }`}
      >
        <div className="relative w-64 overflow-hidden rounded">
          {/* Standardized image size container with fixed aspect ratio */}
          <div className="h-48 bg-gray-100 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.title}
              className={`max-w-full max-h-44 object-contain transition-transform duration-300
                        hover:scale-105 ${isCenter ? 'ring-2 ring-cuba-darkBlue' : ''}`}
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="mt-3 px-1">
          <p className="font-medium text-sm line-clamp-1">{product.title}</p>
          <div className="flex justify-between items-center mt-1">
            <span className="font-bold text-cuba-darkBlue">${product.price}</span>
            {product.discount && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                {product.discount}% OFF
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
