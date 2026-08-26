import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; 

const FAQs = ({
  data = [],
  title = "Common questions",
  eyebrow = "// FAQs",
  sectionId = "faqs",
}) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!data || data.length === 0) return null;

  return (
    <section
      id={sectionId}
      className="relative w-full bg-gray-50 dark:bg-[#0d0620] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-4 mb-10 md:mb-14">
        {eyebrow && (
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D9A93E] dark:text-[#F7D26B] uppercase">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2F4066] dark:text-white">
          {title}
        </h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-3 md:gap-4">
        {data.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-[#1a1033] border border-gray-100 dark:border-white/10 overflow-hidden transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 md:py-5 cursor-pointer select-none"
              >
                <span className="text-sm md:text-base font-bold text-[#2F4066] dark:text-white">
                  {item.q}
                </span>
                <ChevronDown
                  className={`shrink-0 text-[#D9A93E] dark:text-[#F7D26B] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              
              {/* Accordion expand/collapse without external library reliance */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-4 md:pb-5 text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;