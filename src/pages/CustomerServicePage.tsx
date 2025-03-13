import React from 'react';
import { Search, HelpCircle, Package, CreditCard, User, MessageCircle } from 'lucide-react';

export default function CustomerServicePage() {
  const commonIssues = [
    { icon: Package, title: 'A delivery, order or return', description: 'Track packages, orders or start a return' },
    { icon: CreditCard, title: 'Payment, charges or gift cards', description: 'Add or edit payment methods or check gift card balance' },
    { icon: User, title: 'Login, address, security & privacy', description: 'Update login details, addresses or security settings' },
    { icon: MessageCircle, title: 'Memberships & subscriptions', description: 'Manage Prime membership or other subscriptions' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Customer Service</h1>

      {/* Search Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">What can we help you with?</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search our help library"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="bg-[#ffd814] hover:bg-[#f7ca00] px-6 py-2 rounded-md">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Common Issues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {commonIssues.map((issue) => (
          <button
            key={issue.title}
            className="flex items-start gap-4 bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
          >
            <issue.icon size={24} className="text-gray-600 flex-shrink-0" />
            <div className="text-left">
              <h3 className="font-bold mb-1">{issue.title}</h3>
              <p className="text-gray-600">{issue.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Help Topics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">All Help Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="text-left p-4 border rounded-lg hover:bg-gray-50">
            Shipping & Delivery
          </button>
          <button className="text-left p-4 border rounded-lg hover:bg-gray-50">
            Returns & Refunds
          </button>
          <button className="text-left p-4 border rounded-lg hover:bg-gray-50">
            Amazon Prime
          </button>
          <button className="text-left p-4 border rounded-lg hover:bg-gray-50">
            Payment Methods
          </button>
          <button className="text-left p-4 border rounded-lg hover:bg-gray-50">
            Gift Cards
          </button>
          <button className="text-left p-4 border rounded-lg hover:bg-gray-50">
            Account Settings
          </button>
        </div>
      </div>

      {/* Contact Options */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button className="flex items-center justify-center gap-2 bg-[#ffd814] hover:bg-[#f7ca00] p-4 rounded-lg font-medium">
            <MessageCircle size={20} />
            Chat with Us
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 p-4 rounded-lg font-medium">
            <HelpCircle size={20} />
            Call Us
          </button>
        </div>
      </div>
    </div>
  );
}