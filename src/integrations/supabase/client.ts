
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// URL/key come from .env (fallback), .env.development (local `vite dev` → staging)
// and .env.production (`vite build` → production), loaded automatically by Vite based on mode.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  throw new Error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY env vars');
}

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: isBrowser ? localStorage : undefined,
    persistSession: isBrowser,
    autoRefreshToken: isBrowser,
  }
});
