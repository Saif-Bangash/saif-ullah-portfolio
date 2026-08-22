import React, { useState, useEffect } from "react";
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
} from "react-icons/fa";

const Footer = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

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
      title: "Web Development",
      link: "#services",
    },
    {
      icon: <FaReact />,
      title: "React JS Development",
      link: "#services",
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Development",
      link: "#services",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      link: "#services",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/saifullahbangash/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/Saif-Bangash/",
      label: "GitHub",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/saifbangash480/",
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
      {/* ================= FLOATING WHATSAPP ================= */}
      <div className="fixed bottom-6 right-5 sm:right-6 z-50">
        <div className="relative group flex items-center justify-center">
          {/* Animated Ring */}
          <div
            className={`absolute -inset-1 rounded-full bg-linear-to-r from-green-400 via-emerald-500 to-teal-300 blur-sm transition-opacity duration-300 opacity-80 group-hover:opacity-100 ${
              isScrolling ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "3s" }}
          />

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/923326767615"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact me on WhatsApp"
            className="relative flex items-center justify-center 
            w-14 h-14 sm:w-16 sm:h-16 
            rounded-full bg-white/90 backdrop-blur-md 
            text-green-500 border border-green-400/30 
            hover:bg-white transition-all duration-300 
            shadow-xl hover:scale-110"
          >
            <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-gray-100 text-gray-500 pt-14 sm:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24">

          {/* ================= MAIN FOOTER GRID ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

            {/* ================= ABOUT ================= */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-5">
                <img
                  src="/assets/logo/logo-svg.svg"
                  alt="Saif Ullah Bangash Logo"
                  width="180"
                  height="70"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>

              <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-sm">
                Web Developer specializing in Web Development, WordPress,
                React JS, and SEO. I build fast, responsive, user-friendly
                websites designed for better performance and online visibility.
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-5">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50 text-purple-600">
                  React JS
                </span>

                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600">
                  WordPress
                </span>

                <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-50 text-green-600">
                  SEO
                </span>
              </div>
            </div>

            {/* ================= SERVICES ================= */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">
                Services
              </h4>

              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.link}
                      className="group flex items-center gap-3 text-gray-500 hover:text-purple-600 transition-all duration-300"
                    >
                      <span className="text-purple-500 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </span>

                      <span className="text-sm sm:text-base">
                        {service.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= QUICK LINKS ================= */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">
                Quick Links
              </h4>

              <ul className="space-y-4">
                {[
                  "Home",
                  "About",
                  "Resume",
                  "Projects",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="relative inline-block text-gray-500 hover:text-purple-600 transition-colors duration-300 text-sm sm:text-base group"
                    >
                      {item}

                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= CONTACT ================= */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">
                Contact Me
              </h4>

              <div className="space-y-4">

                {/* Email */}
                <a
                  href="mailto:saifbangash480@gmail.com"
                  className="flex items-start gap-3 text-gray-500 hover:text-purple-600 transition-colors duration-300"
                >
                  <FaEnvelope className="mt-1 text-purple-500 shrink-0" />

                  <span className="text-sm sm:text-base break-all">
                   saifbangash480@gmail.com
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+923326767615"
                  className="flex items-center gap-3 text-gray-500 hover:text-purple-600 transition-colors duration-300"
                >
                  <FaPhoneAlt className="text-purple-500 shrink-0" />

                  <span className="text-sm sm:text-base">
                    +92 332 6767615
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 text-gray-500">
                  <FaMapMarkerAlt className="mt-1 text-purple-500 shrink-0" />

                  <span className="text-sm sm:text-base">
                    Pakistan
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-7">
                <h5 className="text-sm font-semibold text-gray-700 mb-4">
                  Follow Me
                </h5>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl 
                      flex items-center justify-center 
                      transition-all duration-300 shadow-sm border 
                      hover:-translate-y-1 ${
                        social.isWhatsapp
                          ? "bg-green-50 border-green-200 text-green-600 hover:bg-green-500 hover:text-white hover:border-green-500"
                          : "bg-gray-50 border-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white hover:border-purple-600"
                      }`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <hr className="border-gray-100" />

          {/* ================= BOTTOM BAR ================= */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2026{" "}
              <span className="text-gray-700 font-semibold">
                Saif Ullah Bangash
              </span>
              . All rights reserved.
            </p>

            {/* Skills */}
            <p className="text-gray-400 text-xs sm:text-sm">
              Web Development
              <span className="mx-2 text-purple-400">•</span>
              WordPress
              <span className="mx-2 text-purple-400">•</span>
              SEO
            </p>

            {/* Back To Top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-2 
              text-gray-400 hover:text-purple-600 
              transition-colors text-xs sm:text-sm 
              font-bold uppercase tracking-widest"
            >
              Back to Top

              <div
                className="w-10 h-10 rounded-full border border-gray-200 
                flex items-center justify-center 
                group-hover:border-purple-600 
                group-hover:bg-purple-50 transition-all"
              >
                <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
