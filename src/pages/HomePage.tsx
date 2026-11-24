import {
  TrendingUp,
  LineChart,
  Megaphone,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  Award,
  Users,
  Briefcase,
  Star,
} from "lucide-react";
import { Link } from "@/lib/router";
import { COURSES, CATEGORIES } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Stock Market": <LineChart className="h-7 w-7" />,
  "Forex Market": <TrendingUp className="h-7 w-7" />,
  "Digital Marketing": <Megaphone className="h-7 w-7" />,
  "Artificial Intelligence": <BrainCircuit className="h-7 w-7" />,
};

const CATEGORY_COLORS: Record<string, string> = {
  "Stock Market": "from-primary-500 to-primary-700",
  "Forex Market": "from-success-500 to-success-700",
  "Digital Marketing": "from-accent-500 to-accent-700",
  "Artificial Intelligence": "from-neutral-700 to-neutral-900",
};

export function HomePage() {
  const featured = COURSES.filter((c) => c.is_featured).sort(
    (a, b) => b.students_count - a.students_count
  );
  const loading = false;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-neutral-950 to-neutral-950" />
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary-600/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-success-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 backdrop-blur animate-fade-in">
              <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
              Practical learning from Gayan X Academy
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-white text-balance sm:text-5xl lg:text-6xl animate-fade-in-up">
              Master the Markets.{" "}
              <span className="bg-gradient-to-r from-primary-400 to-success-400 bg-clip-text text-transparent">
                Build the Future.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300 animate-fade-in-up">
              Professional-grade online courses in Stock Market trading, Forex,
              Digital Marketing, and Artificial Intelligence. Learn directly from
              industry experts and turn skills into income.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up">
              <Link
                to="/courses"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-600/30 transition-all hover:bg-primary-700 hover:shadow-primary-600/40"
              >
                Explore Courses
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
              >
                Meet Our Instructors
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { icon: <Users className="h-5 w-5" />, value: "2026", label: "Established" },
              { icon: <Briefcase className="h-5 w-5" />, value: "8", label: "Expert Courses" },
              { icon: <Award className="h-5 w-5" />, value: "4.7★", label: "Avg Rating" },
              { icon: <CheckCircle2 className="h-5 w-5" />, value: "85", label: "Education Services" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600/20 text-primary-400">
                  {stat.icon}
                </div>
                <div className="font-display text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
              Explore Our Categories
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Four high-demand domains. One academy. Choose your path and start
              learning today.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category, i) => (
              <Link
                key={category}
                to={`/courses?category=${encodeURIComponent(category)}`}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${CATEGORY_COLORS[category]} text-white`}
                >
                  {CATEGORY_ICONS[category]}
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-900 transition-colors group-hover:text-primary-700">
                  {category}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Learn the skills that drive this industry forward.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600">
                  Browse Courses
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
                Featured Courses
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Our most popular courses, hand-picked by our team and loved by
                thousands of students.
              </p>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
            >
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {loading ? (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-96 animate-pulse rounded-2xl border border-neutral-200 bg-neutral-100"
                />
              ))}
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Why Students Choose Us
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              We do not just teach theory. We teach you what actually works in
              the real world.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: <Award className="h-6 w-6" />,
                title: "Learn From Experts",
                desc: "Every instructor has years of real-world experience trading, marketing, or building AI systems professionally.",
              },
              {
                icon: <Briefcase className="h-6 w-6" />,
                title: "Career-Focused Curriculum",
                desc: "Our courses are built around the skills employers and clients actually pay for — not academic theory.",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Join 90,000+ Students",
                desc: "Become part of a global community of learners supporting each other on the journey to mastery.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-primary-500/30 hover:bg-white/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Learning?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
            Build practical skills with Gayan X Academy and learn for the modern economy.
          </p>
          <Link
            to="/courses"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-primary-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Browse All Courses
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
