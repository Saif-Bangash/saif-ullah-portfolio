/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = ["home", "about", "resume", "projects", "contact"];
const NAV_PATHS = {
  home: "/",
  about: "/about",
  resume: "/resume",
  projects: "/projects",
  contact: "/contact",
};

const C = {
  bg: "#05070B",
  surface: "rgba(247, 210, 107, 0.25)",
  border: "rgba(255,255,255,0.09)",
  muted: "#8891A5",
  active: "#F7D26B",
  from: "#F7D26B",
  to: "#D9A93E",
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState(null);
  const itemRefs = useRef({});
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const currentItem = Object.entries(NAV_PATHS).find(
      ([, path]) => path === location.pathname,
    );
    setActive(currentItem?.[0] ?? "home");
  }, [location.pathname]);

  useLayoutEffect(() => {
    const key = hovered || active;
    const el = itemRefs.current[key];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
  }, [hovered, active]);

  const go = (id) => {
    setOpen(false);
    setActive(id);
    navigate(NAV_PATHS[id]);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        background: "#010C24",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${C.border}`,
        transition: "background 0.4s ease, backdrop-filter 0.4s ease, -webkit-backdrop-filter 0.4s ease",
        overflow: "hidden",  
      }}
    >
      <style>{`
        @keyframes pulseDot {
          0%   { box-shadow: 0 0 0 0 rgba(247,210,107,0.4); }
          70%  { box-shadow: 0 0 0 6px rgba(247,210,107,0); }
          100% { box-shadow: 0 0 0 0 rgba(247,210,107,0); }
        }
        .sb-pulse { animation: pulseDot 2.2s ease-out infinite; }
        .sb-navbtn:focus-visible, .sb-icon-btn:focus-visible {
          outline: 2px solid ${C.from};
          outline-offset: 2px;
        }
        .sb-mobile-item:active {
          transform: scale(0.97);
          filter: brightness(1.08);
        }
        @media (prefers-reduced-motion: reduce) {
          .sb-pulse { animation: none; }
        }
      `}</style>

      {/* ===== Left Side Gradient Overlay ===== */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 140,
          height: "100%",
          background: `radial-gradient(circle at left, ${C.from} 0%, rgba(247,210,107,0.15) 40%, transparent 60%)`,
          pointerEvents: "none",
          opacity: 0.6,
          zIndex: 1,
        }}
      />

      {/* ===== Right Side Gradient Overlay ===== */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 140,
          height: "100%",
          background: `radial-gradient(circle at right, ${C.to} 0%, rgba(217,169,62,0.15) 30%, transparent 70%)`,
          pointerEvents: "none",
          opacity: 0.6,
          zIndex: 1,
        }}
      />

      <div
        className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-10"
        style={{ height: 72, position: "relative", zIndex: 2 }}
      >
        {/* ===== Logo ===== */}
        <button
          onClick={() => go("home")}
          aria-label="Go to homepage"
          className="sb-icon-btn w-28 sm:w-32 md:w-36 shrink-0"
          style={{ display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer" }}
        >
          <img
            src="/assets/logo/logo (2).png"
            alt="Saifullah Bangash"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </button>

        {/* ===== Desktop nav — sliding pill ===== */}
        <div
          className="hidden md:flex items-center"
          onMouseLeave={() => setHovered(null)}
          style={{
            position: "relative",
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 999,
            padding: 4,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 4,
              left: pill.left,
              width: pill.width,
              height: "calc(100% - 8px)",
              borderRadius: 999,
              background: "rgba(247,210,107,0.12)",
              opacity: pill.opacity,
              transition: "left 0.3s cubic-bezier(.4,0,.2,1), width 0.3s cubic-bezier(.4,0,.2,1), opacity 0.2s ease",
            }}
          />
          {NAV_ITEMS.map((item) => {
            const isActive = active === item;
            return (
              <button
                key={item}
                ref={(el) => (itemRefs.current[item] = el)}
                onMouseEnter={() => setHovered(item)}
                onClick={() => go(item)}
                className="sb-navbtn"
                style={{
                  position: "relative",
                  padding: "9px 18px",
                  fontSize: 12.5,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: isActive ? C.active : C.muted,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.25s ease",
                }}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* ===== Status + CTA ===== */}
        <div className="hidden md:flex items-center gap-5">
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11.5, color: C.muted, letterSpacing: "0.04em" }}>
            <span
              className="sb-pulse"
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#F7D26B", display: "inline-block" }}
            />
            Available for work
          </div>
          <button
            onClick={() => go("contact")}
            className="sb-icon-btn"
            style={{
              padding: "10px 22px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 700,
              color: "#05070B",
              background: `linear-gradient(120deg, ${C.from}, ${C.to})`,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 22px -8px rgba(247,210,107,0.45)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Let's talk
          </button>
        </div>

        {/* ===== Mobile toggle ===== */}
        <button
          className="flex md:hidden sb-icon-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
            background: open ? `linear-gradient(120deg, ${C.from}, ${C.to})` : C.surface,
            border: open ? "1px solid transparent" : `1px solid ${C.border}`,
            color: open ? "#05070B" : "#8891A5",
            cursor: "pointer",
            transition: "background 0.3s ease, color 0.3s ease, border 0.3s ease",
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ===== Scroll progress bar ===== */}
      <div style={{ height: 2, width: "100%", background: "rgba(255,255,255,0.05)", position: "relative", zIndex: 2 }}>
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${C.from}, ${C.to})`,
            transition: "width 0.15s linear",
          }}
        />
      </div>

      {/* ===== Mobile menu ===== */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          inset: 0,
          height: "100dvh",
          background: C.bg,
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          pointerEvents: open ? "auto" : "none",
          overflowY: "auto",
          transition: "opacity 0.4s ease",
          zIndex: 100,
        }}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="sb-icon-btn"
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 1,
            width: 42,
            height: 42,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: C.surface,
            border: `1px solid ${C.border}`,
            color: "#8891A5",
            cursor: "pointer",
          }}
        >
          <X size={20} />
        </button>

        <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: "90px 24px 40px" }}>
          <img
            src="/assets/logo/logo (2).png"
            alt="Saifullah Bangash"
            style={{ width: 128, height: "auto", marginBottom: 10, objectFit: "contain" }}
          />

          {NAV_ITEMS.map((item, i) => {
            const isActive = active === item;
            return (
              <button
                key={item}
                onClick={() => go(item)}
                className="sb-navbtn sb-mobile-item"
                style={{
                  width: "100%",
                  maxWidth: 300,
                  fontSize: 18,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  textAlign: "center",
                  padding: "14px 20px",
                  borderRadius: 16,
                  color: isActive ? C.active : "#8891A5",
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  cursor: "pointer",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(14px)",
                  transition: `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s, background 0.2s ease, color 0.2s ease, border 0.2s ease`,
                }}
              >
                {item}
              </button>
            );
          })}

          <button
            onClick={() => go("contact")}
            className="sb-mobile-item"
            style={{
              width: "100%",
              maxWidth: 300,
              marginTop: 10,
              padding: "14px 20px",
              borderRadius: 16,
              fontSize: 15,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#05070B",
              background: `linear-gradient(120deg, ${C.from}, ${C.to})`,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 22px -8px rgba(247,210,107,0.45)",
            }}
          >
            Let's talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;