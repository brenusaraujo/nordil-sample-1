
import { Product, Sale, Seller } from '../types';
import { products, sales, sellers } from '../data/mockData';

// These functions simulate API calls but can be easily replaced with real API calls later

/**
 * Product related API calls
 */
export const productAPI = {
  getProducts: async (): Promise<Product[]> => {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 500);
    });
  },
  
  getProduct: async (id: number): Promise<Product | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products.find(product => product.id === id)), 500);
    });
  }
};

/**
 * Sales related API calls
 */
export const salesAPI = {
  getSales: async (): Promise<Sale[]> => {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(sales), 500);
    });
  },
  
  getSalesBySeller: async (sellerId: number): Promise<Sale[]> => {
    return new Promise((resolve) => {
      const sellerSales = sales.filter(sale => sale.sellerId === sellerId);
      setTimeout(() => resolve(sellerSales), 500);
    });
  }
};

/**
 * Seller related API calls
 */
export const sellerAPI = {
  getSellers: async (): Promise<Seller[]> => {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(sellers), 500);
    });
  },
  
  getSeller: async (id: number): Promise<Seller | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(sellers.find(seller => seller.id === id)), 500);
    });
  }
};