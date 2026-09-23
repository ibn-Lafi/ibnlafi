import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getContent } from "@/content";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { MailIcon } from "@/components/icons";
import { SocialLinks } from "@/components/social-links";

export default async function LocalePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { hero, contact, nav } = getContent(locale);
  const ar = locale === "ar";
  const copy = ar ? {
    skip: "انتقل إلى المحتوى", work: "أعمال ومشاريع", contact: "لنتواصل",
    eyebrow: "الأعمال · المنتجات · العلامات التجارية",
    intro: "أطوّر الأفكار إلى منتجات وعلامات تجارية.",
    bio: "أنا علي الحسناني. أعمل في تطوير الأعمال والمنتجات وبناء العلامات التجارية، مع اهتمام بالتقنية العقارية والذكاء الاصطناعي.",
    selected: "من الفكرة إلى التجربة", selectedNote: "مجموعة من المشاريع التي عملت على بنائها وتطويرها.",
    featured: "مشروع أعمل على بنائه", sbaah: "سبعة", category: "منصة للتقنية العقارية",
    sbaahDescription: "منصة تمكّن المطورين والمسوقين والوسطاء العقاريين من إنشاء مواقعهم العقارية وإدارة العقارات والعملاء والفرص البيعية من مكان واحد.",
    features: ["مواقع عقارية", "إدارة العقارات", "إدارة علاقات العملاء"], visit: "اكتشف سبعة",
    projects: [
      { name: "دولسيور", category: "تطوير علامة تجارية", logo: "/brands/dulceur.png", description: "تطوير مؤسسة بنان السعادة من محل حلويات تقليدي إلى علامة تجارية، مع تأسيس معمل إنتاج ومنظومة تشغيل." },
      { name: "غلوردا", category: "تطوير منتج رقمي", logo: "/brands/glorda.svg", description: "تطبيق يجمع الهدايا والورود والكيك والحلويات، شاركت به في برنامج مسك لانشباد 9.0 مع مؤسسة الأمير محمد بن سلمان." },
      { name: "مَعين", category: "الذكاء الاصطناعي", logo: "", description: "وكيل ذكاء اصطناعي للحجز والإرشاد في مكة والمدينة، طوّرته ضمن هاكاثون جادة ثون." },
    ],
    contactTitle: "عندك فكرة؟ لنتحدث.", note: "يسعدني التواصل حول المشاريع وفرص العمل.", location: "مكة المكرمة، السعودية", details: "التفاصيل",
  } : {
    skip: "Skip to content", work: "Selected work", contact: "Let’s connect",
    eyebrow: "Business · Products · Brands", intro: "Turning ideas into products and brands.",
    bio: "I’m Ali Alhasnani. I work across business development, products and brands, with an interest in PropTech and artificial intelligence.",
    selected: "From idea to experience", selectedNote: "A selection of projects I have built and developed.",
    featured: "A project I’m building", sbaah: "Sbaah", category: "A real estate technology platform",
    sbaahDescription: "A platform that helps real estate developers, marketers and brokers create their own property websites and manage properties, customers and sales opportunities in one place.",
    features: ["Property websites", "Property management", "Customer relationships"], visit: "Explore Sbaah",
    projects: [
      { name: "Dulcior", category: "Brand development", logo: "/brands/dulceur.png", description: "Developed Benan Al-Saada from a traditional confectionery shop into a brand with its own production facility and operations." },
      { name: "Glorda", category: "Digital product", logo: "/brands/glorda.svg", description: "An app bringing together gifts, flowers, cakes and sweets, with which I participated in Misk Launchpad 9.0 at the Prince Mohammed bin Salman Foundation." },
      { name: "Maeen", category: "Artificial intelligence", logo: "", description: "An AI agent for bookings and guidance in Makkah and Madinah, developed during the JadaThon hackathon." },
    ],
    contactTitle: "Have an idea? Let’s talk.", note: "Open to conversations about projects and work opportunities.", location: "Makkah, Saudi Arabia", details: "Details",
  };
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">{copy.skip}</a>
      <header className="site-header">
        <a className="wordmark" href={`/${locale}`} aria-label={hero.name}><Image src="/header-logo.svg" alt="" width={44} height={44} priority /></a>
        <nav className="section-nav" aria-label={ar ? "أقسام الصفحة" : "Page sections"}><a href="#work">{copy.work}</a></nav>
        <div className="preferences"><LanguageToggle targetLocale={ar ? "en" : "ar"} label={nav.languageToggle} /><ThemeToggle label={nav.themeToggle.toggle} /></div>
      </header>
      <main id="main">
        <section className="intro" aria-labelledby="intro-title">
          <div className="hero-copy"><p className="eyebrow"><span className="red-dot" />{copy.eyebrow}</p><h1 id="intro-title">{copy.intro}</h1><p className="intro-copy">{copy.bio}</p><div className="hero-actions"><a className="contact-button primary" href="#work">{copy.work}<span aria-hidden="true">↓</span></a><a className="text-link" href="#contact">{copy.contact}<span aria-hidden="true">↗</span></a></div></div>
          <aside className="profile-note"><Image className="profile-avatar" src="/brand-avatar.jpeg" alt={hero.name} width={180} height={180} /><p>{hero.name}</p><span>{copy.location}</span><div className="profile-line" /><p className="profile-caption">{hero.role}</p></aside>
        </section>
        <section id="work" className="page-section" aria-labelledby="work-title">
          <div className="section-heading"><div><p className="section-label">01 / {copy.work}</p><h2 id="work-title">{copy.selected}</h2></div><p>{copy.selectedNote}</p></div>
          <div className="project-grid">
            {[{ name: copy.sbaah, category: copy.category, logo: "/brands/sbaah.svg", description: copy.sbaahDescription, href: "https://sbaah.com" }, ...copy.projects.map(project => ({ ...project, href: "" }))].map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="brand-stage">
                  {project.logo ? <Image src={project.logo} alt={ar ? `شعار ${project.name}` : `${project.name} logo`} width={250} height={100} sizes="(max-width: 580px) 140px, 220px" /> : <span className="project-wordmark">{project.name}</span>}
                  <span className="project-index" aria-hidden="true">0{index + 1}</span>
                </div>
                <div className="project-body">
                  <p className="project-category">{project.category}</p><h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-link">{copy.visit}<span aria-hidden="true">↗</span></a>}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="contact" aria-labelledby="contact-title"><div><p className="section-label">02 / {copy.contact}</p><h2 id="contact-title">{copy.contactTitle}</h2><p>{copy.note}</p></div><div className="contact-links"><a className="contact-button primary" href={`mailto:${contact.email}`}><MailIcon className="h-4 w-4" />{contact.emailLabel}</a><SocialLinks arabic={ar} /></div></section>
      </main>
      <footer className="site-footer"><span>{hero.name}</span><span>{copy.location}</span></footer>
    </div>
  );
}
