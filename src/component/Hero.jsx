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
  FaCode,
  FaSearch,
  FaTachometerAlt,
  FaShoppingCart,
  FaTools,
  FaClipboardList,
  FaPencilRuler,
  FaLaptopCode,
  FaRocket,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";

import { SiGoogleanalytics } from "react-icons/si";
import FAQs from "./FAQs";
import { homeFaqData, techStack } from "../data/projects";
import CTA from "./CTA";
import { Link } from "react-router-dom";
import TechTicker from "./TechTicker";

/* ------------------------------------------------------------------ */
/*  Shared small pieces                                                */
/* ------------------------------------------------------------------ */
const SectionEyebrow = ({ children }) => (
  <span className="inline-block px-4 py-1.5 rounded-full bg-[#F7D26B]/10 dark:bg-white/5 border border-[#F7D26B]/30 dark:border-white/10 text-[#8A6A16] dark:text-[#F7D26B] text-xs md:text-sm font-bold tracking-wide">
    {children}
  </span>
);

/* ------------------------------------------------------------------ */
/*  HERO SECTION (unchanged)                                          */
/* ------------------------------------------------------------------ */
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-white dark:bg-[#0a0118] min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 pt-28 sm:pt-32 pb-16 lg:py-25 overflow-hidden transition-colors duration-500"
    >
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-40 h-40 md:w-72 md:h-72 bg-[#F7D26B]/20 dark:bg-[#F7D26B]/10 blur-[80px] md:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-60 h-60 md:w-96 md:h-96 bg-[#D9A93E]/15 dark:bg-[#D9A93E]/10 blur-[100px] md:blur-[150px] rounded-full"></div>

      {/* Left Side: Content */}
      <div className="w-full lg:w-3/5 flex flex-col gap-3 md:gap-6 z-10 text-center lg:text-left items-center lg:items-start mt-2 sm:mt-0">
        <Motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block w-fit px-4 py-1.5 rounded-full bg-[#F7D26B]/10 dark:bg-white/5 border border-[#F7D26B]/30 dark:border-white/10 text-[#8A6A16] dark:text-[#F7D26B] text-xs md:text-sm font-bold tracking-wide"
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
          <span className="text-[#D9A93E] dark:text-[#F7D26B] block sm:inline whitespace-normal sm:whitespace-nowrap">
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
          <span className="text-[#8A6A16] dark:text-[#F7D26B] font-bold">
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
          <Link
            to="/projects"
            className="flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-4 bg-[#F7D26B] text-[#1A1300] text-center text-xs sm:text-base font-bold rounded-xl md:rounded-2xl hover:bg-[#D9A93E] hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            View My Work
          </Link>

          <Link
            to="/resume"
            className="flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-4 border-2 border-gray-100 dark:border-white/10 text-[#2F4066] dark:text-white text-center text-xs sm:text-base font-bold rounded-xl md:rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all whitespace-nowrap"
          >
            View CV
          </Link>
        </Motion.div>

        {/* Tech Stack Mini Icons */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-6 text-gray-400 dark:text-gray-500 text-xl sm:text-2xl justify-center lg:justify-start">
          <FaHtml5 title="HTML5" className="text-[#E34F26] transition-colors" />
          <FaCss3Alt
            title="CSS3"
            className="text-[#1572B6] transition-colors"
          />
          <FaJs
            title="JavaScript"
            className="text-[#F7DF1E] transition-colors"
          />
          <FaBootstrap
            title="Bootstrap"
            className="text-[#7952B3] transition-colors"
          />
          <FaReact title="React" className="text-[#61DBFB] transition-colors" />
          <FaWordpress
            title="WordPress"
            className="text-[#21759B] transition-colors"
          />
          <SiGoogleanalytics
            title="SEO / Google Analytics"
            className="text-[#E37400] transition-colors"
          />
        </div>
      </div>

      {/* Right Side: Image + Floating Cards */}
      <div className="w-full lg:w-2/5 relative mt-10 sm:mt-16 lg:mt-0 flex justify-center z-10 pb-12 sm:pb-0">
        <div className="relative">
          {/* Main Image Container */}
          <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-112.5 bg-linear-to-b from-[#F7D26B]/15 to-white dark:from-[#F7D26B]/10 dark:to-[#0a0118] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-gray-50 dark:border-white/5 shadow-2xl">
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
            <p className="text-lg sm:text-3xl font-bold text-[#D9A93E] dark:text-[#F7D26B]">
              1+
            </p>
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
            <p className="text-base sm:text-2xl font-bold text-[#8A6A16] dark:text-[#FBE3A0]">
              10+
            </p>
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
              {
                icon: <FaGithub />,
                link: "https://github.com/Saifullahbangash01/",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-12 sm:h-12 bg-white dark:bg-[#1a1033] border border-gray-100 dark:border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-[#1A1300] hover:bg-[#F7D26B] transition-all shadow-md text-sm sm:text-base"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------- What We Do ------------------------------- */

const WhatWeDo = () => {
  const items = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Fast, responsive websites built with React and modern front-end practices, coded to scale with your business.",
    },
    {
      icon: <FaWordpress />,
      title: "WordPress",
      desc: "Custom WordPress builds, theme customization, and plugin setup for sites that are easy to manage and grow.",
    },
    {
      icon: <FaSearch />,
      title: "SEO",
      desc: "Technical and on-page SEO that helps search engines understand your site and helps real people find it.",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="relative w-full bg-white dark:bg-[#0a0118] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
        <SectionEyebrow>What I Do</SectionEyebrow>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2F4066] dark:text-white">
          Built around three core skills
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-sm sm:text-base md:text-lg">
          Every project draws on the same foundation: solid development,
          reliable WordPress delivery, and search visibility that actually moves
          the needle.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        {items.map((item, idx) => (
          <Motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gray-50 dark:bg-[#120a24] border border-gray-100 dark:border-white/10 hover:border-[#F7D26B]/50 transition-colors"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#F7D26B]/15 dark:bg-[#F7D26B]/10 flex items-center justify-center text-xl md:text-2xl text-[#D9A93E] dark:text-[#F7D26B] mb-4 md:mb-6">
              {item.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#2F4066] dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

/* ---------------------------- Digital Services ---------------------------- */

const DigitalServices = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Custom Website Development",
      desc: "React-based websites built from scratch, coded clean and structured for long-term maintainability.",
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Theme & Plugin Setup",
      desc: "Custom themes, page builders, and plugin configuration tailored to how you want to manage content.",
    },
    {
      icon: <FaSearch />,
      title: "On-Page & Technical SEO",
      desc: "Keyword-mapped content, clean site structure, metadata, and schema so pages are built to rank.",
    },
    {
      icon: <FaTachometerAlt />,
      title: "Performance Optimization",
      desc: "Speed audits and fixes covering Core Web Vitals, image optimization, and load-time improvements.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce Setup",
      desc: "Product-ready storefronts with clear navigation, checkout flow, and SEO-friendly category pages.",
    },
    {
      icon: <FaTools />,
      title: "Website Maintenance",
      desc: "Ongoing updates, fixes, and monitoring so your site stays fast, secure, and search-friendly.",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full bg-gray-50 dark:bg-[#0d0620] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
        <SectionEyebrow>Digital Services</SectionEyebrow>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2F4066] dark:text-white">
          Everything your website needs
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-sm sm:text-base md:text-lg">
          From first build to ongoing SEO and maintenance, one point of contact
          for the whole site.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {services.map((service, idx) => (
          <Motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="p-6 rounded-2xl bg-white dark:bg-[#1a1033] border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-[#F7D26B]/15 dark:bg-[#F7D26B]/10 flex items-center justify-center text-lg text-[#D9A93E] dark:text-[#F7D26B] mb-4">
              {service.icon}
            </div>
            <h3 className="text-base md:text-lg font-bold text-[#2F4066] dark:text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

/* ------------------------------- How We Work ------------------------------- */

const HowWeWork = () => {
  const steps = [
    {
      icon: <FaClipboardList />,
      title: "Discovery",
      desc: "Understanding your goals, audience, and what the site needs to achieve before anything is built.",
    },
    {
      icon: <FaPencilRuler />,
      title: "Planning",
      desc: "Mapping site structure, key pages, and target keywords so development and SEO move in the same direction.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Design & Development",
      desc: "Building the site in React or WordPress with clean code, responsive layouts, and SEO-ready markup.",
    },
    {
      icon: <FaTachometerAlt />,
      title: "Testing & Optimization",
      desc: "Checking performance, mobile behavior, and on-page SEO before anything goes live.",
    },
    {
      icon: <FaRocket />,
      title: "Launch & Support",
      desc: "Going live, tracking results, and staying available for updates and ongoing improvements.",
    },
  ];

  return (
    <section
      id="how-we-work"
      className="relative w-full bg-white dark:bg-[#0a0118] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4 mb-14 md:mb-20">
        <SectionEyebrow>How I Work</SectionEyebrow>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2F4066] dark:text-white">
          A process built for clarity
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-sm sm:text-base md:text-lg">
          A straightforward, five-step process from first conversation to a site
          that's live and optimized.
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* connecting line */}
        <div className="hidden md:block absolute left-6 top-6 bottom-6 w-px bg-linear-to-brom-[#F7D26B] via-[#D9A93E]/40 to-transparent" />

        <div className="flex flex-col gap-8 md:gap-10">
          {steps.map((step, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex items-start gap-4 md:gap-6"
            >
              <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-[#F7D26B] flex items-center justify-center text-[#1A1300] text-lg shadow-md">
                {step.icon}
              </div>
              <div className="pt-1.5">
                <h3 className="text-lg md:text-xl font-bold text-[#2F4066] dark:text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const TechStack = () => {
  return (
    <section className="relative w-full bg-[#0F172A] py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-y border-[#F7D26B]/20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4 mb-10">
        <SectionEyebrow>Tools & Technologies</SectionEyebrow>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Technology Stack
        </h2>
        <p className="text-gray-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          Modern frameworks, performance optimization tools, and robust web standards I use to build fast, scalable, and search-friendly web applications.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="px-4 py-2.5 rounded-2xl bg-[#1E293B] border border-[#F7D26B]/20 text-slate-100 text-xs sm:text-sm font-semibold flex items-center gap-2 hover:border-[#F7D26B] hover:shadow-lg transition-all duration-200"
            title={`${tech.name} (${tech.category})`}
            aria-label={`${tech.name} - ${tech.category}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#F7D26B]" />
            <span>{tech.name}</span>
            <span className="text-[10px] sm:text-xs text-[#FBE3A0]/70 font-medium font-mono">
              [{tech.category}]
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};


/* ------------------------------------------------------------------ */
/*  PAGE — Hero + all sections, exported as default "Hero"            */
/* ------------------------------------------------------------------ */
const Hero = () => {
  return (
    <div className="rjs-root">
      <HeroSection />
      <TechTicker />
      <WhatWeDo />
      <DigitalServices />
      <HowWeWork />
      <TechStack />
      <FAQs
        data={homeFaqData}
        title="Frequently Asked Questions"
        eyebrow="// Got Questions?"
      />

      <CTA />
    </div>
  );
};

export default Hero;
