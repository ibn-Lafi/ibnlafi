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
    skip: "انتقل إلى المحتوى", work: "ملف الأعمال", contact: "لنتواصل",
    eyebrow: "AI · Business · E-commerce",
    intro: "أطوّر الأفكار إلى منتجات وعلامات تجارية.",
    bio: "أنا علي الحسناني. أعمل في تطوير الأعمال والمنتجات وبناء العلامات التجارية، مع اهتمام بالتقنية العقارية والذكاء الاصطناعي.",
    selected: "ملف الأعمال", selectedNote: "مشاريع ومنتجات وعلامات شاركت في بنائها وتطويرها.",
    interests: "الاهتمامات", interestsNote: "المجالات التي أركز عليها وأتابعها باستمرار.",
    services: "الخدمات", servicesTitle: "خدمات مصممة لتناسب احتياجك", servicesNote: "حلول عملية لبناء وتطوير الأعمال والحضور الرقمي.",
    serviceItems: [
      { title: "تطوير الأعمال", description: "أساعد في تحويل الأفكار والفرص إلى أعمال قابلة للنمو، من دراسة السوق ونموذج العمل إلى تطوير العمليات وتجربة العميل وبناء خطط النمو.", tags: ["دراسة السوق", "نماذج الأعمال", "استراتيجية النمو", "تطوير العمليات", "تجربة العميل"] },
      { title: "تصميم وإدارة المتاجر الإلكترونية", description: "تصميم وتجهيز وإدارة المتاجر الإلكترونية من الإطلاق إلى التشغيل والتطوير، مع تحسين تجربة الشراء وتنظيم المنتجات والعروض وربط الأدوات والخدمات اللازمة.", tags: ["سلة", "زد", "Shopify", "إدارة المنتجات", "تجربة المستخدم", "التشغيل والتطوير"] },
      { title: "برمجة المواقع", description: "تصميم وبرمجة مواقع حديثة ومتجاوبة للشركات والعلامات التجارية، من صفحات الهبوط والمواقع التعريفية إلى المواقع المخصصة المرتبطة بالأنظمة والخدمات.", tags: ["Next.js", "React", "واجهات متجاوبة", "صفحات هبوط", "ربط API", "تطوير مخصص"] },
    ],
    featured: "مشروع أعمل على بنائه", sbaah: "سبعة", category: "منصة للتقنية العقارية",
    sbaahDescription: "منصة تمكّن المطورين والمسوقين والوسطاء العقاريين من إنشاء مواقعهم العقارية وإدارة العقارات والعملاء والفرص البيعية من مكان واحد.",
    features: ["مواقع عقارية", "إدارة العقارات", "إدارة علاقات العملاء"], visit: "اكتشف سبعة",
    projects: [
      { name: "دولسيور", category: "تطوير علامة تجارية", logo: "/brands/dulceur.png", description: "تطوير مؤسسة بنان السعادة من محل حلويات تقليدي إلى علامة تجارية، مع تأسيس معمل إنتاج ومنظومة تشغيل." },
      { name: "غلوردا", category: "تطوير منتج رقمي", logo: "/brands/glorda.svg", description: "تطبيق يجمع الهدايا والورود والكيك والحلويات، شاركت به في برنامج مسك لانشباد 9.0 مع مؤسسة الأمير محمد بن سلمان." },
      { name: "ڤينت", category: "تجارة إلكترونية", logo: "", description: "علامة ومتجر إلكتروني للمنتجات الموسمية، عملت على بنائه وتطوير تجربته التجارية." },
    ],
    contactTitle: "عندك فكرة؟ لنتحدث.", note: "يسعدني التواصل حول المشاريع وفرص العمل.", location: "مكة المكرمة، السعودية", details: "التفاصيل",
  } : {
    skip: "Skip to content", work: "Portfolio", contact: "Let’s connect",
    eyebrow: "AI · Business · E-commerce", intro: "Turning ideas into products and brands.",
    bio: "I’m Ali Alhasnani. I work across business development, products and brands, with an interest in PropTech and artificial intelligence.",
    selected: "Portfolio", selectedNote: "Projects, products and brands I have helped build and develop.",
    interests: "Interests", interestsNote: "The areas I focus on and continuously explore.",
    services: "Services", servicesTitle: "Services built around what you need", servicesNote: "Practical solutions for business growth and digital presence.",
    serviceItems: [
      { title: "Business Development", description: "Turning ideas and opportunities into scalable businesses, from market research and business models to operations, customer experience and growth planning.", tags: ["Market Research", "Business Models", "Growth Strategy", "Operations", "Customer Experience"] },
      { title: "E-commerce Design & Management", description: "Designing, launching and managing online stores, improving the shopping experience, organizing products and offers, and connecting the tools needed for daily operations.", tags: ["Salla", "Zid", "Shopify", "Product Management", "UX", "Store Operations"] },
      { title: "Web Development", description: "Designing and developing modern responsive websites for companies and brands, from landing pages and corporate sites to custom websites connected to systems and services.", tags: ["Next.js", "React", "Responsive UI", "Landing Pages", "API Integration", "Custom Development"] },
    ],
    featured: "A project I’m building", sbaah: "Sbaah", category: "A real estate technology platform",
    sbaahDescription: "A platform that helps real estate developers, marketers and brokers create their own property websites and manage properties, customers and sales opportunities in one place.",
    features: ["Property websites", "Property management", "Customer relationships"], visit: "Explore Sbaah",
    projects: [
      { name: "Dulcior", category: "Brand development", logo: "/brands/dulceur.png", description: "Developed Benan Al-Saada from a traditional confectionery shop into a brand with its own production facility and operations." },
      { name: "Glorda", category: "Digital product", logo: "/brands/glorda.svg", description: "An app bringing together gifts, flowers, cakes and sweets, with which I participated in Misk Launchpad 9.0 at the Prince Mohammed bin Salman Foundation." },
      { name: "VENT", category: "E-commerce", logo: "", description: "A seasonal-products e-commerce brand and store that I helped build and develop." },
    ],
    contactTitle: "Have an idea? Let’s talk.", note: "Open to conversations about projects and work opportunities.", location: "Makkah, Saudi Arabia", details: "Details",
  };
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">{copy.skip}</a>
      <header className="site-header">
        <a className="wordmark" href={`/${locale}`} aria-label={hero.name}><Image src="/header-logo.svg" alt="" width={44} height={44} priority /></a>
        <nav className="section-nav" aria-label={ar ? "أقسام الصفحة" : "Page sections"}><a href="#interests">{copy.interests}</a><a href="#work">{copy.work}</a><a href="#services">{copy.services}</a></nav>
        <div className="header-actions"><div className="preferences"><LanguageToggle targetLocale={ar ? "en" : "ar"} label={nav.languageToggle} /><ThemeToggle label={nav.themeToggle.toggle} /></div></div>
      </header>
      <main id="main">
        <section className="intro" aria-labelledby="intro-title">
          <div className="hero-copy"><p className="eyebrow"><span className="red-dot" />{copy.eyebrow}</p><h1 id="intro-title">{copy.intro}</h1><p className="intro-copy">{copy.bio}</p><div className="hero-actions"><a className="contact-button primary" href="#work">{copy.work}<span aria-hidden="true">↓</span></a><a className="text-link" href="#contact">{copy.contact}<span aria-hidden="true">↗</span></a></div></div>
          <aside className="profile-note"><Image className="profile-avatar" src="/brand-avatar.jpeg" alt={hero.name} width={180} height={180} /><p>{hero.name}</p><span>{copy.location}</span><div className="profile-line" /><p className="profile-caption">{hero.role}</p></aside>
        </section>
        <section id="interests" className="page-section interests-section" aria-labelledby="interests-title"><div className="section-heading"><div><p className="section-label">01 / {copy.interests}</p><h2 id="interests-title">{copy.interests}</h2></div><p>{copy.interestsNote}</p></div><div className="interest-grid">{["AI","Business","E-commerce"].map((item, index)=><article className="interest-card" key={item}><span>0{index+1}</span><h3>{item}</h3></article>)}</div></section>
        <section id="work" className="page-section" aria-labelledby="work-title">
          <div className="section-heading"><div><p className="section-label">02 / {copy.work}</p><h2 id="work-title">{copy.selected}</h2></div><p>{copy.selectedNote}</p></div>
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
        <section id="services" className="page-section services-section" aria-labelledby="services-title"><div className="section-heading"><div><p className="section-label">03 / {copy.services}</p><h2 id="services-title">{copy.servicesTitle}</h2></div><p>{copy.servicesNote}</p></div><div className="service-stack">{copy.serviceItems.map((service,index)=><article className="service-card" key={service.title} style={{"--service-index": index} as React.CSSProperties}><span className="service-number">0{index+1}</span><div><h3>{service.title}</h3><p>{service.description}</p><div className="service-tags">{service.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>
      </main>
      <footer className="site-footer"><div className="footer-socials"><SocialLinks arabic={ar} /><a className="social-link" href={`mailto:${contact.email}`} aria-label={ar ? "البريد الإلكتروني" : "Email"} title={ar ? "البريد الإلكتروني" : "Email"}><MailIcon className="h-5 w-5" /></a></div></footer>
    </div>
  );
}
