import React from "react";
import { Link } from "react-router-dom";
 

const Project = () => {
  return (
    <div className="bg-white dark:bg-[#0a0118] transition-colors duration-500">
      {/* Featured Projects Section */}
      <section
        id="projects"
        className="max-w-7xl px-6 md:px-12 lg:px-20 py-10 md:py-25 space-y-24 md:space-y-32"
      >
        {/* Section Title */}
        <div className="text-center lg:text-left mb-10">
          <h4 className="text-[#5C4DFF] font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
            My Work
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Recent{" "}
            <span className="font-serif italic text-gray-400">Projects</span>
          </h2>
        </div>

        {/* Project 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Left: Image Container */}
          <div className="relative group w-full lg:flex-1">
            <div className="absolute -inset-4 bg-[#5C4DFF]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gray-100 dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl">
              {/* Image placeholder - Aap apni image src yahan add karein */}
              <div className="h-64 md:h-80 lg:h-96 bg-gray-800 flex items-center justify-center text-gray-500 overflow-hidden">
                <a href="https://www.smoknic.co.uk/" rel="noopener noreferrer">
                  <img
                    src="https://www.webcomforts.com/mtill-uploads/files/smoknic-vape-web-design-190.webp"
                    alt="Project Thumbnail"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Content Container */}
          <div className="w-full lg:flex-1 space-y-4 text-center lg:text-left">
            <span className="text-[#5C4DFF] dark:text-purple-400 text-xs font-bold uppercase tracking-widest">
              Featured Project
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white font-serif">
              eCommerce Website Design for Smoknic Ltd
            </h3>

            {/* Description Card - Overlapping only on Large Screens */}
            <div
              className="p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-white/10 relative z-10 
              bg-white dark:bg-white/5 backdrop-blur-xl shadow-lg
              lg:-ml-20   transition-all duration-300"
            >
              <p className="text-sm   text-gray-600 dark:text-gray-300 leading-relaxed">
                Smoknic, a growing name in the vape industry, required a stylish
                and functional website to effectively present their product
                lineup, spotlight deals, and provide a smooth online shopping
                experience.
              </p>

              <p className="text-sm  text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                We built a clean, mobile-optimized platform with eye-catching
                visuals, user-friendly navigation, and sales-driven design —
                aimed at boosting brand credibility, engaging customers, and
                increasing conversions.
              </p>
            </div>

            {/* Tech Stack used in Project */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4 text-xs font-mono text-gray-500 dark:text-gray-400">
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            {/* Project Link Section - NEW */}
            <div className="pt-6 flex justify-center lg:justify-start">
              <a
                href="https://www.smoknic.co.uk/"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-900 dark:text-white font-semibold text-sm hover:text-[#5C4DFF] dark:hover:text-purple-400 transition-colors"
              >
                <span>View Live Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12">
          {/* Image Container (Right on desktop) */}
          <div className="relative group w-full lg:flex-1">
            <div className="absolute -inset-4 bg-[#5C4DFF]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gray-100 dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl">
              <div className="h-64 md:h-80 lg:h-96 bg-gray-800 flex items-center justify-center overflow-hidden">
                <a href="https://www.thevapor.co.uk/" rel="noopener noreferrer">
                  <img
                    src="https://www.webcomforts.com/mtill-uploads/files/vape-store-seo-272.webp"
                    alt="Project Thumbnail"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Content Container (Left on desktop) */}
          <div className="w-full lg:flex-1 space-y-4 text-center lg:text-left">
            <span className="text-[#5C4DFF] dark:text-purple-400 text-xs font-bold uppercase tracking-widest">
              Featured Project
            </span>

            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white font-serif">
              eCommerce Website Design for TheVapor
            </h3>

            {/* Description Card */}
            <div
              className="p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-white/10 
            bg-white dark:bg-white/5 backdrop-blur-xl shadow-lg
            lg:-mr-20 transition-all duration-300"
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                TheVapor, a UK vape store, needed a strong online presence to
                showcase its vaping products, accessories, and e-liquids while
                providing a seamless shopping experience.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                We redesigned TheVapor’s e-commerce site with modern layouts,
                fast performance, and intuitive navigation boosting credibility,
                user engagement, and vape sales across the UK.{" "}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4 text-xs font-mono text-gray-500 dark:text-gray-400">
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>css</span>
            </div>

            {/* Live Link */}
            <div className="pt-6 flex justify-center lg:justify-start">
              <a
                href="https://www.thevapor.co.uk/"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-semibold text-sm 
              text-gray-900 dark:text-white hover:text-[#5C4DFF] transition-colors"
              >
                <span>View Live Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Left: Image Container */}
          <div className="relative group w-full lg:flex-1">
            <div className="absolute -inset-4 bg-[#5C4DFF]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gray-100 dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl">
              {/* Image placeholder - Aap apni image src yahan add karein */}
              <div className="h-64 md:h-80 lg:h-96 bg-gray-800 flex items-center justify-center text-gray-500 overflow-hidden">
                <a
                  href="https://www.epoxyres-it.co.uk/"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.webcomforts.com/mtill-uploads/files/epoxy-res-it-293.webp"
                    alt="Project Thumbnail"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Content Container */}
          <div className="w-full lg:flex-1 space-y-4 text-center lg:text-left">
            <span className="text-[#5C4DFF] dark:text-purple-400 text-xs font-bold uppercase tracking-widest">
              Featured Project
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white font-serif">
              eCommerce Website Design for Epoxy Res-iT
            </h3>

            {/* Description Card - Overlapping only on Large Screens */}
            <div
              className="p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-white/10 relative z-10 
              bg-white dark:bg-white/5 backdrop-blur-xl shadow-lg
              lg:-ml-20   transition-all duration-300"
            >
              <p className="text-sm   text-gray-600 dark:text-gray-300 leading-relaxed">
                We designed and developed a clean, search-optimized eCommerce
                website for Epoxy Res-iT, a growing brand in the Arts & Crafts
                Supplies market, specialising in high-quality epoxy resin
                products.
              </p>

              <p className="text-sm  text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                The website features intuitive navigation, clear product
                presentation, and a fully responsive design. Every element is
                tailored to showcase Epoxy Res-iT's arts and crafts supplies
                effectively, build customer trust, and deliver a smooth,
                conversion-focused shopping experience across all devices.
              </p>
            </div>

            {/* Tech Stack used in Project */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4 text-xs font-mono text-gray-500 dark:text-gray-400">
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            {/* Project Link Section - NEW */}
            <div className="pt-6 flex justify-center lg:justify-start">
              <a
                href="https://www.epoxyres-it.co.uk/"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-900 dark:text-white font-semibold text-sm hover:text-[#5C4DFF] dark:hover:text-purple-400 transition-colors"
              >
                <span>View Live Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12">
          {/* Image Container (Right on desktop) */}
          <div className="relative group w-full lg:flex-1">
            <div className="absolute -inset-4 bg-[#5C4DFF]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gray-100 dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl">
              <div className="h-64 md:h-80 lg:h-96 bg-gray-800 flex items-center justify-center text-gray-500 overflow-hidden">
                <a href="https://isafegadgets.co.uk/" rel="noopener noreferrer">
                  <img
                    src="assets/img/isafegadgets-img.jfif"
                    alt="isafegadgets image"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Content Container (Left on desktop) */}
          <div className="w-full lg:flex-1 space-y-4 text-center lg:text-left">
            <span className="text-[#5C4DFF] dark:text-purple-400 text-xs font-bold uppercase tracking-widest">
              Featured Project
            </span>

            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white font-serif">
              Business Website Design for iSafe Gadgets Tech Shop
            </h3>

            {/* Description Card */}
            <div
              className="p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-white/10 
            bg-white dark:bg-white/5 backdrop-blur-xl shadow-lg
            lg:-mr-20 transition-all duration-300"
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                iSafe Gadgets Tech Shop, a Walton-on-Thames based repair
                store, needed a modern website to showcase their phone,
                tablet, laptop and gaming device repair services along with
                their premium tech accessories.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                We built a fast, easy-to-navigate site with an online repair
                booking flow, service pages, and an accessories showcase —
                helping the shop build trust, attract local customers, and
                grow bookings.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4 text-xs font-mono text-gray-500 dark:text-gray-400">
              <span>Bootstrap 5</span>
              <span> CSS</span>
              <span>JavaScript</span>
            </div>

            {/* Live Link */}
            <div className="pt-6 flex justify-center lg:justify-start">
              <a
                href="https://isafegadgets.co.uk/"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-semibold text-sm 
              text-gray-900 dark:text-white hover:text-[#5C4DFF] transition-colors"
              >
                <span>View Live Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Left: Image Container */}
          <div className="relative group w-full lg:flex-1">
            <div className="absolute -inset-4 bg-[#5C4DFF]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gray-100 dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl">
               <div className="h-64 md:h-80 lg:h-96 bg-gray-800 flex items-center justify-center text-gray-500 overflow-hidden">
                <a
                  href="https://finroute.co.uk/"   
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.webcomforts.com/mtill-uploads/files/corporate-web-design-268.webp"   
                    alt="Project Thumbnail"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Content Container */}
          <div className="w-full lg:flex-1 space-y-4 text-center lg:text-left">
            <span className="text-[#5C4DFF] dark:text-purple-400 text-xs font-bold uppercase tracking-widest">
              Featured Project
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white font-serif">
              Study Abroad & Immigration Website for Finroute
            </h3>

            {/* Description Card - Overlapping only on Large Screens */}
            <div
              className="p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-white/10 relative z-10 
              bg-white dark:bg-white/5 backdrop-blur-xl shadow-lg
              lg:-ml-20   transition-all duration-300"
            >
              <p className="text-sm   text-gray-600 dark:text-gray-300 leading-relaxed">
                We designed and developed a modern, conversion-focused website
                for Finroute, a trusted UK study and immigration consultancy
                helping students navigate study abroad, PTE/IELTS test
                preparation, and English learning journeys.
              </p>

              <p className="text-sm  text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                The website features a clean hero section, service highlights
                (Study Abroad, Test Centers, Learn English), destination
                showcases, and a fully responsive layout — built to build
                trust and drive free consultation sign-ups across all devices.
              </p>
            </div>

            {/* Tech Stack used in Project */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4 text-xs font-mono text-gray-500 dark:text-gray-400">
              <span>Bootstrap</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            {/* Project Link Section */}
            <div className="pt-6 flex justify-center lg:justify-start">
              <a
                href="https://finroute.co.uk/"   
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-900 dark:text-white font-semibold text-sm hover:text-[#5C4DFF] dark:hover:text-purple-400 transition-colors"
              >
                <span>View Live Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Project;
