import type { PortfolioContent } from "./types";

export const en: PortfolioContent = {
  meta: {
    title: "Ali Al-Jahdali | Personal Portfolio",
    description:
      "The personal portfolio of Ali Al-Jahdali — about, experience, skills, achievements, education, and courses.",
  },
  nav: {
    brand: "Ali Al-Jahdali",
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
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Ali Al-Jahdali",
    role: "Job title — to be updated",
    tagline:
      "This is placeholder copy that will be replaced with the real content once provided.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "Download CV",
    location: "Saudi Arabia",
  },
  about: {
    title: "About Me",
    paragraphs: [
      "This is placeholder copy for the about section, to be replaced with the real content once it is provided.",
    ],
    highlights: [
      { label: "Years of experience", value: "—" },
      { label: "Projects", value: "—" },
      { label: "Certifications", value: "—" },
    ],
  },
  experience: {
    title: "Experience",
    subtitle: "My professional journey over the years",
    items: [
      {
        role: "Job title",
        organization: "Organization name",
        period: "2020 — Present",
        location: "City, Country",
        description: ["Details for this role will be added once content is provided."],
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Tools and technologies I work with",
    groups: [
      {
        category: "Technical skills",
        items: ["To be updated"],
      },
    ],
  },
  achievements: {
    title: "Achievements",
    subtitle: "Highlights of what I've accomplished",
    items: [
      {
        title: "Achievement",
        description: "Details for this achievement will be added once content is provided.",
        year: "2024",
      },
    ],
  },
  education: {
    title: "Education",
    subtitle: "Academic qualifications",
    items: [
      {
        degree: "Degree",
        institution: "University name",
        period: "2016 — 2020",
        location: "City, Country",
      },
    ],
  },
  courses: {
    title: "Courses",
    subtitle: "Certifications and courses completed",
    items: [
      {
        name: "Course name",
        provider: "Provider",
        year: "2024",
      },
    ],
  },
  contact: {
    title: "Get in Touch",
    subtitle: "I'd love to hear from you",
    email: "example@email.com",
    location: "Saudi Arabia",
    socials: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "X", href: "#" },
    ],
  },
  footer: {
    rights: "All rights reserved",
    builtWith: "Designed & built with care",
  },
};
