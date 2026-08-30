import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Globe,
  Search,
  Layout,
  ShoppingCart,
  Zap,
  Gauge,
  Sliders,
  Wrench,
  ShieldCheck,
  RefreshCcw,
  Settings,
  FileText,
  Globe2,
  TrendingUp,
  Link2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom"; 
import CTA from "./CTA";
import FAQs from "./FAQs";

/* =========================================================
   DESIGN TOKENS — Services Master System
   ========================================================= */
const GlobalStyle = () => (
  <style>{`
    .srv-root{
      --primary:#F7D26B; --secondary:#D9A93E; --accent:#F7D26B;
      --gold:#F7D26B; --gold-light:#FBE3A0; --gold-dark:#D9A93E;
      --dark:#0B1120; --dark2:#0F172A; --light:#F8FAFC; --ink:#0F172A; --muted:#64748B;
      font-family: Inter, system-ui, sans-serif;
      color: var(--ink);
      background: var(--light);
    }
    .srv-root .font-display{ font-family: "Space Grotesk", Inter, sans-serif; }
    .srv-root .font-mono{ font-family: "JetBrains Mono", ui-monospace, monospace; }

    @media (prefers-reduced-motion: reduce){
      .srv-root *{ animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
    }

    .srv-reveal{ opacity:0; transform:translateY(22px); transition:opacity .6s ease, transform .6s cubic-bezier(.16,1,.3,1); }
    .srv-reveal.in{ opacity:1; transform:translateY(0); }

    .srv-eyebrow{
      display:inline-flex; align-items:center; gap:.5rem;
      font-family:"JetBrains Mono", monospace; font-size:.72rem; letter-spacing:.02em;
      color:var(--dark); background:rgba(247,210,107,.12);
      border:1px solid rgba(247,210,107,.3); border-radius:999px; padding:.35rem .8rem .35rem .6rem;
    }
    .srv-eyebrow.on-dark{ color:#FBE3A0; background:rgba(247,210,107,.1); border-color:rgba(247,210,107,.25); }
    .srv-dot{ width:6px; height:6px; border-radius:999px; background:var(--dark); box-shadow:0 0 8px var(--accent); }

    .srv-editor{
      background:#0D1424; border:1px solid rgba(148,163,184,.14); border-radius:14px; overflow:hidden;
      box-shadow:0 30px 60px -20px rgba(2,6,23,.65);
    }
    .srv-editor-bar{ display:flex; align-items:center; gap:.5rem; padding:.6rem .9rem; background:#0B1120; border-bottom:1px solid rgba(148,163,184,.1); }
    .srv-editor-dot{ width:10px; height:10px; border-radius:999px; }
    .srv-editor-tab{ font-family:"JetBrains Mono",monospace; font-size:.7rem; color:#94A3B8; margin-left:.4rem; padding:.15rem .55rem; border-radius:6px; background:rgba(148,163,184,.06); }
    .srv-editor-body{ padding:1.15rem 1.3rem; font-family:"JetBrains Mono",monospace; font-size:.8rem; line-height:1.85; min-height:210px; }
    .srv-ln{ color:#3A4A63; display:inline-block; width:1.5rem; user-select:none; }
    .tok-kw{ color:#C4B5FD; } .tok-fn{ color:#22D3EE; } .tok-str{ color:#86EFAC; }
    .tok-tag{ color:#7DD3FC; } .tok-attr{ color:#FDE68A; } .tok-pune{ color:#94A3B8; } .tok-tree{ color:#94A3B8; }
    .srv-caret{ display:inline-block; width:6px; height:1em; background:var(--accent); vertical-align:text-bottom; margin-left:2px; animation:srvBlink 1s step-end infinite; }
    @keyframes srvBlink{ 50%{ opacity:0; } }

    .srv-card{ background:#fff; border:1px solid rgba(15,23,42,.07); border-radius:16px; transition:transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease, border-color .3s ease; }
    .srv-card:hover{ transform:translateY(-5px); box-shadow:0 22px 44px -20px rgba(247,210,107,.4); border-color:rgba(247,210,107,.5); }

    .srv-grad-primary{ background:linear-gradient(135deg, #F7D26B, #D9A93E); }
    .srv-grad-text{ background:linear-gradient(120deg, #FBE3A0 0%, #F7D26B 45%, #D9A93E 100%); -webkit-background-clip:text; background-clip:text; color:transparent; }

    .srv-btn-primary{ background:linear-gradient(135deg, #F7D26B, #D9A93E); color:#0F172A; border-radius:12px; padding:.8rem 1.6rem; font-weight:600; display:inline-flex; align-items:center; gap:.5rem; box-shadow:0 12px 28px -10px rgba(247,210,107,.45); transition:transform .2s ease, box-shadow .2s ease; border:none; cursor:pointer; }
    .srv-btn-primary:hover{ transform:translateY(-2px); box-shadow:0 16px 32px -10px rgba(247,210,107,.6); }
    .srv-btn-ghost{ border:1px solid var(--accent); border-radius:12px; padding:.8rem 1.6rem; font-weight:600; display:inline-flex; align-items:center; gap:.5rem; transition:all .2s ease; background:transparent; cursor:pointer; }
    .srv-btn-ghost:hover{ border-color:var(--accent); color:var(--accent); }

    .srv-chip{ font-family:"JetBrains Mono",monospace; font-size:.72rem; color:#334155; border:1px solid rgba(15,23,42,.1); background:#fff; border-radius:8px; padding:.38rem .65rem; transition:.2s ease; display:inline-block; }
    .srv-chip:hover{ border-color:var(--accent); color:var(--gold-dark); transform:translateY(-2px); }
    .srv-chip-dark{ font-family:"JetBrains Mono",monospace; font-size:.72rem; color:#CBD5E1; border:1px solid rgba(148,163,184,.18); background:rgba(148,163,184,.05); border-radius:8px; padding:.38rem .65rem; transition:.2s ease; display:inline-block; }
    .srv-chip-dark:hover{ border-color:var(--accent); color:var(--accent); transform:translateY(-2px); }

    .srv-grid-noise{ background-image:radial-gradient(rgba(148,163,184,.14) 1px, transparent 1px); background-size:26px 26px; }
  `}</style>
);

/* =========================================================
   REVEAL HOOK & COMPONENTS
   ========================================================= */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`srv-reveal ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, dark = false }) {
  return (
    <span className={`srv-eyebrow ${dark ? "on-dark" : ""}`}>
      <span className="srv-dot" />
      {children}
    </span>
  );
}

/* =========================================================
   HERO ANIMATION CODE SNIPPET
   ========================================================= */
const HERO_LINES = [
  { html: '<span class="tok-kw">const</span> <span class="tok-fn">services</span> = [' },
  { html: '&nbsp;&nbsp;<span class="tok-str">"Custom Web Development"</span>,' },
  { html: '&nbsp;&nbsp;<span class="tok-str">"WordPress &amp; WooCommerce"</span>,' },
  { html: '&nbsp;&nbsp;<span class="tok-str">"On-Page &amp; Technical SEO"</span>,' },
  { html: '];' },
  { html: '<span class="tok-fn">deliverHighPerformance</span>(services);' },
];

function HeroEditor() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [heroRef, inView] = useInView(0.3);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setVisibleLines(i);
      if (i >= HERO_LINES.length) clearInterval(timer);
    }, 220);
    return () => clearInterval(timer);
  }, [inView]);

  return (
    <div ref={heroRef} className="srv-editor max-w-lg mx-auto">
      <div className="srv-editor-bar">
        <span className="srv-editor-dot" style={{ background: "#F87171" }} />
        <span className="srv-editor-dot" style={{ background: "#FBBF24" }} />
        <span className="srv-editor-dot" style={{ background: "#34D399" }} />
        <span className="srv-editor-tab">services-overview.js</span>
      </div>
      <div className="srv-editor-body text-slate-300">
        {HERO_LINES.slice(0, visibleLines).map((line, idx) => (
          <div key={idx}>
            <span className="srv-ln">{idx + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: line.html }} />
          </div>
        ))}
        {visibleLines < HERO_LINES.length && (
          <div>
            <span className="srv-ln">{visibleLines + 1}</span>
            <span className="srv-caret" />
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   1. HERO SECTION
   ========================================================= */
function ServicesHero() {
  const badges = [
    "Web Development",
    "WordPress Solutions",
    "On-Page SEO",
    "Technical SEO",
    "WooCommerce",
    "React.js Apps",
  ];
  return (
    <section
      className="relative text-white overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 srv-grid-noise opacity-30 pointer-events-none" />
      <div
        className="absolute top-10 -left-32 w-104 h-104 rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(247,210,107,.22)" }}
      />
      <div
        className="absolute top-16 -right-32 w-104 h-104 rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(247,210,112,.22)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-mono text-xs text-slate-500 mb-3">
            portfolio / services overview
          </p>
          <Eyebrow dark>my expertise</Eyebrow>
          <h1 className="font-display text-[2.05rem] leading-[1.14] sm:text-4xl md:text-[2.75rem] font-semibold mt-6 tracking-tight">
            High-Performance <span className="srv-grad-text">Web, WordPress</span> &amp; SEO Services
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-xl">
            I craft fast React applications, robust WordPress websites, and search-optimized digital platforms designed to elevate business visibility and customer engagement.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to={"/contact"} className="srv-btn-primary">
              Start a Project <ArrowRight size={16} />
            </Link>
            <a href="#all-services" className="srv-btn-ghost text-white">
              Explore All Services
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2.5">
            {badges.map((b) => (
              <span key={b} className="srv-chip-dark">
                {b}
              </span>
            ))}
          </div>
        </div>

        <Reveal>
          <HeroEditor />
          <p className="text-center font-mono text-xs text-slate-500 mt-4">
            $ design → develop → optimize → rank
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   2. CATEGORIZED SERVICES SECTION
   ========================================================= */
function AllServicesList() {
  const serviceCategories = [
    {
      category: "Web Development",
      badge: "// Frontend & React",
      desc: "Custom-coded, responsive web applications built with React.js, modern CSS frameworks, and clean JavaScript.",
      items: [
        { icon: Code2, title: "React.js Applications", desc: "Single Page Applications (SPAs) built with modern component architecture and clean state management." },
        { icon: Layout, title: "Responsive UI/UX Coding", desc: "Mobile-first layouts converted from Figma or XD into clean HTML5, CSS3, and Tailwind/Bootstrap code." },
        { icon: ShoppingCart, title: "Custom Web Solutions", desc: "Tailored frontend interfaces for SaaS apps, admin dashboards, and custom client web tools." },
      ]
    },
    {
      category: "WordPress Development",
      badge: "// CMS & E-Commerce",
      desc: "End-to-end WordPress solutions from custom theme builds and Elementor layouts to full WooCommerce stores.",
      items: [
        { icon: Globe, title: "Custom Theme & Elementor", desc: "Tailored lightweight themes and custom page layouts built for high performance and easy editing." },
        { icon: ShoppingCart, title: "WooCommerce Online Stores", desc: "Complete e-commerce setups with payment gateway integrations, product listings, and custom checkouts." },
        { icon: Wrench, title: "Speed Optimization & Fixes", desc: "90+ PageSpeed score optimization, database cleaning, and fixing PHP/layout glitches." },
      ]
    },
    {
      category: "Search Engine Optimization (SEO)",
      badge: "// Traffic & Visibility",
      desc: "White-hat SEO strategies to improve Google search visibility, fix technical issues, and drive organic traffic.",
      items: [
        { icon: Search, title: "WordPress On-Page SEO", desc: "MetaData optimization, image alt tags, heading hierarchy, and Rank Math / Yoast SEO setup." },
        { icon: Settings, title: "Technical SEO & Speed", desc: "Fixing crawl errors, broken links, XML sitemaps, robots.txt, and Core Web Vitals performance." },
        { icon: Globe2, title: "Schema Data & Indexing", desc: "JSON-LD structured data implementation and Google Search Console indexing setup." },
      ]
    }
  ];

  return (
    <section id="all-services" className="py-24 md:py-32" style={{ background: "var(--light)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {serviceCategories.map((cat, catIdx) => (
          <div key={cat.category} className={catIdx !== 0 ? "mt-24" : ""}>
            <Reveal className="max-w-2xl">
              <Eyebrow>{cat.badge}</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4 tracking-tight">
                {cat.category}
              </h2>
              <p className="text-(--muted) mt-3 text-lg">
                {cat.desc}
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {cat.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title}>
                    <div className="srv-card p-7 h-full">
                      <div className="w-11 h-11 rounded-xl srv-grad-primary flex items-center justify-center text-slate-900">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-display font-semibold text-lg mt-5">
                        {item.title}
                      </h3>
                      <p className="text-(--muted) text-sm mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   3. TECH STACK & TOOLS GRID
   ========================================================= */
function TechnicalStack() {
  const techStack = [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Bootstrap 5",
    "Tailwind CSS",
    "WordPress Core",
    "PHP 8+",
    "Elementor Pro",
    "WooCommerce", 
    "Yoast SEO",
    "Rank Math",
    "Google Search Console",
    "Google Analytics 4",
    "Core Web Vitals",
    "Schema JSON-LD",
  ];

  return (
    <section className="py-24 md:py-32 text-white relative overflow-hidden" style={{ background: "var(--dark)" }}>
      <div className="absolute inset-0 srv-grid-noise opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow dark>// tech stack</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Tools &amp; Technologies I Work With
          </h2>
          <p className="text-slate-300 mt-4 text-lg">
            Modern technologies and industry standards used to build fast, secure, and search-ready digital products.
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-2.5 mt-12">
          {techStack.map((tech) => (
            <span key={tech} className="srv-chip-dark">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   4. SERVICES FAQS DATA
   ========================================================= */
const SERVICES_FAQ = [
  {
    q: "Do you offer custom web development as well as WordPress?",
    a: "Yes! Depending on your business requirements, I build custom React.js web apps or easy-to-manage WordPress websites.",
    question: "Do you offer custom web development as well as WordPress?",
    answer: "Yes! Depending on your business requirements, I build custom React.js web apps or easy-to-manage WordPress websites."
  },
  {
    q: "Is SEO included in your website development packages?",
    a: "Every website I build comes with baseline On-Page SEO fundamentals (clean HTML, fast speed, mobile optimization, meta tags). Dedicated SEO campaigns are also available.",
    question: "Is SEO included in your website development packages?",
    answer: "Every website I build comes with baseline On-Page SEO fundamentals (clean HTML, fast speed, mobile optimization, meta tags). Dedicated SEO campaigns are also available."
  },
  {
    q: "Can you fix speed and layout bugs on my existing WordPress site?",
    a: "Yes, I offer speed optimization services to hit 90+ PageSpeed scores, database cleanups, and layout bug resolution for existing websites.",
    question: "Can you fix speed and layout bugs on my existing WordPress site?",
    answer: "Yes, I offer speed optimization services to hit 90+ PageSpeed scores, database cleanups, and layout bug resolution for existing websites."
  },
  {
    q: "How long does a web project take to complete?",
    a: "Most business landing pages and custom websites take 2 to 4 weeks depending on feature requirements.",
    question: "How long does a web project take to complete?",
    answer: "Most business landing pages and custom websites take 2 to 4 weeks depending on feature requirements."
  }
];

/* =========================================================
   5. MAIN SERVICES PAGE COMPONENT
   ========================================================= */
export default function ServicesPage() {
  return (
    <main className="srv-root overflow-hidden">
      <GlobalStyle />
      <ServicesHero />
      <AllServicesList />
      <TechnicalStack />

      <FAQs
        data={SERVICES_FAQ}
        items={SERVICES_FAQ}
        title="Services FAQ"
        eyebrow="// Common Questions"
      />

      <CTA />
    </main>
  );
}