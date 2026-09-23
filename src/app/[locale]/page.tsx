import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getContent } from "@/content";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { MailIcon, WhatsAppIcon } from "@/components/icons";

export default async function LocalePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { hero, contact, nav } = getContent(locale);
  const arabic = locale === "ar";
  const copy = arabic ? {
    skip: "انتقل إلى المحتوى",
    intro: "أعمل على تطوير الأعمال والمنتجات وبناء العلامات التجارية، من الفكرة إلى الإطلاق.",
    work: "من أعمالي",
    items: [
      { name: "بنان السعادة", category: "تطوير الأعمال", text: "تحويل نشاط حلويات تقليدي إلى علامة تجارية، وتأسيس معمل إنتاج ومنظومة تشغيل." },
      { name: "غلوردا", category: "تطوير المنتجات", text: "منصة للهدايا والورود والحلويات، شاركت بها في برنامج مسك لانشباد." },
      { name: "مَعين", category: "الذكاء الاصطناعي", text: "تطوير منصة مَعين ضمن هاكاثون جادة ثون." },
    ],
    contact: "لنتواصل",
    note: "لفكرة جديدة أو فرصة عمل.",
    location: "مكة المكرمة، السعودية",
  } : {
    skip: "Skip to content",
    intro: "I develop businesses, products and brands — from the first idea to launch.",
    work: "Selected work",
    items: [
      { name: "Benan Al-Saada", category: "Business development", text: "Transformed a traditional confectionery business into a brand with its own production facility and operations." },
      { name: "Glorda", category: "Product development", text: "A gifts, flowers and sweets marketplace, developed through Misk Launchpad." },
      { name: "Maeen", category: "Artificial intelligence", text: "Developed Maeen as part of the JadaThon hackathon." },
    ],
    contact: "Let’s connect",
    note: "For a new idea or an opportunity.",
    location: "Makkah, Saudi Arabia",
  };

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">{copy.skip}</a>
      <header className="site-header">
        <a className="wordmark" href={`/${locale}`} aria-label={hero.name}>ibnlafi<span aria-hidden="true">.</span></a>
        <nav className="preferences" aria-label={arabic ? "إعدادات العرض" : "Display preferences"}>
          <LanguageToggle targetLocale={arabic ? "en" : "ar"} label={nav.languageToggle} />
          <ThemeToggle label={nav.themeToggle.toggle} />
        </nav>
      </header>
      <main id="main">
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">{hero.greeting}</p>
          <h1 id="intro-title">{hero.name}<span className="name-dot" aria-hidden="true">.</span></h1>
          <p className="intro-copy">{copy.intro}</p>
          <a className="text-link" href="#contact">{copy.contact}<span aria-hidden="true">↗</span></a>
        </section>
        <section className="work" aria-labelledby="work-title">
          <h2 id="work-title" className="section-label">{copy.work}</h2>
          <div className="work-list">
            {copy.items.map((item, index) => (
              <article className="work-row" key={item.name}>
                <span className="work-number" aria-hidden="true">0{index + 1}</span>
                <div><div className="work-title"><h3>{item.name}</h3><span>{item.category}</span></div><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div><h2 id="contact-title">{copy.contact}</h2><p>{copy.note}</p></div>
          <div className="contact-links">
            <a className="contact-button primary" href={`mailto:${contact.email}`}><MailIcon className="h-4 w-4" />{contact.emailLabel}</a>
            {contact.whatsapp && <a className="contact-button" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="h-4 w-4" />{contact.whatsappLabel}</a>}
          </div>
        </section>
      </main>
      <footer className="site-footer"><span>{hero.name}</span><span>{copy.location}</span></footer>
    </div>
  );
}
