-- [001] Orders table infrastructure
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  total_cents INTEGER NOT NULL,
  currency TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Gate G7: Enable RLS Enforcement
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policy: Only users can read their own orders via email (metadata or user_id)
-- Assuming authenticated users or guest session emails
CREATE POLICY "Users can view their own orders"
ON orders
FOR SELECT
USING (auth.uid()::text = user_id OR user_id = current_setting('request.jwt.claims', true)::jsonb->>'email');

-- Policy: Webhook service can insert orders
CREATE POLICY "Service can insert orders"
ON orders
FOR INSERT
WITH CHECK (true); -- Usually restricted to service_role in production
