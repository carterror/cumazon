import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function SubHeader() {
  return (
    <div className="bg-cuba-darkBlue text-white py-1">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center space-x-4 text-sm">
          <button className="flex items-center hover:outline outline-1 outline-white p-2 rounded">
            <Menu size={20} className="mr-1" />
            All
          </button>
          <Link to="/today-deals" className="hover:outline outline-1 outline-white p-2 rounded">
            Today's Deals
          </Link>
          <Link to="/customer-service" className="hover:outline outline-1 outline-white p-2 rounded">
            Customer Service
          </Link>
          <Link to="/registry" className="hidden md:block hover:outline outline-1 outline-white p-2 rounded">
            Registry
          </Link>
          <Link to="/gift-cards" className="hidden md:block hover:outline outline-1 outline-white p-2 rounded">
            Gift Cards
          </Link>
          <Link to="/sell" className="hidden md:block hover:outline outline-1 outline-white p-2 rounded">
            Sell
          </Link>
        </nav>
      </div>
    </div>
  );
}