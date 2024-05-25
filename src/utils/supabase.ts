import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qeoorftimobfpjhlntjv.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlb29yZnRpbW9iZnBqaGxudGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzNDA1ODgsImV4cCI6MjAzMTkxNjU4OH0.NeTB_qjPv_eDjfOverXjOVpWHuAEv6Vci2N_zbkzoMc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
