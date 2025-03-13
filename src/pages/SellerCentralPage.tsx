import React from 'react';
import { Link } from 'react-router-dom';
import { Store, BarChart, Package, DollarSign, Users, Settings } from 'lucide-react';

export default function SellerCentralPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Seller Central</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard Stats */}
        <div className="col-span-full bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <DollarSign className="text-blue-600 mb-2" />
              <div className="text-2xl font-bold">$0.00</div>
              <div className="text-sm text-gray-600">Today's Sales</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <Package className="text-green-600 mb-2" />
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm text-gray-600">Orders</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <Users className="text-purple-600 mb-2" />
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm text-gray-600">Customers</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <Store className="text-orange-600 mb-2" />
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full flex items-center gap-2 bg-[#ffd814] hover:bg-[#f7ca00] p-3 rounded-lg font-medium">
              <Store size={20} />
              Add New Product
            </button>
            <button className="w-full flex items-center gap-2 border border-gray-300 hover:bg-gray-50 p-3 rounded-lg font-medium">
              <Package size={20} />
              View Orders
            </button>
            <button className="w-full flex items-center gap-2 border border-gray-300 hover:bg-gray-50 p-3 rounded-lg font-medium">
              <Settings size={20} />
              Store Settings
            </button>
          </div>
        </div>

        {/* Performance */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Performance</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Order Fulfillment Rate</span>
              <span className="font-bold">0%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Customer Satisfaction</span>
              <span className="font-bold">0%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Response Time</span>
              <span className="font-bold">0h</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="text-center text-gray-500 py-8">
            No recent activity
          </div>
        </div>
      </div>
    </div>
  );
}