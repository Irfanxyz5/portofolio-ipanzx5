// src/components/sections/LoadingScreen.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-ocean"
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-ocean-400/10"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 text-center">
            {/* Wave Text Effect */}
            <div className="relative inline-block">
              <svg
                width="400"
                height="200"
                viewBox="0 0 400 200"
                className="mx-auto"
              >
                {/* Define the text as a clip path */}
                <defs>
                  <clipPath id="textClip">
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      className="text-[100px] font-bold"
                      style={{ fontFamily: 'monospace' }}
                    >
                      IPANZX
                    </text>
                  </clipPath>

                  {/* Gradient for wave */}
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#40a9ff" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#1890ff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#096dd9" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Text outline */}
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-[100px] font-bold"
                  fill="none"
                  stroke="#40a9ff"
                  strokeWidth="2"
                  style={{ fontFamily: 'monospace' }}
                >
                  IPANZX
                </text>

                {/* Wave animation inside text */}
                <g clipPath="url(#textClip)">
                  {/* Multiple wave layers for depth */}
                  <motion.path
                    d={`M 0 ${200 - (progress * 1.5)} Q 100 ${180 - (progress * 1.5)} 200 ${200 - (progress * 1.5)} T 400 ${200 - (progress * 1.5)} V 200 H 0 Z`}
                    fill="url(#waveGradient)"
                    opacity="0.6"
                    animate={{
                      d: [
                        `M 0 ${200 - (progress * 1.5)} Q 100 ${180 - (progress * 1.5)} 200 ${200 - (progress * 1.5)} T 400 ${200 - (progress * 1.5)} V 200 H 0 Z`,
                        `M 0 ${200 - (progress * 1.5)} Q 100 ${190 - (progress * 1.5)} 200 ${200 - (progress * 1.5)} T 400 ${200 - (progress * 1.5)} V 200 H 0 Z`,
                        `M 0 ${200 - (progress * 1.5)} Q 100 ${180 - (progress * 1.5)} 200 ${200 - (progress * 1.5)} T 400 ${200 - (progress * 1.5)} V 200 H 0 Z`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  <motion.path
                    d={`M 0 ${210 - (progress * 1.5)} Q 100 ${195 - (progress * 1.5)} 200 ${210 - (progress * 1.5)} T 400 ${210 - (progress * 1.5)} V 200 H 0 Z`}
                    fill="#1890ff"
                    opacity="0.4"
                    animate={{
                      d: [
                        `M 0 ${210 - (progress * 1.5)} Q 100 ${195 - (progress * 1.5)} 200 ${210 - (progress * 1.5)} T 400 ${210 - (progress * 1.5)} V 200 H 0 Z`,
                        `M 0 ${210 - (progress * 1.5)} Q 100 ${205 - (progress * 1.5)} 200 ${210 - (progress * 1.5)} T 400 ${210 - (progress * 1.5)} V 200 H 0 Z`,
                        `M 0 ${210 - (progress * 1.5)} Q 100 ${195 - (progress * 1.5)} 200 ${210 - (progress * 1.5)} T 400 ${210 - (progress * 1.5)} V 200 H 0 Z`,
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.3,
                    }}
                  />
                </g>
              </svg>
            </div>

            {/* Loading Progress Bar */}
            <div className="mt-8 mx-auto w-64">
              <div className="h-1 bg-dark-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-ocean-600 via-ocean-400 to-ocean-600 bg-[length:200%_100%]"
                  style={{ width: `${progress}%` }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
              <motion.p
                className="mt-4 text-ocean-300 text-sm font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {progress}%
              </motion.p>
            </div>

            {/* Loading Text */}
            <motion.p
              className="mt-6 text-ocean-200 text-lg tracking-wider"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Initializing Portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
