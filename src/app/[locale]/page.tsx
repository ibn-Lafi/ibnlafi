import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getContent } from "@/content";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { SectionTabs } from "@/components/section-tabs";
import {
  BriefcaseIcon,
  TrophyIcon,
  SparklesIcon,
  GraduationCapIcon,
  BookOpenIcon,
} from "@/components/icons";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";
import { Education } from "@/components/sections/education";
import { Courses } from "@/components/sections/courses";

export default async function LocalePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const content = getContent(locale);

  return (
    <>
      <Navbar locale={locale} nav={content.nav} />
      <main>
        <Hero
          hero={content.hero}
          resume={content.resume}
          contact={content.contact}
        />
        <Reveal>
          <About about={content.about} />
        </Reveal>
        <SectionTabs
          tabs={[
            {
              id: "experience",
              label: content.experience.title,
              icon: <BriefcaseIcon className="h-4 w-4" />,
              content: <Experience experience={content.experience} />,
            },
            {
              id: "achievements",
              label: content.achievements.title,
              icon: <TrophyIcon className="h-4 w-4" />,
              content: <Achievements achievements={content.achievements} />,
            },
            {
              id: "skills",
              label: content.skills.title,
              icon: <SparklesIcon className="h-4 w-4" />,
              content: <Skills skills={content.skills} />,
            },
            {
              id: "education",
              label: content.education.title,
              icon: <GraduationCapIcon className="h-4 w-4" />,
              content: <Education education={content.education} />,
            },
            {
              id: "courses",
              label: content.courses.title,
              icon: <BookOpenIcon className="h-4 w-4" />,
              content: <Courses courses={content.courses} />,
            },
          ]}
        />
      </main>
    </>
  );
}
