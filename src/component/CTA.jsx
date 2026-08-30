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
      className="relative w-full bg-[#F7D26B] px-4 sm:px-6 md:px-12 py-12 md:py-16 overflow-hidden"
    >
      {/* Decorative Background Lighting Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-linear-to-b from-white/30 via-transparent to-black/10 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-black/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-4">
        {/* Eyebrow */}
        {eyebrow && (
          <span className="text-[11px] sm:text-xs font-black tracking-widest text-[#1A1300] uppercase bg-[#1A1300]/10 border border-[#1A1300]/15 px-4 py-1.5 rounded-full backdrop-blur-md">
            {eyebrow}
          </span>
        )}

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0d0620] tracking-tight leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-[#1A1300]/85 max-w-xl text-sm sm:text-base font-semibold leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2.5 my-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0d0620] text-white text-xs sm:text-sm font-semibold shadow-md border border-white/10 hover:scale-105 transition-transform"
              >
                <span className="text-[#F7D26B] shrink-0">{tag.icon}</span>
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full sm:w-auto">
          <a
            href={buttonLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0d0620] hover:bg-[#1a1033] text-white text-sm font-bold rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
          >
            {buttonText}
            <ArrowRight size={18} className="text-[#F7D26B]" />
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1A1300] hover:bg-[#251c00] text-white text-sm font-bold rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-95 border border-white/10"
          >
            <FaWhatsapp size={18} className="text-[#25D366]" />
            WhatsApp: +92 332 6767615
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;