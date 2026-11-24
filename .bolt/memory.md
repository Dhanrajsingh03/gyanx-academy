# Project memory

## Product intent & audience

- Course-selling website for an online institute: **Gayan X Academy**
- Course categories: Stock Market, Forex Market, Digital Marketing, AI, Institute Programs
- Target audience: learners seeking professional trading/marketing/AI education
- Production-ready, multi-page site (Home, Courses, Course Detail, About, Contact)

## Brand personality & voice

- Professional, educational, trustworthy institute positioning
- Official brand name: Gayan X Academy (confirmed from Udyam registration certificate)
- MSME-registered Micro enterprise; education-services activity

## Visual design & UX direction

- Clean blue/neutral color scheme with consistent design system
- Smooth animations throughout; responsive mobile→desktop
- Custom Tailwind theme configured; custom fonts loaded in index.html
- Real stock photography for courses and content
- Lucide React icons; JSX + Tailwind classes; React hooks
- Import via `@/` path alias (maps to `src/`)
- Course catalog: live search, category/level filtering, sorting
- Course detail: expandable curriculum, instructor profile, "what you'll learn" checklist, enrollment sidebar with pricing/discounts, related courses
- Contact page: validation + success confirmation
- About page includes dedicated registration/enterprise info panel

## Decisions, constraints & rationale

- Framework: vite-react; Supabase used for database-backed course catalog
- 8 courses seeded (2 per category) with curriculum, pricing, ratings, images
- Supabase client + types created; custom Link component extended with `style` prop support
- Build and typecheck both pass cleanly
- Enrollment and contact forms are presentational (no payment backend confirmed)
- Official business details integrated across site:
  - Udyam No: UDYAM-BR-26-0260505
  - Classification: Micro enterprise
  - Activity: Education services
  - Classification year: 2026–27
  - Address: Patna, Bihar, India
  - Contact: Gmail address + Indian phone number

## Open questions & assumptions

- No payment processing or user authentication implemented or requested yet
- Instructor profiles and course content are seeded/sample data
- Assumed 2 courses per category as initial catalog depth
- Institute Programs category mentioned in summary but may need dedicated courses beyond current 4 categories