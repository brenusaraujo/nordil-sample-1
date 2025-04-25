
import { Product, Sale, Seller } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Cachaça 51',
    brand: 'Companhia Müller',
    type: 'Cachaça',
    stock: 150,
    price: 15.99,
    commission: 5,
  },
  {
    id: 2,
    name: 'Skol Lata 350ml',
    brand: 'Ambev',
    type: 'Cerveja',
    stock: 500,
    price: 3.99,
    commission: 3,
  },
  {
    id: 3,
    name: 'Absolut',
    brand: 'Pernod Ricard',
    type: 'Vodka',
    stock: 20,
    price: 129.90,
    commission: 8,
  },
];

export const sellers: Seller[] = [
  { id: 1, name: 'João Silva', email: 'joao@example.com' },
  { id: 2, name: 'Maria Santos', email: 'maria@example.com' },
  { id: 3, name: 'Pedro Oliveira', email: 'pedro@example.com' },
];

export const sales: Sale[] = [
  { id: 1, productId: 1, sellerId: 1, quantity: 10, date: '2024-04-20' },
  { id: 2, productId: 2, sellerId: 2, quantity: 50, date: '2024-04-21' },
  { id: 3, productId: 3, sellerId: 3, quantity: 5, date: '2024-04-22' },
  { id: 4, productId: 1, sellerId: 2, quantity: 15, date: '2024-04-23' },
  { id: 5, productId: 2, sellerId: 1, quantity: 30, date: '2024-04-24' },
];
