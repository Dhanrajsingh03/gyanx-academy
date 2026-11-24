import { useEffect, useState } from "react";
import {
  Star,
  Clock,
  PlayCircle,
  Users,
  CheckCircle2,
  ChevronDown,
  ArrowLeft,
  Lock,
  BarChart3,
  Award,
  Infinity as InfinityIcon,
  Smartphone,
} from "lucide-react";
import { COURSES, type Course } from "@/data/courses";
import { Link } from "@/lib/router";
import { CourseCard } from "@/components/CourseCard";

export function CourseDetailPage({ slug }: { slug: string }) {
  const [openSections, setOpenSections] = useState<number[]>([0]);
  const [enrolled, setEnrolled] = useState(false);

  const course: Course | null = COURSES.find((c) => c.slug === slug) ?? null;
  const related: Course[] = course
    ? COURSES.filter(
        (c) => c.category === course.category && c.id !== course.id
      ).slice(0, 3)
    : [];

  useEffect(() => {
    setOpenSections([0]);
    setEnrolled(false);
  }, [slug]);

  if (!course) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="font-display text-2xl font-bold text-neutral-900">
          Course not found
        </h1>
        <p className="mt-2 text-neutral-600">
          The course you are looking for does not exist or has been removed.
        </p>
        <Link
          to="/courses"
          className="mt-6 rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700"
        >
          Browse All Courses
        </Link>
      </div>
    );
  }

  const discount = course.original_price
    ? Math.round(
        ((course.original_price - course.price) / course.original_price) * 100
      )
    : 0;

  const totalLessons =
    course.curriculum?.reduce(
      (sum, s) => sum + (s.lessons?.length || 0),
      0
    ) || 0;

  const toggleSection = (i: number) => {
    setOpenSections((prev) =>
      prev.includes(i) ? prev.filter((s) => s !== i) : [...prev, i]
    );
  };

  return (
    <div className="bg-white">
      {/* Hero / Breadcrumb */}
      <div className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">
          {/* Main Content */}
          <div>
            {/* Course Header */}
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                {course.category}
              </span>
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
                {course.level}
              </span>
              {discount > 0 && (
                <span className="rounded-full bg-error-50 px-3 py-1 text-xs font-semibold text-error-600">
                  {discount}% Off
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
              {course.title}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              {course.short_description}
            </p>

            {/* Meta row */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-neutral-600">
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
                <span className="font-bold text-neutral-900">
                  {course.rating.toFixed(1)}
                </span>
                rating
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-neutral-400" />
                {course.students_count.toLocaleString()} students
              </span>
              <span className="flex items-center gap-1.5">
                <PlayCircle className="h-4 w-4 text-neutral-400" />
                {totalLessons} lessons
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-neutral-400" />
                {course.duration_hours} hours
              </span>
            </div>

            {/* Instructor */}
            <div className="mt-6 flex items-center gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 font-display text-xl font-bold text-white">
                {course.instructor_name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <div className="text-xs text-neutral-500">Instructor</div>
                <div className="font-display text-lg font-bold text-neutral-900">
                  {course.instructor_name}
                </div>
                {course.instructor_title && (
                  <div className="text-sm text-neutral-600">
                    {course.instructor_title}
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="font-display text-xl font-bold text-neutral-900">
                About This Course
              </h2>
              <p className="mt-4 leading-relaxed text-neutral-700">
                {course.description}
              </p>
            </div>

            {/* What you'll learn */}
            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h2 className="font-display text-xl font-bold text-neutral-900">
                What You Will Learn
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  `Complete ${course.category.toLowerCase()} fundamentals from the ground up`,
                  `Practical strategies used by professionals in the real world`,
                  `Risk management and capital protection frameworks`,
                  `Hands-on exercises and real-world case studies`,
                  `A certificate of completion to showcase your skills`,
                  `Lifetime access to all course materials and updates`,
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-500" />
                    <span className="text-sm text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="mt-8">
              <h2 className="font-display text-xl font-bold text-neutral-900">
                Course Curriculum
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                {course.curriculum?.length || 0} sections &middot;{" "}
                {totalLessons} lessons &middot; {course.duration_hours} hours
              </p>

              <div className="mt-4 space-y-3">
                {course.curriculum?.map((section, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
                  >
                    <button
                      onClick={() => toggleSection(i)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-neutral-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-sm font-bold text-primary-700">
                          {i + 1}
                        </span>
                        <span className="font-semibold text-neutral-900">
                          {section.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-neutral-500">
                          {section.lessons?.length || 0} lessons
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-neutral-400 transition-transform ${
                            openSections.includes(i) ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>
                    {openSections.includes(i) && (
                      <div className="border-t border-neutral-100">
                        {section.lessons?.map((lesson, j) => (
                          <div
                            key={j}
                            className="flex items-center justify-between px-5 py-3 pl-16 text-sm transition-colors hover:bg-neutral-50"
                          >
                            <div className="flex items-center gap-3">
                              <PlayCircle className="h-4 w-4 text-neutral-400" />
                              <span className="text-neutral-700">
                                {lesson.title}
                              </span>
                            </div>
                            <span className="flex items-center gap-2 text-neutral-400">
                              <Lock className="h-3.5 w-3.5" />
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Enrollment Card */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
              {course.image_url && (
                <div className="aspect-video overflow-hidden bg-neutral-100">
                  <img
                    src={course.image_url}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-bold text-neutral-900">
                    ${course.price}
                  </span>
                  {course.original_price && (
                    <span className="text-lg text-neutral-400 line-through">
                      ${course.original_price}
                    </span>
                  )}
                  {discount > 0 && (
                    <span className="rounded-md bg-error-50 px-2 py-0.5 text-xs font-bold text-error-600">
                      {discount}% OFF
                    </span>
                  )}
                </div>

                {enrolled ? (
                  <div className="mt-4 rounded-xl bg-success-50 p-4 text-center">
                    <CheckCircle2 className="mx-auto h-8 w-8 text-success-500" />
                    <p className="mt-2 font-semibold text-success-700">
                      You are enrolled!
                    </p>
                    <p className="mt-1 text-xs text-success-600">
                      Check your email for access details.
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={() => setEnrolled(true)}
                    className="mt-4 w-full rounded-xl bg-primary-600 py-3.5 font-bold text-white transition-all hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-200"
                  >
                    Enroll Now
                  </button>
                )}

                <button className="mt-3 w-full rounded-xl border border-neutral-200 py-3 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50">
                  Add to Wishlist
                </button>

                <div className="mt-6 space-y-3 border-t border-neutral-100 pt-6">
                  {[
                    { icon: <PlayCircle className="h-4 w-4" />, label: `${totalLessons} on-demand video lessons` },
                    { icon: <Clock className="h-4 w-4" />, label: `${course.duration_hours} hours of content` },
                    { icon: <InfinityIcon className="h-4 w-4" />, label: "Full lifetime access" },
                    { icon: <Smartphone className="h-4 w-4" />, label: "Access on mobile and desktop" },
                    { icon: <Award className="h-4 w-4" />, label: "Certificate of completion" },
                    { icon: <BarChart3 className="h-4 w-4" />, label: `${course.level} level` },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-neutral-700"
                    >
                      <span className="text-primary-500">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Courses */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-neutral-900">
              More in {course.category}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
