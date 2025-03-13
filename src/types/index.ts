export interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  image_url?: string;
  category?: string;
  stock: number;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  created_at: string;
  product?: Product;
}

export interface OrderWithItems extends Order {
  order_items: OrderItem[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}