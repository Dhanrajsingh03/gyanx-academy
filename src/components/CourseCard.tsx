import { Star, Clock, PlayCircle, Users } from "lucide-react";
import { Link } from "@/lib/router";
import type { Course } from "@/lib/supabase";

export function CourseCard({ course }: { course: Course }) {
  const discount = course.original_price
    ? Math.round(
        ((course.original_price - course.price) / course.original_price) * 100
      )
    : 0;

  return (
    <Link
      to={`/course/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/50"
    >
      <div className="relative aspect-video overflow-hidden bg-neutral-100">
        {course.image_url ? (
          <img
            src={course.image_url}
            alt={course.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700">
            <PlayCircle className="h-12 w-12 text-white/70" />
          </div>
        )}
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary-700 shadow-sm">
            {course.category}
          </span>
          {discount > 0 && (
            <span className="rounded-full bg-error-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
              {discount}% OFF
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-3 text-xs text-neutral-500">
          <span className="font-medium text-neutral-700">{course.level}</span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
            <span className="font-semibold text-neutral-700">
              {course.rating.toFixed(1)}
            </span>
          </span>
        </div>

        <h3 className="font-display text-lg font-bold leading-snug text-neutral-900 transition-colors group-hover:text-primary-700">
          {course.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-600">
          {course.short_description}
        </p>

        <div className="mt-3 text-sm font-medium text-neutral-500">
          By {course.instructor_name}
        </div>

        <div className="mt-4 flex items-center gap-4 text-xs text-neutral-500">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {course.duration_hours}h
          </span>
          <span className="flex items-center gap-1">
            <PlayCircle className="h-3.5 w-3.5" />
            {course.lessons_count} lessons
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {course.students_count.toLocaleString()}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-neutral-900">
              ${course.price}
            </span>
            {course.original_price && (
              <span className="text-sm text-neutral-400 line-through">
                ${course.original_price}
              </span>
            )}
          </div>
          <span className="text-sm font-semibold text-primary-600 transition-transform group-hover:translate-x-1">
            View Course →
          </span>
        </div>
      </div>
    </Link>
  );
}
