import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL or Anon Key is missing. Please check your environment variables.');
}

let supabase;
try {
  // Initialize the Supabase client here
  supabase = createClient(supabaseUrl, supabaseAnonKey);
  console.log('Supabase client created successfully!');
} catch (error) {
  console.error('Error creating Supabase client:', error);
  throw error;  // Re-throw the error after logging it
}

export default supabase;