import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getContent } from "@/content";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
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
        <Reveal>
          <Experience experience={content.experience} />
        </Reveal>
        <Reveal>
          <Achievements achievements={content.achievements} />
        </Reveal>
        <Reveal>
          <Skills skills={content.skills} />
        </Reveal>
        <Reveal>
          <Education education={content.education} />
        </Reveal>
        <Reveal>
          <Courses courses={content.courses} />
        </Reveal>
      </main>
    </>
  );
}
