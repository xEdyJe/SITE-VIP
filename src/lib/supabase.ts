import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase credentials missing. Database functionality (auth & auto-saving) will be unavailable."
  );
}

// Create client with PKCE flow enabled — prevents access_token from appearing in the URL hash.
// With PKCE, Google redirects back with ?code=... (query param) instead of #access_token=...
// The Supabase SDK automatically exchanges the code for a session behind the scenes.
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key",
  {
    auth: {
      flowType: "pkce",
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  }
);
