import React, { useState, useEffect } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. Floating WhatsApp Widget (Animated Border & Backdrop Blur) */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group flex items-center justify-center">
          {/* Animated Gradient Ring Layer */}
          <div
            className={`absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-300 blur-sm transition-opacity duration-300 opacity-80 group-hover:opacity-100 ${
              isScrolling ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "3s" }}
          />

          {/* Main Floating Button */}
          <a
            href="https://wa.me/923326767615"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/80 backdrop-blur-md text-green-500 border border-green-400/30 hover:bg-white transition-all duration-300 shadow-xl hover:scale-105"
          >
            <FaWhatsapp className="w-7 h-7 text-green-500" />
          </a>
        </div>
      </div>

      {/* 2. Original Light / White Footer Component */}
      <footer className="bg-white border-t border-gray-100 text-gray-500 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Logo & About */}
            <div className="flex flex-col items-start space-y-6">
              <div className="text-3xl font-bold text-gray-800">
                <img
                  src="/assets/logo/logo-svg.svg"
                  alt="Logo"
                  width={"100%"}
                  height={100}
                  className="h-15 object-contain"
                />
              </div>
              <p className="text-gray-500 leading-relaxed max-w-xs">
                Specializing in Web Development, WordPress, and SEO. Building
                fast, responsive, user-friendly websites that deliver great
                performance and better search engine visibility.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {["Home", "About", "Resume", "Projects", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-500 hover:text-purple-600 transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">
                Social Connect
              </h4>
              <div className="flex gap-4">
                {[
                  {
                    icon: <FaLinkedinIn />,
                    link: "https://www.linkedin.com/in/saifullahbangash/",
                  },
                  {
                    icon: <FaGithub />,
                    link: "https://github.com/Saif-Bangash/",
                  },
                  {
                    icon: <FaWhatsapp />,
                    link: "https://wa.me/923326767615",
                    isWhatsapp: true,
                  },
                  { icon: <FaInstagram />, link: "https://www.instagram.com/saifbangash480/" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm border ${
                      social.isWhatsapp
                        ? "bg-green-50 border-green-200 text-green-600 hover:bg-green-500 hover:text-white hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1"
                        : "bg-gray-50 border-transparent text-gray-600 hover:bg-purple-600 hover:text-white hover:-translate-y-1"
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Bottom Bar */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2026{" "}
              <span className="text-gray-600 font-medium">Saif Portfolio</span>.
              All rights reserved.
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-gray-400 hover:text-purple-600 transition-colors text-sm font-bold uppercase tracking-widest"
            >
              Back to Top
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-purple-600 transition-all">
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
