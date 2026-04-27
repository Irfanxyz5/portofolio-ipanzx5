// src/components/sections/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';
import PhotoCard3D from '../three/PhotoCard3D';
import { SOCIAL_MEDIA } from '@/lib/constants';

const iconMap: { [key: string]: any } = {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
};

interface HeroSectionProps {
  translations: {
    greeting: string;
    name: string;
    role: string;
    description: string;
  };
}

export default function HeroSection({ translations }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-ocean">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-ocean-400/5"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full bg-ocean-500/20 text-ocean-400 text-sm font-medium mb-6">
                {translations.greeting}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-ocean-200 to-white bg-clip-text text-transparent">
                {translations.name}
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-ocean-400 mb-6"
            >
              {translations.role}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
            >
              {translations.description}
            </motion.p>

            {/* Social Media Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-4"
            >
              {SOCIAL_MEDIA.slice(0, 4).map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-ocean-500/20 to-ocean-700/20 border border-ocean-400/30 flex items-center justify-center text-ocean-400 hover:text-white hover:border-ocean-400 hover:shadow-lg hover:shadow-ocean-500/50 transition-all duration-300 group"
                  >
                    <Icon className="text-xl group-hover:scale-110 transition-transform" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center justify-center lg:justify-start"
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="flex flex-col items-center text-ocean-400"
              >
                <span className="text-sm mb-2">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-ocean-400 rounded-full flex items-start justify-center p-1">
                  <motion.div
                    animate={{
                      y: [0, 12, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-1 h-3 bg-ocean-400 rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-ocean-500/20 to-ocean-700/20 blur-3xl rounded-full" />
              
              {/* 3D Photo Card */}
              <div className="relative z-10">
                <PhotoCard3D />
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-10 -right-10 w-20 h-20 border-4 border-ocean-400/30 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-10 -left-10 w-16 h-16 border-4 border-ocean-600/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 fill-dark-300"
        >
          <motion.path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            animate={{
              d: [
                'M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z',
                'M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z',
                'M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>
    </section>
  );
}
