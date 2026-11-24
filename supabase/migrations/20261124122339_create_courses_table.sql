/*
# Create courses table for online course institute

1. New Tables
- `courses`
  - `id` (uuid, primary key)
  - `title` (text, not null) — course name
  - `slug` (text, unique, not null) — URL-friendly identifier
  - `category` (text, not null) — one of: Stock Market, Forex Market, Digital Marketing, Artificial Intelligence
  - `short_description` (text, not null) — one-line summary shown on cards
  - `description` (text, not null) — full-length description for detail page
  - `level` (text, not null) — Beginner / Intermediate / Advanced
  - `price` (numeric, not null) — course price in USD
  - `original_price` (numeric) — optional discounted-from price
  - `duration_hours` (integer, not null) — total video/content hours
  - `lessons_count` (integer, not null) — number of lessons
  - `students_count` (integer, default 0) — enrolled students count
  - `rating` (numeric, default 0) — average rating 0-5
  - `image_url` (text) — optional course thumbnail URL
  - `instructor_name` (text, not null)
  - `instructor_title` (text) — instructor role/credential
  - `curriculum` (jsonb, default '[]') — array of {title, lessons: [{title, duration}]}
  - `is_featured` (boolean, default false) — show on home page
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `courses`.
- Grant SELECT to anon + authenticated (public catalog, no sign-in).
- Allow anon + authenticated SELECT only — course data is intentionally public/read-only from the frontend.

3. Notes
- No user_id / auth — this is a public catalog site without accounts.
- Curriculum stored as JSONB for flexible lesson structure.
- Seeded separately after table creation.
*/

CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  short_description text NOT NULL,
  description text NOT NULL,
  level text NOT NULL,
  price numeric NOT NULL,
  original_price numeric,
  duration_hours integer NOT NULL,
  lessons_count integer NOT NULL,
  students_count integer NOT NULL DEFAULT 0,
  rating numeric NOT NULL DEFAULT 0,
  image_url text,
  instructor_name text NOT NULL,
  instructor_title text,
  curriculum jsonb NOT NULL DEFAULT '[]'::jsonb,
  is_featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_courses_featured ON courses(is_featured);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON courses TO anon, authenticated;

DROP POLICY IF EXISTS "anon_select_courses" ON courses;
CREATE POLICY "anon_select_courses"
ON courses FOR SELECT
TO anon, authenticated USING (true);
