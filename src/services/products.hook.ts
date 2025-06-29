import { useQuery } from '@tanstack/react-query';

import { fetchProducts } from '@/services';

const qDay = 1000 * 60 * 60 * 6; // 24 hours

export function useProducts() {
  return useQuery({
    queryKey: ['prods'],
    queryFn: fetchProducts,
    staleTime: qDay,
    gcTime: qDay,
  });
}
