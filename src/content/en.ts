import type { PortfolioContent } from "./types";

export const en: PortfolioContent = {
  meta: {
    title: "Ali Al-Hasnani | Product & Brand Management",
    description:
      "The personal portfolio of Ali Al-Hasnani — about, experience, skills, achievements, education, and courses.",
  },
  nav: {
    brand: "Ali Al-Hasnani",
    links: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      achievements: "Achievements",
      education: "Education",
      courses: "Courses",
      contact: "Contact",
    },
    themeToggle: {
      toggle: "Toggle theme",
    },
    languageToggle: "العربية",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Ali Al-Hasnani",
    role: "Product & Brand Management",
    tagline:
      "I specialize in building and developing brands and managing products and businesses. I turn ideas and traditional operations into growable brands through market research, customer needs analysis, product development, identity and positioning, and identifying growth opportunities.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "Download CV",
    location: "Makkah, Saudi Arabia",
  },
  resume: {
    href: "/cv.pdf",
    downloadName: "Ali-Al-Hasnani-CV.pdf",
  },
  about: {
    title: "About Me",
    paragraphs: [
      "I specialize in building and developing brands and managing products and businesses. I have experience turning ideas and traditional operations into growable brands through market research, understanding customer needs, product development, building identity and positioning, and identifying growth opportunities.",
      "I focus on connecting the product to the brand and to market needs, to build projects and products with real value, competitive strength, and sustainable growth.",
    ],
    highlights: [
      { label: "Years of experience", value: "3+" },
      { label: "Skills", value: "12+" },
      { label: "Courses & certificates", value: "7" },
    ],
  },
  experience: {
    title: "Experience",
    subtitle: "My professional journey over the years",
    items: [
      {
        role: "Management & Strategic Transformation",
        organization: "Banan Al-Saada Establishment",
        period: "2024 — 2026",
        location: "Saudi Arabia",
        description: [
          "Led the establishment's strategic transformation from a traditional sweets shop into a fully integrated brand.",
          "Founded a dedicated production facility for the brand and built an integrated operating system.",
          "Set and developed operational and commercial strategies that improved overall process efficiency.",
        ],
      },
      {
        role: "Food Quality Specialist",
        organization: "Ruwad Al-Jawda Quality & Consulting Co.",
        period: "Hajj season 1445–1446 AH",
        location: "Saudi Arabia",
        description: [
          "Implemented and monitored food safety systems, ensuring compliance with quality standards and regulatory requirements across all production stages.",
          "Collaborated with production teams to ensure compliance with quality requirements and reinforced a culture of continuous improvement and food safety adherence.",
        ],
      },
      {
        role: "Cashier / Treasurer",
        organization: "Abu Ishaq Establishment for Steel & Building Materials",
        period: "2022 — 2024",
        location: "Saudi Arabia",
        description: [
          "Managed daily cash operations, received payments, and issued invoices while ensuring accurate financial reconciliations.",
          "Supported periodic inventory checks by matching financial records against sales and helping investigate discrepancies.",
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Tools and capabilities I work with",
    groups: [
      {
        category: "Strategy & Management",
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
        category: "Product & Brand",
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
    title: "Achievements",
    subtitle: "Highlights of what I've accomplished",
    items: [
      {
        title: "Glowrda Platform",
        organization: "Prince Mohammed bin Salman Foundation (Misk)",
        description:
          "Contributed to developing the Glowrda platform as part of the Misk Foundation's initiatives.",
      },
      {
        title: "Maeen Platform",
        organization: "Jadathon Hackathon",
        description: "Participated in the Jadathon hackathon and helped develop the Maeen platform.",
      },
    ],
  },
  education: {
    title: "Education",
    subtitle: "Academic qualifications",
    items: [
      {
        degree: "Bachelor's in General Chemistry",
        institution: "Umm Al-Qura University — College of Science",
        period: "2019 — 2025",
        location: "Makkah",
      },
      {
        degree: "Summer Training",
        institution: "Hera General Hospital, Makkah — Chemistry Lab",
        period: "",
        location: "Makkah",
      },
      {
        degree: "Graduation Project",
        institution: "Organic Spectroscopy — Organic Spectral Analysis",
        period: "",
        location: "Umm Al-Qura University",
      },
    ],
  },
  courses: {
    title: "Courses",
    subtitle: "Certifications and courses completed",
    items: [
      { name: "Food Safety Management ISO 22000" },
      { name: "Quality Management ISO 9001" },
      { name: "Hazard Analysis & Critical Control Points (HACCP)" },
      { name: "Good Manufacturing Practices (GMP)" },
      { name: "AI Agents Engineering" },
      { name: "Product Management & Development" },
      { name: "Brand Strategy: Building, Positioning & Growth" },
    ],
  },
  contact: {
    title: "Get in Touch",
    subtitle: "I'd love to hear from you",
    email: "aloos909@gmail.com",
    emailLabel: "Email",
    phone: "0550772934",
    phoneLabel: "Phone",
    location: "Makkah, Saudi Arabia",
    socials: [],
  },
  footer: {
    rights: "All rights reserved",
    builtWith: "Designed & built with care",
  },
};
