export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  category: 'Floral' | 'Woody' | 'Oriental' | 'Fresh' | 'Citrus';
  images: string[];
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  rating: number;
  reviewsCount: number;
  stock: number;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: number;
  shippingAddress: string;
  trackingNumber?: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}
