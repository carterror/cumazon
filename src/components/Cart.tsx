import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, X, ShoppingCart, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

export default function Cart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { state, dispatch } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 text-cuba-darkBlue animate-fadeIn">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 translate-x-0">
        <div className="p-4 flex justify-between items-center border-b bg-cuba-blue text-white">
          <h2 className="text-xl font-bold flex items-center">
            <ShoppingCart size={24} className="mr-2" />
            Shopping Cart ({state.items.length})
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-cuba-trust rounded-full transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4 flex flex-col gap-4 h-[calc(100vh-230px)] overflow-y-auto bg-gradient-to-b from-white to-cuba-secondary/10">
          {state.items.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.05}
              direction="right"
            >
              <div className="flex gap-4 border-b pb-4 hover:bg-cuba-secondary/5 p-2 rounded-lg transition-colors">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain rounded border border-cuba-secondary" />
                <div className="flex-1">
                  <h3 className="font-medium text-cuba-darkBlue">{item.title}</h3>
                  <div className="text-lg font-bold text-cuba-blue">${item.price}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                      })}
                      className="p-1 hover:bg-cuba-blue text-cuba-darkBlue hover:text-white rounded transition-colors duration-200 active:scale-95"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: item.quantity + 1 }
                      })}
                      className="p-1 hover:bg-cuba-blue text-cuba-darkBlue hover:text-white rounded transition-colors duration-200 active:scale-95"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                      className="ml-auto text-cuba-red hover:text-cuba-accent transition-colors duration-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
          
          {state.items.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 animate-fadeIn">
              <ShoppingCart size={48} className="mb-2 opacity-50" />
              <p>Your cart is empty</p>
              <Link 
                to="/"
                onClick={onClose}
                className="mt-4 text-cuba-blue hover:text-cuba-red transition-colors duration-200"
              >
                Continue shopping
              </Link>
            </div>
          )}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-slideUp">
          <div className="flex justify-between text-xl font-bold mb-4">
            <span>Total:</span>
            <span className="text-cuba-blue">${state.total.toFixed(2)}</span>
          </div>
          
          {state.items.length > 0 && (
            <>
              <Link
                to="/checkout"
                onClick={onClose}
                className="block w-full bg-cuba-red hover:bg-cuba-accent text-white py-3 text-center rounded-lg font-medium transition-all duration-200 hover:shadow-md active:scale-95 mb-2"
              >
                Proceed to Checkout
              </Link>
              
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-2">
                <Lock size={14} />
                <span>Secure checkout</span>
                <Shield size={14} />
                <span>Protected by CubaSafe</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}