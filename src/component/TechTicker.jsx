import React from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "React.js", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "HTML5", category: "Structure" },
  { name: "CSS3", category: "Styling" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Bootstrap", category: "Styling" },
  { name: "WordPress", category: "CMS" },
  { name: "Elementor", category: "Page Builder" },
  { name: "WooCommerce", category: "E-Commerce" },
  { name: "SEO", category: "Growth" },
  { name: "Google Analytics", category: "Analytics" },
  { name: "Google Search Console", category: "Webmaster" },
  { name: "Git", category: "Version Control" },
  { name: "GitHub", category: "Code Host" },
  { name: "Postman", category: "API Testing" },
  { name: "Vercel", category: "Deployment" },
];

const TechTicker = () => {
  return (
    <section className="relative w-full bg-[#0F172A] py-7 overflow-hidden border-y border-[#F7D26B]/20 transition-colors duration-500">
      {/* Side Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-linear-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-linear-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />

      {/* Seamless Single-Container Ticker */}
      <div className="flex w-full overflow-hidden select-none">
        <motion.div
          className="flex shrink-0 items-center"
          style={{ willChange: "transform" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 45, // Slow, elegant motion speed
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* First Half */}
          {techStack.map((tech, idx) => (
            <div
              key={`a-${idx}`}
              className="flex items-center gap-2 mx-3 px-4 py-2.5 rounded-2xl bg-[#1E293B] border border-[#F7D26B]/20 shadow-lg hover:border-[#F7D26B] transition-colors shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-[#F7D26B]" />
              <span className="text-xs sm:text-sm font-bold text-slate-100">
                {tech.name}
              </span>
              <span className="text-[10px] sm:text-xs text-[#FBE3A0]/70 font-medium">
                [{tech.category}]
              </span>
            </div>
          ))}

          {/* Duplicated Half inside the same parent for continuous loop */}
          {techStack.map((tech, idx) => (
            <div
              key={`b-${idx}`}
              className="flex items-center gap-2 mx-3 px-4 py-2.5 rounded-2xl bg-[#1E293B] border border-[#F7D26B]/20 shadow-lg hover:border-[#F7D26B] transition-colors shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-[#F7D26B]" />
              <span className="text-xs sm:text-sm font-bold text-slate-100">
                {tech.name}
              </span>
              <span className="text-[10px] sm:text-xs text-[#FBE3A0]/70 font-medium">
                [{tech.category}]
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechTicker;