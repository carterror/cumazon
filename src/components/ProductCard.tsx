import React from 'react';
import { Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
}

export default function ProductCard({ id, title, price, image, rating }: ProductCardProps) {
  const { dispatch } = useCart();

  return (
     <Link
          to={`/product/${id}`}
          className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-contain mb-4" />
      <h3 className="text-lg font-medium line-clamp-2 mb-2 text-cuba-darkBlue">{title}</h3>
      <div className="flex items-center mb-2">
        {Array(rating)
          .fill(null)
          .map((_, i) => (
            <Star key={i} size={16} className="text-cuba-red fill-current" />
          ))}
      </div>
      <div className="flex items-baseline mb-4 text-cuba-blue">
        <span className="text-xl font-bold">$</span>
        <span className="text-2xl font-bold">{price}</span>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault()
          dispatch({
            type: 'ADD_TO_CART',
            payload: { id, title, price, image }
          })
        } }
        className="w-full bg-cuba-red hover:bg-cuba-accent text-white py-2 rounded-lg font-medium"
      >
        Add to Cart
      </button>
    </div>
    </Link>
  );
}