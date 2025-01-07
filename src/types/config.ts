export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type Identity = {
  name: string;
  logo: string;
  email: string;
  phone: string;
};

export type SEOInfo = {
  title: string;
  description: string;
  image: string;
};

export type Skills = {
  [category: string]: string[];
};

export type HomePageContent = {
  seo: SEOInfo;
  role: string;
  description: string;
  socialLinks: SocialLink[];
  skills: Skills;
  links: {
    title: string;
    url: string;
    external?: boolean;
  }[];
};

export type ResumeItem = {
  title: string;
  company: {
    name: string;
    image: string;
    url: string;
  };
  date: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  url: string;
};

export type ProjectPageContent = {
  seo: SEOInfo;
  subtitle: string;
  projects: Project[];
};

export type BlogPageContent = {
  seo: SEOInfo;
  subtitle: string;
};

export type Education = {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  gpa?: string;
};

export type Experience = {
  title: string;
  company: string;
  duration: string;
  description: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  url?: string;
};

export type ResearchPaper = {
  title: string;
  authors: string[];
  publication: string;
  date: string;
  url?: string;
};

// Add these to your existing types
export type EducationPageContent = {
  seo: SEOInfo;
  subtitle: string;
  education: Education[];
};

export type ExperiencePageContent = {
  seo: SEOInfo;
  subtitle: string;
  experience: Experience[];
};

export type CertificationPageContent = {
  seo: SEOInfo;
  subtitle: string;
  certifications: Certification[];
};

export type ResearchPageContent = {
  seo: SEOInfo;
  subtitle: string;
  papers: ResearchPaper[];
};
