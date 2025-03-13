import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white p-8 rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          
          <div className="flex items-center mb-4">
            {Array(product.rating)
              .fill(null)
              .map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            <span className="ml-2 text-gray-600">(123 reviews)</span>
          </div>

          <div className="text-3xl font-bold mb-6">${product.price}</div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center text-gray-700">
              <Truck size={20} className="mr-2" />
              <span>Free delivery on orders over $35</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Shield size={20} className="mr-2" />
              <span>2-year warranty included</span>
            </div>
          </div>

          <button
            onClick={() => dispatch({
              type: 'ADD_TO_CART',
              payload: product
            })}
            className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-3 rounded-lg font-medium mb-4"
          >
            Add to Cart
          </button>

          <button
            onClick={() => {
              dispatch({
                type: 'ADD_TO_CART',
                payload: product
              });
              navigate('/checkout');
            }}
            className="w-full bg-[#ffa41c] hover:bg-[#f39c12] py-3 rounded-lg font-medium"
          >
            Buy Now
          </button>

          <div className="mt-8">
            <h3 className="font-bold text-lg mb-2">Product Description</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}