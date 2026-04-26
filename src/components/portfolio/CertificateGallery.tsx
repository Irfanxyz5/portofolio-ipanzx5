// src/components/portfolio/CertificateGallery.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiExternalLink } from 'react-icons/hi';
import { certificatesData } from '@/data/certificates';
import { useTranslations } from 'next-intl';

export default function CertificateGallery() {
  const t = useTranslations('portfolio.certificateCard');
  const [selectedCert, setSelectedCert] = useState<typeof certificatesData[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => setSelectedCert(cert)}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] bg-gradient-to-br from-dark-100/90 to-dark-200/90 backdrop-blur-sm rounded-xl border border-ocean-500/20 overflow-hidden shadow-xl hover:shadow-ocean-500/30 transition-all duration-300">
              {/* Certificate Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-200 to-dark-300 flex items-center justify-center text-gray-600">
                {t('preview')}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="bg-dark-100/90 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">
                      {cert.title}
                    </h3>
                    <p className="text-ocean-400 text-xs mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-xs">{cert.date}</p>
                  </div>
                </div>
              </div>

              {/* View Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ocean-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <HiExternalLink className="text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-200/90 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-dark-100 rounded-2xl border border-ocean-500/30 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark-200/80 hover:bg-ocean-500 flex items-center justify-center text-white transition-colors duration-300"
              >
                <HiX size={24} />
              </button>

              {/* Certificate Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-dark-200 to-dark-300 flex items-center justify-center text-gray-600">
                {t('fullView')}
              </div>

              {/* Certificate Info */}
              <div className="p-6 bg-gradient-to-t from-dark-200 to-dark-100">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {selectedCert.title}
                </h2>
                <p className="text-ocean-400 text-lg mb-2">{selectedCert.issuer}</p>
                <p className="text-gray-400 mb-4">{selectedCert.date}</p>
                
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-ocean-500 to-ocean-600 text-white hover:shadow-lg hover:shadow-ocean-500/50 transition-all duration-300"
                  >
                    <HiExternalLink />
                    <span>{t('viewCredential')}</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
