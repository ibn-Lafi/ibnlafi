import type { PortfolioContent } from "./types";

export const ar: PortfolioContent = {
  meta: {
    title: "علي الحسناني | إدارة وتطوير المنتجات والعلامات التجارية",
    description:
      "الموقع الشخصي لعلي الحسناني — نبذة، الخبرات، المهارات، الإنجازات، التعليم، والدورات التدريبية.",
  },
  nav: {
    brand: "علي الحسناني",
    themeToggle: {
      toggle: "تبديل المظهر",
    },
    languageToggle: "English",
  },
  hero: {
    greeting: "مرحباً، أنا",
    name: "علي الحسناني",
    role: "إدارة وتطوير المنتجات والعلامات التجارية",
    ctaPrimary: "تواصل معي",
    ctaSecondary: "تحميل السيرة الذاتية",
  },
  resume: {
    href: "/cv.pdf",
    // Kept ASCII-only: Chromium silently drops the `download` attribute's
    // suggested filename (falls back to a bare "download") for non-ASCII
    // values, so a Unicode file name here would break the save-as prompt.
    downloadName: "Ali-Al-Hasnani-CV.pdf",
  },
  about: {
    title: "نبذة عني",
    paragraphs: [
      "متخصص في بناء وتطوير العلامات التجارية وإدارة وتطوير المنتجات والأعمال، أمتلك خبرة في تحويل الأفكار والأنشطة التقليدية إلى علامات تجارية قابلة للنمو، من خلال دراسة السوق واحتياجات العملاء، وتطوير المنتجات، وبناء الهوية والتموضع، وتحديد فرص النمو.",
      "أركز على ربط المنتج بالعلامة التجارية واحتياج السوق لبناء مشاريع ومنتجات ذات قيمة وقدرة تنافسية واستدامة في النمو.",
    ],
    highlights: [
      { label: "سنوات الخبرة", value: "+3" },
      { label: "المهارات", value: "12+" },
      { label: "الدورات والشهادات", value: "7" },
    ],
  },
  experience: {
    title: "الخبرات العملية",
    subtitle: "مسيرتي المهنية عبر السنوات",
    items: [
      {
        role: "الإدارة والتحول الاستراتيجي",
        organization: "مؤسسة بنان السعادة",
        period: "٢٠٢٤ — ٢٠٢٦",
        location: "المملكة العربية السعودية",
        description: [
          "قيادة التحول الاستراتيجي للمؤسسة من محل حلويات تقليدي إلى علامة تجارية متكاملة.",
          "تأسيس معمل إنتاج خاص بالعلامة التجارية، وبناء منظومة تشغيل متكاملة.",
          "وضع وتطوير الاستراتيجيات التشغيلية والتجارية التي أسهمت في تعزيز كفاءة العمليات.",
        ],
      },
      {
        role: "أخصائي الجودة الغذائية",
        organization: "شركة رواد الجودة والاستشارات",
        period: "موسم حج ١٤٤٥ - ١٤٤٦هـ",
        location: "المملكة العربية السعودية",
        description: [
          "تطبيق ومتابعة أنظمة سلامة الغذاء وضمان الالتزام بمعايير الجودة والمتطلبات التنظيمية في جميع مراحل الإنتاج.",
          "التعاون مع فرق الإنتاج لضمان الامتثال لمتطلبات الجودة، وتعزيز ثقافة التحسين المستمر والالتزام بمعايير سلامة الغذاء.",
        ],
      },
      {
        role: "أمين صندوق",
        organization: "مؤسسة أبو إسحاق للحديد ومواد البناء",
        period: "٢٠٢٢ — ٢٠٢٤",
        location: "المملكة العربية السعودية",
        description: [
          "إدارة العمليات النقدية اليومية، واستلام المدفوعات وإصدار الفواتير مع ضمان دقة التسويات المالية.",
          "دعم الجرد الدوري من خلال مطابقة السجلات المالية مع المبيعات والمشاركة في التحقق من أي فروقات.",
        ],
      },
    ],
  },
  skills: {
    title: "المهارات",
    subtitle: "الأدوات والقدرات التي أعمل بها",
    groups: [
      {
        category: "الإدارة والتخطيط الاستراتيجي",
        items: [
          "Design Thinking & Innovation",
          "Strategic Thinking & Planning",
          "Process Optimization & Efficiency",
          "Business Development & Innovation",
          "Team Capability Enhancement",
          "Customer Experience & Journey Design",
        ],
      },
      {
        category: "المنتج والعلامة التجارية",
        items: [
          "Canva Design",
          "Brand Strategy & Development",
          "Technical Solutions Development",
          "AI Agents Development",
          "Product Planning & Development",
          "Team Leadership & Mentorship",
        ],
      },
    ],
  },
  achievements: {
    title: "الإنجازات",
    subtitle: "أبرز ما تم تحقيقه",
    items: [
      {
        title: "منصة غلوردا",
        organization: "مؤسسة الأمير محمد بن سلمان الخيرية (مسك)",
        description:
          "المشاركة في تطوير منصة غلوردا ضمن مبادرات مؤسسة الأمير محمد بن سلمان الخيرية (مسك).",
      },
      {
        title: "منصة مَعين",
        organization: "هاكاثون جادة ثون",
        description:
          "المشاركة في هاكاثون جادة ثون وتطوير منصة مَعين.",
      },
    ],
  },
  education: {
    title: "التعليم",
    subtitle: "المؤهلات الأكاديمية",
    items: [
      {
        degree: "بكالوريوس في الكيمياء العامة",
        institution: "جامعة أم القرى — كلية العلوم",
        period: "٢٠١٩ — ٢٠٢٥",
        location: "مكة المكرمة",
      },
      {
        degree: "التدريب الصيفي",
        institution: "مستشفى حراء العام بمكة المكرمة — مختبر الكيمياء",
        period: "",
        location: "مكة المكرمة",
      },
      {
        degree: "مشروع التخرج",
        institution: "التحليل الطيفي العضوي — Organic Spectroscopy",
        period: "",
        location: "جامعة أم القرى",
      },
    ],
  },
  courses: {
    title: "الدورات التدريبية",
    subtitle: "الشهادات والدورات المكتسبة",
    items: [
      { name: "إدارة سلامة الغذاء ISO22000" },
      { name: "إدارة الجودة ISO9001" },
      { name: "تحليل المخاطر ونقاط التحكم الحرجة HACCP" },
      { name: "ممارسات التصنيع الجيد GMP" },
      { name: "هندسة وكلاء الذكاء الاصطناعي" },
      { name: "إدارة وتطوير المنتجات" },
      { name: "استراتيجية العلامة التجارية: البناء والتموضع والنمو" },
    ],
  },
  contact: {
    title: "تواصل معي",
    subtitle: "يسعدني التواصل معك في أي وقت",
    email: "aloos909@gmail.com",
    emailLabel: "البريد الإلكتروني",
    phone: "0550772934",
    phoneLabel: "الهاتف",
    location: "مكة المكرمة، المملكة العربية السعودية",
    socials: [],
  },
  footer: {
    rights: "جميع الحقوق محفوظة",
    builtWith: "صُمم وطُوّر بعناية",
  },
};
