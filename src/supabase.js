import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zgzdrsyajxaxnvuqgbop.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnemRyc3lhanhheG52dXFnYm9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNjQwMzYsImV4cCI6MjA5Njc0MDAzNn0.NCFNBuza5Mez5M_bH9L0H0XcOknOos_V9X6cZcx2EMs";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);