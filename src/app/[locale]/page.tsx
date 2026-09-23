import Image from "next/image";
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
      { name: "غلوردا", category: "تطوير منتج رقمي", logo: "/brands/glorda.svg", description: "تطبيق يجمع الهدايا والورود والكيك والحلويات، شاركت به في برنامج مسك لانشباد 9.0." },
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
      { name: "Glorda", category: "Digital product", logo: "/brands/glorda.svg", description: "A marketplace for gifts, flowers, cakes and sweets, developed through Misk Launchpad 9.0." },
      { name: "Maeen", category: "Artificial intelligence", logo: "", description: "An AI agent for bookings and guidance in Makkah and Madinah, developed during the JadaThon hackathon." },
    ],
    contactTitle: "Have an idea? Let’s talk.", note: "Open to conversations about projects and work opportunities.", location: "Makkah, Saudi Arabia", details: "Details",
  };
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">{copy.skip}</a>
      <header className="site-header">
        <a className="wordmark" href={`/${locale}`} aria-label={hero.name}>ibnlafi<span aria-hidden="true">.</span></a>
        <nav className="section-nav" aria-label={ar ? "أقسام الصفحة" : "Page sections"}><a href="#work">{copy.work}</a></nav>
        <div className="preferences"><LanguageToggle targetLocale={ar ? "en" : "ar"} label={nav.languageToggle} /><ThemeToggle label={nav.themeToggle.toggle} /></div>
      </header>
      <main id="main">
        <section className="intro" aria-labelledby="intro-title">
          <div className="hero-copy"><p className="eyebrow"><span className="red-dot" />{copy.eyebrow}</p><h1 id="intro-title">{copy.intro}</h1><p className="intro-copy">{copy.bio}</p><div className="hero-actions"><a className="contact-button primary" href="#work">{copy.work}<span aria-hidden="true">↓</span></a><a className="text-link" href="#contact">{copy.contact}<span aria-hidden="true">↗</span></a></div></div>
          <aside className="profile-note"><span className="profile-initial" aria-hidden="true">{ar ? "ع" : "A"}<span>.</span></span><p>{hero.name}</p><span>{copy.location}</span><div className="profile-line" /><p className="profile-caption">{hero.role}</p></aside>
        </section>
        <section id="work" className="page-section" aria-labelledby="work-title">
          <div className="section-heading"><div><p className="section-label">01 / {copy.work}</p><h2 id="work-title">{copy.selected}</h2></div><p>{copy.selectedNote}</p></div>
          <article className="featured-project">
            <div className="featured-copy"><p className="eyebrow">{copy.featured}</p><h3>{copy.sbaah}</h3><p className="project-category">{copy.category}</p><p className="project-description">{copy.sbaahDescription}</p><ul className="tags">{copy.features.map(x=><li key={x}>{x}</li>)}</ul><a href="https://sbaah.com" target="_blank" rel="noopener noreferrer" className="text-link">{copy.visit}<span aria-hidden="true">↗</span></a></div>
            <div className="featured-visual"><div className="brand-stage sbaah-stage"><Image src="/brands/sbaah.svg" alt={ar ? "شعار سبعة" : "Sbaah logo"} width={250} height={100} /></div><span className="visual-caption" lang="en" dir="ltr">SBAAH / PROPTECH</span></div>
          </article>
          <div className="project-grid">{copy.projects.map((project,index)=><article className="project-card" key={project.name}><div className="brand-stage">{project.logo ? <Image src={project.logo} alt={ar ? `شعار ${project.name}` : `${project.name} logo`} width={250} height={100} /> : <span className="project-wordmark">{project.name}</span>}<span className="project-index" aria-hidden="true">0{index+2}</span></div><div className="project-body"><p className="project-category">{project.category}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p></div></article>)}</div>
        </section>
        <section id="contact" className="contact" aria-labelledby="contact-title"><div><p className="section-label">02 / {copy.contact}</p><h2 id="contact-title">{copy.contactTitle}</h2><p>{copy.note}</p></div><div className="contact-links"><a className="contact-button primary" href={`mailto:${contact.email}`}><MailIcon className="h-4 w-4" />{contact.emailLabel}</a>{contact.whatsapp && <a className="contact-button" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="h-4 w-4" />{contact.whatsappLabel}</a>}</div></section>
      </main>
      <footer className="site-footer"><span>{hero.name}</span><span>{copy.location}</span></footer>
    </div>
  );
}
