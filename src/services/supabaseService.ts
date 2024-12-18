import { supabase } from '@/lib/supabase';
import type { Category, Product, DeliveryZone, Farm } from '@/lib/types';

export async function handleSupabaseError(error: unknown) {
  console.error('Supabase error:', error);
  throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleSupabaseError(error);
  }
}

export async function fetchProducts(options?: {
  category?: string;
  search?: string;
  organic?: boolean;
}): Promise<Product[]> {
  try {
    let query = supabase.from('products').select(`
      *,
      farms (
        name,
        certifications
      )
    `);

    if (options?.category) {
      query = query.eq('category', options.category);
    }

    if (options?.organic !== undefined) {
      query = query.eq('organic', options.organic);
    }

    if (options?.search) {
      query = query.ilike('name', `%${options.search}%`);
    }

    const { data, error } = await query.order('name');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleSupabaseError(error);
  }
}

export async function fetchDeliveryZones(postalCode?: string): Promise<DeliveryZone[]> {
  try {
    let query = supabase.from('delivery_zones').select('*');

    if (postalCode) {
      query = query.contains('postal_codes', [postalCode]);
    }

    const { data, error } = await query;
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleSupabaseError(error);
  }
}

export async function fetchFarms(): Promise<Farm[]> {
  try {
    const { data, error } = await supabase
      .from('farms')
      .select('*')
      .order('name');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleSupabaseError(error);
  }
}