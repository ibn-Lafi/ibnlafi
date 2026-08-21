export interface NavContent {
  brand: string;
  links: {
    about: string;
    experience: string;
    skills: string;
    achievements: string;
    education: string;
    courses: string;
    contact: string;
  };
  themeToggle: {
    toggle: string;
  };
  languageToggle: string;
}

export interface HeroContent {
  greeting: string;
  name: string;
  role: string;
  tagline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  location: string;
}

export interface ResumeContent {
  href: string;
  downloadName: string;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  highlights: { label: string; value: string }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
}

export interface ExperienceContent {
  title: string;
  subtitle: string;
  items: ExperienceItem[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface SkillsContent {
  title: string;
  subtitle: string;
  groups: SkillGroup[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  description: string;
  year?: string;
}

export interface AchievementsContent {
  title: string;
  subtitle: string;
  items: AchievementItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

export interface EducationContent {
  title: string;
  subtitle: string;
  items: EducationItem[];
}

export interface CourseItem {
  name: string;
  provider?: string;
  year?: string;
}

export interface CoursesContent {
  title: string;
  subtitle: string;
  items: CourseItem[];
}

export interface ContactContent {
  title: string;
  subtitle: string;
  email: string;
  emailLabel: string;
  phone?: string;
  phoneLabel?: string;
  location: string;
  socials: { label: string; href: string }[];
}

export interface FooterContent {
  rights: string;
  builtWith: string;
}

export interface SiteMeta {
  title: string;
  description: string;
}

export interface PortfolioContent {
  meta: SiteMeta;
  nav: NavContent;
  hero: HeroContent;
  resume: ResumeContent;
  about: AboutContent;
  experience: ExperienceContent;
  skills: SkillsContent;
  achievements: AchievementsContent;
  education: EducationContent;
  courses: CoursesContent;
  contact: ContactContent;
  footer: FooterContent;
}
