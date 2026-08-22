import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-100 transition-all duration-500 ${
        scrolled
          ? "bg-white backdrop-blur-xl py-3 shadow-2xl border-b border-white/5" // Scroll hone par DARK
          : "bg-white/80 backdrop-blur-md py-2 border-b border-gray-100" // Default WHITE
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 ">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`text-3xl font-bold tracking-tighter transition-colors duration-500 ${
            scrolled ? "text-white" : "text-[#5C4DFF]"
          }`}
        >
          <img
            src="/assets/logo/logo-svg.svg"
            alt="Logo"
            width={"100%"}
            height={100}
            className="h-15 object-contain"
          />{" "}
        </button>

        {/* Desktop Links */}
        <div className="md:flex hidden items-center space-x-10">
          {["home", "about", "resume", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-[12px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
                scrolled
                  ? "text-gray-900 hover:text-[#5C4DFF]" // Dark bg par light text
                  : "text-[#2F4066] hover:text-[#5C4DFF]" // White bg par dark blue/purple text
              }`}
            >
              {item}
            </button>
          ))}

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-500 ${
              scrolled
                ? "bg-white text-[#0a0118] hover:bg-purple-400 hover:text-white"
                : "bg-[#5C4DFF] text-white hover:bg-[#4A3DDF] shadow-lg shadow-purple-200"
            }`}
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <div
          className={`md:hidden cursor-pointer transition-colors ${scrolled ? "text-black" : "text-[#2F4066]"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 transition-all duration-500 z-[-1] ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {["home", "about", "resume", "projects", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="text-3xl font-bold text-[#2F4066] uppercase tracking-widest hover:text-[#5C4DFF]"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
