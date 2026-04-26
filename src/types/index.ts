// src/types/index.ts

export interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

export interface TechStack {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  createdAt: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'work' | 'course';
  icon?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    description: string;
  };
  about: {
    title: string;
    description: string;
  };
  experience: {
    title: string;
  };
  portfolio: {
    title: string;
    techStack: string;
    projects: string;
    certificates: string;
  };
  contact: {
    title: string;
    description: string;
  };
}

export type Locale = 'en' | 'id' | 'cn';
