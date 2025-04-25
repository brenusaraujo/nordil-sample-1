
import { useQuery } from '@tanstack/react-query';
import { salesAPI } from '../services/api';
import { Sale } from '../types';

export const useSales = () => {
  return useQuery<Sale[]>({
    queryKey: ['sales'],
    queryFn: salesAPI.getSales,
  });
};

export const useSellerSales = (sellerId: number) => {
  return useQuery<Sale[]>({
    queryKey: ['sales', 'seller', sellerId],
    queryFn: () => salesAPI.getSalesBySeller(sellerId),
    enabled: !!sellerId,
  });
};
