export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          name: string;
          description: string;
          price: number;
          image: string;
          category: string;
          organic: boolean;
          unit: string; // e.g., 'kg', 'piece', 'bunch'
          stock: number;
          season: string[]; // available seasons
          origin: string; // farm/source location
          nutritional_info: {
            calories: number;
            protein: number;
            carbs: number;
            fiber: number;
            vitamins: string[];
          };
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['products']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['products']['Insert']>;
      };
      categories: {
        Row: {
          id: string;
          name: string;
          description: string;
          icon: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['categories']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['categories']['Insert']>;
      };
      delivery_zones: {
        Row: {
          id: string;
          name: string;
          postal_codes: string[];
          delivery_fee: number;
          minimum_order: number;
          delivery_days: string[]; // e.g., ['monday', 'wednesday', 'friday']
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['delivery_zones']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['delivery_zones']['Insert']>;
      };
      orders: {
        Row: {
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
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['orders']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['orders']['Insert']>;
      };
      farms: {
        Row: {
          id: string;
          name: string;
          description: string;
          location: string;
          image: string;
          certifications: string[];
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['farms']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['farms']['Insert']>;
      };
    };
  };
}