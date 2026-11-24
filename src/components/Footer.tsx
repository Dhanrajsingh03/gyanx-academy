import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "@/lib/router";
import { CATEGORIES } from "@/lib/supabase";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                Gayan X Academy
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Practical online courses in stock market, forex, digital marketing, and AI.
              Learn from experienced mentors and build skills for the real world.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Categories
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/courses?category=${encodeURIComponent(cat)}`}
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-neutral-400 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-neutral-400 transition-colors hover:text-white">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-neutral-400">
                <Mail className="h-4 w-4 text-primary-400" />
                shwetakumari7091688484@gmail.com
              </li>
              <li className="flex items-center gap-2 text-neutral-400">
                <Phone className="h-4 w-4 text-primary-400" />
                +91 77650 62154
              </li>
              <li className="flex items-center gap-2 text-neutral-400">
                <MapPin className="h-4 w-4 text-primary-400" />
                Flat 76, Shweta Kumari, Narhi, Dulhin Bazar, Patna, Bihar 801102
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Gayan X Academy. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
