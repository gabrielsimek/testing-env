import { createClient } from '@supabase/supabase-js';
import { supabase } from '../utils/settings';
console.log(
  'process.env.REACT_APP_SUPABASE_URL',
  process.env.REACT_APP_SUPABASE_URL
);
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
