import { supabase } from '../supabase';
import { Product } from '@/types';

export async function getProducts(options?: {
  category?: string;
  limit?: number;
  offset?: number;
  sortBy?: string;
  search?: string;
}) {
  let query = supabase.from('products').select('*');

  if (options?.category) {
    query = query.eq('category', options.category);
  }

  if (options?.search) {
    query = query.ilike('title', `%${options.search}%`);
  }

  if (options?.sortBy) {
    const [field, order] = options.sortBy.split(':');
    query = query.order(field, { ascending: order === 'asc' });
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
  }

  const { data, error } = await query;

  if (error) throw error;
  return data as Product[];
}

export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as Product;
}