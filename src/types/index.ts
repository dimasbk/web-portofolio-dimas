export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  employmentContext?: string;
  period: string;
  isCurrent: boolean;
  location: string;
  summary: string;
  highlights: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  honors?: string;
  areaOfInterest?: string[];
  finalProject?: string;
  highlights: string[];
}

export interface OrganizationItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  ecosystem: string;
  organization: string;
  period: string;
  role: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  featured: boolean;
  status: "Production" | "Completed" | "Archived";
}

export interface SkillItem {
  name: string;
  category: "Backend & Runtime" | "Database & Storage" | "Cloud & DevOps" | "Engineering Practices";
}

export interface SkillGroup {
  id: string;
  title: string;
  code: string;
  description: string;
  items: string[];
}

export interface Certification {
  id: string;
  provider: string;
  title: string;
  focus: string;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  linkedin: string;
  linkedinUrl: string;
  location: string;
  summary: string;
  statusLabel: string;
}
