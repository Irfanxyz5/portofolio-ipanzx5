// src/components/layout/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { useRouter, usePathname } from 'next/navigation';
import { NAVIGATION_ITEMS, LANGUAGES } from '@/lib/constants';
import { smoothScroll } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface NavbarProps {
  currentLocale: string;
}

export default function Navbar({ currentLocale }: NavbarProps) {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'about', 'experience', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      smoothScroll(href);
    }
  };

  const changeLanguage = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
    setShowLangMenu(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-200/80 backdrop-blur-lg shadow-lg shadow-ocean-950/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
              onClick={() => handleNavClick('#home')}
            >
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-ocean-400 to-ocean-600 bg-clip-text text-transparent">
                {'<Ipanzx />'}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {NAVIGATION_ITEMS.map((item) => (
                <motion.button
                  key={item.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.key
                      ? 'bg-ocean-500/20 text-ocean-400'
                      : 'text-gray-300 hover:text-ocean-400 hover:bg-ocean-500/10'
                  }`}
                >
                  {t(item.key)}
                </motion.button>
              ))}

              {/* Language Switcher */}
              <div className="relative ml-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-ocean-400 hover:bg-ocean-500/10 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>
                    {LANGUAGES.find((lang) => lang.code === currentLocale)?.flag}
                  </span>
                  <span className="text-xs">
                    {LANGUAGES.find((lang) => lang.code === currentLocale)?.code.toUpperCase()}
                  </span>
                </motion.button>

                <AnimatePresence>
                  {showLangMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-40 bg-dark-100/90 backdrop-blur-lg rounded-lg shadow-xl border border-ocean-500/20 overflow-hidden"
                    >
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full px-4 py-3 text-left text-sm flex items-center space-x-3 transition-colors ${
                            currentLocale === lang.code
                              ? 'bg-ocean-500/20 text-ocean-400'
                              : 'text-gray-300 hover:bg-ocean-500/10 hover:text-ocean-400'
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-ocean-400 hover:bg-ocean-500/10 transition-colors"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-dark-100/95 backdrop-blur-lg border-t border-ocean-500/20"
            >
              <div className="px-4 py-4 space-y-2">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.key
                        ? 'bg-ocean-500/20 text-ocean-400'
                        : 'text-gray-300 hover:text-ocean-400 hover:bg-ocean-500/10'
                    }`}
                  >
                    {t(item.key)}
                  </motion.button>
                ))}

                {/* Mobile Language Switcher */}
                <div className="pt-4 border-t border-ocean-500/20">
                  <p className="px-4 text-xs text-gray-400 mb-2">Language</p>
                  <div className="grid grid-cols-3 gap-2">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`px-3 py-2 rounded-lg text-sm flex flex-col items-center justify-center space-y-1 transition-colors ${
                          currentLocale === lang.code
                            ? 'bg-ocean-500/20 text-ocean-400'
                            : 'text-gray-300 hover:bg-ocean-500/10 hover:text-ocean-400'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-xs">{lang.code.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Click outside to close language menu */}
      {showLangMenu && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setShowLangMenu(false)}
        />
      )}
    </>
  );
}
