
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fmuhuljrdxwcctuiqkzl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtdWh1bGpyZHh3Y2N0dWlxa3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNTcyODAsImV4cCI6MTk5OTgzMzI4MH0.ezL04nCsHT21_3DMj7o_HImX8VXOSLpQWtwOypQy0C0 '
export const supabase = createClient(supabaseUrl, supabaseKey)