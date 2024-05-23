import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sjuyxmdsqlqcfijgjdxa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqdXl4bWRzcWxxY2ZpamdqZHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1MDE3NzMsImV4cCI6MjAzMjA3Nzc3M30.iYGdVTQVDKayS20Neb6MAKJPyDbLN-jhCG520TmlWvQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});