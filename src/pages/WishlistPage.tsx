import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function WishlistPage() {
  const { user } = useAuth();
  const { dispatch } = useCart();

  // Mock wishlist data (in a real app, this would come from a database)
  const wishlistItems = [
    {
      id: 1,
      title: "Apple iPhone 15 Pro Max",
      price: 1099.99,
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
      addedDate: "2024-03-15"
    },
    {
      id: 3,
      title: "MacBook Pro 16-inch",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      addedDate: "2024-03-10"
    }
  ];

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center">
          <Heart size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold mb-2">Sign in to view your Wish List</h2>
          <p className="text-gray-600 mb-4">Track, organize, and share the things you want</p>
          <Link
            to="/login"
            className="inline-block bg-[#ffd814] hover:bg-[#f7ca00] px-6 py-2 rounded-lg font-medium"
          >
            Sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Wish List</h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <Heart size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-bold mb-2">Your wish list is empty</h2>
          <p className="text-gray-600 mb-4">Add items you'd like to track</p>
          <Link
            to="/"
            className="inline-block bg-[#ffd814] hover:bg-[#f7ca00] px-6 py-2 rounded-lg font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow p-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-medium text-lg mb-2">{item.title}</h3>
              <p className="text-2xl font-bold mb-4">${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mb-4">Added on {new Date(item.addedDate).toLocaleDateString()}</p>
              
              <div className="space-y-2">
                <button
                  onClick={() => dispatch({
                    type: 'ADD_TO_CART',
                    payload: item
                  })}
                  className="w-full flex items-center justify-center gap-2 bg-[#ffd814] hover:bg-[#f7ca00] py-2 rounded-lg font-medium"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button
                  className="w-full text-sm text-red-600 hover:text-red-700"
                >
                  Remove from List
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}