import React from 'react';
import { Link } from 'react-router-dom';
import { Package, CreditCard, User, Heart, Gift, MapPin, Bell, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AccountPage() {
  const { user } = useAuth();

  const accountSections = [
    {
      title: 'Orders',
      icon: Package,
      items: [
        { label: 'Your Orders', link: '/orders' },
        { label: 'Buy Again', link: '/buy-again' },
        { label: 'Returns', link: '/returns' }
      ]
    },
    {
      title: 'Payments',
      icon: CreditCard,
      items: [
        { label: 'Your Payments', link: '/payments' },
        { label: 'Payment Methods', link: '/payment-methods' },
        { label: 'Gift Cards', link: '/gift-cards' }
      ]
    },
    {
      title: 'Profile',
      icon: User,
      items: [
        { label: 'Your Profiles', link: '/profiles' },
        { label: 'Login & Security', link: '/security' },
        { label: 'Prime Membership', link: '/prime' }
      ]
    },
    {
      title: 'Lists & Registries',
      icon: Heart,
      items: [
        { label: 'Your Lists', link: '/wishlist' },
        { label: 'Create a List', link: '/create-list' },
        { label: 'Find a List', link: '/find-list' }
      ]
    }
  ];

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center">
          <User size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold mb-2">Sign in to view your account</h2>
          <p className="text-gray-600 mb-4">Access your orders, lists, and recommendations</p>
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
      <h1 className="text-3xl font-bold mb-8">Your Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accountSections.map((section) => (
          <div key={section.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-3 mb-4">
              <section.icon size={24} className="text-gray-600" />
              <h2 className="text-xl font-bold">{section.title}</h2>
            </div>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.link}
                    className="block text-blue-600 hover:text-orange-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Additional Quick Links */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
              <MapPin size={20} />
              <span>Addresses</span>
            </button>
            <button className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
              <Bell size={20} />
              <span>Messages</span>
            </button>
            <button className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
              <Shield size={20} />
              <span>Security</span>
            </button>
            <button className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
              <Gift size={20} />
              <span>Gift Cards</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}