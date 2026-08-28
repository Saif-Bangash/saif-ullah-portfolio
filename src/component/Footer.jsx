import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
  FaCode,
  FaWordpress,
  FaSearch,
  FaReact,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0,
      );

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const services = [
    {
      icon: <FaCode />,
      title: "Custom Web Development",
      link: "/custom-web-development",
    },
    {
      icon: <FaReact />,
      title: "React JS Development",
      link: "/react-development",
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Development",
      link: "/wordpress-development",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      link: "/seo-services",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/saifullahbangash/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/Saifullahbangash01/",
      label: "GitHub",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/saifullahbangash480/",
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/923326767615",
      label: "WhatsApp",
      isWhatsapp: true,
    },
  ];

  return (
    <>
      {/* ================= FLOATING BACK TO TOP ================= */}
      {scrollProgress > 2 && (
        <div className="fixed bottom-26 right-5 sm:right-6 z-50">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full transition-transform duration-300 hover:-translate-y-1"
          >
            <svg
              className="absolute inset-0 -rotate-90"
              viewBox="0 0 64 64"
              aria-hidden="true"
            >
              <circle
                cx="32"
                cy="32"
                r="29"
                fill="#0B1120"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1"
              />
              <circle
                cx="32"
                cy="32"
                r="29"
                fill="none"
                stroke="#F7D26B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="182.2"
                strokeDashoffset={182.2 - (scrollProgress / 100) * 182.2}
                className="transition-[stroke-dashoffset] duration-150"
              />
            </svg>
            <FaArrowUp className="relative text-xl text-[#F7D26B] transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      )}

      {/* ================= FLOATING WHATSAPP ================= */}
      <div className="fixed bottom-6 right-5 sm:right-6 z-50">
        <div className="relative group flex items-center justify-center">
          <div
            className={`absolute -inset-2 rounded-full bg-emerald-400/40 blur-xl transition-opacity duration-300 group-hover:opacity-100 ${
              isScrolling ? "opacity-90" : "opacity-60"
            }`}
          />

          <a
            href="https://wa.me/923326767615"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact me on WhatsApp"
            className="relative flex items-center justify-center 
            w-14 h-14 sm:w-16 sm:h-16 
            rounded-full bg-linear-to-br from-[#35EA7A] to-[#00A884] 
            text-[#06251D] border border-emerald-300/50 
            transition-all duration-300 shadow-[0_12px_30px_rgba(16,185,129,0.35)] hover:scale-110"
          >
            <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#05070B] border-t border-white/10 text-[#8891A5] pt-14 sm:pt-16 pb-8">
        <div className="max-w-7xl px-5 sm:px-6 lg:px-8 mx-auto">

          {/* ================= MAIN FOOTER GRID ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

            {/* ================= ABOUT ================= */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-5">
                <img
                  src="/assets/logo/logo (2).png"
                  alt="Saif Ullah Bangash Logo"
                  width="180"
                  height="70"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>

              <p className="text-[#8891A5] leading-relaxed text-sm sm:text-base max-w-sm">
                Web Developer specializing in Web Development, WordPress,
                React JS, and SEO. I build fast, responsive, user-friendly
                websites designed for better performance and online visibility.
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-5">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-[#F7D26B]/30 text-[#FBE3A0]">
                  React JS
                </span>

                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-[#F7D26B]/30 text-[#FBE3A0]">
                  WordPress
                </span>

                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-[#F7D26B]/30 text-[#FBE3A0]">
                  SEO
                </span>
              </div>
            </div>

            {/* ================= QUICK LINKS ================= */}
            <div className="text-start sm:text-center">
              <h4 className="text-lg font-bold text-[#E9EBF2] mb-6">
                Quick Links
              </h4>

              <ul className="inline-block space-y-4 text-left">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="relative inline-flex items-center gap-2 text-[#8891A5] hover:text-[#FBE3A0] transition-colors duration-300 text-sm sm:text-base group"
                    >
                      <FaArrowRight className="text-xs text-[#F7D26B] transition-transform duration-300 group-hover:translate-x-1" />
                      {item.name}

                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= SERVICES ================= */}
            <div>
              <h4 className="text-lg font-bold text-[#E9EBF2] mb-6">
                Services
              </h4>

              <ul className="inline-block space-y-4 text-center">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.link}
                      className="group flex items-center gap-3 text-[#8891A5] hover:text-[#FBE3A0] transition-all duration-300"
                    >
                      <span className="text-[#F7D26B] group-hover:scale-110 transition-transform">
                        {service.icon}
                      </span>

                      <span className="text-sm sm:text-base">
                        {service.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= CONTACT ================= */}
            <div className="text-start">
              <h4 className="text-lg font-bold text-[#E9EBF2] mb-6">
                Contact Me
              </h4>

              <div className="inline-block space-y-4 text-left">

                {/* Email */}
                <a
                  href="mailto:saifbangash480@gmail.com"
                  className="flex items-start gap-3 text-[#8891A5] hover:text-[#FBE3A0] transition-colors duration-300"
                >
                  <FaEnvelope className="mt-1 text-[#F7D26B] shrink-0" />

                  <span className="text-sm sm:text-base break-all">
                    saifbangash480@gmail.com
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+923326767615"
                  className="flex items-center gap-3 text-[#8891A5] hover:text-[#FBE3A0] transition-colors duration-300"
                >
                  <FaPhoneAlt className="text-[#F7D26B] shrink-0" />

                  <span className="text-sm sm:text-base">
                    +92 332 6767615
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 text-[#8891A5]">
                  <FaMapMarkerAlt className="mt-1 text-[#F7D26B] shrink-0" />

                  <span className="text-sm sm:text-base">
                    Pakistan
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-7">
                <h5 className="text-sm font-semibold text-[#E9EBF2] mb-4">
                  Follow Me
                </h5>

                <div className="flex flex-wrap justify-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl 
                      flex items-center justify-center 
                      transition-all duration-300 shadow-sm border 
                      hover:-translate-y-1 bg-white/5 border-white/10 text-[#E9EBF2] hover:bg-[#F7D26B] hover:text-[#0B1120] hover:border-[#F7D26B]"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <hr className="border-white/10" />

          {/* ================= BOTTOM BAR ================= */}
          <div className="mt-8 flex flex-col items-center gap-5 text-center">

            {/* Copyright */}
            <p className="text-[#8891A5] text-sm">
              © 2026{" "}
              <span className="text-[#E9EBF2] font-semibold">
                Saif Ullah Bangash
              </span>
              . All rights reserved.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-[#FBE3A0] shadow-lg shadow-black/10 sm:px-5 sm:text-sm">
              <span>Web Development</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#F7D26B]" />
              <span>WordPress</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#F7D26B]" />
              <span>SEO</span>
            </div>
          </div>
        </div>
      </footer> 
    </>
  );
};

export default Footer;