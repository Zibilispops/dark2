import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Server-safe Supabase client for API routes and Server Components.
// For browser-side auth (sessions, cookies), use @/lib/supabase/client.ts
// For server-side auth (middleware, server actions), use @/lib/supabase/server.ts
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
