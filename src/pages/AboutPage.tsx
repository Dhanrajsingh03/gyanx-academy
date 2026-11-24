import {
  Award,
  Target,
  Eye,
  Heart,
  TrendingUp,
  LineChart,
  Megaphone,
  BrainCircuit,
  Building2,
  FileCheck2,
  MapPin,
} from "lucide-react";
import { Link } from "@/lib/router";

const instructors = [
  {
    name: "James Carter",
    title: "Former Wall Street Analyst, CFA",
    bio: "15 years on the trading floor at major investment banks. James teaches stock market analysis and day trading with a focus on risk discipline and repeatable strategies.",
    expertise: "Stock Market",
    icon: <LineChart className="h-6 w-6" />,
  },
  {
    name: "Sofia Martinez",
    title: "Senior Forex Strategist",
    bio: "A decade of institutional forex trading experience. Sofia specializes in price action, scalping, and session-based strategies that work across all major currency pairs.",
    expertise: "Forex Market",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    name: "David Thompson",
    title: "Growth Marketing Lead, ex-Google",
    bio: "Led growth teams at Google and two venture-backed startups. David teaches the full digital marketing stack — SEO, paid ads, email, and social — the way it is practiced in the industry.",
    expertise: "Digital Marketing",
    icon: <Megaphone className="h-6 w-6" />,
  },
  {
    name: "Dr. Priya Nair",
    title: "AI Researcher, PhD Machine Learning",
    bio: "Published researcher with 12 years in AI and ML. Priya makes complex AI concepts accessible to business professionals and teaches hands-on machine learning with Python.",
    expertise: "Artificial Intelligence",
    icon: <BrainCircuit className="h-6 w-6" />,
  },
];

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-950 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-neutral-950 to-neutral-950" />
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-primary-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl animate-fade-in-up">
            About Gayan X Academy
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-300 animate-fade-in-up">
            Gayan X Academy is an education services enterprise focused on practical
            learning in stock market, forex, digital marketing, and artificial
            intelligence. Our mission is to make useful skills accessible and
            easy to apply.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Target className="h-6 w-6" />,
                title: "Our Mission",
                desc: "To make professional-grade financial, marketing, and AI education accessible to everyone — regardless of background or location.",
              },
              {
                icon: <Eye className="h-6 w-6" />,
                title: "Our Vision",
                desc: "A world where anyone with internet access can learn the skills to achieve financial independence and career growth.",
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Our Values",
                desc: "Honesty over hype. Practical skills over theory. Student success over enrollment numbers. We teach what actually works.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { value: "2026–27", label: "Classification Year" },
              { value: "Micro", label: "Enterprise Type" },
              { value: "85", label: "Education Services" },
              { value: "23 Nov 2026", label: "Udyam Registered" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-primary-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                <Building2 className="h-6 w-6" />
              </div>
              <h2 className="font-display text-3xl font-bold text-neutral-900">
                A Registered Education Enterprise
              </h2>
              <p className="mt-4 leading-relaxed text-neutral-600">
                Gayan X Academy is registered as a Micro enterprise under the
                education services category. Our official registration details
                are provided for transparency.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex gap-3">
                  <FileCheck2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Udyam Registration</div>
                    <div className="mt-1 font-semibold text-neutral-900">UDYAM-BR-26-0260505</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Enterprise Type</div>
                    <div className="mt-1 font-semibold text-neutral-900">Micro · 2026–27</div>
                  </div>
                </div>
                <div className="flex gap-3 sm:col-span-2">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Official Address</div>
                    <div className="mt-1 font-semibold text-neutral-900">Flat 76, Shweta Kumari, Narhi, Dulhin Bazar, Patna, Bihar 801102</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
              Meet Your Instructors
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Every instructor has years of hands-on experience in their field.
              You are learning from people who actually do this for a living.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {instructors.map((inst) => (
              <div
                key={inst.name}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg sm:flex-row"
              >
                <div className="mb-4 flex flex-shrink-0 items-center justify-center sm:mb-0 sm:mr-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                    {inst.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-900">
                    {inst.name}
                  </h3>
                  <p className="text-sm font-medium text-primary-600">
                    {inst.title}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
                    {inst.expertise}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {inst.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Award className="mx-auto h-12 w-12 text-primary-600" />
          <h2 className="mt-6 font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
            Start Your Learning Journey Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Explore practical courses from Gayan X Academy and start building
            skills for the modern economy.
          </p>
          <Link
            to="/courses"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl"
          >
            Browse Courses
          </Link>
        </div>
      </section>
    </div>
  );
}
