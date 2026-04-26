// src/components/sections/PortfolioSection.tsx
'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PORTFOLIO_TABS } from '@/lib/constants';
import TechStack from '../portfolio/TechStack';
import ProjectCard from '../portfolio/ProjectCard';
import CertificateGallery from '../portfolio/CertificateGallery';

interface PortfolioSectionProps {
  translations: {
    title: string;
    techStack: string;
    projects: string;
    certificates: string;
  };
}

export default function PortfolioSection({ translations }: PortfolioSectionProps) {
  const [activeTab, setActiveTab] = useState('techStack');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tabLabels: { [key: string]: string } = {
    techStack: translations.techStack,
    projects: translations.projects,
    certificates: translations.certificates,
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-300">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-ocean-700/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-ocean-400 to-ocean-600 mx-auto mb-4"
          />
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white to-ocean-200 bg-clip-text text-transparent">
              {translations.title}
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">Explore my work and skills</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {PORTFOLIO_TABS.map((tab) => (
            <motion.button
              key={tab.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-ocean-500 to-ocean-600 text-white shadow-lg shadow-ocean-500/50'
                  : 'bg-dark-100/50 text-gray-400 hover:text-white hover:bg-dark-100'
              }`}
            >
              {tabLabels[tab.key]}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'techStack' && <TechStack />}
          {activeTab === 'projects' && <ProjectCard />}
          {activeTab === 'certificates' && <CertificateGallery />}
        </motion.div>
      </div>
    </section>
  );
}
