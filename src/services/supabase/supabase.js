// import { createClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bhnpdzptixfnuzafjjcq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJobnBkenB0aXhmbnV6YWZqamNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwMzIxNzEsImV4cCI6MjAyNzYwODE3MX0.jjmO73x_4-U68qUd-2KqvjwYm34-eA5JYjBFak3sWfw";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
