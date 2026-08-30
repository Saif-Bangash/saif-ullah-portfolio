/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  LayoutDashboard,
  ShoppingCart,
  Plug,
  RefreshCcw,
  Gauge,
  CheckCircle2,
  Smartphone,
  Tablet,
  Monitor,
  MonitorSmartphone,
  Lock,
  Github,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  Rocket,
  Boxes,
  Compass,
  ClipboardList,
  PenTool,
  Hammer,
  TestTube2,
  Layers,
  ShieldCheck,
  KeyRound,
  UserCheck,
  Layout,
  SquareStack,
  Bell,
  Table2,
  ToggleLeft,
  PanelsTopLeft,
  Component,
  GitBranch,
  Building2,
  Users,
  Database,
  Braces,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import FAQs from "../../component/FAQs";
import { FAQ_ITEMS } from "../../data/projects";
import CTA from "../../component/CTA";

/* =========================================================
   DESIGN TOKENS — shared portfolio system
   ========================================================= */
const GlobalStyle = () => (
  <style>{`
    .rjs-root{
      --primary:#F7D26B; --secondary:#D9A93E; --accent:#F7D26B;
      --gold:#F7D26B; --gold-light:#FBE3A0; --gold-dark:#D9A93E;
      --dark:#0B1120; --dark2:#0F172A; --light:#F8FAFC; --ink:#0F172A; --muted:#64748B;
      font-family: Inter, system-ui, sans-serif;
      color: var(--ink);
      background: var(--light);
    }
    .rjs-root .font-display{ font-family: "Space Grotesk", Inter, sans-serif; }
    .rjs-root .font-mono{ font-family: "JetBrains Mono", ui-monospace, monospace; }

    @media (prefers-reduced-motion: reduce){
      .rjs-root *{ animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
    }

    .rjs-reveal{ opacity:0; transform:translateY(22px); transition:opacity .6s ease, transform .6s cubic-bezier(.16,1,.3,1); }
    .rjs-reveal.in{ opacity:1; transform:translateY(0); }

    .rjs-eyebrow{
      display:inline-flex; align-items:center; gap:.5rem;
      font-family:"JetBrains Mono", monospace; font-size:.72rem; letter-spacing:.02em;
      color:var(--dark); background:rgba(247,210,107,.12);
      border:1px solid rgba(247,210,107,.3); border-radius:999px; padding:.35rem .8rem .35rem .6rem;
    }
    .rjs-eyebrow.on-dark{ color:#FBE3A0; background:rgba(247,210,107,.1); border-color:rgba(247,210,107,.25); }
    .rjs-dot{ width:6px; height:6px; border-radius:999px; background:var(--dark); box-shadow:0 0 8px var(--accent); }

    .rjs-editor{
      background:#0D1424; border:1px solid rgba(148,163,184,.14); border-radius:14px; overflow:hidden;
      box-shadow:0 30px 60px -20px rgba(2,6,23,.65);
    }
    .rjs-editor-bar{ display:flex; align-items:center; gap:.5rem; padding:.6rem .9rem; background:#0B1120; border-bottom:1px solid rgba(148,163,184,.1); }
    .rjs-editor-dot{ width:10px; height:10px; border-radius:999px; }
    .rjs-editor-tab{ font-family:"JetBrains Mono",monospace; font-size:.7rem; color:#94A3B8; margin-left:.4rem; padding:.15rem .55rem; border-radius:6px; background:rgba(148,163,184,.06); }
    .rjs-editor-body{ padding:1.15rem 1.3rem; font-family:"JetBrains Mono",monospace; font-size:.8rem; line-height:1.85; min-height:210px; }
    .rjs-ln{ color:#3A4A63; display:inline-block; width:1.5rem; user-select:none; }
    .tok-kw{ color:#C4B5FD; } .tok-fn{ color:#22D3EE; } .tok-str{ color:#86EFAC; }
    .tok-tag{ color:#7DD3FC; } .tok-attr{ color:#FDE68A; } .tok-pune{ color:#94A3B8; } .tok-com{ color:#475569; } .tok-tree{ color:#94A3B8; }
    .rjs-caret{ display:inline-block; width:6px; height:1em; background:var(--accent); vertical-align:text-bottom; margin-left:2px; animation:rjsBlink 1s step-end infinite; }
    @keyframes rjsBlink{ 50%{ opacity:0; } }

    .rjs-card{ background:#fff; border:1px solid rgba(15,23,42,.07); border-radius:16px; transition:transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease, border-color .3s ease; }
    .rjs-card:hover{ transform:translateY(-5px); box-shadow:0 22px 44px -20px rgba(247,210,107,.4); border-color:rgba(247,210,107,.5); }
    .rjs-card-dark{ background:linear-gradient(180deg, rgba(148,163,184,.05), rgba(148,163,184,.02)); border:1px solid rgba(148,163,184,.12); border-radius:16px; transition:transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease, border-color .3s ease; }
    .rjs-card-dark:hover{ transform:translateY(-5px); border-color:rgba(247,210,107,.35); box-shadow:0 22px 44px -20px rgba(247,210,107,.18); }

    .rjs-grad-primary{ background:linear-gradient(135deg, #F7D26B, #D9A93E); }
    .rjs-grad-text{ background:linear-gradient(120deg, #FBE3A0 0%, #F7D26B 45%, #D9A93E 100%); -webkit-background-clip:text; background-clip:text; color:transparent; }

    .rjs-btn-primary{ background:linear-gradient(135deg, #F7D26B, #D9A93E); color:#0F172A; border-radius:12px; padding:.8rem 1.6rem; font-weight:600; display:inline-flex; align-items:center; gap:.5rem; box-shadow:0 12px 28px -10px rgba(247,210,107,.45); transition:transform .2s ease, box-shadow .2s ease; border:none; cursor:pointer; }
    .rjs-btn-primary:hover{ transform:translateY(-2px); box-shadow:0 16px 32px -10px rgba(247,210,107,.6); }
    .rjs-btn-ghost{ border:1px solid var(--accent); border-radius:12px; padding:.8rem 1.6rem; font-weight:600; display:inline-flex; align-items:center; gap:.5rem; transition:all .2s ease; background:transparent; cursor:pointer; }
    .rjs-btn-ghost:hover{ border-color:var(--accent); color:var(--accent); }
    .rjs-chip{ font-family:"JetBrains Mono",monospace; font-size:.72rem; color:#334155; border:1px solid rgba(15,23,42,.1); background:#fff; border-radius:8px; padding:.38rem .65rem; transition:.2s ease; display:inline-block; }
    .rjs-chip:hover{ border-color:var(--accent); color:var(--gold-dark); transform:translateY(-2px); }
    .rjs-chip-dark{ font-family:"JetBrains Mono",monospace; font-size:.72rem; color:#CBD5E1; border:1px solid rgba(148,163,184,.18); background:rgba(148,163,184,.05); border-radius:8px; padding:.38rem .65rem; transition:.2s ease; display:inline-block; }
    .rjs-chip-dark:hover{ border-color:var(--accent); color:var(--accent); transform:translateY(-2px); }

    .rjs-grid-noise{ background-image:radial-gradient(rgba(148,163,184,.14) 1px, transparent 1px); background-size:26px 26px; }

    .rjs-acc-body{ display:grid; grid-template-rows:0fr; transition:grid-template-rows .32s ease; }
    .rjs-acc-body.open{ grid-template-rows:1fr; }
    .rjs-acc-body > div{ overflow:hidden; }
  `}</style>
);

/* =========================================================
   REVEAL-ON-SCROLL (no Framer Motion dependency in this sandbox)
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
      className={`rjs-reveal ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, dark = false }) {
  return (
    <span className={`rjs-eyebrow ${dark ? "on-dark" : ""}`}>
      <span className="rjs-dot" />
      {children}
    </span>
  );
}

/* =========================================================
   SIGNATURE HERO VISUAL — typed React component snippet
   ========================================================= */
const HERO_LINES = [
  {
    html: '<span class="tok-kw">function</span> <span class="tok-fn">ProductCard</span><span class="tok-pune">({</span> product <span class="tok-pune">}) {</span>',
  },
  {
    html: '&nbsp;&nbsp;<span class="tok-kw">const</span> <span class="tok-pune">[</span>qty<span class="tok-pune">,</span> setQty<span class="tok-pune">] =</span> <span class="tok-fn">useState</span><span class="tok-pune">(</span><span class="tok-str">1</span><span class="tok-pune">);</span>',
  },
  {
    html: '&nbsp;&nbsp;<span class="tok-kw">return</span> <span class="tok-pune">(</span>',
  },
  {
    html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-pune">&lt;</span><span class="tok-tag">Card</span><span class="tok-attr"> hover</span><span class="tok-pune">&gt;</span>',
  },
  {
    html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-pune">&lt;</span><span class="tok-tag">Price</span> <span class="tok-attr">value</span><span class="tok-pune">={</span>product.price<span class="tok-pune">}</span> <span class="tok-pune">/&gt;</span>',
  },
  {
    html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-pune">&lt;</span><span class="tok-tag">AddToCart</span> <span class="tok-attr">qty</span><span class="tok-pune">={</span>qty<span class="tok-pune">}</span> <span class="tok-pune">/&gt;</span>',
  },
  {
    html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-pune">&lt;/</span><span class="tok-tag">Card</span><span class="tok-pune">&gt;</span>',
  },
  { html: '&nbsp;&nbsp;<span class="tok-pune">);</span>' },
  { html: '<span class="tok-pune">}</span>' },
];

function HeroEditor() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [heroRef, inView] = useInView(0.3);
  const started = useRef(false);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (reduceMotion) {
      setVisibleLines(HERO_LINES.length);
      return;
    }
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setVisibleLines(i);
      if (i >= HERO_LINES.length) clearInterval(timer);
    }, 220);
    return () => clearInterval(timer);
  }, [inView, reduceMotion]);

  return (
    <div ref={heroRef} className="rjs-editor max-w-lg mx-auto">
      <div className="rjs-editor-bar">
        <span className="rjs-editor-dot" style={{ background: "#F87171" }} />
        <span className="rjs-editor-dot" style={{ background: "#FBBF24" }} />
        <span className="rjs-editor-dot" style={{ background: "#34D399" }} />
        <span className="rjs-editor-tab">ProductCard.jsx</span>
      </div>
      <div className="rjs-editor-body text-slate-300">
        {HERO_LINES.slice(0, visibleLines).map((line, idx) => (
          <div key={idx}>
            <span className="rjs-ln">{idx + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: line.html }} />
          </div>
        ))}
        {visibleLines < HERO_LINES.length && (
          <div>
            <span className="rjs-ln">{visibleLines + 1}</span>
            <span className="rjs-caret" />
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   1. REACT HERO
   ========================================================= */
function ReactHero() {
  const badges = [
    "React.js",
    "JavaScript ES6+",
    "Tailwind CSS",
    "REST APIs",
    "Redux Toolkit",
    "Vite",
  ];
  return (
 <section
      className="relative text-white overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 rjs-grid-noise opacity-30 pointer-events-none" />
      
      {/* Top Left Glow - Light Gold Accent */}
      <div
        className="absolute top-10 -left-32 w-104 h-104 rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(267,210,107,.22)" }}
      />
      
      {/* Top Right Glow - Soft Gold Accent */}
      <div
        className="absolute top-16 -right-32 w-104 h-104 rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(247,210,112,.22)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-mono text-xs text-slate-500 mb-3">
            web development / react.js development
          </p>
          <Eyebrow dark>react.js development</Eyebrow>
          <h1 className="font-display text-[2.05rem] leading-[1.14] sm:text-4xl md:text-[2.75rem] font-semibold mt-6 tracking-tight">
            Modern React.js Development for{" "}
            <span className="rjs-grad-text">Fast &amp; Scalable</span> Web
            Applications
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-xl">
            I build modern, responsive and high-performance React.js
            applications using reusable components, clean architecture, API
            integration and scalable frontend development practices.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to={"/contact"} className="rjs-btn-primary">
              Start a Project <ArrowRight size={16} />{" "}
            </Link>
            <a href="#rjs-projects" className="rjs-btn-ghost text-white">
              View React Projects
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2.5">
            {badges.map((b) => (
              <span key={b} className="rjs-chip-dark">
                {b}
              </span>
            ))}
          </div>
        </div>

        <Reveal>
          <HeroEditor />
          <p className="text-center font-mono text-xs text-slate-500 mt-4">
            $ components → state → api → shipped
          </p>
        </Reveal>
      </div>
    </section>
  );
}

 

/* =========================================================
   3. REACT SERVICES
   ========================================================= */
function ReactServices() {
  const services = [
    {
      icon: Building2,
      title: "Custom React.js Websites",
      desc: "Build modern React websites designed specifically around business requirements.",
    },
    {
      icon: Code2,
      title: "React Web Applications",
      desc: "Develop dynamic and interactive web applications with scalable architecture.",
    },
    {
      icon: LayoutDashboard,
      title: "React Admin Dashboards",
      desc: "Build responsive dashboards with data tables, charts, filters and CRUD functionality.",
    },
    {
      icon: ShoppingCart,
      title: "React E-commerce",
      desc: "Develop modern e-commerce interfaces with products, cart, search, filtering and API integration.",
    },
    {
      icon: Rocket,
      title: "React Landing Pages",
      desc: "Create fast and conversion-focused landing pages using React.js.",
    },
    {
      icon: Plug,
      title: "React API Integration",
      desc: "Connect React applications with REST APIs and external services.",
    },
    {
      icon: RefreshCcw,
      title: "React Website Redesign",
      desc: "Transform existing websites into modern React.js applications.",
    },
    {
      icon: Gauge,
      title: "React Performance Optimization",
      desc: "Improve loading speed, rendering performance and Core Web Vitals.",
    },
  ];
  return (
    <section
      id="rjs-services"
      className="py-24 md:py-32"
      style={{ background: "var(--light)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>// react.js services</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            React.js Services
          </h2>
          <p className="text-(--muted) mt-4 text-lg">
            From a single landing page to a full dashboard — built with the same
            component discipline.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className="rjs-card p-7 h-full">
                <div className="w-11 h-11 rounded-xl rjs-grad-primary flex items-center justify-center text-white">
                  <s.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg mt-5">
                  {s.title}
                </h3>
                <p className="text-(--muted) text-sm mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   4. REACT DEVELOPMENT FEATURES
   ========================================================= */
function ReactFeatures() {
  const features = [
    "Functional Components",
    "JSX",
    "React Hooks",
    "Custom Hooks",
    "Reusable Components",
    "Component Composition",
    "React Router",
    "Protected Routes",
    "Context API",
    "Redux Toolkit",
    "State Management",
    "REST API Integration",
    "CRUD Operations",
    "Form Validation",
    "Dynamic Forms",
    "Search & Filtering",
    "Pagination",
    "Loading States",
    "Error Handling",
    "Modal Systems",
    "Toast Notifications",
  ];
  return (
    <section
      className="py-24 md:py-32 text-white relative overflow-hidden"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 rjs-grid-noise opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow dark>// development features</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            React Development Features
          </h2>
          <p className="text-slate-300 mt-4 text-lg">
            The pieces that come together in every React build, combined based
            on what the project needs.
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-2.5 mt-12">
          {features.map((f) => (
            <span key={f} className="rjs-chip-dark">
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   5. ADVANCED REACT ARCHITECTURE
   ========================================================= */
function ReactArchitecture() {
  const practices = [
    "Reusable Components",
    "Feature-Based Structure",
    "Separation of Concerns",
    "Custom Hooks",
    "API Service Layer",
    "Centralized State Management",
    "Utility Functions",
    "Reusable UI Components",
    "Environment Variables",
    "Maintainable Code Structure",
  ];
  const tree = [
    "src/",
    "├── components/",
    "├── pages/",
    "├── layouts/",
    "├── hooks/",
    "├── services/",
    "├── store/",
    "├── context/",
    "├── utils/",
    "├── routes/",
    "├── assets/",
    "└── App.jsx",
  ];
  return (
    <section className="py-24 md:py-32 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Eyebrow>// architecture</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Scalable React Architecture
          </h2>
          <p className="text-(--muted) mt-4 text-lg leading-relaxed">
            Every project is organized so a new feature — or a new developer —
            can be added without untangling the rest of the app.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-8">
            {practices.map((p) => (
              <span key={p} className="rjs-chip">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="rjs-editor">
            <div className="rjs-editor-bar">
              <span
                className="rjs-editor-dot"
                style={{ background: "#F87171" }}
              />
              <span
                className="rjs-editor-dot"
                style={{ background: "#FBBF24" }}
              />
              <span
                className="rjs-editor-dot"
                style={{ background: "#34D399" }}
              />
              <span className="rjs-editor-tab">project structure</span>
            </div>
            <div className="rjs-editor-body">
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
   6. STATE MANAGEMENT
   ========================================================= */
function StateManagement() {
  const items = [
    "useState",
    "useReducer",
    "useContext",
    "Context API",
    "Redux Toolkit",
    "Redux Slices",
    "Async Operations",
    "Global State",
    "Local State",
  ];
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--light)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>// state management</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Smart State Management
          </h2>
          <p className="text-(--muted) mt-4 text-lg leading-relaxed">
            I choose the appropriate state management approach according to the
            complexity and requirements of each application.
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-2.5 mt-10">
          {items.map((i) => (
            <Reveal key={i} className="inline-block">
              <span className="rjs-chip flex items-center gap-1.5">
                <Braces size={13} color="var(--secondary)" /> {i}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   7. API INTEGRATION
   ========================================================= */
function ApiIntegration() {
  const items = [
    "REST APIs",
    "Fetch API",
    "Axios",
    "JSON",
    "CRUD APIs",
    "Authentication APIs",
    "API Error Handling",
    "Loading States",
    "Pagination",
    "Search",
    "Filtering",
    "Dynamic Data",
  ];
  return (
    <section className="py-24 md:py-32 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Eyebrow>// api integration</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Connect Your React Application With Powerful APIs
          </h2>
          <p className="text-(--muted) mt-4 text-lg leading-relaxed">
            I integrate React applications with REST APIs and external services
            to create dynamic, data-driven experiences.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-8">
            {items.map((i) => (
              <span key={i} className="rjs-chip">
                {i}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="rjs-editor">
            <div className="rjs-editor-bar">
              <span
                className="rjs-editor-dot"
                style={{ background: "#F87171" }}
              />
              <span
                className="rjs-editor-dot"
                style={{ background: "#FBBF24" }}
              />
              <span
                className="rjs-editor-dot"
                style={{ background: "#34D399" }}
              />
              <span className="rjs-editor-tab">useOrders.js</span>
            </div>
            <div className="rjs-editor-body text-slate-300">
              <div>
                <span className="rjs-ln">1</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      '<span class="tok-kw">const</span> <span class="tok-fn">useOrders</span> <span class="tok-pune">= (</span>page<span class="tok-pune">) =&gt; {</span>',
                  }}
                />
              </div>
              <div>
                <span className="rjs-ln">2</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      '&nbsp;&nbsp;<span class="tok-kw">const</span> <span class="tok-pune">[</span>data<span class="tok-pune">,</span> setData<span class="tok-pune">] =</span> <span class="tok-fn">useState</span><span class="tok-pune">([]);</span>',
                  }}
                />
              </div>
              <div>
                <span className="rjs-ln">3</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      '&nbsp;&nbsp;<span class="tok-fn">useEffect</span><span class="tok-pune">(() =&gt; {</span> ...fetch <span class="tok-pune">}, [</span>page<span class="tok-pune">]);</span>',
                  }}
                />
              </div>
              <div>
                <span className="rjs-ln">4</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      '&nbsp;&nbsp;<span class="tok-kw">return</span> <span class="tok-pune">{</span> data<span class="tok-pune">,</span> loading<span class="tok-pune">,</span> error <span class="tok-pune">};</span>',
                  }}
                />
              </div>
              <div>
                <span className="rjs-ln">5</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: '<span class="tok-pune">};</span>',
                  }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   8. PERFORMANCE OPTIMIZATION
   ========================================================= */
function PerformanceSection() {
  const items = [
    "Lazy Loading",
    "Code Splitting",
    "React.lazy",
    "Suspense",
    "Dynamic Imports",
    "React.memo",
    "useMemo",
    "useCallback",
    "Image Optimization",
    "Responsive Images",
    "Render Optimization",
    "Bundle Optimization",
    "Debouncing",
    "Throttling",
    "Core Web Vitals",
    "LCP Optimization",
    "CLS Optimization",
    "INP Optimization",
  ];
  return (
    <section
      className="py-24 md:py-32 text-white relative overflow-hidden"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 rjs-grid-noise opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow dark>// performance</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            React Applications Built for Speed
          </h2>
          <p className="text-slate-300 mt-4 text-lg">
            I focus on optimized rendering, fast loading and smooth interactions
            to deliver better user experiences.
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-2.5 mt-10">
          {items.map((i) => (
            <span key={i} className="rjs-chip-dark">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   9. RESPONSIVE REACT DEVELOPMENT
   ========================================================= */
function ResponsiveSection() {
  const devices = [
    { icon: Smartphone, label: "Mobile", w: "w-12", h: "h-20" },
    { icon: Tablet, label: "Tablet", w: "w-20", h: "h-28" },
    { icon: MonitorSmartphone, label: "Laptop", w: "w-32", h: "h-24" },
    { icon: Monitor, label: "Desktop", w: "w-44", h: "h-28" },
  ];
  const items = [
    "Mobile-First Development",
    "Responsive Layouts",
    "Flexible Components",
    "Responsive Images",
    "Touch-Friendly Interfaces",
    "Cross-Browser Compatibility",
  ];
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--light)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <Eyebrow>// responsive development</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Responsive on Every Screen
          </h2>
          <p className="text-(--muted) mt-4 text-lg max-w-xl mx-auto">
            Every React application is developed and tested to provide a
            consistent experience across mobile, tablet and desktop devices.
          </p>
        </Reveal>
        <Reveal>
          <div className="flex items-end justify-center gap-6 md:gap-8 mt-14 flex-wrap">
            {devices.map((d, idx) => (
              <div key={d.label} className="flex flex-col items-center gap-3">
                <div
                  className={`${d.w} ${d.h} rounded-xl border-2 flex items-center justify-center`}
                  style={{
                    borderColor:
                      idx === devices.length - 1
                        ? "var(--primary)"
                        : "rgba(15,23,42,.15)",
                  }}
                >
                  <d.icon
                    size={18}
                    color={
                      idx === devices.length - 1
                        ? "var(--primary)"
                        : "var(--muted)"
                    }
                  />
                </div>
                <span
                  className="font-mono text-xs"
                  style={{
                    color:
                      idx === devices.length - 1
                        ? "var(--primary)"
                        : "var(--muted)",
                  }}
                >
                  {d.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2.5 mt-12">
            {items.map((i) => (
              <span key={i} className="rjs-chip">
                {i}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   10. REACT UI/UX
   ========================================================= */
function ReactUIUX() {
  const capabilities = [
    { icon: Layout, label: "Modern Interfaces" },
    { icon: Component, label: "Interactive Components" },
    { icon: PanelsTopLeft, label: "Responsive Navigation" },
    { icon: ClipboardList, label: "Forms" },
    { icon: SquareStack, label: "Modals" },
    { icon: ToggleLeft, label: "Tabs" },
    { icon: ChevronDown, label: "Accordions" },
    { icon: Layers, label: "Cards" },
    { icon: LayoutDashboard, label: "Dashboards" },
    { icon: Table2, label: "Tables" },
    { icon: Gauge, label: "Animations" },
    { icon: Bell, label: "Micro Interactions" },
  ];
  const tech = [
    "Tailwind CSS",
    "Bootstrap 5",
    "CSS3",
    "Framer Motion",
    "React Icons",
  ];
  return (
    <section className="py-24 md:py-32 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>// ui / ux</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            React UI/UX Development
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {capabilities.map((c) => (
            <Reveal key={c.label}>
              <div className="rjs-card p-5 flex items-center gap-3 h-full">
                <c.icon size={18} color="var(--primary)" />
                <span className="text-sm font-medium">{c.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="flex flex-wrap gap-2.5 mt-8">
            {tech.map((t) => (
              <span key={t} className="rjs-chip">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   11. AUTHENTICATION & PROTECTED ROUTES
   ========================================================= */
function AuthenticationSection() {
  const items = [
    { icon: UserCheck, label: "Login & Registration" },
    { icon: KeyRound, label: "Authentication" },
    { icon: ShieldCheck, label: "Protected Routes" },
    { icon: Users, label: "Role-Based Access" },
    { icon: Lock, label: "Session Management" },
    { icon: ClipboardList, label: "Form Validation" },
    { icon: Braces, label: "Authentication Context" },
    { icon: Database, label: "Secure API Communication" },
  ];
  return (
    <section
      className="py-24 md:py-32 text-white relative overflow-hidden"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 rjs-grid-noise opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow dark>// authentication</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Authentication &amp; Protected Routes
          </h2>
          <p className="text-slate-300 mt-4 text-lg">
            Sound login flows and route protection built into the application,
            not bolted on afterward.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {items.map((i) => (
            <Reveal key={i.label}>
              <div className="rjs-card-dark p-5 flex items-center gap-3 h-full">
                <i.icon size={18} color="var(--accent)" />
                <span className="text-sm text-slate-200">{i.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

 

/* =========================================================
   13. REACT TECHNOLOGY STACK
   ========================================================= */
function TechStack() {
  const stack = [
    "React.js",
    "JavaScript ES6+",
    "JSX",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap 5",
    "React Router",
    "Redux Toolkit",
    "Context API",
    "REST APIs",
    "Fetch API",
    "Axios",
    "React Hook Form",
    "Yup",
    "Framer Motion",
    "Vite",
    "Git",
    "GitHub",
    "Vercel",
  ];
  return (
    <section
      id="rjs-stack"
      className="py-24 md:py-32 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>$ stack --list</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            React Technology Stack
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12">
          {stack.map((t) => (
            <Reveal key={t}>
              <div className="rjs-card p-5 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--primary)" }}
                />
                <span className="font-mono text-sm">{t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   14. REACT PROJECT TYPES
   ========================================================= */
function ProjectTypes() {
  const types = [
    { icon: Building2, label: "Business Websites" },
    { icon: ShoppingCart, label: "E-commerce Applications" },
    { icon: LayoutDashboard, label: "Admin Dashboards" },
    { icon: Boxes, label: "SaaS Interfaces" },
    { icon: Layers, label: "Portfolio Websites" },
    { icon: Rocket, label: "Landing Pages" },
    { icon: Plug, label: "API-Based Applications" },
    { icon: Users, label: "CRM Interfaces" },
    { icon: ShieldCheck, label: "Authentication Systems" },
    { icon: Database, label: "Data Management Applications" },
  ];
  return (
    <section className="py-24 md:py-28" style={{ background: "var(--light)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>// project types</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            React Project Types
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
          {types.map((t) => (
            <Reveal key={t.label}>
              <div className="rjs-card p-5 flex flex-col items-center text-center gap-3 h-full">
                <t.icon size={20} color="var(--primary)" />
                <span className="text-sm font-medium">{t.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   15. DEVELOPMENT PROCESS
   ========================================================= */
function DevelopmentProcess() {
  const steps = [
    {
      n: "01",
      title: "Requirements",
      icon: Compass,
      desc: "Understand the business goals, users and project requirements.",
    },
    {
      n: "02",
      title: "Planning",
      icon: ClipboardList,
      desc: "Define the React architecture, components and technology stack.",
    },
    {
      n: "03",
      title: "UI Development",
      icon: PenTool,
      desc: "Build responsive and reusable UI components.",
    },
    {
      n: "04",
      title: "React Development",
      icon: Hammer,
      desc: "Develop functionality, state management and application logic.",
    },
    {
      n: "05",
      title: "API Integration",
      icon: Plug,
      desc: "Connect APIs and dynamic data sources.",
    },
    {
      n: "06",
      title: "Testing & Optimization",
      icon: TestTube2,
      desc: "Test responsiveness, functionality and performance.",
    },
    {
      n: "07",
      title: "Deployment",
      icon: Rocket,
      desc: "Build and deploy the application to production.",
    },
  ];
  return (
    <section
      id="rjs-process"
      className="py-24 md:py-32 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>// development process</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Development Process
          </h2>
          <p className="text-(--muted) mt-4 text-lg">
            The same seven steps, run in order, on every React engagement.
          </p>
        </Reveal>
        <div className="mt-14">
          {steps.map((s, idx) => (
            <Reveal key={s.n}>
              <div
                className={`flex gap-6 md:gap-10 py-7 border-t border-slate-200 ${idx === steps.length - 1 ? "border-b" : ""}`}
              >
                <span
                  className="font-display text-2xl font-semibold w-14 shrink-0"
                  style={{ color: "var(--primary)" }}
                >
                  {s.n}
                </span>
                <div className="flex gap-4 items-start">
                  <s.icon
                    size={20}
                    className="mt-1 shrink-0"
                    color="var(--secondary)"
                  />
                  <div>
                    <h3 className="font-display font-semibold text-lg">
                      {s.title}
                    </h3>
                    <p className="text-(--muted) text-sm mt-1 max-w-xl">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   16. FEATURED REACT PROJECTS
   (no fabricated projects — placeholder slots for real work)
   ========================================================= */
function ReactProjects() {
  const placeholders = [1, 2, 3];
  return (
    <section
      id="rjs-projects"
      className="py-24 md:py-32 text-white relative overflow-hidden"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 rjs-grid-noise opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow dark>// featured react projects</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Featured React Projects
          </h2>
          <p className="text-slate-300 mt-4 text-lg">
            This section is set up for real React work only — swap each slot for
            an actual project, its screenshot, stack and live links.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {placeholders.map((p) => (
            <Reveal key={p}>
              <div
                className="rjs-card-dark p-7 h-full flex flex-col items-center text-center justify-center gap-3 min-h-70"
                style={{ borderStyle: "dashed" }}
              >
                <Code2 size={26} color="#475569" />
                <p className="font-mono text-sm text-slate-500">
                  project slot {p}
                </p>
                <p className="text-slate-500 text-xs max-w-55">
                  Add project name, screenshot, description, stack and key
                  features here.
                </p>
                <div className="flex gap-4 mt-3 font-mono text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <Github size={13} /> GitHub
                  </span>
                  <span className="flex items-center gap-1">
                    <ExternalLink size={13} /> Live Demo
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   17. WHY CHOOSE MY REACT DEVELOPMENT SERVICE
   ========================================================= */
function WhyChooseMe() {
  const items = [
    "Modern React Development",
    "Reusable Components",
    "Clean Code",
    "Scalable Architecture",
    "Responsive Design",
    "API Integration",
    "Performance Optimization",
    "SEO-Friendly Development",
    "Modern UI/UX",
    "Maintainable Code",
  ];
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--light)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>// why choose me</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Why Choose My React Development Service
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {items.map((i) => (
            <Reveal key={i}>
              <div className="rjs-card p-6 h-full">
                <p className="font-medium text-sm">{i}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
 
 

/* =========================================================
   PAGE ROOT
   ========================================================= */
export default function ReactDevelopment() {
  return (
    <div className="rjs-root">
      <GlobalStyle />
      <ReactHero /> 
      <ReactServices />
      <ReactFeatures />
      <ReactArchitecture />
      <StateManagement />
      <ApiIntegration />
      <PerformanceSection />
      <ResponsiveSection />
      <ReactUIUX />
      <AuthenticationSection />
      <TechStack />
      <ProjectTypes />
      <DevelopmentProcess />
      <ReactProjects />
      <WhyChooseMe />
     <FAQs 
        data={FAQ_ITEMS} 
        title="Frequently Asked Questions" 
        eyebrow="// Got Questions?" 
      />

      <CTA />
     
    </div>
  );
}
