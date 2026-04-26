// src/components/portfolio/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '@/data/projects';
import { formatDate } from '@/lib/utils';

export default function ProjectCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <div className="relative h-full bg-gradient-to-br from-dark-100/90 to-dark-200/90 backdrop-blur-sm rounded-xl border border-ocean-500/20 overflow-hidden shadow-xl hover:shadow-ocean-500/30 transition-all duration-300">
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-ocean-500 to-ocean-600 text-white text-xs font-medium shadow-lg">
                  Featured
                </span>
              </div>
            )}

            {/* Image Placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-dark-200 to-dark-300 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                Project Image
              </div>
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Date */}
              <p className="text-ocean-400 text-sm mb-2">{formatDate(project.createdAt)}</p>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ocean-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-ocean-500/10 text-ocean-400 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 rounded-md bg-ocean-500/10 text-ocean-400 text-xs font-medium">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-dark-200 hover:bg-dark-100 text-gray-300 hover:text-white border border-ocean-500/20 hover:border-ocean-500/40 transition-all duration-300"
                  >
                    <FaGithub />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-ocean-500 to-ocean-600 text-white hover:shadow-lg hover:shadow-ocean-500/50 transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span className="text-sm font-medium">Preview</span>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-ocean-500/5 rounded-br-full" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
