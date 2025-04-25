
export interface Product {
    id: number;
    name: string;
    brand: string;
    type: string;
    stock: number;
    price: number;
    commission: number;
  }
  
  export interface Sale {
    id: number;
    productId: number;
    sellerId: number;
    quantity: number;
    date: string;
  }
  
  export interface Seller {
    id: number;
    name: string;
    email: string;
  }
  