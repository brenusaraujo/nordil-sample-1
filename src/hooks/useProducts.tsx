
import { useQuery } from '@tanstack/react-query';
import { productAPI } from '../services/api';
import { Product } from '../types';

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: productAPI.getProducts,
  });
};

export const useProduct = (id: number) => {
  return useQuery<Product | undefined>({
    queryKey: ['product', id],
    queryFn: () => productAPI.getProduct(id),
    enabled: !!id,
  });
};
