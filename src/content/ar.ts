import type { PortfolioContent } from "./types";

export const ar: PortfolioContent = {
  meta: {
    title: "علي الجحدلي | السيرة الذاتية الشخصية",
    description:
      "الموقع الشخصي لعلي الجحدلي — نبذة، الخبرات، المهارات، الإنجازات، التعليم، والدورات التدريبية.",
  },
  nav: {
    brand: "علي الجحدلي",
    links: {
      about: "نبذة عني",
      experience: "الخبرات",
      skills: "المهارات",
      achievements: "الإنجازات",
      education: "التعليم",
      courses: "الدورات",
      contact: "تواصل",
    },
    themeToggle: {
      toggle: "تبديل المظهر",
    },
    languageToggle: "English",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
  },
  hero: {
    greeting: "مرحباً، أنا",
    name: "علي الجحدلي",
    role: "المسمى الوظيفي — سيتم تحديثه",
    tagline:
      "هذا نص تعريفي مؤقت سيتم استبداله بالمحتوى الفعلي بعد استلام التفاصيل.",
    ctaPrimary: "تواصل معي",
    ctaSecondary: "تحميل السيرة الذاتية",
    location: "المملكة العربية السعودية",
  },
  about: {
    title: "نبذة عني",
    paragraphs: [
      "هذا نص مؤقت لقسم النبذة الشخصية، وسيتم استبداله بالمحتوى الفعلي عند توفره.",
    ],
    highlights: [
      { label: "سنوات الخبرة", value: "—" },
      { label: "المشاريع", value: "—" },
      { label: "الشهادات", value: "—" },
    ],
  },
  experience: {
    title: "الخبرات العملية",
    subtitle: "مسيرتي المهنية عبر السنوات",
    items: [
      {
        role: "المسمى الوظيفي",
        organization: "اسم الجهة",
        period: "٢٠٢٠ — الآن",
        location: "المدينة، الدولة",
        description: ["سيتم إضافة تفاصيل هذه الخبرة عند استلام المحتوى."],
      },
    ],
  },
  skills: {
    title: "المهارات",
    subtitle: "الأدوات والتقنيات التي أعمل بها",
    groups: [
      {
        category: "المهارات التقنية",
        items: ["سيتم التحديث"],
      },
    ],
  },
  achievements: {
    title: "الإنجازات",
    subtitle: "أبرز ما تم تحقيقه",
    items: [
      {
        title: "إنجاز",
        description: "سيتم إضافة تفاصيل هذا الإنجاز عند استلام المحتوى.",
        year: "٢٠٢٤",
      },
    ],
  },
  education: {
    title: "التعليم",
    subtitle: "المؤهلات الأكاديمية",
    items: [
      {
        degree: "الدرجة العلمية",
        institution: "اسم الجامعة",
        period: "٢٠١٦ — ٢٠٢٠",
        location: "المدينة، الدولة",
      },
    ],
  },
  courses: {
    title: "الدورات التدريبية",
    subtitle: "الشهادات والدورات المكتسبة",
    items: [
      {
        name: "اسم الدورة",
        provider: "الجهة المانحة",
        year: "٢٠٢٤",
      },
    ],
  },
  contact: {
    title: "تواصل معي",
    subtitle: "يسعدني التواصل معك في أي وقت",
    email: "example@email.com",
    location: "المملكة العربية السعودية",
    socials: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "X", href: "#" },
    ],
  },
  footer: {
    rights: "جميع الحقوق محفوظة",
    builtWith: "صُمم وطُوّر بعناية",
  },
};
