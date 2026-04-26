// src/components/sections/ExperienceSection.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experienceData } from '@/data/experience';
import { HiAcademicCap, HiBriefcase, HiBookOpen } from 'react-icons/hi';

interface ExperienceSectionProps {
  translations: {
    title: string;
  };
}

const iconMap = {
  education: HiAcademicCap,
  work: HiBriefcase,
  course: HiBookOpen,
};

export default function ExperienceSection({ translations }: ExperienceSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-ocean">
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-ocean-400/10"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
          <p className="mt-4 text-gray-400 text-lg">My journey in tech and education</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean-400 via-ocean-600 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const Icon = iconMap[exp.type];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center shadow-lg shadow-ocean-500/50 border-4 border-dark-200"
                    >
                      <Icon className="text-2xl text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-28 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gradient-to-br from-dark-100/90 to-dark-200/90 backdrop-blur-sm border border-ocean-500/20 rounded-xl p-6 shadow-xl hover:shadow-ocean-500/20 transition-all duration-300 group"
                    >
                      {/* Type Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'work'
                            ? 'bg-ocean-500/20 text-ocean-400'
                            : exp.type === 'education'
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {exp.type === 'work' ? 'Work' : exp.type === 'education' ? 'Education' : 'Course'}
                        </span>
                        <span className="text-gray-500 text-sm">{exp.period}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-ocean-400 transition-colors">
                        {exp.title}
                      </h3>

                      {/* Organization */}
                      <p className="text-ocean-400 font-medium mb-3">{exp.organization}</p>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>

                      {/* Decorative Element */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-ocean-500/5 rounded-bl-full" />
                    </motion.div>
                  </div>

                  {/* Connector Line for Mobile */}
                  <div className="absolute left-8 w-20 h-0.5 bg-ocean-500/30 md:hidden" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-ocean-500/20 to-ocean-700/20 border border-ocean-400/30">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-2 h-2 rounded-full bg-ocean-400"
            />
            <span className="text-ocean-300 text-sm font-medium">
              Continuously Learning & Growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
