export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  organic: boolean;
  unit: string;
  stock: number;
  season: string[];
  origin: string;
  nutritional_info: {
    calories: number;
    protein: number;
    carbs: number;
    fiber: number;
    vitamins: string[];
  };
  farm?: Farm;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface DeliveryZone {
  id: string;
  name: string;
  postal_codes: string[];
  delivery_fee: number;
  minimum_order: number;
  delivery_days: string[];
}

export interface Farm {
  id: string;
  name: string;
  description: string;
  location: string;
  image: string;
  certifications: string[];
}

export interface Order {
  id: string;
  user_id: string;
  items: {
    product_id: string;
    quantity: number;
    price: number;
  }[];
  subtotal: number;
  delivery_fee: number;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';
  delivery_zone_id: string;
  delivery_address: {
    street: string;
    city: string;
    postal_code: string;
    instructions: string;
  };
  delivery_date: string;
  delivery_slot: string;
}