export const projects = [
  {
    id: 1,
    title: "Vape E-Commerce Website",
    description: "React + Tailwind + API integration",
    image: "/assets/vape.png",
    github: "https://github.com/username/vape-store",
    live: "https://vapestore.com",
    tech: ["React", "Tailwind", "API"],
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "Bootstrap + React + Charts",
    image: "/assets/dashboard.png",
    github: "https://github.com/username/admin-dashboard",
    live: "#",
    tech: ["React", "Bootstrap", "Charts"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio with smooth animations",
    image: "/assets/portfolio.png",
    github: "https://github.com/username/portfolio",
    live: "#",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
];

// home page faqs 

const homeFaqData = [
  {
    q: "Do you build with React or WordPress?",
    a: "Both — the choice depends on the project. React suits custom, high-performance builds; WordPress suits content-driven sites that need easy day-to-day editing.",
  },
  {
    q: "Is SEO included in every website build?",
    a: "Every site is built with on-page SEO fundamentals in place from the start — clean structure, metadata, and performance — with deeper technical SEO available as an add-on.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most websites take between two and four weeks depending on scope, from discovery through launch.",
  },
  {
    q: "Can you improve an existing website instead of rebuilding it?",
    a: "Yes — audits and fixes for speed, SEO, and WordPress issues on existing sites are just as common as new builds.",
  },
  {
    q: "Do you offer support after the site goes live?",
    a: "Yes, ongoing maintenance and support is available after launch to keep the site updated and performing well.",
  },
];
const faqData = [
  {
    q: "What is custom web development?",
    a: "It's building a website or web application specifically around your business requirements, workflows, and users, rather than adapting a restrictive pre-built template.",
  },
  {
    q: "Why should I choose custom development instead of a template?",
    a: "Custom development gives you complete design flexibility, functionality built for your exact workflow, and a clean codebase that scales effortlessly as your business grows.",
  },
  {
    q: "Can you build a website according to my business requirements?",
    a: "Yes. I start by analyzing your specific business goals, user pathways, and feature requirements, then design and engineer the site around them.",
  },
  {
    q: "Can you integrate APIs?",
    a: "Yes. I integrate REST APIs, authentication services, payment gateways, and third-party tools your business relies on daily.",
  },
  {
    q: "Can you connect the website with a database?",
    a: "Yes, using modern databases such as MongoDB or MySQL, structured specifically for your data management needs.",
  },
  {
    q: "Can you build an admin dashboard?",
    a: "Yes. I build fully responsive, secure admin dashboards for managing users, content, orders, products, and operational analytics.",
  },
  {
    q: "Will the website be responsive?",
    a: "Yes, every custom build follows a mobile-first approach and is thoroughly tested across mobile devices, tablets, laptops, and wide monitors.",
  },
  {
    q: "Will the website be SEO-friendly?",
    a: "Yes. Semantic HTML, structured data, clean URLs, customizable meta tags, and Core Web Vitals performance optimization are built into every project.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. I can rebuild existing legacy sites into fast, modern, and high-converting custom web applications without losing your established SEO value.",
  },
  {
    q: "Do you provide maintenance after development?",
    a: "Yes, including technical support, regular updates, continuous performance tracking, and security monitoring post-launch.",
  },
];


/* =========================================================
   react. FAQ
   ========================================================= */
const FAQ_ITEMS = [
  {
    q: "What type of React.js applications do you build?",
    a: "Business websites, e-commerce interfaces, admin dashboards, SaaS interfaces, landing pages and custom API-driven applications.",
  },
  {
    q: "Can you convert an existing website into React.js?",
    a: "Yes, existing websites can be rebuilt as modern React.js applications while keeping their content and branding.",
  },
  {
    q: "Can you integrate REST APIs?",
    a: "Yes, including CRUD APIs, authentication APIs and third-party services, using Fetch or Axios.",
  },
  {
    q: "Do you build React e-commerce websites?",
    a: "Yes, including product listings, cart functionality, search, filtering and checkout interfaces.",
  },
  {
    q: "Can you create React admin dashboards?",
    a: "Yes, with data tables, charts, filters, pagination and CRUD functionality.",
  },
  {
    q: "Do you use Redux Toolkit?",
    a: "Yes, for applications where global state is complex enough to benefit from it — otherwise Context API or local state is used.",
  },
  {
    q: "Will my React website be responsive?",
    a: "Yes, every React build is developed mobile-first and tested across mobile, tablet, laptop and desktop.",
  },
  {
    q: "Can you optimize React application performance?",
    a: "Yes, including code splitting, memoization, lazy loading and Core Web Vitals improvements.",
  },
  {
    q: "Can you build authentication and protected routes?",
    a: "Yes, including login/registration flows, protected routes and role-based access.",
  },
  {
    q: "Do you provide React website maintenance?",
    a: "Yes, including bug fixes, dependency updates, feature additions and performance improvements after launch.",
  },
];

// 1. Projects Data Array (Reusable Data Source)
const projectsData = [
  {
    id: 1,
    badge: "Smoknic.co.uk",
    title: "eCommerce Website Design for Smoknic Ltd",
    descriptions: [
      "Smoknic, a growing name in the vape industry, required a stylish and functional website to effectively present their product lineup, spotlight deals, and provide a smooth online shopping experience.",
      "We built a clean, mobile-optimized platform with eye-catching visuals, user-friendly navigation, and sales-driven design — aimed at boosting brand credibility, engaging customers, and increasing conversions.",
    ],
    techStack: ["Bootstrap 5", "CSS", "JavaScript"],
    liveUrl: "https://www.smoknic.co.uk/",
    imageUrl:
      "https://www.webcomforts.com/mtill-uploads/files/smoknic-vape-web-design-190.webp",
  },
  {
    id: 2,
    badge: "TheVapor.co.uk",
    title: "eCommerce Website Design for TheVapor",
    descriptions: [
      "TheVapor, a UK vape store, needed a strong online presence to showcase its vaping products, accessories, and e-liquids while providing a seamless shopping experience.",
      "We redesigned TheVapor’s e-commerce site with modern layouts, fast performance, and intuitive navigation boosting credibility, user engagement, and vape sales across the UK.",
    ],
    techStack: ["Bootstrap 5", "CSS", "JavaScript"],
    liveUrl: "https://www.thevapor.co.uk/",
    imageUrl:
      "https://www.webcomforts.com/mtill-uploads/files/vape-store-seo-272.webp",
  },
  {
    id: 3,
    badge: "Epoxy Res-iT.co.uk",
    title: "eCommerce Website Design for Epoxy Res-iT",
    descriptions: [
      "We designed and developed a clean, search-optimized eCommerce website for Epoxy Res-iT, a growing brand in the Arts & Crafts Supplies market, specialising in high-quality epoxy resin products.",
      "The website features intuitive navigation, clear product presentation, and a fully responsive design. Every element is tailored to showcase Epoxy Res-iT's arts and crafts supplies effectively, build customer trust, and deliver a smooth, conversion-focused shopping experience across all devices.",
    ],
    techStack: ["Bootstrap 5", "CSS", "JavaScript"],
    liveUrl: "https://www.epoxyres-it.co.uk/",
    imageUrl:
      "https://www.webcomforts.com/mtill-uploads/files/epoxy-res-it-293.webp",
  },
  {
    id: 4,
    badge: "isafegadgets.co.uk",
    title: "Business Website Design for iSafe Gadgets Tech Shop",
    descriptions: [
      "iSafe Gadgets Tech Shop, a Walton-on-Thames based repair store, needed a modern website to showcase their phone, tablet, laptop and gaming device repair services along with their premium tech accessories.",
      "We built a fast, easy-to-navigate site with an online repair booking flow, service pages, and an accessories showcase — helping the shop build trust, attract local customers, and grow bookings.",
    ],
    techStack: ["Bootstrap 5", "CSS", "JavaScript"],
    liveUrl: "https://isafegadgets.co.uk/",
    imageUrl: "assets/img/isafegadgets-img.jfif",
  },
  {
    id: 5,
    badge: "Finroute.co.uk",
    title: "Study Abroad & Immigration Website for Finroute",
    descriptions: [
      "We designed and developed a modern, conversion-focused website for Finroute, a trusted UK study and immigration consultancy helping students navigate study abroad, PTE/IELTS test preparation, and English learning journeys.",
      "The website features a clean hero section, service highlights (Study Abroad, Test Centers, Learn English), destination showcases, and a fully responsive layout — built to build trust and drive free consultation sign-ups across all devices.",
    ],
    techStack: ["Bootstrap 5", "CSS", "JavaScript"],
    liveUrl: "https://finroute.co.uk/",
    imageUrl:
      "https://www.webcomforts.com/mtill-uploads/files/corporate-web-design-268.webp",
  },
];


const WP_FAQ = [
  {
    q: "Can you convert Figma, XD, or HTML designs into WordPress?",
    a: "Yes, absolutely! I can convert Figma, Adobe XD, Photoshop, or custom HTML templates into pixel-perfect, fully responsive, and mobile-friendly WordPress websites using Elementor Pro or Custom PHP Themes."
  },
  {
    q: "Can you optimize my existing WordPress website for better speed?",
    a: "Yes! I optimize site performance to achieve 90+ Core Web Vitals scores on Google PageSpeed Insights and GTmetrix using database cleanup, image optimization, caching setup, CSS/JS minification, and CDN integration."
  },
  {
    q: "Do you work with both Elementor Pro and Gutenberg?",
    a: "Yes, I design easy-to-edit custom layouts using Elementor Pro, and I also build ultra-fast, lightweight websites using the Gutenberg block editor and ACF (Advanced Custom Fields)."
  },
  {
    q: "What WooCommerce and eCommerce services do you provide?",
    a: "I handle end-to-end WooCommerce setups, including product management, custom checkout page design, and seamless integration with payment gateways like Stripe, PayPal, and local bank transfers."
  },
  {
    q: "Can you handle On-Page SEO for my WordPress website?",
    a: "Yes, I perform complete On-Page SEO setup using Yoast SEO or Rank Math. This includes meta title/description optimization, XML sitemaps, schema markup, and Search Console indexing."
  },
  {
    q: "Can you fix WordPress bugs, layout issues, or critical errors?",
    a: "Definitely. I troubleshoot and resolve PHP errors, Critical Site Errors, plugin conflicts, database issues, broken layouts, and security vulnerabilities or malware."
  },
  {
    q: "Will I be able to update content on my site after launch?",
    a: "Yes! I structure every site with an intuitive layout so you can easily update text, change images, and upload new products without needing any coding knowledge."
  }
];

/* =========================================================
   5. SEO FAQS DATA
   ========================================================= */
const SEO_FAQ = [
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term investment. Initial technical improvements and indexing changes reflect within 2 to 4 weeks, while noticeable organic keyword growth typically takes 3 to 6 months depending on competition.",
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term investment. Initial technical improvements and indexing changes reflect within 2 to 4 weeks, while noticeable organic keyword growth typically takes 3 to 6 months depending on competition."
  },
  {
    q: "Do you use Yoast SEO or Rank Math for WordPress?",
    a: "I work fluently with both plugins. I configure advanced XML sitemaps, meta templates, Open Graph social tags, and schema markup based on your site's specific setup.",
    question: "Do you use Yoast SEO or Rank Math for WordPress?",
    answer: "I work fluently with both plugins. I configure advanced XML sitemaps, meta templates, Open Graph social tags, and schema markup based on your site's specific setup."
  },
  {
    q: "Will website speed optimization help my SEO rankings?",
    a: "Yes! Google considers page speed and Core Web Vitals critical ranking factors. Faster loading sites lower bounce rates and improve overall search engine rankings.",
    question: "Will website speed optimization help my SEO rankings?",
    answer: "Yes! Google considers page speed and Core Web Vitals critical ranking factors. Faster loading sites lower bounce rates and improve overall search engine rankings."
  },
  {
    q: "Can you fix Google Search Console indexing and coverage errors?",
    a: "Yes. I diagnose and resolve indexing issues, redirect loops, canonical tag conflicts, missing sitemaps, and 404 page errors in Google Search Console.",
    question: "Can you fix Google Search Console indexing and coverage errors?",
    answer: "Yes. I diagnose and resolve indexing issues, redirect loops, canonical tag conflicts, missing sitemaps, and 404 page errors in Google Search Console."
  },
  {
    q: "Do you offer Local SEO for regional businesses?",
    a: "Yes, including Google Business Profile setup, local keyword targeting, localized schema data, and NAP consistency fixes.",
    question: "Do you offer Local SEO for regional businesses?",
    answer: "Yes, including Google Business Profile setup, local keyword targeting, localized schema data, and NAP consistency fixes."
  }
];

export { FAQ_ITEMS, faqData, homeFaqData, projectsData, WP_FAQ, SEO_FAQ };