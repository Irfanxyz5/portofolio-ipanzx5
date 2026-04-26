// src/components/sections/AboutSection.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  translations: {
    title: string;
    description: string;
  };
}

export default function AboutSection({ translations }: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const bubbles = [
    { text: 'Web Developer', delay: 0, x: -20, y: -30 },
    { text: 'Blockchain', delay: 0.2, x: 30, y: -50 },
    { text: 'Full Stack', delay: 0.4, x: -30, y: 20 },
    { text: 'Web3', delay: 0.6, x: 40, y: 40 },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-300">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ocean-700/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Photo with Bubbles */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Photo Container */}
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border-4 border-ocean-500/30 shadow-2xl shadow-ocean-500/20">
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-ocean-500/20 to-ocean-900/20 backdrop-blur-sm" />
                
                {/* Photo Placeholder - Replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-100 to-dark-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Photo Here</span>
                  {/* In real app: */}
                  {/* <Image
                    src="/images/about-photo.jpg"
                    alt="About Me"
                    fill
                    className="object-cover"
                  /> */}
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200/80 via-transparent to-transparent" />
              </div>

              {/* Floating Bubbles */}
              {bubbles.map((bubble, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          y: [0, -10, 0],
                        }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    opacity: { delay: bubble.delay, duration: 0.5 },
                    scale: { delay: bubble.delay, duration: 0.5 },
                    y: {
                      delay: bubble.delay + 0.5,
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  className="absolute"
                  style={{
                    left: `${50 + bubble.x}%`,
                    top: `${50 + bubble.y}%`,
                  }}
                >
                  <div className="px-4 py-2 rounded-full bg-gradient-to-br from-ocean-500/30 to-ocean-700/30 backdrop-blur-md border border-ocean-400/40 shadow-lg shadow-ocean-500/20">
                    <span className="text-ocean-300 text-sm font-medium whitespace-nowrap">
                      {bubble.text}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Decorative Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-8 -right-8 w-32 h-32 border-2 border-dashed border-ocean-400/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-dashed border-ocean-600/20 rounded-full"
              />
            </div>
          </motion.div>

          {/* Right - About Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '60px' } : { width: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-ocean-400 to-ocean-600 mb-4"
              />
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white to-ocean-200 bg-clip-text text-transparent">
                  {translations.title}
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                Hi! I'm <span className="text-ocean-400 font-semibold">Ipanzx</span>, 
                a passionate Full Stack Developer and Web3 enthusiast with over 10 years of experience 
                in building innovative digital solutions.
              </p>
              
              <p>
                My journey in tech started with a curiosity about how websites work, and it has evolved 
                into a deep expertise in modern web technologies, blockchain development, and creating 
                scalable applications that make a difference.
              </p>

              <p>
                I specialize in building full-stack applications using React, Next.js, Node.js, and 
                TypeScript. I'm also deeply involved in the Web3 space, working with Solidity, smart 
                contracts, and decentralized applications (dApps).
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                technical articles and mentorship.
              </p>

              {/* Skills Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-ocean-500/10 to-ocean-700/10 border border-ocean-500/20">
                  <div className="text-3xl font-bold text-ocean-400 mb-1">10+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-ocean-500/10 to-ocean-700/10 border border-ocean-500/20">
                  <div className="text-3xl font-bold text-ocean-400 mb-1">50+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-ocean-500/10 to-ocean-700/10 border border-ocean-500/20">
                  <div className="text-3xl font-bold text-ocean-400 mb-1">15+</div>
                  <div className="text-sm text-gray-400">Tech Stacks</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-ocean-500/10 to-ocean-700/10 border border-ocean-500/20">
                  <div className="text-3xl font-bold text-ocean-400 mb-1">100%</div>
                  <div className="text-sm text-gray-400">Dedicated</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
