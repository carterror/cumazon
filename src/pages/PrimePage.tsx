import React from 'react';
import { Check, Truck, Film, Music, Gift, Star } from 'lucide-react';

export default function PrimePage() {
  const benefits = [
    {
      icon: Truck,
      title: 'Fast, FREE delivery',
      description: 'FREE Two-Day Delivery on millions of items'
    },
    {
      icon: Film,
      title: 'Prime Video',
      description: 'Watch movies, TV shows, and award-winning Amazon Originals'
    },
    {
      icon: Music,
      title: 'Prime Music',
      description: 'Stream millions of songs and thousands of playlists'
    },
    {
      icon: Gift,
      title: 'Prime Early Access',
      description: 'Get 30-minute early access to Lightning Deals'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Amazon Prime</h1>
        <p className="text-xl text-gray-600 mb-8">
          Fast delivery, streaming, shopping, and more
        </p>
        <button className="bg-[#ffd814] hover:bg-[#f7ca00] px-8 py-3 rounded-lg font-medium text-lg">
          Try Prime FREE for 30 days
        </button>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="bg-white rounded-lg shadow p-6 text-center">
            <benefit.icon size={40} className="mx-auto mb-4 text-[#00a8e1]" />
            <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-8 text-center border-b">
          <h2 className="text-3xl font-bold mb-4">Choose Your Prime</h2>
          <p className="text-gray-600">Select the plan that best suits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
          {/* Monthly Plan */}
          <div className="p-8">
            <h3 className="text-xl font-bold mb-2">Monthly</h3>
            <div className="text-3xl font-bold mb-4">$14.99<span className="text-base font-normal">/month</span></div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                <span>FREE Two-Day Delivery</span>
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                <span>Prime Video</span>
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                <span>Prime Music</span>
              </li>
            </ul>
            <button className="w-full mt-6 bg-[#ffd814] hover:bg-[#f7ca00] py-2 rounded-lg font-medium">
              Try FREE for 30 days
            </button>
          </div>

          {/* Annual Plan */}
          <div className="p-8 relative bg-gray-50">
            <div className="absolute top-0 right-0 bg-[#00a8e1] text-white px-4 py-1 rounded-bl-lg text-sm">
              Best Value
            </div>
            <h3 className="text-xl font-bold mb-2">Annual</h3>
            <div className="text-3xl font-bold mb-4">$139<span className="text-base font-normal">/year</span></div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                <span>All Monthly benefits</span>
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                <span>Save $40/year</span>
              </li>
              <li className="flex items-center">
                <Star size={20} className="text-yellow-400 mr-2" />
                <span>Annual commitment required</span>
              </li>
            </ul>
            <button className="w-full mt-6 bg-[#ffd814] hover:bg-[#f7ca00] py-2 rounded-lg font-medium">
              Try FREE for 30 days
            </button>
          </div>

          {/* Student Plan */}
          <div className="p-8">
            <h3 className="text-xl font-bold mb-2">Prime Student</h3>
            <div className="text-3xl font-bold mb-4">$7.49<span className="text-base font-normal">/month</span></div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                <span>All Prime benefits</span>
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                <span>50% off for students</span>
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                <span>6-month FREE trial</span>
              </li>
            </ul>
            <button className="w-full mt-6 bg-[#ffd814] hover:bg-[#f7ca00] py-2 rounded-lg font-medium">
              Try FREE for 6 months
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}