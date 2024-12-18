import { useState, useEffect } from 'react';
import { Product } from '@/lib/types';
import { getProducts, getProductsByCategory, searchProducts } from '@/services/productService';

export function useProducts(categoryId: string | null, searchQuery: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        let data: Product[];

        if (searchQuery) {
          data = await searchProducts(searchQuery);
        } else if (categoryId) {
          data = await getProductsByCategory(categoryId);
        } else {
          data = await getProducts();
        }

        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [categoryId, searchQuery]);

  return { products, loading, error };
}