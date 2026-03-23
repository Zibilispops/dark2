-- Create the products table
CREATE TABLE public.products (
  id text PRIMARY KEY,
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  price numeric NOT NULL,
  description text NOT NULL,
  features text[] NOT NULL DEFAULT '{}',
  image text NOT NULL,
  sizes text[] NOT NULL DEFAULT '{}',
  stripe_price_id text, -- Added for future Stripe integration
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (Security Best Practice)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create a policy allowing anyone (even not logged in) to view products
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (true);
