import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, MapPin, X, Home, Package, Heart, User, HelpCircle, Settings } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import Cart from '../Cart';
import SubHeader from './SubHeader';
import Button from '../shared/Button';
import Logo from '../shared/Logo';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { state } = useCart();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setIsSidebarOpen(false);
  };

  const sidebarLinks = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Package, label: 'Your Orders', to: '/orders' },
    { icon: Heart, label: 'Your Lists', to: '/wishlist' },
    { icon: User, label: 'Your Account', to: '/account' },
    { icon: HelpCircle, label: 'Customer Service', to: '/customer-service' },
    { icon: Settings, label: 'Settings', to: '/settings' },
  ];

  return (
    <header className="bg-cuba-blue text-white fixed top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="py-2 px-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden transition-transform active:scale-90"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <Logo />

            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1">
              <div className="flex w-full max-w-3xl">
                <select className="px-2 text-cuba-darkBlue rounded-l-md border-r border-gray-300 focus:outline-none focus:ring-1 focus:ring-cuba-red transition-shadow">
                  <option>All</option>
                  <option>Electronics</option>
                  <option>Books</option>
                  <option>Fashion</option>
                </select>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Amazon"
                  className="w-full px-4 py-2 text-black focus:outline-none focus:ring-1 focus:ring-cuba-red transition-shadow"
                />
                <Button type="submit" className="bg-cuba-red hover:bg-cuba-accent px-6 rounded-r-md transition-all duration-200 active:scale-95">
                  <Search className="text-white" />
                </Button>
              </div>
            </form>

            {/* Right Section */}
            <div className="flex items-center gap-6">
              {/* Desktop Account */}
              {user ? (
                <div className="hidden md:flex flex-col group relative cursor-pointer">
                  <span className="text-xs">Hello, {user.name}</span>
                  <span className="text-sm font-bold">Account & Lists</span>
                  <div className="hidden group-hover:block absolute top-full right-0 w-64 bg-white text-cuba-darkBlue shadow-lg rounded-lg z-50 animate-fadeIn">
                    <div className="p-4">
                      <div className="border-b pb-2 mb-2">
                        <Link to="/account" className="hover:text-cuba-red transition-colors">Your Account</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="/orders" className="block hover:text-cuba-red transition-colors">Your Orders</Link>
                        <Link to="/wishlist" className="block hover:text-cuba-red transition-colors">Your Lists</Link>
                        <Link to="/prime" className="block hover:text-cuba-red transition-colors">Prime Membership</Link>
                        <button onClick={() => signOut()} className="text-cuba-blue hover:text-cuba-red transition-colors">
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="hidden md:flex flex-col hover:scale-105 transition-transform">
                  <span className="text-xs">Hello, sign in</span>
                  <span className="text-sm font-bold">Account & Lists</span>
                </Link>
              )}

              {/* Desktop Orders */}
              <Link to="/orders" className="hidden md:flex flex-col hover:scale-105 transition-transform">
                <span className="text-xs">Returns</span>
                <span className="text-sm font-bold">& Orders</span>
              </Link>

              {/* Cart Button */}
              <button 
                className="flex items-center cursor-pointer transition-transform hover:scale-105 active:scale-95"
                onClick={() => setIsCartOpen(true)}
              >
                <div className="relative">
                  <ShoppingCart size={24} />
                  {state.items.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-cuba-red text-cuba-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                      {state.items.length}
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Search - Below Header */}
          <form onSubmit={handleSearch} className="md:hidden mt-2">
            <div className="flex w-full">
              <select className="px-2 text-cuba-darkBlue rounded-l-md border-r border-gray-300 focus:outline-none focus:ring-1 focus:ring-cuba-red transition-shadow">
                <option>All</option>
                <option>Electronics</option>
                <option>Books</option>
                <option>Fashion</option>
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Amazon"
                className="w-full px-4 py-2 text-black focus:outline-none focus:ring-1 focus:ring-cuba-red transition-shadow"
              />
              <Button type="submit" className="bg-cuba-red hover:bg-cuba-accent px-6 rounded-r-md transition-all duration-200 active:scale-95">
                <Search className="text-white" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Desktop SubHeader */}
      <div className="hidden md:block">
        <SubHeader />
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 animate-fadeIn"
            onClick={() => setIsSidebarOpen(false)}
          />
          
          {/* Sidebar Content */}
          <div className="fixed inset-y-0 left-0 w-64 bg-white text-cuba-darkBlue overflow-y-auto transform transition-transform duration-300 translate-x-0 animate-slideIn">
            <div className="p-4 bg-cuba-blue text-white">
              <Logo size="small" className="mb-2" />
              {user ? (
                <div className="flex items-center gap-2 mt-2">
                  <User size={24} />
                  <div>
                    <p className="font-bold">Hello, {user.name}</p>
                  </div>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="flex items-center gap-2 font-bold transition-colors hover:text-cuba-secondary mt-2"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <User size={24} />
                  Sign In
                </Link>
              )}
            </div>

            <nav className="p-4">
              {sidebarLinks.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-3 py-3 px-2 hover:bg-cuba-secondary/20 rounded-lg transition-colors animate-fadeIn"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <link.icon size={20} className="text-cuba-blue" />
                  {link.label}
                </Link>
              ))}
              {user && (
                <button
                  onClick={() => {
                    signOut();
                    setIsSidebarOpen(false);
                  }}
                  className="flex items-center gap-3 py-3 px-2 text-cuba-red hover:bg-gray-100 rounded-lg w-full transition-colors animate-fadeIn"
                  style={{ animationDelay: `${sidebarLinks.length * 0.05}s` }}
                >
                  <X size={20} />
                  Sign Out
                </button>
              )}
            </nav>
          </div>
        </div>
      )}

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}