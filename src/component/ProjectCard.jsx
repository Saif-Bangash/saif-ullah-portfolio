import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-[#D9A93E]/50 transition-all duration-300 group h-full relative"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-b from-[#D9A93E]/0 to-[#D9A93E]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

      {/* Image Section */}
      <div className="h-48 sm:h-56 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </a>
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200 dark:border-white/10">
          <span className="text-[#D9A93E] text-[10px] font-bold uppercase tracking-widest">
            {project.badge}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-md font-bold text-gray-900 dark:text-white font-serif mb-3 group-hover:text-[#D9A93E] transition-colors">
          {project.title}
        </h3>
        
        {/* <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed grow mb-6">
          {project.description}
        </p> */}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-1 py-1 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded border border-gray-100 dark:border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-[#D9A93E] dark:hover:text-[#D9A93E] transition-colors"
          >
            Live Preview
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;