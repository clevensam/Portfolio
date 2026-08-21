export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'DevOps & Tooling' | 'Business Operations' | 'Financial Systems';
  tags: string[];
  metrics: {
    highlight: string;
    description: string;
  }[];
  links: {
    github?: string;
    liveDemo?: string;
  };
  featured: boolean;
  caseStudy: CaseStudy;
}

export interface CaseStudy {
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  myRole: string;
  results: string[];
  stack: string[];
  keyFeatures: {
    title: string;
    description: string;
    iconName?: string;
  }[];
  architectureHighlights?: {
    component: string;
    role: string;
    benefit: string;
  }[];
  impactMetrics: {
    stat: string;
    label: string;
    detail: string;
  }[];
  demoSnippet?: {
    type: 'cli' | 'pos' | 'finance';
    defaultTitle: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  roleType: string;
  bullets: string[];
  metrics: string;
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface CourseCertification {
  title: string;
  issuer: string;
  year: string;
  category: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  organization: string;
  project: string;
  quote: string;
  highlightTag: string;
}
