import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createOrder, getUserOrders } from '@/lib/api/orders';
import { useAuth } from '@/context/AuthContext';

export function useOrders() {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ['orders', user?.id],
    queryFn: () => getUserOrders(user!.id),
    enabled: !!user
  });
}

export function useCreateOrder() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    }
  });
}