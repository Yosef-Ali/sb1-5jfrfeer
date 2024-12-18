import { Product, Category } from './types';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices',
  },
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Trendy fashion and accessories',
  },
  {
    id: 'home',
    name: 'Home & Living',
    description: 'Everything for your home',
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium noise-canceling wireless headphones with superior sound quality.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    category: 'electronics',
    rating: 4.5,
    stock: 50,
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-packed smartwatch with health tracking and notifications.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    category: 'electronics',
    rating: 4.8,
    stock: 30,
  },
  {
    id: '3',
    name: 'Cotton T-Shirt',
    description: 'Comfortable 100% cotton t-shirt in various colors.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    category: 'clothing',
    rating: 4.2,
    stock: 100,
  },
  {
    id: '4',
    name: 'Table Lamp',
    description: 'Modern LED table lamp with adjustable brightness.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
    category: 'home',
    rating: 4.6,
    stock: 25,
  },
];