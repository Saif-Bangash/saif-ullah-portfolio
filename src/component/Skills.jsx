import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaJsSquare,
  FaCss3Alt,
  FaWordpress,
  FaPhp,
  FaSearch,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiWoocommerce,
  SiGooglesearchconsole,
  SiGoogleanalytics,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "group-hover:text-[#E34F26]",
    border: "hover:border-[#E34F26]",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "group-hover:text-[#264DE4]",
    border: "hover:border-[#264DE4]",
  },
  {
    name: "Bootstrap 5",
    icon: <SiBootstrap />,
    color: "group-hover:text-[#212529]",
    border: "hover:border-[#212529]",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "group-hover:text-[#06B6D4]",
    border: "hover:border-[#06B6D4]",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "group-hover:text-[#F7DF1E]",
    border: "hover:border-[#F7DF1E]",
  },
  {
    name: "React JS",
    icon: <FaReact />,
    color: "group-hover:text-[#61DBFB]",
    border: "hover:border-[#61DBFB]",
  },
  {
    name: "WordPress",
    icon: <FaWordpress />,
    color: "group-hover:text-[#21759B]",
    border: "hover:border-[#21759B]",
  },
  {
    name: "WooCommerce",
    icon: <SiWoocommerce />,
    color: "group-hover:text-[#96588A]",
    border: "hover:border-[#96588A]",
  },
  {
    name: "SEO Expertise",
    icon: <FaSearch />,
    color: "group-hover:text-[#5C4DFF]",
    border: "hover:border-[#5C4DFF]",
  },
  {
    name: "Technical SEO",
    icon: <SiGooglesearchconsole />,
    color: "group-hover:text-[#4285F4]",
    border: "hover:border-[#4285F4]",
  },
  {
    name: "On-Page SEO",
    icon: <FaSearch />,
    color: "group-hover:text-[#34A853]",
    border: "hover:border-[#34A853]",
  },
  {
    name: "Google Analytics",
    icon: <SiGoogleanalytics />,
    color: "group-hover:text-[#E37400]",
    border: "hover:border-[#E37400]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const Skills = () => {
  return (
    <section
      id="resume"
      className="w-full bg-white dark:bg-[#0a0118] py-10 lg:py-25 px-6 md:px-12 lg:px-20 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl  relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#5C4DFF] dark:text-purple-400 font-bold uppercase tracking-[0.3em] text-xs md:text-sm"
          >
            My Expertise
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#2F4066] dark:text-white leading-tight"
          >
            Technical{" "}
            <span className="font-serif italic text-gray-400 dark:text-gray-500">
              Skillset
            </span>
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            I specialize in modern web development, WordPress solutions, and SEO
            optimization to build fast and responsive websites.
          </p>
          <div className="w-20 h-1.5 bg-[#5C4DFF] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`group flex flex-col items-center p-6 md:p-10 bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl md:rounded-[2.5rem] transition-all duration-300 shadow-sm hover:shadow-xl hover:bg-white dark:hover:bg-white/10 ${skill.border}`}
            >
              <div
                className={`text-4xl md:text-5xl text-gray-400 dark:text-gray-600 transition-colors duration-300 ${skill.color}`}
              >
                {skill.icon}
              </div>
              <p className="mt-3 md:mt-5 font-bold text-[#2F4066] dark:text-gray-200 text-sm md:text-base tracking-wide transition-colors group-hover:text-black dark:group-hover:text-white text-center">
                {skill.name}
              </p>

              <div className="mt-3 md:mt-4 w-6 md:w-8 h-1 bg-gray-100 dark:bg-white/10 group-hover:bg-[#5C4DFF] transition-all rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra Tools Section */}
        <div className="mt-12 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-10 border-t border-gray-100 dark:border-white/10 pt-10">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:text-purple-600 transition-colors cursor-default">
            <SiBootstrap className="text-lg md:text-xl" /> Bootstrap
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:text-cyan-500 transition-colors cursor-default">
            <SiTailwindcss className="text-lg md:text-xl" /> Tailwind CSS
          </div>

          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:text-[#4285F4] transition-colors cursor-default">
            <SiGooglesearchconsole className="text-lg md:text-xl" />
            Google Search Console
          </div>

          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:text-[#E37400] transition-colors cursor-default">
            <SiGoogleanalytics className="text-lg md:text-xl" />
            Google Analytics
          </div> 

          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:text-[#21759B] transition-colors cursor-default">
            <FaWordpress className="text-lg md:text-xl" />
            WordPress
          </div>

          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:text-[#5C4DFF] transition-colors cursor-default">
            <FaSearch className="text-lg md:text-xl" />
            SEO Optimization
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
