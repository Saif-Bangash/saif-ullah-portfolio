/* eslint-disable react-hooks/set-state-in-effect */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  Code2,
  LayoutDashboard,
  ShoppingCart,
  Plug,
  RefreshCcw,
  Building2,
  CheckCircle2,
  XCircle,
  Smartphone,
  Tablet,
  Monitor,
  Database,
  Lock,
  Github,
  ExternalLink,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  Rocket,
  Users,
  Boxes,
  Compass,
  PenTool,
  Hammer,
  TestTube2,
  GitBranch,
  Layers,
  ShieldCheck,
  Search,
  CircleGauge,
  Briefcase,
  ClipboardList,
  Landmark,
  CalendarCheck,
  MonitorSmartphone,
  Workflow,
  Sparkles,
} from "lucide-react";

/* =========================================================
   DESIGN TOKENS — same system as the main Web Development page
   ========================================================= */
const GlobalStyle = () => (
  <style>{`
    .cwd-root{
      --primary:#7C3AED; --secondary:#2563EB; --accent:#F7D26B;
      --gold:#F7D26B; --gold-light:#FBE3A0; --gold-dark:#D9A93E;
      --gold-soft: rgba(247,210,107,.12); --gold-glow: rgba(247,210,107,.35);
      --dark:#0B1120; --dark2:#0F172A; --light:#F8FAFC; --ink:#0F172A; --muted:#64748B;
      font-family: Inter, system-ui, sans-serif;
      color: var(--ink);
      background: var(--light);
    }
    .cwd-root .font-display{ font-family: "Space Grotesk", Inter, sans-serif; }
    .cwd-root .font-mono{ font-family: "JetBrains Mono", ui-monospace, monospace; }

    @media (prefers-reduced-motion: reduce){
      .cwd-root *{ animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
    }

    .cwd-reveal{ opacity:0; transform:translateY(22px); transition:opacity .6s ease, transform .6s cubic-bezier(.16,1,.3,1); }
    .cwd-reveal.in{ opacity:1; transform:translateY(0); }

    .cwd-eyebrow{
      display:inline-flex; align-items:center; gap:.5rem;
      font-family:"JetBrains Mono", monospace; font-size:.72rem; letter-spacing:.02em;
      color:var(--primary); background:rgba(124,58,237,.08);
      border:1px solid rgba(124,58,237,.22); border-radius:999px; padding:.35rem .8rem .35rem .6rem;
    }
    .cwd-eyebrow.on-dark{ color:#C4B5FD; background:rgba(196,181,253,.08); border-color:rgba(196,181,253,.22); }
    .cwd-dot{ width:6px; height:6px; border-radius:999px; background:var(--accent); box-shadow:0 0 8px var(--accent); }

    .cwd-editor{
      background:#0D1424; border:1px solid rgba(148,163,184,.14); border-radius:14px; overflow:hidden;
      box-shadow:0 30px 60px -20px rgba(2,6,23,.65);
    }
    .cwd-editor-bar{ display:flex; align-items:center; gap:.5rem; padding:.6rem .9rem; background:#0B1120; border-bottom:1px solid rgba(148,163,184,.1); }
    .cwd-editor-dot{ width:10px; height:10px; border-radius:999px; }
    .cwd-editor-tab{ font-family:"JetBrains Mono",monospace; font-size:.7rem; color:#94A3B8; margin-left:.4rem; padding:.15rem .55rem; border-radius:6px; background:rgba(148,163,184,.06); }
    .cwd-editor-body{ padding:1.15rem 1.3rem; font-family:"JetBrains Mono",monospace; font-size:.8rem; line-height:1.85; min-height:210px; }
    .cwd-ln{ color:#3A4A63; display:inline-block; width:1.5rem; user-select:none; }
    .tok-kw{ color:#C4B5FD; } .tok-fn{ color:#22D3EE; } .tok-str{ color:#86EFAC; }
    .tok-tag{ color:#7DD3FC; } .tok-attr{ color:#FDE68A; } .tok-pune{ color:#94A3B8; } .tok-com{ color:#475569; }
    .cwd-caret{ display:inline-block; width:6px; height:1em; background:var(--accent); vertical-align:text-bottom; margin-left:2px; animation:cwdBlink 1s step-end infinite; }
    @keyframes cwdBlink{ 50%{ opacity:0; } }

    .cwd-card{ background:#fff; border:1px solid rgba(15,23,42,.07); border-radius:16px; transition:transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease, border-color .3s ease; }
    .cwd-card:hover{ transform:translateY(-5px); box-shadow:0 22px 44px -20px rgba(247,210,107,.4); border-color:rgba(247,210,107,.5); }
    .cwd-card-dark{ background:linear-gradient(180deg, rgba(148,163,184,.05), rgba(148,163,184,.02)); border:1px solid rgba(148,163,184,.12); border-radius:16px; transition:transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease, border-color .3s ease; }
    .cwd-card-dark:hover{ transform:translateY(-5px); border-color:rgba(247,210,107,.35); box-shadow:0 22px 44px -20px rgba(247,210,107,.18); }

    /* Updated Gradients with #F7D26B */
    .cwd-grad-primary{ background:linear-gradient(135deg, #F7D26B, #D9A93E); }
    .cwd-grad-text{ background:linear-gradient(120deg, #FBE3A0 0%, #F7D26B 45%, #D9A93E 100%); -webkit-background-clip:text; background-clip:text; color:transparent; }

    /* Updated Buttons with #F7D26B Gradient */
    .cwd-btn-primary{ background:linear-gradient(135deg, #F7D26B, #D9A93E); color:#0F172A; border-radius:12px; padding:.8rem 1.6rem; font-weight:600; display:inline-flex; align-items:center; gap:.5rem; box-shadow:0 12px 28px -10px rgba(247,210,107,.45); transition:transform .2s ease, box-shadow .2s ease; border:none; cursor:pointer; }
    .cwd-btn-primary:hover{ transform:translateY(-2px); box-shadow:0 16px 32px -10px rgba(247,210,107,.6); }
    .cwd-btn-ghost{ border:1px solid rgba(247,210,107,.5); border-radius:12px; padding:.8rem 1.6rem; font-weight:600; display:inline-flex; align-items:center; gap:.5rem; transition:all .2s ease; background:transparent; cursor:pointer; }
    .cwd-btn-ghost:hover{ border-color:var(--accent); color:var(--accent); }

    .cwd-chip{ font-family:"JetBrains Mono",monospace; font-size:.72rem; color:#334155; border:1px solid rgba(15,23,42,.1); background:#fff; border-radius:8px; padding:.38rem .65rem; transition:.2s ease; display:inline-block; }
    .cwd-chip:hover{ border-color:var(--accent); color:var(--gold-dark); transform:translateY(-2px); }
    .cwd-chip-dark{ font-family:"JetBrains Mono",monospace; font-size:.72rem; color:#CBD5E1; border:1px solid rgba(148,163,184,.18); background:rgba(148,163,184,.05); border-radius:8px; padding:.38rem .65rem; transition:.2s ease; display:inline-block; }
    .cwd-chip-dark:hover{ border-color:var(--accent); color:var(--accent); transform:translateY(-2px); }

    .cwd-grid-noise{ background-image:radial-gradient(rgba(148,163,184,.14) 1px, transparent 1px); background-size:26px 26px; }

    .cwd-acc-body{ display:grid; grid-template-rows:0fr; transition:grid-template-rows .32s ease; }
    .cwd-acc-body.open{ grid-template-rows:1fr; }
    .cwd-acc-body > div{ overflow:hidden; }
    .cwd-plus{ transition:transform .3s ease; }
    .cwd-plus.open{ transform:rotate(45deg); }

    /* Updated Secondary Button Elements */
    .rjs-btn-primary{ background:linear-gradient(135deg, #F7D26B, #D9A93E); color:#0F172A; border-radius:12px; padding:.8rem 1.6rem; font-weight:600; display:inline-flex; align-items:center; gap:.5rem; box-shadow:0 12px 28px -10px rgba(247,210,107,.45); transition:transform .2s ease, box-shadow .2s ease; border:none; cursor:pointer; }
    .rjs-btn-primary:hover{ transform:translateY(-2px); box-shadow:0 16px 32px -10px rgba(247,210,107,.6); }
 
    .rjs-btn-ghost{ border:1px solid var(--accent); border-radius:12px; padding:.8rem 1.6rem; font-weight:600; display:inline-flex; align-items:center; gap:.5rem; transition:all .2s ease; background:transparent; cursor:pointer; }
    .rjs-btn-ghost:hover{ border-color:var(--accent); color:var(--accent); }

  `}</style>
);

/* =========================================================
   REVEAL-ON-SCROLL (Framer-Motion-free implementation)
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
      className={`cwd-reveal ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, dark = false }) {
  return (
    <span className={`cwd-eyebrow ${dark ? "on-dark" : ""}`}>
      <span className="cwd-dot" />
      {children}
    </span>
  );
}

/* =========================================================
   SIGNATURE HERO VISUAL — typed JSX snippet in an editor window
   ========================================================= */
const HERO_LINES = [
  {
    html: '<span class="tok-kw">function</span> <span class="tok-fn">CustomBuild</span><span class="tok-pune">(</span>requirements<span class="tok-pune">) {</span>',
  },
  {
    html: '&nbsp;&nbsp;<span class="tok-kw">const</span> solution <span class="tok-pune">=</span> <span class="tok-fn">design</span><span class="tok-pune">(</span>requirements<span class="tok-pune">);</span>',
  },
  {
    html: '&nbsp;&nbsp;<span class="tok-kw">return</span> <span class="tok-pune">(</span>',
  },
  {
    html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-pune">&lt;</span><span class="tok-tag">Website</span>',
  },
  {
    html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-attr">builtFor</span><span class="tok-pune">=</span><span class="tok-str">"your-business"</span>',
  },
  {
    html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-attr">scalable</span><span class="tok-pune">={</span><span class="tok-kw">true</span><span class="tok-pune">}</span>',
  },
  {
    html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-attr">template</span><span class="tok-pune">={</span><span class="tok-kw">false</span><span class="tok-pune">}</span>',
  },
  { html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-pune">/&gt;</span>' },
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
    <div ref={heroRef} className="cwd-editor max-w-lg mx-auto">
      <div className="cwd-editor-bar">
        <span className="cwd-editor-dot" style={{ background: "#F87171" }} />
        <span className="cwd-editor-dot" style={{ background: "#FBBF24" }} />
        <span className="cwd-editor-dot" style={{ background: "#34D399" }} />
        <span className="cwd-editor-tab">CustomBuild.jsx</span>
      </div>
      <div className="cwd-editor-body text-slate-300">
        {HERO_LINES.slice(0, visibleLines).map((line, idx) => (
          <div key={idx}>
            <span className="cwd-ln">{idx + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: line.html }} />
          </div>
        ))}
        {visibleLines < HERO_LINES.length && (
          <div>
            <span className="cwd-ln">{visibleLines + 1}</span>
            <span className="cwd-caret" />
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   1. CUSTOM HERO
   ========================================================= */
function CustomHero() {
  const badges = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "REST API",
  ];
  return (
    <section
      className="relative bg-(--dark) text-white overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 cwd-grid-noise opacity-30" />
      <div
        className="absolute -top-40 -left-40 w-120 h-120 rounded-full blur-[140px]"
        style={{ background: "rgba(124,58,237,.25)" }}
      />
      <div
        className="absolute top-16 -right-32 w-120 h-120 rounded-full blur-[140px]"
        style={{ background: "rgba(247,210,107,.15)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-mono text-xs text-slate-500 mb-3">
            web development / custom web development
          </p>
          <Eyebrow dark>custom web development</Eyebrow>
          <h1 className="font-display text-[2.1rem] leading-[1.12] sm:text-4xl md:text-[2.9rem] font-semibold mt-6 tracking-tight">
            Custom Web Development Built{" "}
            <span className="cwd-grad-text">Around Your Business</span>
          </h1>
          <p className="text-slate-400 font-mono text-sm mt-4">
            Custom websites &amp; web applications designed to fit your exact
            requirements.
          </p>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-xl">
            I build custom websites and web applications tailored to your
            business goals, workflow and users — from responsive business
            websites to dynamic, API-powered web applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
             <Link to={"/contact"} className="rjs-btn-primary">Start a Project <ArrowRight size={16} /> </Link>
            <a href="#cwd-projects" className="cwd-btn-ghost text-white">
              View My Projects
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2.5">
            {badges.map((b) => (
              <span key={b} className="cwd-chip-dark">
                {b}
              </span>
            ))}
          </div>
        </div>

        <Reveal>
          <HeroEditor />
          <p className="text-center font-mono text-xs text-slate-500 mt-4">
            $ requirements → design → build → your website
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   2. WHAT IS CUSTOM WEB DEVELOPMENT
   ========================================================= */
function WhatIsCustom() {
  const provides = [
    "Custom functionality",
    "Custom UI/UX",
    "Business-specific workflows",
    "API integrations",
    "Custom dashboards",
    "Dynamic content",
    "Scalable architecture",
    "Performance optimization",
    "SEO-friendly structure",
  ];
  return (
    <section className="py-24 md:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <Eyebrow>// what is custom development</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Your business is unique. Your website should be too.
          </h2>
          <p className="text-(--muted) mt-4 text-lg leading-relaxed">
            Custom web development means building a website or web application
            specifically around your business requirements instead of relying on
            a one-size-fits-all template.
          </p>
        </Reveal>
        <Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {provides.map((p) => (
              <div key={p} className="cwd-card p-4 flex items-center gap-3">
                <CheckCircle2 size={18} color="var(--primary)" />
                <span className="text-sm font-medium">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   3. WHAT I CAN BUILD
   ========================================================= */
function CustomServices() {
  const services = [
    {
      icon: Building2,
      title: "Custom Business Websites",
      desc: "Professional websites designed around your brand, services and business goals.",
    },
    {
      icon: Code2,
      title: "Custom Web Applications",
      desc: "Interactive web applications with dynamic functionality and user-focused workflows.",
    },
    {
      icon: LayoutDashboard,
      title: "Custom Admin Dashboards",
      desc: "Responsive dashboards for managing users, products, orders, content and business data.",
    },
    {
      icon: ShoppingCart,
      title: "Custom E-commerce Websites",
      desc: "E-commerce platforms with product management, cart functionality, filtering, search and API integration.",
    },
    {
      icon: Plug,
      title: "API-Powered Applications",
      desc: "Web applications connected with REST APIs and external services.",
    },
    {
      icon: Rocket,
      title: "Custom Landing Pages",
      desc: "High-converting landing pages designed specifically for campaigns, products and services.",
    },
    {
      icon: RefreshCcw,
      title: "Website Redesign & Customization",
      desc: "Transform an existing website into a modern, responsive and performance-focused experience.",
    },
    {
      icon: Briefcase,
      title: "Business Management Systems",
      desc: "Custom web-based systems designed to simplify business processes and workflows.",
    },
  ];
  return (
    <section
      id="cwd-services"
      className="py-24 md:py-32 bg-(--light)"
      style={{ background: "var(--light)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>// what i can build</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            What I Can Build
          </h2>
          <p className="text-(--muted) mt-4 text-lg">
            Real solutions shaped around what your business actually needs — not
            a bundled template.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className="cwd-card p-7 h-full">
                <div className="w-11 h-11 rounded-xl cwd-grad-primary flex items-center justify-center text-white">
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
   4. CUSTOM DEVELOPMENT FEATURES
   ========================================================= */
function CustomFeatures() {
  const features = [
    "Custom UI/UX",
    "Responsive Design",
    "Mobile-First Development",
    "Reusable Components",
    "Dynamic Content",
    "REST API Integration",
    "Authentication",
    "Protected Routes",
    "CRUD Functionality",
    "Search & Filtering",
    "Pagination",
    "Form Validation",
    "File Uploads",
    "Admin Dashboards",
    "Database Integration",
    "Performance Optimization",
    "SEO-Friendly Structure",
  ];
  return (
    <section
      className="py-24 md:py-32 bg-(--dark) text-white relative overflow-hidden"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 cwd-grid-noise opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow dark>// development features</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Custom Development Features
          </h2>
          <p className="text-slate-300 mt-4 text-lg">
            The building blocks behind every custom project, combined based on
            what your project needs.
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-2.5 mt-12">
          {features.map((f) => (
            <span key={f} className="cwd-chip-dark">
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   5. TECHNOLOGY STACK
   ========================================================= */
function TechStack() {
  const groups = [
    {
      label: "Frontend",
      items: [
        "React.js",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap 5",
        "React Router",
        "Redux Toolkit",
        "Context API",
      ],
    },
    { label: "Backend", items: ["Node.js", "Express.js", "PHP"] },
    { label: "Database", items: ["MySQL", "MongoDB"] },
    { label: "APIs", items: ["REST API", "Fetch API", "Axios", "JSON"] },
    { label: "Tools", items: ["Git", "GitHub", "Vite", "Vercel"] },
  ];
  return (
    <section className="py-24 md:py-32 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>$ stack --list</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Technology Stack
          </h2>
          <p className="text-(--muted) mt-4 text-lg">
            Only the tools I actually build with, day to day.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {groups.map((g) => (
            <Reveal key={g.label}>
              <div className="cwd-card p-6">
                <p className="font-mono text-xs text-(--primary) mb-4">
                  {g.label}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {g.items.map((i) => (
                    <span key={i} className="cwd-chip">
                      {i}
                    </span>
                  ))}
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
   6. DEVELOPMENT PROCESS
   ========================================================= */
function DevelopmentProcess() {
  const steps = [
    {
      n: "01",
      title: "Discover",
      icon: Compass,
      desc: "Understand the business, goals, target users and requirements.",
    },
    {
      n: "02",
      title: "Plan",
      icon: ClipboardList,
      desc: "Define features, technology stack, structure and development approach.",
    },
    {
      n: "03",
      title: "Design",
      icon: PenTool,
      desc: "Create a clean and responsive UI/UX based on the project requirements.",
    },
    {
      n: "04",
      title: "Develop",
      icon: Hammer,
      desc: "Build reusable components and custom functionality.",
    },
    {
      n: "05",
      title: "Integrate",
      icon: Plug,
      desc: "Connect APIs, databases and required third-party services.",
    },
    {
      n: "06",
      title: "Test",
      icon: TestTube2,
      desc: "Test responsiveness, functionality, performance and browser compatibility.",
    },
    {
      n: "07",
      title: "Launch",
      icon: Rocket,
      desc: "Deploy the website and provide post-launch improvements and support.",
    },
  ];
  return (
    <section
      id="cwd-process"
      className="py-24 md:py-32 bg-(--light)"
      style={{ background: "var(--light)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>// custom development process</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Custom Development Process
          </h2>
          <p className="text-(--muted) mt-4 text-lg">
            A fixed sequence, run the same way on every custom project.
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
                    <p className="text-(--muted)-sm mt-1 max-w-xl">{s.desc}</p>
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
   7. WHY CUSTOM DEVELOPMENT (comparison)
   ========================================================= */
function CustomComparison() {
  const template = [
    "Limited customization",
    "Generic functionality",
    "Less flexibility",
    "Difficult to scale",
    "Unnecessary features",
  ];
  const custom = [
    "Built around your requirements",
    "Complete design flexibility",
    "Custom functionality",
    "Scalable architecture",
    "Better performance",
    "Easier future expansion",
  ];
  return (
    <section
      className="py-24 md:py-32 bg-(--dark) text-white relative overflow-hidden"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 cwd-grid-noise opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <Eyebrow dark>// why custom development</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Built for Your Requirements, Not Someone Else's.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <Reveal>
            <div className="cwd-card-dark p-8 h-full">
              <p className="font-mono text-xs text-slate-500 mb-5">
                TEMPLATE WEBSITE
              </p>
              <ul className="space-y-4">
                {template.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 text-slate-400 text-sm"
                  >
                    <XCircle size={17} className="shrink-0" color="#F87171" />{" "}
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div
              className="cwd-card-dark p-8 h-full"
              style={{ borderColor: "rgba(247,210,107,.35)" }}
            >
              <p className="font-mono text-xs text-(--accent) mb-5">
                CUSTOM DEVELOPMENT
              </p>
              <ul className="space-y-4">
                {custom.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 text-slate-200 text-sm"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0"
                      color="var(--accent)"
                    />{" "}
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   8. PERFORMANCE & SEO
   ========================================================= */
function PerformanceSection() {
  const items = [
    "Semantic HTML",
    "SEO-friendly structure",
    "Clean URLs",
    "Meta titles",
    "Meta descriptions",
    "Image optimization",
    "Lazy loading",
    "Responsive images",
    "Core Web Vitals",
    "LCP optimization",
    "CLS optimization",
    "INP optimization",
    "Mobile optimization",
    "Fast loading performance",
  ];
  return (
    <section className="py-24 md:py-32 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>// performance &amp; seo</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Custom Development With Performance &amp; SEO in Mind
          </h2>
          <p className="text-(--muted) mt-4 text-lg leading-relaxed">
            I don't just build websites. I build websites that are structured
            for performance, usability and search visibility.
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-2.5 mt-10">
          {items.map((i) => (
            <Reveal key={i} className="inline-block">
              <span className="cwd-chip flex flex-col items-start gap-2">
                <CircleGauge
                  size={14}
                  color="var(--secondary)"
                  className="mb-1"
                />
                <span>{i}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   9. RESPONSIVE DEVELOPMENT
   ========================================================= */
function ResponsiveSection() {
  const devices = [
    { icon: Smartphone, label: "Mobile", w: "w-12", h: "h-20" },
    { icon: Tablet, label: "Tablet", w: "w-20", h: "h-28" },
    { icon: MonitorSmartphone, label: "Laptop", w: "w-32", h: "h-24" },
    { icon: Monitor, label: "Desktop", w: "w-44", h: "h-28" },
  ];
  return (
    <section
      className="py-24 md:py-32 bg-(--dark) text-white relative overflow-hidden"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 cwd-grid-noise opacity-20" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <Eyebrow dark>// responsive development</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Perfectly Responsive on Every Screen
          </h2>
          <p className="text-slate-300 mt-4 text-lg max-w-xl mx-auto">
            Every custom website is developed with a mobile-first approach and
            tested across different screen sizes to provide a consistent
            experience.
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
                      idx === devices.length - 1 ? "var(--accent)" : "#475569",
                  }}
                >
                  <d.icon
                    size={18}
                    color={
                      idx === devices.length - 1 ? "var(--accent)" : "#64748B"
                    }
                  />
                </div>
                <span
                  className="font-mono text-xs"
                  style={{
                    color:
                      idx === devices.length - 1 ? "var(--accent)" : "#94A3B8",
                  }}
                >
                  {d.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   10. API & DATABASE INTEGRATION
   ========================================================= */
function IntegrationSection() {
  const items = [
    "REST APIs",
    "Authentication APIs",
    "Payment APIs where required",
    "Third-party APIs",
    "Database Integration",
    "CRUD Operations",
    "Dynamic Data",
    "User Management",
    "Product Management",
    "Order Management",
  ];
  return (
    <section
      className="py-24 md:py-32 bg-(--light)"
      style={{ background: "var(--light)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Eyebrow>// api &amp; database integration</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            API &amp; Database Integration
          </h2>
          <p className="text-(--muted) mt-4 text-lg leading-relaxed">
            Connect your website with the tools, services and data your business
            already uses.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-8">
            {items.map((i) => (
              <span key={i} className="cwd-chip">
                {i}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="cwd-card p-8 flex flex-col items-center text-center gap-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl cwd-grad-primary flex items-center justify-center text-white">
                <Database size={22} />
              </div>
              <Plug size={20} color="var(--muted)" />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                style={{ background: "var(--accent)" }}
              >
                <Lock size={22} />
              </div>
            </div>
            <p className="font-mono text-xs text-(--muted)">
              database ⇄ api ⇄ your website
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   11. USE CASES
   ========================================================= */
function UseCases() {
  const cases = [
    { icon: Building2, label: "Business Websites" },
    { icon: Rocket, label: "Startup Websites" },
    { icon: Layers, label: "SaaS Platforms" },
    { icon: ShoppingCart, label: "E-commerce" },
    { icon: Users, label: "CRM Systems" },
    { icon: LayoutDashboard, label: "Admin Dashboards" },
    { icon: CalendarCheck, label: "Booking Systems" },
    { icon: Workflow, label: "Management Systems" },
    { icon: ShieldCheck, label: "Client Portals" },
    { icon: Boxes, label: "Internal Business Tools" },
  ];
  return (
    <section className="py-24 md:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>// use cases</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Use Cases
          </h2>
          <p className="text-(--muted) mt-4 text-lg">
            Custom development fits any project shaped around real business
            requirements.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
          {cases.map((c) => (
            <Reveal key={c.label}>
              <div className="cwd-card p-5 flex flex-col items-center text-center gap-3 h-full">
                <c.icon size={20} color="var(--primary)" />
                <span className="text-sm font-medium">{c.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   12. FEATURED CUSTOM PROJECTS
   (no fabricated projects — placeholder slots for real work)
   ========================================================= */
function CustomProjects() {
  const projects = [
    {
      id: 1,
      title: "The Vapor Store",
      description:
        "High-performance e-commerce platform with age verification, integrated newsletter popups, and SEO optimization.",
      image: "assets/img/threaper-img.jfif",
      stack: ["PHP", "Bootstrap 5", "JavaScript", "HTML5/CSS3"],
      liveLink: "https://thevapor.co.uk/",
    },
    {
      id: 2,
      title: "Smoknic E-Cigarettes",
      description:
        "Custom online vape supply store optimized for fast loading speeds, clean UI layout, and smooth checkout flow.",
      image: "assets/img/smoknic-vape-web-design-190.png",
      stack: ["PHP", "Bootstrap 5", "JavaScript", "HTML5/CSS3"],
      liveLink: "https://www.smoknic.co.uk/",
    },
    {
      id: 3,
      title: "iSafe Gadgets",
      description:
        "Modern tech accessory web store featuring high-conversion product showcases and responsive design across all devices.",
      image: "assets/img/isafegadgets-img.jfif",
      stack: ["PHP", "Bootstrap 5", "JavaScript", "HTML5/CSS3"],
      liveLink: "https://isafegadgets.co.uk/",
    },
  ];

  return (
    <section
      id="cwd-projects"
      className="py-24 md:py-32 bg-(--dark) text-white relative overflow-hidden"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 cwd-grid-noise opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow dark>// featured custom projects</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 tracking-tight">
            Featured Custom Projects
          </h2>
          <p className="text-slate-300 mt-4 text-lg">
            Real custom web applications, e-commerce solutions, and tailored web
            platforms built for speed and conversion.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <div className="cwd-card-dark rounded-xl overflow-hidden border border-slate-800 bg-slate-900/60 h-full flex flex-col justify-between hover:border-slate-700 transition-all">
                {/* Image linked directly to website */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-48 block overflow-hidden relative group"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>

                {/* Content Section */}
                <div className="p-6 flex flex-col grow justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition-colors"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.stack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 text-slate-300 border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* External Link Section */}
                  <div className="w-full flex justify-center items-center gap-4 mt-6 pt-4 border-t border-slate-800/80 font-mono text-xs">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
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

const FAQ_ITEMS = [
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

function FAQAccordion() {
  // First FAQ open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="cwd-faq"
      className="py-10 sm:py-14 bg-slate-50/60 border-t border-slate-200/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-mono font-medium tracking-wide uppercase">
            <HelpCircle size={13} /> // FAQ
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Compact Accordion List */}
        <div className="mt-6 space-y-2">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#F7D26B] shadow-sm ring-1 ring-blue-500/10"
                    : "bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5 text-left transition-colors"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                      isOpen ? "text-[#F7D26B]" : "text-slate-800"
                    }`}
                  >
                    {item.q}
                  </span>

                  <div
                    className={`p-1 rounded-full shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-50 text-[#F7D26B] rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {/* Animated Collapsible Body */}
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-3.5 sm:px-5 sm:pb-4 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-2.5">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   14. FINAL CTA
   ========================================================= */
function CTA() {
  return (
    <section
      id="cwd-cta"
      className="relative py-28 md:py-36 bg-(--dark) text-white overflow-hidden"
      style={{ background: "var(--dark)" }}
    >
      <div className="absolute inset-0 cwd-grid-noise opacity-30" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-152 h-152 rounded-full blur-[160px]"
        style={{ background: "rgba(124,58,237,.25)" }}
      />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <Eyebrow dark>$ ready --to-build</Eyebrow>
          <h2 className="font-display text-3xl md:text-6xl font-semibold mt-6 tracking-tight">
            Have a Custom Web Project in Mind?
          </h2>
          <p className="text-slate-300 mt-5 text-lg">
            Let's turn your requirements into a fast, modern and scalable web
            solution built specifically for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-9">
            <Link to={"/contact"} className="rjs-btn-primary">
              Start a Project
            </Link>
            <Link
              to="https://wa.me/923326767615"
              target="_blank"
              rel="noopener noreferrer"
              className="rjs-btn-ghost text-white flex items-center gap-2"
            >
              <FaWhatsapp size={20} />
              +92 332 6767615
            </Link>{" "}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE ROOT
   ========================================================= */
export default function WebDevelopment() {
  return (
    <div className="cwd-root">
      <GlobalStyle />
      <CustomHero />
      <WhatIsCustom />
      <CustomServices />
      <CustomFeatures />
      <TechStack />
      <DevelopmentProcess />
      <CustomComparison />
      <PerformanceSection />
      <ResponsiveSection />
      <IntegrationSection />
      <UseCases />
      <CustomProjects />
      <FAQAccordion />
      <CTA />
    </div>
  );
}