
import { useQuery } from '@tanstack/react-query';
import { sellerAPI } from '../services/api';
import { Seller } from '../types';

export const useSellers = () => {
  return useQuery<Seller[]>({
    queryKey: ['sellers'],
    queryFn: sellerAPI.getSellers,
  });
};

export const useSeller = (id: number) => {
  return useQuery<Seller | undefined>({
    queryKey: ['seller', id],
    queryFn: () => sellerAPI.getSeller(id),
    enabled: !!id,
  });
};
