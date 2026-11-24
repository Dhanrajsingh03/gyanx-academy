import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Course = {
  id: string;
  title: string;
  slug: string;
  category: string;
  short_description: string;
  description: string;
  level: string;
  price: number;
  original_price: number | null;
  duration_hours: number;
  lessons_count: number;
  students_count: number;
  rating: number;
  image_url: string | null;
  instructor_name: string;
  instructor_title: string | null;
  curriculum: CurriculumSection[];
  is_featured: boolean;
  created_at: string;
};

export type CurriculumSection = {
  title: string;
  lessons: { title: string; duration: string }[];
};

export const CATEGORIES = [
  "Stock Market",
  "Forex Market",
  "Digital Marketing",
  "Artificial Intelligence",
] as const;
