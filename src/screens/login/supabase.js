import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zrbtnizelzgljqywwbhs.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyYnRuaXplbHpnbGpxeXd3YmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0MjU3OTcsImV4cCI6MjAzMjAwMTc5N30.fDlmEuUmWkocmV1qyA3_Xt_m8mr2mnC81nNcQrcuvNc';
export const supabase = createClient(supabaseUrl, supabaseKey);
