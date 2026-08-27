import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";  
import { projectsData } from "../data/projects";

const Project = () => {
  return (
    <div className="bg-white dark:bg-[#0a0118] transition-colors duration-500 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 border-b border-gray-100 dark:border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#D9A93E]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#D9A93E] font-bold uppercase tracking-[0.3em] text-xs md:text-sm inline-block"
          >
            Portfolio & Case Studies
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-4 leading-tight"
          >
           Building High-Performance <br className="hidden md:block"/>
            <span className="font-serif italic text-[#D9A93E]">
             Web Development, WordPress & SEO Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            I build fast, responsive websites and modern web applications with React, create custom WordPress solutions, and implement SEO strategies designed to improve search visibility, performance, and conversions.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" className="max-w-360 mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Projects <span className="font-serif italic text-[#D9A93E]">Work</span>
          </h2>
          <p className="text-sm text-gray-500 mt-2">Explore my latest projects across web development and organic search.</p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
      </section>
    </div>
  );
};

export default Project;