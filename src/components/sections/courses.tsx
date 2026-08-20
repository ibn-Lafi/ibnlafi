import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import type { CoursesContent } from "@/content/types";

export function Courses({ courses }: { courses: CoursesContent }) {
  return (
    <section id="courses" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="06"
          title={courses.title}
          subtitle={courses.subtitle}
        />

        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <Reveal as="ul" stagger className="divide-y divide-border">
            {courses.items.map((course, i) => (
              <li
                key={i}
                className="flex flex-wrap items-center justify-between gap-2 px-5 py-4 transition-colors hover:bg-muted"
              >
                <div>
                  <p className="text-sm font-semibold">{course.name}</p>
                  {course.provider && (
                    <p className="text-xs text-muted-foreground">
                      {course.provider}
                    </p>
                  )}
                </div>
                {course.year && (
                  <span className="text-xs font-medium text-muted-foreground">
                    {course.year}
                  </span>
                )}
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
