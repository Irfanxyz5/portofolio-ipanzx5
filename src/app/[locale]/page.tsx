// src/app/[locale]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/sections/LoadingScreen';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';

// Temporary translations - in production, use next-intl properly
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      experience: 'Experience',
      portfolio: 'Portfolio',
      contact: 'Contact Me',
    },
    hero: {
      greeting: '👋 Hello, I am',
      name: 'Ipanzx',
      role: 'Full Stack & Web3 Developer',
      description: 'Building innovative digital solutions with modern web technologies and blockchain. Passionate about creating scalable, secure, and user-friendly applications.',
    },
    about: {
      title: 'About Me',
      description: 'Learn more about my journey',
    },
    experience: {
      title: 'My Experience',
    },
    portfolio: {
      title: 'Portfolio',
      techStack: 'Technology Stack',
      projects: 'My Projects',
      certificates: 'Certificates',
    },
    contact: {
      title: 'Get In Touch',
      description: 'Feel free to reach out for collaborations or just a friendly chat!',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang Saya',
      experience: 'Pengalaman',
      portfolio: 'Portfolio',
      contact: 'Kontak',
    },
    hero: {
      greeting: '👋 Halo, Saya',
      name: 'Ipanzx',
      role: 'Full Stack & Web3 Developer',
      description: 'Membangun solusi digital inovatif dengan teknologi web modern dan blockchain. Bersemangat dalam menciptakan aplikasi yang scalable, aman, dan user-friendly.',
    },
    about: {
      title: 'Tentang Saya',
      description: 'Pelajari lebih lanjut tentang perjalanan saya',
    },
    experience: {
      title: 'Pengalaman Saya',
    },
    portfolio: {
      title: 'Portfolio',
      techStack: 'Stack Teknologi',
      projects: 'Proyek Saya',
      certificates: 'Sertifikat',
    },
    contact: {
      title: 'Hubungi Saya',
      description: 'Jangan ragu untuk menghubungi saya untuk kolaborasi atau sekadar mengobrol!',
    },
  },
  cn: {
    nav: {
      home: '首页',
      about: '关于我',
      experience: '经验',
      portfolio: '作品集',
      contact: '联系我',
    },
    hero: {
      greeting: '👋 你好，我是',
      name: 'Ipanzx',
      role: '全栈和Web3开发者',
      description: '使用现代网络技术和区块链构建创新的数字解决方案。热衷于创建可扩展、安全和用户友好的应用程序。',
    },
    about: {
      title: '关于我',
      description: '了解更多关于我的旅程',
    },
    experience: {
      title: '我的经验',
    },
    portfolio: {
      title: '作品集',
      techStack: '技术栈',
      projects: '我的项目',
      certificates: '证书',
    },
    contact: {
      title: '联系我',
      description: '欢迎随时联系我进行合作或友好聊天！',
    },
  },
};

export default function HomePage({ params }: { params: { locale: string } }) {
  const [isLoading, setIsLoading] = useState(true);
  const locale = params.locale || 'en';
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <>
          <Navbar currentLocale={locale} translations={t.nav} />
          
          <main className="bg-gradient-ocean">
            <HeroSection translations={t.hero} />
            <AboutSection translations={t.about} />
            <ExperienceSection translations={t.experience} />
            <PortfolioSection translations={t.portfolio} />
            <ContactSection translations={t.contact} />
          </main>
        </>
      )}
    </>
  );
}
