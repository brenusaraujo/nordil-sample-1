
import { Product, Sale, Seller } from '../types';

export interface SellerReport {
  id: number;
  seller: string;
  sales: number;
  commission: number;
  products: number;
  performance: string;
}

export interface ProductReport {
  id: number;
  name: string;
  stock: number;
  minStock: number;
  unitPrice: number;
  totalValue: number;
  reorderPoint: string;
  status: string;
}

// Calculate the target sales per seller (simplified version)
const SELLER_TARGET = 40000;

export const calculateSellerReports = (
  sales: Sale[], 
  sellers: Seller[], 
  products: Product[]
): SellerReport[] => {
  return sellers.map(seller => {
    const sellerSales = sales.filter(sale => sale.sellerId === seller.id);
    
    let totalSalesValue = 0;
    let totalCommission = 0;
    let totalProducts = 0;
    
    sellerSales.forEach(sale => {
      const product = products.find(p => p.id === sale.productId);
      if (product) {
        const saleValue = product.price * sale.quantity;
        totalSalesValue += saleValue;
        totalCommission += saleValue * (product.commission / 100);
        totalProducts += sale.quantity;
      }
    });
    
    const performance = totalSalesValue >= SELLER_TARGET ? "Acima da meta" : "Na meta";
    
    return {
      id: seller.id,
      seller: seller.name,
      sales: totalSalesValue,
      commission: totalCommission,
      products: totalProducts,
      performance,
    };
  });
};

// Set minimum stock levels for each product type (simplified version)
const MIN_STOCK_LEVELS = {
  'Cerveja': 200,
  'Vinho': 50,
  'Cachaça': 100,
  'default': 75
};

export const calculateProductReports = (products: Product[]): ProductReport[] => {
  return products.map(product => {
    const minStock = MIN_STOCK_LEVELS[product.type as keyof typeof MIN_STOCK_LEVELS] || MIN_STOCK_LEVELS.default;
    const totalValue = product.price * product.stock;
    const status = product.stock < minStock ? "Baixo estoque" : "Em estoque";
    const reorderPoint = product.stock < minStock 
      ? "ATENÇÃO: Estoque abaixo do mínimo" 
      : `Pedir quando estoque atingir ${minStock} unidades`;
      
    return {
      id: product.id,
      name: product.name,
      stock: product.stock,
      minStock,
      unitPrice: product.price,
      totalValue,
      reorderPoint,
      status,
    };
  });
};
