import React from "react";
import { Laptop, Globe, Search, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const defaultTags = [
  { icon: <Laptop size={15} />, label: "Web Development" },
  { icon: <Globe size={15} />, label: "WordPress" },
  { icon: <Search size={15} />, label: "SEO" },
];

const CTA = ({
  eyebrow = "Let's Work Together",
  title = "Have a website in mind?",
  description = "Whether it's a new build, a WordPress site, or SEO that needs fixing — let's talk about it.",
  tags = defaultTags,
  buttonText = "Get In Touch",
  buttonLink = "/contact",
  whatsappNumber = "923326767615",
  sectionId = "contact",
}) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section
      id={sectionId}
      className="relative w-full bg-[#F7D26B] px-4 sm:px-6 md:px-12 py-10 md:py-14 overflow-hidden"
    >
      {/* soft depth so the flat gold isn't too harsh */}
      <div className="absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-black/5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-3">
        {/* Subtitle Eyebrow */}
        {eyebrow && (
          <span className="text-xs font-extrabold tracking-widest text-[#1A1300] uppercase bg-black/10 px-3 py-1 rounded-full">
            {eyebrow}
          </span>
        )}

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A1300] tracking-tight leading-tight">
          {title}
        </h2>

        {/* Description Text */}
        <p className="text-[#1A1300]/80 max-w-xl text-xs sm:text-sm md:text-base font-medium leading-relaxed">
          {description}
        </p>

        {/* Service Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 my-1">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0d0620] text-white text-xs font-semibold shadow-sm"
              >
                <span className="text-[#F7D26B] shrink-0">{tag.icon}</span>
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-1">
          <a
            href={buttonLink}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0d0620] hover:bg-[#1a1033] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md active:scale-95"
          >
            {buttonText}
            <ArrowRight size={16} className="text-[#F7D26B]" />
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1A1300] hover:bg-[#2a2200] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md active:scale-95"
          >
            <FaWhatsapp size={16} className="text-[#25D366]" />
            WhatsApp: +92 332 6767615
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;