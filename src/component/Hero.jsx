import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-white dark:bg-[#0a0118] min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-25 lg:py-32 overflow-hidden transition-colors duration-500"
    >
      {/* Background Decorations - Mobile par chota rakha hai */}
      <div className="absolute top-1/4 left-0 w-40 h-40 md:w-72 md:h-72 bg-purple-100/50 dark:bg-purple-900/20 blur-[80px] md:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-60 h-60 md:w-96 md:h-96 bg-blue-50/50 dark:bg-blue-900/20 blur-[100px] md:blur-[150px] rounded-full"></div>

      {/* Left Side: Content */}
      <div className="w-full lg:w-3/5 flex flex-col gap-4 md:gap-6 z-10 text-center lg:text-left items-center lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block w-fit px-4 py-1 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10 text-[#5C4DFF] dark:text-purple-400 text-xs md:text-sm font-bold tracking-wide"
        >
          Available for Hire
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-[#2F4066] dark:text-white leading-tight"
        >
          Hi, I'm <span className="text-[#5C4DFF]">Saifullah</span> <br />
          <span className="font-serif italic text-gray-400 dark:text-gray-500 text-3xl md:text-5xl xl:text-6xl font-normal">
            MERN Stack Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 dark:text-gray-400 text-base md:text-lg xl:text-xl max-w-xl leading-relaxed"
        >
          Specializing in building robust web applications using{" "}
          <span className="text-[#2F4066] dark:text-purple-300 font-bold">
            MongoDB, Express, React, and Node.js
          </span>
          . Turning complex problems into elegant, scalable solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          /* flex-nowrap ensure karega ke buttons row mein hi rahein */
          className="flex flex-row items-center justify-center lg:justify-start gap-3 mt-6 w-full sm:w-auto overflow-visible"
        >
          <a
            href="#projects"
            className="flex-1 sm:flex-none px-5 md:px-8 py-3.5 md:py-4 bg-[#5C4DFF] text-white text-center text-sm md:text-base font-bold rounded-xl md:rounded-2xl hover:bg-[#4A3DDF] hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            View My Work
          </a>

          <a
            href="https://drive.google.com/file/d/1zUGsN_QWxuN1J_iDtxDmzdzTuPVFoRWk/view?usp=sharing"  
            target="_blank"
            download="My Resume.pdf" 
            className="flex-1 sm:flex-none px-5 md:px-8 py-3.5 md:py-4 border-2 border-gray-100 dark:border-white/10 text-[#2F4066] dark:text-white text-center text-sm md:text-base font-bold rounded-xl md:rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all whitespace-nowrap"
          >
            View CV
          </a>
        </motion.div>

        {/* Tech Stack Mini Icons */}
        <div className="flex gap-6 mt-6 text-gray-400 dark:text-gray-500 text-2xl justify-center lg:justify-start">
          <FaReact className="hover:text-[#61DBFB] transition-colors" />
          <FaNodeJs className="hover:text-[#68A063] transition-colors" />
          <SiMongodb className="hover:text-[#47A248] transition-colors" />
          <SiExpress className="hover:text-black dark:hover:text-white transition-colors" />
        </div>
      </div>

      {/* Right Side: Image + Floating Cards */}
      <div className="w-full lg:w-2/5 relative mt-16 lg:mt-0 flex justify-center z-10">
        <div className="relative">
          {/* Main Image Container */}
          <div className="w-70 h-100 sm:w-64 sm:h-80 md:w-80 md:h-[450px] bg-gradient-to-b from-purple-100 to-white dark:from-purple-900/40 dark:to-[#0a0118] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-gray-50 dark:border-white/5 shadow-2xl">
            <img
              src="/assets/img/saifullah.jpeg"
              alt="Saifullah"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Experience Card - Responsive position */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-6 -right-4 sm:-top-8 sm:-right-8 bg-white dark:bg-[#1a1033] border border-gray-100 dark:border-white/10 p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl"
          >
            <p className="text-xl sm:text-3xl font-bold text-[#5C4DFF]">1</p>
            <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-extrabold">
              Year <br /> Experience
            </p>
          </motion.div>

          {/* Floating Projects Card - Responsive position */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-white dark:bg-[#1a1033] border border-gray-100 dark:border-white/10 p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl"
          >
            <p className="text-lg sm:text-2xl font-bold text-blue-500">8+</p>
            <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-extrabold">
              Projects <br /> Completed
            </p>
          </motion.div>

          {/* Social Icons - Mobile par bottom par horizontal aur desktop par right par vertical */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-row lg:flex-col lg:left-auto lg:right-[-70px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 gap-4">
            {[
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/saifullahbangash/",
              },
              { icon: <FaGithub />, link: "https://github.com/Saif-Bangash/" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-[#1a1033] border border-gray-100 dark:border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#5C4DFF] transition-all shadow-md"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
