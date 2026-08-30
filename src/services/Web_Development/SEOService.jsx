import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  TrendingUp,
  BarChart3,
  Globe2,
  FileText,
  Settings,
  Link2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import FAQs from "../../component/FAQs";
import CTA from "../../component/CTA";
import { SEO_FAQ } from "../../data/projects";

/* =========================================================
   DESIGN TOKENS — shared portfolio system (SEO Specific)
   ========================================================= */
const GlobalStyle = () => (
  <style>{`
    .seo-root{
      --primary:#F7D26B; --secondary:#D9A93E; --accent:#F7D26B;
      --gold:#F7D26B; --gold-light:#FBE3A0; --gold-dark:#D9A93E;
      --dark:#0B1120; --dark2:#0F172A; --light:#F8FAFC; --ink:#0F172A; --muted:#64748B;
      font-family: Inter, system-ui, sans-serif;
      color: var(--ink);
      background: var(--light);
    }
    .seo-root .font-display{ font-family: "Space Grotesk", Inter, sans-serif; }
    .seo-root .font-mono{ font-family: "JetBrains Mono", ui-monospace, monospace; }

    @media (prefers-reduced-motion: reduce){
      .seo-root *{ animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
    }

    .seo-reveal{ opacity:0; transform:translateY(22px); transition:opacity .6s ease, transform .6s cubic-bezier(.16,1,.3,1); }
    .seo-reveal.in{ opacity:1; transform:translateY(0); }

    .seo-eyebrow{
      display:inline-flex; align-items:center; gap:.5rem;
      font-family:"JetBrains Mono", monospace; font-size:.72rem; letter-spacing:.02em;
      color:var(--dark); background:rgba(247,210,107,.12);
      border:1px solid rgba(247,210,107,.3); border-radius:999px; padding:.35rem .8rem .35rem .6rem;
    }
    .seo-eyebrow.on-dark{ color:#FBE3A0; background:rgba(247,210,107,.1); border-color:rgba(247,210,107,.25); }
    .seo-dot{ width:6px; height:6px; border-radius:999px; background:var(--dark); box-shadow:0 0 8px var(--accent); }

    .seo-editor{
      background:#0D1424; border:1px solid rgba(148,163,184,.14); border-radius:14px; overflow:hidden;
      box-shadow:0 30px 60px -20px rgba(2,6,23,.65);
    }
    .seo-editor-bar{ display:flex; align-items:center; gap:.5rem; padding:.6rem .9rem; background:#0B1120; border-bottom:1px solid rgba(148,163,184,.1); }
    .seo-editor-dot{ width:10px; height:10px; border-radius:999px; }
    .seo-editor-tab{ font-family:"JetBrains Mono",monospace; font-size:.7rem; color:#94A3B8; margin-left:.4rem; padding:.15rem .55rem; border-radius:6px; background:rgba(148,163,184,.06); }
    .seo-editor-body{ padding:1.15rem 1.3rem; font-family:"JetBrains Mono",monospace; font-size:.8rem; line-height:1.85; min-height:210px; }
    .seo-ln{ color:#3A4A63; display:inline-block; width:1.5rem; user-select:none; }
    .tok-kw{ color:#C4B5FD; } .tok-fn{ color:#22D3EE; } .tok-str{ color:#86EFAC; }
    .tok-tag{ color:#7DD3FC; } .tok-attr{ color:#FDE68A; } .tok-pune{ color:#94A3B8; } .tok-tree{ color:#94A3B8; }
    .seo-caret{ display:inline-block; width:6px; height:1em; background:var(--accent); vertical-align:text-bottom; margin-left:2px; animation:seoBlink 1s step-end infinite; }
    @keyframes seoBlink{ 50%{ opacity:0; } }

    .seo-card{ background:#fff; border:1px solid rgba(15,23,42,.07); border-radius:16px; transition:transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease, border-color .3s ease; }
    .seo-card:hover{ transform:translateY(-5px); box-shadow:0 22px 44px -20px rgba(247,210,107,.4); border-color:rgba(247,210,107,.5); }

    .seo-grad-primary{ background:linear-gradient(135deg, #F7D26B, #D9A93E); }
    .seo-grad-text{ background:linear-gradient(120deg, #FBE3A0 0%, #F7D26B 45%, #D9A93E 100%); -webkit-background-clip:text; background-clip:text; color:transparent; }

    .seo-btn-primary{ background:linear-gradient(135deg, #F7D26B, #D9A93E); color:#0F172A; border-radius:12px; padding:.8rem 1.6rem; font-weight:600; display:inline-flex; align-items:center; gap:.5rem; box-shadow:0 12px 28px -10px rgba(247,210,107,.45); transition:transform .2s ease, box-shadow .2s ease; border:none; cursor:pointer; }
    .seo-btn-primary:hover{ transform:translateY(-2px); box-shadow:0 16px 32px -10px rgba(247,210,107,.6); }
    .seo-btn-ghost{ border:1px solid var(--accent); border-radius:12px; padding:.8rem 1.6rem; font-weight:600; display:inline-flex; align-items:center; gap:.5rem; transition:all .2s ease; background:transparent; cursor:pointer; }
    .seo-btn-ghost:hover{ border-color:var(--accent); color:var(--accent); }

    .seo-chip{ font-family:"JetBrains Mono",monospace; font-size:.72rem; color:#334155; border:1px solid rgba(15,23,42,.1); background:#fff; border-radius:8px; padding:.38rem .65rem; transition:.2s ease; display:inline-block; }
    .seo-chip:hover{ border-color:var(--accent); color:var(--gold-dark); transform:translateY(-2px); }
    .seo-chip-dark{ font-family:"JetBrains Mono",monospace; font-size:.72rem; color:#CBD5E1; border:1px solid rgba(148,163,184,.18); background:rgba(148,163,184,.05); border-radius:8px; padding:.38rem .65rem; transition:.2s ease; display:inline-block; }
    .seo-chip-dark:hover{ border-color:var(--accent); color:var(--accent); transform:translateY(-2px); }

    .seo-grid-noise{ background-image:radial-gradient(rgba(148,163,184,.14) 1px, transparent 1px); background-size:26px 26px; }
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
      className={`seo-reveal ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, dark = false }) {
  return (
    <span className={`seo-eyebrow ${dark ? "on-dark" : ""}`}>
      <span className="seo-dot" />
      {children}
    </span>
  );
}

/* =========================================================
   SIGNATURE HERO VISUAL — SEO Schema & Meta Code Snippet
   ========================================================= */
const HERO_LINES = [
  { html: '<span class="tok-tag">&lt;head&gt;</span>' },
  {
    html: '&nbsp;&nbsp;<span class="tok-tag">&lt;title&gt;</span><span class="tok-str">Organic Growth &amp; SEO Services</span><span class="tok-tag">&lt;/title&gt;</span>',
  },
  {
    html: '&nbsp;&nbsp;<span class="tok-tag">&lt;meta</span> <span class="tok-attr">name</span>=<span class="tok-str">"robots"</span> <span class="tok-attr">content</span>=<span class="tok-str">"index, follow"</span> <span class="tok-tag">/&gt;</span>',
  },
  {
    html: '&nbsp;&nbsp;<span class="tok-tag">&lt;script</span> <span class="tok-attr">type</span>=<span class="tok-str">"application/ld+json"</span><span class="tok-tag">&gt;</span>',
  },
  {
    html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-pune">{</span> <span class="tok-attr">"@context"</span>: <span class="tok-str">"https://schema.org"</span>, <span class="tok-attr">"@type"</span>: <span class="tok-str">"Service"</span> <span class="tok-pune">}</span>',
  },
  { html: '&nbsp;&nbsp;<span class="tok-tag">&lt;/script&gt;</span>' },
  { html: '<span class="tok-tag">&lt;/head&gt;</span>' },
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
    <div ref={heroRef} className="seo-editor max-w-lg mx-auto">
      <div className="seo-editor-bar">
        <span className="seo-editor-dot" style={{ background: "#F87171" }} />
        <span className="seo-editor-dot" style={{ background: "#FBBF24" }} />
        <span className="seo-editor-dot" style={{ background: "#34D399" }} />
        <span className="seo-editor-tab">seo-optimization.html</span>
      </div>
      <div className="seo-editor-body text-slate-300">
        {HERO_LINES.slice(0, visibleLines).map((line, idx) => (
          <div key={idx}>
            <span className="seo-ln">{idx + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: line.html }} />
          </div>
        ))}
        {visibleLines < HERO_LINES.length && (
          <div>
            <span className="seo-ln">{visibleLines + 1}</span>
            <span className="seo-caret" />
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   1. SEO HERO SECTION
   ========================================================= */
function SEOHero() {
  const badges = [
    "On-Page SEO",
    "Technical SEO",
    "Yoast / Rank Math",
    "Schema Markup",
    "Core Web Vitals",
    "Keyword Strategy",
  ];
  return (
    <section
      className="relative text-white overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 seo-grid-noise opacity-30 pointer-events-none" />
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
            digital growth / seo optimization
          </p>
          <Eyebrow dark>search engine optimization</Eyebrow>
          <h1 className="font-display text-[2.05rem] leading-[1.14] sm:text-4xl md:text-[2.75rem] font-semibold mt-6 tracking-tight">
            Data-Driven SEO Solutions to{" "}
            <span className="seo-grad-text">Rank &amp; Scale </span> Organic Traffic
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-xl">
            Drive targeted traffic, improve keyword rankings, and build long-term search authority with comprehensive On-Page, Technical, and WordPress SEO strategies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to={"/contact"} className="seo-btn-primary">
              Get Free SEO Audit <ArrowRight size={16} />
            </Link>
            <a href="#seo-services" className="seo-btn-ghost text-white">
              Explore Services
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2.5">
            {badges.map((b) => (
              <span key={b} className="seo-chip-dark">
                {b}
              </span>
            ))}
          </div>
        </div>

        <Reveal>
          <HeroEditor />
          <p className="text-center font-mono text-xs text-slate-500 mt-4">
            $ audit → on-page fix → technical seo → indexing → rank #1
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   2. SEO SERVICES GRID
   ========================================================= */
function SEOServices() {
  const services = [
    {
      icon: Search,
      title: "WordPress On-Page SEO",
      desc: "Optimizing page titles, meta descriptions, headings, image alt texts, and content structures using Yoast SEO or Rank Math.",
    },
    {
      icon: Settings,
      title: "Technical SEO & Speed Fixes",
      desc: "Fixing crawl errors, sitemaps, robots.txt, canonical tags, mobile responsiveness, and Core Web Vitals optimization.",
    },
    {
      icon: FileText,
      title: "Keyword & Competitor Strategy",
      desc: "In-depth keyword research targeting high-intent search terms to structure landing pages and outrank competitors.",
    },
    {
      icon: Globe2,
      title: "Schema & Structured Data",
      desc: "Implementing rich snippets (JSON-LD) for products, FAQs, organization, and local business profiles for higher CTR.",
    },
    {
      icon: TrendingUp,
      title: "Core Web Vitals & Performance",
      desc: "Improving site load speeds, reducing LCP, CLS, and INP metrics to align with Google's latest ranking algorithms.",
    },
    {
      icon: Link2,
      title: "Search Console & Analytics Setup",
      desc: "Full integration with Google Search Console, Google Analytics 4 (GA4), XML sitemap submission, and indexing tracking.",
    },
  ];

  return (
    <section
      id="seo-services"
      className="py-24 md:py-32"
      style={{ background: "var(--light)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>// seo services</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Comprehensive SEO Capabilities
          </h2>
          <p className="text-(--muted) mt-4 text-lg">
            From technical search fixes to content optimization—everything structured to boost search visibility.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title}>
                <div className="seo-card p-7 h-full">
                  <div className="w-11 h-11 rounded-xl seo-grad-primary flex items-center justify-center text-slate-900">
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
   3. TECH STACK & TOOLS
   ========================================================= */
function SEOFeatures() {
  const tools = [
    "Google Search Console",
    "Google Analytics 4 (GA4)",
    "Yoast SEO Pro",
    "Rank Math Pro",
    "SEMrush Audits",
    "Schema JSON-LD",
    "Sitemap XML",
    "Robots.txt Optimization",
    "Core Web Vitals",
    "PageSpeed Insights",
    "Canonical Tags",
    "Image Compression & WebP",
    "301 Redirects Management",
  ];
  return (
    <section
      className="py-24 md:py-32 text-white relative overflow-hidden"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 seo-grid-noise opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow dark>// optimization tools</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            SEO Tools &amp; Methodologies
          </h2>
          <p className="text-slate-300 mt-4 text-lg">
            Industry-standard tools and techniques used to diagnose, optimize, and grow search rankings.
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-2.5 mt-12">
          {tools.map((t) => (
            <span key={t} className="seo-chip-dark">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   4. SEO WORKFLOW / ARCHITECTURE
   ========================================================= */
function SEOWorkflow() {
  const steps = [
    "Comprehensive SEO Audit",
    "Keyword & Intent Research",
    "On-Page Optimization",
    "Technical Error Fixes",
    "Structured Schema Data",
    "Indexing & Monitoring",
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Eyebrow>// growth workflow</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Structured 4-Step SEO Process
          </h2>
          <p className="text-(--muted) mt-4 text-lg leading-relaxed">
            A systematic, white-hat approach focused on sustainable organic rankings and technical site health.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-8">
            {steps.map((step) => (
              <span key={step} className="seo-chip">
                {step}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="seo-editor p-8 text-slate-300">
            <h3 className="font-display text-lg text-white font-semibold mb-6">
              Organic Optimization Milestones
            </h3>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <span>Phase 1: Full Site Crawl &amp; Technical Bug Fixes</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <span>Phase 2: On-Page Meta, Headings &amp; Schema Setup</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <span>Phase 3: Page Speed &amp; Core Web Vitals Optimization</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <span>Phase 4: Google Search Console Submission &amp; Monitoring</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* =========================================================
   6. MAIN SEO SERVICE COMPONENT
   ========================================================= */
export default function SEOService() {
  return (
    <main className="seo-root overflow-hidden">
      <GlobalStyle />
      <SEOHero />
      <SEOServices />
      <SEOFeatures />
      <SEOWorkflow />

      <FAQs
        data={SEO_FAQ}
        items={SEO_FAQ}
        title="Frequently Asked Questions"
        eyebrow="// Search Questions"
      />

      <CTA />
    </main>
  );
}