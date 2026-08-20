import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getContent } from "@/content";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";
import { Education } from "@/components/sections/education";
import { Courses } from "@/components/sections/courses";
import { Contact } from "@/components/sections/contact";

export default async function LocalePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const content = getContent(locale);

  return (
    <>
      <Navbar locale={locale} nav={content.nav} />
      <main>
        <Hero hero={content.hero} resume={content.resume} />
        <About about={content.about} />
        <Experience experience={content.experience} />
        <Skills skills={content.skills} />
        <Achievements achievements={content.achievements} />
        <Education education={content.education} />
        <Courses courses={content.courses} />
        <Contact contact={content.contact} />
      </main>
      <Footer footer={content.footer} brand={content.nav.brand} />
    </>
  );
}
