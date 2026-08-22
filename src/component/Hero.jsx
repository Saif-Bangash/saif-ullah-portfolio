import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";

import { SiGoogleanalytics } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-white dark:bg-[#0a0118] min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 pt-28 sm:pt-32 pb-16 lg:py-25 overflow-hidden transition-colors duration-500"
    >
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-40 h-40 md:w-72 md:h-72 bg-purple-100/50 dark:bg-purple-900/20 blur-[80px] md:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-60 h-60 md:w-96 md:h-96 bg-blue-50/50 dark:bg-blue-900/20 blur-[100px] md:blur-[150px] rounded-full"></div>

      {/* Left Side: Content */}
      <div className="w-full lg:w-3/5 flex flex-col gap-3 md:gap-6 z-10 text-center lg:text-left items-center lg:items-start mt-2 sm:mt-0">
        <Motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block w-fit px-4 py-1.5 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10 text-[#5C4DFF] dark:text-purple-400 text-xs md:text-sm font-bold tracking-wide"
        >
          Available for Hire
        </Motion.div>

        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-[#2F4066] dark:text-white leading-tight"
        >
          <span className="text-xl sm:text-3xl md:text-4xl xl:text-5xl">
            Hi, I'm{" "}
          </span>
          <span className="text-[#5C4DFF] block sm:inline whitespace-normal sm:whitespace-nowrap">
            Saif_ullah Bangash
          </span>

          <span className="font-serif italic text-gray-400 dark:text-gray-500 text-2xl sm:text-3xl md:text-5xl xl:text-5xl font-normal block mt-2 sm:mt-8">
            Web Developer & SEO Specialist
          </span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg xl:text-xl max-w-xl leading-relaxed"
        >
          I create{" "}
          <span className="text-[#2F4066] dark:text-purple-300 font-bold">
            fast, responsive, and SEO-friendly websites
          </span>{" "}
          using React and WordPress, while helping businesses grow through
          technical SEO, on-page optimization, and performance improvements.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-row items-center justify-center lg:justify-start gap-3 mt-4 sm:mt-6 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-4 bg-[#5C4DFF] text-white text-center text-xs sm:text-base font-bold rounded-xl md:rounded-2xl hover:bg-[#4A3DDF] hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            View My Work
          </a>

          <a
            href="https://drive.google.com/file/d/1IP2cLNP53LkG7PBknRqfYXOB4iswCav9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            download="My Resume.pdf"
            className="flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-4 border-2 border-gray-100 dark:border-white/10 text-[#2F4066] dark:text-white text-center text-xs sm:text-base font-bold rounded-xl md:rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all whitespace-nowrap"
          >
            View CV
          </a>
        </Motion.div>

        {/* Tech Stack Mini Icons */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-6 text-gray-400 dark:text-gray-500 text-xl sm:text-2xl justify-center lg:justify-start">
          <FaHtml5 title="HTML5" className="text-[#E34F26] transition-colors" />
          <FaCss3Alt title="CSS3" className="text-[#1572B6] transition-colors" />
          <FaJs title="JavaScript" className="text-[#F7DF1E] transition-colors" />
          <FaBootstrap title="Bootstrap" className="text-[#7952B3] transition-colors" />
          <FaReact title="React" className="text-[#61DBFB] transition-colors" />
          <FaWordpress title="WordPress" className="text-[#21759B] transition-colors" />
          <SiGoogleanalytics title="SEO / Google Analytics" className="text-[#E37400] transition-colors" />
        </div>
      </div>

      {/* Right Side: Image + Floating Cards */}
      <div className="w-full lg:w-2/5 relative mt-10 sm:mt-16 lg:mt-0 flex justify-center z-10 pb-12 sm:pb-0">
        <div className="relative">
          {/* Main Image Container */}
          <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-112.5 bg-linear-to-b from-purple-100 to-white dark:from-purple-900/40 dark:to-[#0a0118] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-gray-50 dark:border-white/5 shadow-2xl">
            <img
              src="/assets/img/saif-pic.jfif"
              alt="Saifullah"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Experience Card */}
          <Motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-3 -right-2 sm:-top-6 sm:-right-6 bg-white dark:bg-[#1a1033] border border-gray-100 dark:border-white/10 p-2.5 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl z-20"
          >
            <p className="text-lg sm:text-3xl font-bold text-[#5C4DFF]">1+</p>
            <p className="text-[7px] sm:text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-extrabold">
              Year of <br /> Experience
            </p>
          </Motion.div>

          {/* Floating Projects Card */}
          <Motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -bottom-3 -left-2 sm:-bottom-6 sm:-left-6 bg-white dark:bg-[#1a1033] border border-gray-100 dark:border-white/10 p-2.5 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl z-20"
          >
            <p className="text-base sm:text-2xl font-bold text-blue-500">10+</p>
            <p className="text-[7px] sm:text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-extrabold">
              Projects <br /> Completed
            </p>
          </Motion.div>

          {/* Social Icons */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-row lg:flex-col lg:left-auto lg:-right-17.5 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 gap-3 sm:gap-4 z-20">
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
                className="w-9 h-9 sm:w-12 sm:h-12 bg-white dark:bg-[#1a1033] border border-gray-100 dark:border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#5C4DFF] transition-all shadow-md text-sm sm:text-base"
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
