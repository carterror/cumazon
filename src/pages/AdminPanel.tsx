import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../hooks/useAdmin';
import { fetchProducts, fetchOrders, updateOrderStatus, createProduct, updateProduct } from '../lib/supabase';
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  Settings,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Box,
  Loader
} from 'lucide-react';

export default function AdminPanel() {
  const { isAdmin, loading: adminLoading } = useAdmin();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (adminLoading) return;
    
    if (!isAdmin) {
      navigate('/login');
      return;
    }

    async function loadData() {
      try {
        const [productsData, ordersData] = await Promise.all([
          fetchProducts(),
          fetchOrders()
        ]);
        setProducts(productsData);
        setOrders(ordersData);
      } catch (error) {
        console.error('Error loading admin data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [isAdmin, adminLoading, navigate]);

  if (adminLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin" size={48} />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <AlertCircle size={48} className="mx-auto mb-4 text-red-500" />
          <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
          <p className="text-gray-600 mb-4">You need admin privileges to access this panel</p>
        </div>
      </div>
    );
  }

  // Rest of your existing AdminPanel component code...
  // (Keep all the existing render logic, just update the data to use the fetched products and orders)
}