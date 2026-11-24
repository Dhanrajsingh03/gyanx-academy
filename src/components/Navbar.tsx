import { TrendingUp } from "lucide-react";
import { Link } from "@/lib/router";

export function Navbar({ currentPath }: { currentPath: string }) {
  const links = [
    { label: "Home", to: "/" },
    { label: "Courses", to: "/courses" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white">
            <TrendingUp className="h-5 w-5" />
          </div>
          <span className="font-display text-xl font-bold text-neutral-900">
            Gayan X
          </span>
          <span className="hidden font-display text-xl font-semibold text-primary-600 sm:inline">
            Academy
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                currentPath === link.to
                  ? "text-primary-600"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/courses"
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Enroll Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
