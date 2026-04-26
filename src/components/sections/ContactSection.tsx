// src/components/sections/ContactSection.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaEnvelope } from 'react-icons/fa';
import { SOCIAL_MEDIA } from '@/lib/constants';
import { useTranslations } from 'next-intl';

const iconMap: { [key: string]: any } = {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
};

export default function ContactSection() {
  const t = useTranslations('contact');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-ocean">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-ocean-400/10"
              style={{
                width: Math.random() * 150 + 50,
                height: Math.random() * 150 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.1, 0.3, 0.1],
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-ocean-400 to-ocean-600 mx-auto mb-4"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-ocean-200 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Social Media Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12"
        >
          {SOCIAL_MEDIA.map((social, index) => {
            const Icon = iconMap[social.icon];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="relative aspect-square">
                  {/* Background Circle */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ocean-500/20 to-ocean-700/20 border border-ocean-400/30 group-hover:border-ocean-400 transition-all duration-300" />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-ocean-500/0 group-hover:bg-ocean-500/20 transition-all duration-300 blur-xl" />

                  {/* Icon */}
                  <div className="relative h-full flex flex-col items-center justify-center">
                    <Icon className="text-4xl text-ocean-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    <span className="text-xs text-gray-400 group-hover:text-white mt-2 transition-colors duration-300">
                      {social.name}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-dark-100/90 to-dark-200/90 backdrop-blur-sm border border-ocean-500/20 rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {t('cta.title')}
          </h3>
          <p className="text-gray-300 mb-6">
            {t('cta.description')}
          </p>
          <motion.a
            href="mailto:contact@ipanzx.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-ocean-500 to-ocean-600 text-white font-medium hover:shadow-lg hover:shadow-ocean-500/50 transition-all duration-300"
          >
            <FaEnvelope />
            <span>{t('cta.button')}</span>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-ocean-500/20"
        >
          <p className="text-gray-400 text-sm">
            {t('footer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
