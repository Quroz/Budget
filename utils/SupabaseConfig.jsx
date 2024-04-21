
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://pgoscbmmdvjmssyyndvd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnb3NjYm1tZHZqbXNzeXluZHZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNTI3NDIsImV4cCI6MjAyODgyODc0Mn0.8D91bDuE0cB52Nv1T455I13ZJU_ywQ8p_gvhNtARzyg')