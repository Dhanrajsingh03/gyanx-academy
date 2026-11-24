import { useEffect, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { supabase, type Course, CATEGORIES } from "@/lib/supabase";
import { CourseCard } from "@/components/CourseCard";
import { useRouter } from "@/lib/router";

export function CoursesPage() {
  const { params } = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    params.category || "All"
  );
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  useEffect(() => {
    if (params.category) setSelectedCategory(params.category);
  }, [params.category]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let query = supabase.from("courses").select("*");

      if (selectedCategory !== "All") {
        query = query.eq("category", selectedCategory);
      }
      if (selectedLevel !== "All") {
        query = query.eq("level", selectedLevel);
      }

      if (sortBy === "popular") {
        query = query.order("students_count", { ascending: false });
      } else if (sortBy === "rating") {
        query = query.order("rating", { ascending: false });
      } else if (sortBy === "price-low") {
        query = query.order("price", { ascending: true });
      } else if (sortBy === "price-high") {
        query = query.order("price", { ascending: false });
      }

      const { data } = await query;
      setCourses(data || []);
      setLoading(false);
    })();
  }, [selectedCategory, selectedLevel, sortBy]);

  const filtered = search
    ? courses.filter(
        (c) =>
          c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.short_description.toLowerCase().includes(search.toLowerCase())
      )
    : courses;

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const categories = ["All", ...CATEGORIES];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
            All Courses
          </h1>
          <p className="mt-3 text-lg text-neutral-600">
            Find the right course to advance your career in trading, marketing,
            or AI.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Search + Sort */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-11 pr-4 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
            />
          </div>
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="h-4 w-4 text-neutral-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-700 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
          {/* Sidebar Filters */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-neutral-900">
                Category
              </h3>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                      selectedCategory === cat
                        ? "bg-primary-50 text-primary-700"
                        : "text-neutral-600 hover:bg-neutral-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <h3 className="mb-4 mt-6 text-sm font-bold uppercase tracking-wider text-neutral-900">
                Level
              </h3>
              <div className="space-y-1">
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                      selectedLevel === lvl
                        ? "bg-primary-50 text-primary-700"
                        : "text-neutral-600 hover:bg-neutral-50"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Course Grid */}
          <div>
            <div className="mb-4 text-sm text-neutral-500">
              {loading
                ? "Loading courses..."
                : `${filtered.length} course${filtered.length !== 1 ? "s" : ""} found`}
            </div>

            {loading ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-96 animate-pulse rounded-2xl border border-neutral-200 bg-neutral-100"
                  />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-16 text-center">
                <p className="text-lg font-medium text-neutral-600">
                  No courses match your search.
                </p>
                <p className="mt-1 text-sm text-neutral-400">
                  Try adjusting your filters or search terms.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
