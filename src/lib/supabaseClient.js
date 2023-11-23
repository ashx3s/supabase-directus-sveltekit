import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private'; /* do not forget $env! */

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
