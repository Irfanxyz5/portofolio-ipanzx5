// src/components/portfolio/TechStack.tsx
'use client';

import { motion } from 'framer-motion';
import { techStackData } from '@/data/techStack';

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {techStackData.map((tech, index) => (
        <motion.div
          key={tech.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="group"
        >
          <div className="relative aspect-square">
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-100/90 to-dark-200/90 backdrop-blur-sm rounded-2xl border border-ocean-500/20 shadow-xl group-hover:shadow-ocean-500/30 transition-all duration-300" />
            
            {/* Icon */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-5xl mb-3 group-hover:scale-110 transition-transform"
              >
                {tech.icon}
              </motion.div>
              
              {/* Tech Name */}
              <h3 className="text-sm font-bold text-white text-center group-hover:text-ocean-400 transition-colors">
                {tech.name}
              </h3>

              {/* Skill Level Bar */}
              <div className="w-full mt-3">
                <div className="h-1 bg-dark-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                    className="h-full bg-gradient-to-r from-ocean-400 to-ocean-600"
                  />
                </div>
              </div>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-ocean-500/0 group-hover:bg-ocean-500/10 rounded-2xl transition-all duration-300" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
