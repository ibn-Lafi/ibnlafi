import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { BookOpenIcon } from "@/components/icons";
import type { CoursesContent } from "@/content/types";

export function Courses({ courses }: { courses: CoursesContent }) {
  return (
    <section id="courses" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="06"
          title={courses.title}
          subtitle={courses.subtitle}
          icon={<BookOpenIcon className="h-5 w-5" />}
        />

        <Reveal stagger className="grid gap-4 sm:grid-cols-2">
          {courses.items.map((course, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-border p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:hover:border-foreground/30"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted">
                <BookOpenIcon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{course.name}</p>
                {course.provider && (
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {course.provider}
                  </p>
                )}
              </div>
              {course.year && (
                <span className="shrink-0 text-xs font-medium text-muted-foreground">
                  {course.year}
                </span>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
