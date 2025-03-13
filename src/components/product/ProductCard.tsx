import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
}

export default function ProductCard({ id, title, price, image, rating }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, title, price, image }
    });
  };

  return (
    <Link 
      to={`/product/${id}`}
      className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
    >
      <img src={image} alt={title} className="w-full h-48 object-contain mb-4" />
      <h3 className="text-lg font-medium line-clamp-2 mb-2 hover:text-blue-600">{title}</h3>
      <div className="flex items-center mb-2">
        {Array(rating)
          .fill(null)
          .map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-current" />
          ))}
      </div>
      <div className="flex items-baseline mb-4">
        <span className="text-xl font-bold">$</span>
        <span className="text-2xl font-bold">{price}</span>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-2 rounded-lg font-medium"
      >
        Add to Cart
      </button>
    </Link>
  );
}