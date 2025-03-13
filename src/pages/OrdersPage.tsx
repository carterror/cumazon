import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';

// Mock orders data (in a real app, this would come from an API)
const orders = [
  {
    id: '1234',
    date: '2024-03-15',
    total: 1499.98,
    status: 'Delivered',
    items: [
      {
        id: 1,
        title: "Apple iPhone 15 Pro Max",
        price: 1099.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500"
      },
      {
        id: 2,
        title: "Sony WH-1000XM5 Wireless Headphones",
        price: 399.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500"
      }
    ]
  },
  {
    id: '1235',
    date: '2024-03-10',
    total: 2499.99,
    status: 'Shipped',
    items: [
      {
        id: 3,
        title: "MacBook Pro 16-inch",
        price: 2499.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
      }
    ]
  }
];

export default function OrdersPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <Package size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-bold mb-2">No orders yet</h2>
          <p className="text-gray-600 mb-4">When you place an order, it will appear here</p>
          <Link
            to="/"
            className="inline-block bg-[#ffd814] hover:bg-[#f7ca00] px-6 py-2 rounded-lg font-medium"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b bg-gray-50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Order Placed</p>
                    <p className="font-medium">{new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="font-medium">${order.total.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Order #</p>
                    <p className="font-medium">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="font-medium">{order.status}</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4 border-b last:border-0">
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                    <div>
                      <Link to={`/product/${item.id}`} className="font-medium hover:text-blue-600">
                        {item.title}
                      </Link>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                      <p className="font-bold">${item.price.toFixed(2)}</p>
                      <button className="text-blue-600 hover:text-blue-800 text-sm mt-2">
                        Buy Again
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}