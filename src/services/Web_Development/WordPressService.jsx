import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  LayoutDashboard,
  ShoppingCart,
  Plug,
  RefreshCcw,
  Gauge, 
  ArrowRight,
  ShieldCheck, 
  Layout,
  Sliders,
  Wrench,
  Globe,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";  
import FAQs from "../../component/FAQs";  
import CTA from "../../component/CTA";
import { WP_FAQ } from "../../data/projects";

/* =========================================================
   DESIGN TOKENS — shared portfolio system (WP Specific)
   ========================================================= */
const GlobalStyle = () => (
  <style>{`
    .wp-root{
      --primary:#F7D26B; --secondary:#D9A93E; --accent:#F7D26B;
      --gold:#F7D26B; --gold-light:#FBE3A0; --gold-dark:#D9A93E;
      --dark:#0B1120; --dark2:#0F172A; --light:#F8FAFC; --ink:#0F172A; --muted:#64748B;
      font-family: Inter, system-ui, sans-serif;
      color: var(--ink);
      background: var(--light);
    }
    .wp-root .font-display{ font-family: "Space Grotesk", Inter, sans-serif; }
    .wp-root .font-mono{ font-family: "JetBrains Mono", ui-monospace, monospace; }

    @media (prefers-reduced-motion: reduce){
      .wp-root *{ animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
    }

    .wp-reveal{ opacity:0; transform:translateY(22px); transition:opacity .6s ease, transform .6s cubic-bezier(.16,1,.3,1); }
    .wp-reveal.in{ opacity:1; transform:translateY(0); }

    .wp-eyebrow{
      display:inline-flex; align-items:center; gap:.5rem;
      font-family:"JetBrains Mono", monospace; font-size:.72rem; letter-spacing:.02em;
      color:var(--dark); background:rgba(247,210,107,.12);
      border:1px solid rgba(247,210,107,.3); border-radius:999px; padding:.35rem .8rem .35rem .6rem;
    }
    .wp-eyebrow.on-dark{ color:#FBE3A0; background:rgba(247,210,107,.1); border-color:rgba(247,210,107,.25); }
    .wp-dot{ width:6px; height:6px; border-radius:999px; background:var(--dark); box-shadow:0 0 8px var(--accent); }

    .wp-editor{
      background:#0D1424; border:1px solid rgba(148,163,184,.14); border-radius:14px; overflow:hidden;
      box-shadow:0 30px 60px -20px rgba(2,6,23,.65);
    }
    .wp-editor-bar{ display:flex; align-items:center; gap:.5rem; padding:.6rem .9rem; background:#0B1120; border-bottom:1px solid rgba(148,163,184,.1); }
    .wp-editor-dot{ width:10px; height:10px; border-radius:999px; }
    .wp-editor-tab{ font-family:"JetBrains Mono",monospace; font-size:.7rem; color:#94A3B8; margin-left:.4rem; padding:.15rem .55rem; border-radius:6px; background:rgba(148,163,184,.06); }
    .wp-editor-body{ padding:1.15rem 1.3rem; font-family:"JetBrains Mono",monospace; font-size:.8rem; line-height:1.85; min-height:210px; }
    .wp-ln{ color:#3A4A63; display:inline-block; width:1.5rem; user-select:none; }
    .tok-kw{ color:#C4B5FD; } .tok-fn{ color:#22D3EE; } .tok-str{ color:#86EFAC; }
    .tok-tag{ color:#7DD3FC; } .tok-attr{ color:#FDE68A; } .tok-pune{ color:#94A3B8; } .tok-tree{ color:#94A3B8; }
    .wp-caret{ display:inline-block; width:6px; height:1em; background:var(--accent); vertical-align:text-bottom; margin-left:2px; animation:wpBlink 1s step-end infinite; }
    @keyframes wpBlink{ 50%{ opacity:0; } }

    .wp-card{ background:#fff; border:1px solid rgba(15,23,42,.07); border-radius:16px; transition:transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease, border-color .3s ease; }
    .wp-card:hover{ transform:translateY(-5px); box-shadow:0 22px 44px -20px rgba(247,210,107,.4); border-color:rgba(247,210,107,.5); }

    .wp-grad-primary{ background:linear-gradient(135deg, #F7D26B, #D9A93E); }
    .wp-grad-text{ background:linear-gradient(120deg, #FBE3A0 0%, #F7D26B 45%, #D9A93E 100%); -webkit-background-clip:text; background-clip:text; color:transparent; }

    .wp-btn-primary{ background:linear-gradient(135deg, #F7D26B, #D9A93E); color:#0F172A; border-radius:12px; padding:.8rem 1.6rem; font-weight:600; display:inline-flex; align-items:center; gap:.5rem; box-shadow:0 12px 28px -10px rgba(247,210,107,.45); transition:transform .2s ease, box-shadow .2s ease; border:none; cursor:pointer; }
    .wp-btn-primary:hover{ transform:translateY(-2px); box-shadow:0 16px 32px -10px rgba(247,210,107,.6); }
    .wp-btn-ghost{ border:1px solid var(--accent); border-radius:12px; padding:.8rem 1.6rem; font-weight:600; display:inline-flex; align-items:center; gap:.5rem; transition:all .2s ease; background:transparent; cursor:pointer; }
    .wp-btn-ghost:hover{ border-color:var(--accent); color:var(--accent); }

    .wp-chip{ font-family:"JetBrains Mono",monospace; font-size:.72rem; color:#334155; border:1px solid rgba(15,23,42,.1); background:#fff; border-radius:8px; padding:.38rem .65rem; transition:.2s ease; display:inline-block; }
    .wp-chip:hover{ border-color:var(--accent); color:var(--gold-dark); transform:translateY(-2px); }
    .wp-chip-dark{ font-family:"JetBrains Mono",monospace; font-size:.72rem; color:#CBD5E1; border:1px solid rgba(148,163,184,.18); background:rgba(148,163,184,.05); border-radius:8px; padding:.38rem .65rem; transition:.2s ease; display:inline-block; }
    .wp-chip-dark:hover{ border-color:var(--accent); color:var(--accent); transform:translateY(-2px); }

    .wp-grid-noise{ background-image:radial-gradient(rgba(148,163,184,.14) 1px, transparent 1px); background-size:26px 26px; }
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
      className={`wp-reveal ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, dark = false }) {
  return (
    <span className={`wp-eyebrow ${dark ? "on-dark" : ""}`}>
      <span className="wp-dot" />
      {children}
    </span>
  );
}

/* =========================================================
   SIGNATURE HERO VISUAL — WordPress PHP Functions Snippet
   ========================================================= */
const HERO_LINES = [
  { html: '<span class="tok-kw">&lt;?php</span>' },
  {
    html: '<span class="tok-kw">function</span> <span class="tok-fn">register_custom_wp_theme</span><span class="tok-pune">() {</span>',
  },
  {
    html: '&nbsp;&nbsp;<span class="tok-fn">add_theme_support</span><span class="tok-pune">(</span><span class="tok-str">\'title-tag\'</span><span class="tok-pune">);</span>',
  },
  {
    html: '&nbsp;&nbsp;<span class="tok-fn">add_theme_support</span><span class="tok-pune">(</span><span class="tok-str">\'post-thumbnails\'</span><span class="tok-pune">);</span>',
  },
  {
    html: '&nbsp;&nbsp;<span class="tok-fn">register_nav_menus</span><span class="tok-pune">([</span> <span class="tok-str">\'primary\'</span> =&gt; <span class="tok-str">\'Header Menu\'</span> <span class="tok-pune">]);</span>',
  },
  { html: '<span class="tok-pune">}</span>' },
  {
    html: '<span class="tok-fn">add_action</span><span class="tok-pune">(</span><span class="tok-str">\'after_setup_theme\'</span><span class="tok-pune">,</span> <span class="tok-str">\'register_custom_wp_theme\'</span><span class="tok-pune">);</span>',
  },
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
    <div ref={heroRef} className="wp-editor max-w-lg mx-auto">
      <div className="wp-editor-bar">
        <span className="wp-editor-dot" style={{ background: "#F87171" }} />
        <span className="wp-editor-dot" style={{ background: "#FBBF24" }} />
        <span className="wp-editor-dot" style={{ background: "#34D399" }} />
        <span className="wp-editor-tab">functions.php</span>
      </div>
      <div className="wp-editor-body text-slate-300">
        {HERO_LINES.slice(0, visibleLines).map((line, idx) => (
          <div key={idx}>
            <span className="wp-ln">{idx + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: line.html }} />
          </div>
        ))}
        {visibleLines < HERO_LINES.length && (
          <div>
            <span className="wp-ln">{visibleLines + 1}</span>
            <span className="wp-caret" />
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   1. WORDPRESS HERO
   ========================================================= */
function WPHero() {
  const badges = [
    "Custom Themes",
    "Elementor Pro",
    "WooCommerce",
    "Speed Optimization",
    "PHP / Custom ACF",
    "WordPress Security",
  ];
  return (
    <section
      className="relative text-white overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 wp-grid-noise opacity-30 pointer-events-none" />
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
            web development / wordpress development
          </p>
          <Eyebrow dark>wordpress development</Eyebrow>
          <h1 className="font-display text-[2.05rem] leading-[1.14] sm:text-4xl md:text-[2.75rem] font-semibold mt-6 tracking-tight">
            What I Can Build &amp;{" "}
            <span className="wp-grad-text">Manage with </span> WordPress
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-xl">
            I can build, customize, optimize, and maintain professional
            WordPress websites for businesses, portfolios, blogs, and eCommerce
            stores — from Elementor-based websites to fully customized WordPress
            solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to={"/contact"} className="wp-btn-primary">
              Start WordPress Project <ArrowRight size={16} />
            </Link>
            <a href="#wp-services" className="wp-btn-ghost text-white">
              View Services
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2.5">
            {badges.map((b) => (
              <span key={b} className="wp-chip-dark">
                {b}
              </span>
            ))}
          </div>
        </div>

        <Reveal>
          <HeroEditor />
          <p className="text-center font-mono text-xs text-slate-500 mt-4">
            $ design → custom theme → speed optimize → launch
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   2. WORDPRESS SERVICES
   ========================================================= */
function WPServices() {
  const services = [
    {
      icon: Code2,
      title: "Custom Theme Development",
      desc: "Tailored lightweight WordPress themes built specifically around your brand using PHP, HTML5, and CSS3.",
    },
    {
      icon: Layout,
      title: "Landing Page & Mobile Design",
      desc: "Pixel-perfect, high-converting landing pages crafted with a completely responsive, mobile-friendly design.",
    },
    {
      icon: ShoppingCart,
      title: "WooCommerce E-Commerce",
      desc: "Complete online stores with custom cart/checkout features, payment gateways, and product management.",
    },
    {
      icon: Sliders,
      title: "Elementor & Page Builders",
      desc: "Easy-to-edit page templates built with Elementor Pro or Gutenberg blocks for seamless content updates.",
    },
    {
      icon: Gauge,
      title: "Website Speed Optimization",
      desc: "Boost site performance to 90+ Core Web Vitals score using database cleaning, caching, and code minification.",
    },
    {
      icon: Globe,
      title: "WordPress SEO Optimization",
      desc: "Comprehensive search engine optimization setup utilizing Yoast SEO or Rank Math for peak search ranking.",
    },
    {
      icon: Plug,
      title: "Plugin Setup & Customization",
      desc: "Expert plugin integration, customization, REST API connections, payment gateways, and third-party CRMs.",
    },
    {
      icon: Wrench,
      title: "WordPress Bug Fixing & Support",
      desc: "Fast resolution for layout bugs, PHP errors, database glitches, plus regular core updates and maintenance.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Malware Fix",
      desc: "WordPress hardening, malware cleanup, automated backups, and SSL integration to protect your platform.",
    },
    {
      icon: RefreshCcw,
      title: "Figma to WordPress",
      desc: "Converting custom Figma or Adobe XD designs into pixel-perfect, fully functional WordPress web pages.",
    },
  ];

  return (
    <section
      id="wp-services"
      className="py-24 md:py-32"
      style={{ background: "var(--light)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>// wordpress services</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            WordPress Solutions &amp; Development
          </h2>
          <p className="text-(--muted) text-lg">
            From business landing pages to enterprise WooCommerce stores—built
            with clean, maintainable architecture.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title}>
                <div className="wp-card p-7 h-full">
                  <div className="w-11 h-11 rounded-xl wp-grad-primary flex items-center justify-center text-slate-900">
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
    </section>
  );
}

/* =========================================================
   3. WORDPRESS TECH STACK & FEATURES
   ========================================================= */
function WPFeatures() {
  const features = [
    "PHP 8+",
    "Custom Theme Structure",
    "Advanced Custom Fields (ACF)",
    "Custom Post Types (CPT)",
    "Elementor Pro",
    "Gutenberg Blocks",
    "WooCommerce Customization",
    "REST API Endpoints",
    "WP Rocket & Caching",
    "Yoast / RankMath SEO",
    "Database Cleaning",
    "SSL & Security Protocols",
    "Child Theme Setup",
    "Hooks & Filters",
    "Speed Optimization",
    "Cross-Browser Compatibility",
    "Responsive Design",
    "WebP Image Conversion",
  ];
  return (
    <section
      className="py-24 md:py-32 text-white relative overflow-hidden"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 wp-grid-noise opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow dark>// technical stack</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            WordPress Core Capabilities
          </h2>
          <p className="text-slate-300 mt-4 text-lg">
            Everything implemented in custom WordPress development to maintain
            high efficiency and easy management.
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-2.5 mt-12">
          {features.map((f) => (
            <span key={f} className="wp-chip-dark">
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   4. ARCHITECTURE & WORKFLOW
   ========================================================= */
function WPArchitecture() {
  const practices = [
    "Clean File Structure",
    "Child Theme Hierarchy",
    "ACF Flexible Content",
    "Optimized MySQL Queries",
    "Lightweight Assets",
    "Custom Shortcodes",
  ];
  const tree = [
    "wp-content/themes/custom-theme/",
    "├── assets/",
    "│   ├── css/",
    "│   └── js/",
    "├── inc/",
    "│   ├── acf-fields.php",
    "│   └── custom-post-types.php",
    "├── template-parts/",
    "├── page-templates/",
    "├── functions.php",
    "├── header.php",
    "├── footer.php",
    "└── style.css",
  ];
  return (
    <section className="py-24 md:py-32 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Eyebrow>// development structure</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Lightweight Theme Architecture
          </h2>
          <p className="text-(--muted) mt-4 text-lg leading-relaxed">
            By avoiding heavy pre-made themes with unnecessary code bloat,
            custom architecture delivers maximum loading speed and cleaner
            editing experiences.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-8">
            {practices.map((p) => (
              <span key={p} className="wp-chip">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="wp-editor">
            <div className="wp-editor-bar">
              <span
                className="wp-editor-dot"
                style={{ background: "#F87171" }}
              />
              <span
                className="wp-editor-dot"
                style={{ background: "#FBBF24" }}
              />
              <span
                className="wp-editor-dot"
                style={{ background: "#34D399" }}
              />
              <span className="wp-editor-tab">theme directory structure</span>
            </div>
            <div className="wp-editor-body">
              {tree.map((line, idx) => (
                <div key={idx} className="tok-tree">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

 

/* =========================================================
   6. MAIN WORDPRESS COMPONENT
   ========================================================= */
export default function WordPressService() {
  return (
    <main className="wp-root overflow-hidden">
      <GlobalStyle />
      <WPHero />
      <WPServices />
      <WPFeatures />
      <WPArchitecture />

      <FAQs
        data={WP_FAQ}
        items={WP_FAQ}
        title="Frequently Asked Questions"
        eyebrow="// Got Questions?"
      />

      <CTA />
    </main>
  );
}