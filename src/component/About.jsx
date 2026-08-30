import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Zap,
  Award,
  ArrowRight,
  CheckCircle2,
  Layers,
  Search,
  Gauge,
  Compass,
  User,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Target,
  ChevronRight,
} from "lucide-react";
import {
  journey,
  philosophy,
  services,
  stats,
  skillCategories,
  differentiators,
  processSteps,
  whyWorkWithMe,
  personalDetails,
  education,
} from "../data/projects";

import { Link } from "react-router-dom";


import CTA from "./CTA";

// Shared Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const About = () => {
  return (
    <div className="w-full bg-[#F8FAFC] text-[#0B1120] font-sans overflow-hidden selection:bg-[#D9A93E]/30 selection:text-[#0B1120]">
      {/* Hidden SEO H1 tag */}
      <h1 className="sr-only">
        About Saif Ullah Bangash — Web Developer &amp; SEO Specialist
      </h1>

      {/* ==================================================================== */}
      {/* 1. HERO SECTION                                                      */}
      {/* ==================================================================== */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-white border-b border-gray-100 overflow-hidden">
        {/* Ambient Gold Glow Effects */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[130px] pointer-events-none opacity-20"
          style={{ backgroundColor: "rgba(217, 169, 62, 0.4)" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ backgroundColor: "rgba(217, 169, 62, 0.3)" }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column Text Content */}
            <motion.div
              className="lg:col-span-7 flex flex-col items-start"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9A93E]/10 text-[#D9A93E] text-xs font-mono font-extrabold tracking-widest uppercase border border-[#D9A93E]/30 mb-6"
              >
                <Sparkles size={14} />
                ABOUT ME
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B1120] leading-[1.15] mb-6"
              >
                Building Digital Experiences That Combine{" "}
                <span className="text-[#D9A93E] font-serif italic">
                  Design, Performance &amp; Growth
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 max-w-2xl font-normal"
              >
                I&apos;m Saif Ullah Bangash, a Web Developer specializing in
                React.js, WordPress and SEO. I create modern, responsive and
                performance-focused websites that help businesses build a
                stronger digital presence.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl"
              >
                My approach combines clean development, user-focused design,
                responsive experiences and SEO best practices to create websites
                that are not only visually professional but also built with
                performance and growth in mind.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-4"
              >
                <Link to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#D9A93E] hover:bg-[#c49733] text-[#0B1120] font-bold text-sm transition-all duration-300 shadow-md active:scale-95"
                >
                  Let&apos;s Work Together
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-[#0B1120] font-bold text-sm border border-gray-200 transition-all duration-300"
                >
                  View My Projects
                </Link>

              </motion.div>
            </motion.div>

            {/* Right Column Profile Image Frame */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  className="absolute -inset-1.5 rounded-3xl bg-[#D9A93E]/30 opacity-60 blur-lg pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl group">
                  <img
                    src="/assets/img/about-img.png"
                    alt="Saif Ullah Bangash - Web Developer, React.js and WordPress Specialist"
                    className="w-full h-auto max-h-120 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase font-mono tracking-widest text-[#D9A93E] font-bold">
                          Saif Ullah Bangash
                        </p>
                        <p className="text-sm font-medium text-gray-300">
                          Web Developer &amp; SEO Specialist
                        </p>
                      </div>
                      <span className="inline-flex items-center justify-center p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-[#D9A93E]">
                        <ShieldCheck size={20} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 10. ACCURATE PROFESSIONAL STATS                                     */}
      {/* ==================================================================== */}
      <section className="py-16 bg-[#0B1120] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((st, i) => {
              const Icon = st.icon;

              return (
                <motion.div
                  key={st.label}
                  className="p-6 rounded-2xl bg-[#D9A93E]/10 border border-[#D9A93E]/30 text-center flex flex-col items-center justify-center gap-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-[#D9A93E]">
                    <Icon size={22} />
                  </div>

                  <h4 className="text-3xl sm:text-4xl font-black text-white">
                    {st.value}
                  </h4>

                  <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    {st.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. PERSONAL INTRODUCTION ("WHO I AM")                                */}
      {/* ==================================================================== */}
      <section className="py-20 bg-[#F8FAFC] border-b border-gray-200/60 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-sm relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            {/* Gold Accent Left Line */}
            <div className="absolute top-0 left-0 w-2 h-full bg-[#D9A93E]" />

            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 rounded-xl bg-[#D9A93E]/10 text-[#D9A93E]">
                <User size={22} />
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1120]">
                Who I Am
              </h3>
            </div>

            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m a passionate Web Developer focused on building modern
                and practical digital solutions. My core expertise includes
                React.js for interactive frontend experiences, WordPress for
                flexible and business-focused websites, and SEO for improving
                website visibility and performance.
              </p>
              <p>
                I enjoy turning ideas and business requirements into clean,
                responsive and user-friendly websites. Whether it&apos;s a
                professional business website, an e-commerce store, a landing
                page or a custom frontend application, I focus on creating
                solutions that are reliable, maintainable and aligned with the
                project&apos;s goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. MY PROFESSIONAL JOURNEY (TIMELINE)                                */}
      {/* ==================================================================== */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#D9A93E] text-xs font-mono font-bold tracking-widest uppercase bg-[#D9A93E]/10 px-3 py-1 rounded-full border border-[#D9A93E]/20">
              GROWTH &amp; EVOLUTION
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1120] mt-3">
              My Professional Journey
            </h3>
          </div>

          <div className="relative border-l-2 border-gray-200 ml-4 sm:ml-32 space-y-12">
            {journey.map((item) => (
              <motion.div
                key={item.step}
                className="relative pl-8 sm:pl-10 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-4.25 top-0.5 w-8 h-8 rounded-full bg-white border-2 border-[#D9A93E] group-hover:bg-[#D9A93E] transition-colors duration-300 flex items-center justify-center text-[#D9A93E] group-hover:text-[#0B1120] shadow-sm">
                  <span className="text-xs font-mono font-bold">
                    {item.step}
                  </span>
                </div>

                <span className="hidden sm:block absolute -left-32 top-1 text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider text-right w-24">
                  Phase {item.step}
                </span>

                <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-gray-200/80 group-hover:border-[#D9A93E]/40 group-hover:shadow-md transition-all duration-300">
                  <h4 className="text-xl font-bold text-[#0B1120] mb-2 group-hover:text-[#D9A93E] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. WHAT I DO (SERVICES CARDS)                                       */}
      {/* ==================================================================== */}
      <section className="py-20 bg-[#F8FAFC] border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#D9A93E] text-xs font-mono font-bold tracking-widest uppercase bg-[#D9A93E]/10 px-3 py-1 rounded-full border border-[#D9A93E]/20">
              SERVICES &amp; EXPERTISE
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1120] mt-3">
              What I Do
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, i) => {
              const Icon = srv.icon;

              return (
                <motion.div
                  key={srv.title}
                  className="relative bg-white p-8 rounded-2xl border border-gray-200/80 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-xl hover:border-[#D9A93E]/50 transition-all duration-300 overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.1, duration: 0.5 },
                    },
                  }}
                >
                  <div>
                    <div className="p-3.5 rounded-xl bg-[#D9A93E]/10 border border-[#D9A93E]/20 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-[#D9A93E]" size={28} />
                    </div>

                    <h4 className="text-xl font-bold text-[#0B1120] mb-3">
                      {srv.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#D9A93E]">
                    <span>Explore capability</span>

                    <ChevronRight
                      size={16}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

{/* ==================================================================== */}
{/* 5. MY DEVELOPMENT PHILOSOPHY                                         */}
{/* ==================================================================== */}

<section className="py-20 bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-[#D9A93E] text-xs font-mono font-bold tracking-widest uppercase bg-[#D9A93E]/10 px-3 py-1 rounded-full border border-[#D9A93E]/20">
        CORE VALUES
      </span>

      <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1120] mt-3">
        How I Approach Development
      </h3>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {philosophy.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            className="p-8 rounded-2xl bg-[#F8FAFC] border border-gray-200/70 hover:bg-white hover:border-[#D9A93E]/40 hover:shadow-lg transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.1,
                  duration: 0.5,
                },
              },
            }}
          >
            <div className="mb-4">
              <Icon size={24} className="text-[#D9A93E]" />
            </div>

            <h4 className="text-lg font-bold text-[#0B1120] mb-2">
              {item.title}
            </h4>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      {/* ==================================================================== */}
      {/* 6. MY CORE EXPERTISE (SKILLS BADGES)                                 */}
      {/* ==================================================================== */}
      <section className="py-20 bg-[#F8FAFC] border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#D9A93E] text-xs font-mono font-bold tracking-widest uppercase bg-[#D9A93E]/10 px-3 py-1 rounded-full border border-[#D9A93E]/20">
              TECHNICAL STACK
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1120] mt-3">
              My Core Expertise
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((group) => (
              <motion.div
                key={group.category}
                className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h4 className="text-lg font-bold text-[#0B1120] mb-6 pb-3 border-b border-gray-100 flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="text-xs font-mono font-semibold text-gray-400">
                    {group.skills.length} Skills
                  </span>
                </h4>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-50 border border-gray-200/80 text-gray-700 text-xs sm:text-sm font-semibold hover:border-[#D9A93E]/50 hover:bg-[#D9A93E]/10 hover:text-[#0B1120] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7. WHAT MAKES MY WORK DIFFERENT                                      */}
      {/* ==================================================================== */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-[#D9A93E] text-xs font-mono font-bold tracking-widest uppercase bg-[#D9A93E]/10 px-3 py-1 rounded-full border border-[#D9A93E]/20">
                VALUE ADDITION
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1120] mt-4 mb-6 leading-tight">
                More Than Just Building Websites
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                I don&apos;t focus only on how a website looks. I also consider
                how it performs, how users interact with it and how search
                engines understand its structure.
              </p>
              <div className="p-4 rounded-xl bg-[#D9A93E]/10 border border-[#D9A93E]/30 text-[#0B1120] text-sm font-bold">
                Building holistic web applications that grow businesses.
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {differentiators.map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200/70 hover:border-[#D9A93E]/40 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: idx * 0.1, duration: 0.5 },
                    },
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#D9A93E] text-[#0B1120] flex items-center justify-center font-extrabold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-[#0B1120] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 8. MY WORKING PROCESS                                               */}
      {/* ==================================================================== */}
      <section className="py-20 bg-[#F8FAFC] border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#D9A93E] text-xs font-mono font-bold tracking-widest uppercase bg-[#D9A93E]/10 px-3 py-1 rounded-full border border-[#D9A93E]/20">
              METHODOLOGY
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1120] mt-3">
              How I Work
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                className="bg-white p-8 rounded-2xl border border-gray-200/80 relative hover:border-[#D9A93E]/50 hover:shadow-lg transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: idx * 0.08, duration: 0.5 },
                  },
                }}
              >
                <span className="text-3xl font-mono font-black text-[#D9A93E]/40 block mb-4">
                  {step.num}
                </span>
                <h4 className="text-xl font-bold text-[#0B1120] mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 9. WHY WORK WITH ME                                                 */}
      {/* ==================================================================== */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1120]">
              Why Work With Me?
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {whyWorkWithMe.map((reason, i) => (
              <motion.div
                key={reason}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F8FAFC] border border-gray-200/70"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.05, duration: 0.4 },
                  },
                }}
              >
                <CheckCircle2 size={20} className="text-[#D9A93E] shrink-0" />
                <span className="text-[#0B1120] text-sm sm:text-base font-bold">
                  {reason}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 11 & 12. PERSONAL DETAILS & EDUCATION                                */}
      {/* ==================================================================== */}
      <section className="py-20 bg-[#F8FAFC] border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10">
          {/* Personal Information Card */}
          <motion.div
            className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-xs flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 rounded-xl bg-[#D9A93E]/10 text-[#D9A93E]">
                  <User size={20} />
                </span>
                <h4 className="text-xl font-bold text-[#0B1120]">
                  Quick Overview
                </h4>
              </div>

              <div className="space-y-4">
                {personalDetails.map((det) => (
                  <div
                    key={det.label}
                    className="p-3.5 rounded-xl bg-[#F8FAFC] border border-gray-200/60"
                  >
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#D9A93E]">
                      {det.label}
                    </p>
                    <p className="text-[#0B1120] font-bold text-sm sm:text-base mt-0.5">
                      {det.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <span className="inline-block px-3 py-1.5 rounded-full bg-[#D9A93E]/15 text-[#0B1120] text-xs font-bold border border-[#D9A93E]/30">
                Open to Freelance &amp; Professional Opportunities
              </span>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-xs"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 rounded-xl bg-[#D9A93E]/10 text-[#D9A93E]">
                <GraduationCap size={20} />
              </span>
              <h4 className="text-xl font-bold text-[#0B1120]">Education</h4>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200/60 relative"
                >
                  <span className="text-xs font-mono font-bold text-[#0B1120] bg-[#D9A93E]/20 px-2.5 py-1 rounded-md inline-block mb-3 border border-[#D9A93E]/30">
                    {edu.type}
                  </span>
                  <h5 className="text-lg font-bold text-[#0B1120]">
                    {edu.degree}
                  </h5>
                  <p className="text-gray-600 text-sm mt-1">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* call to action component */}
      <CTA />
    </div>
  );
};

export default About;
