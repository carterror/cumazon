import { useQuery } from '@tanstack/react-query';
import { getProducts, getProductById } from '@/lib/api/products';

export function useProducts(options?: Parameters<typeof getProducts>[0]) {
  return useQuery({
    queryKey: ['products', options],
    queryFn: () => getProducts(options)
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id)
  });
}