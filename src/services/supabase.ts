import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dwjehvhzifqayyufiqna.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3amVodmh6aWZxYXl5dWZpcW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMjgxMzcsImV4cCI6MjA4ODkwNDEzN30.qXLYJo4J2SA3tZ5uRwFRCYG68P1DOtVN5pehQCmKc8U";
export const supabase = createClient(supabaseUrl, supabaseKey);