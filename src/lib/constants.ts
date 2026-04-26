// src/lib/constants.ts
import { SocialMedia } from '@/types';

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ipanzx',
    icon: 'FaGithub',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ipanzx',
    icon: 'FaLinkedin',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/ipanzx',
    icon: 'FaInstagram',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/ipanzx',
    icon: 'FaTelegram',
  },
  {
    name: 'Email',
    url: 'mailto:contact@ipanzx.com',
    icon: 'FaEnvelope',
  },
];

export const NAVIGATION_ITEMS = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'contact', href: '#contact' },
];

export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'cn', name: '中文', flag: '🇨🇳' },
];

export const PORTFOLIO_TABS = [
  { key: 'techStack', label: 'Technology Stack' },
  { key: 'projects', label: 'My Projects' },
  { key: 'certificates', label: 'Certificates' },
];
