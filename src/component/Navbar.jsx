/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Menu, X, Globe2, Atom, Layers, TrendingUp, ChevronDown, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = ["home", "about", "services", "projects", "contact"];

const NAV_PATHS = {
  home: "/",
  about: "/about",
  services: "/services",
  projects: "/projects",
  contact: "/contact",
};

const SERVICE_ITEMS = [
   {
    path: "/custom-web-development",
    label: "Custom Web Development",
    icon: Globe2,
  },
  {
    path: "/react-development",
    label: "React JS Development",
    icon: Atom,
  },
  {
    path: "/wordpress-development",
    label: "WordPress Development",
    icon: Layers,
  },
  {
    path: "/seo-services",
    label: "SEO Optimization",
    icon: TrendingUp,
  },
];

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const itemRefs = useRef({});
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });
  const closeTimer = useRef(null);

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
    const key = hovered || (servicesOpen ? "services" : active);
    const el = itemRefs.current[key];

    if (!el) return;

    const nav = el.closest(".desktop-nav-container");
    if (!nav) return;

    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    setPill({
      left: elRect.left - navRect.left,
      width: elRect.width,
      opacity: 1,
    });
  }, [hovered, active, servicesOpen]);

  const go = (id) => {
    setOpen(false);
    setServicesOpen(false);
    setActive(id);
    navigate(NAV_PATHS[id]);
  };

  const goToService = (path) => {
    setServicesOpen(false);
    setOpen(false);
    setActive("services");
    navigate(path);
  };

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setHovered("services");
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
      setHovered((prev) => (prev === "services" ? null : prev));
    }, 200);
  };

  const handleItemHover = (item) => {
    clearTimeout(closeTimer.current);
    setServicesOpen(false);
    setHovered(item);
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
        overflow: "visible",
      }}
    >
      <style>{`
        @keyframes pulseDot {
          0%   { box-shadow: 0 0 0 0 rgba(247,210,107,0.4); }
          70%  { box-shadow: 0 0 0 6px rgba(247,210,107,0); }
          100% { box-shadow: 0 0 0 0 rgba(247,210,107,0); }
        }
        @keyframes dropdownItemIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
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
        .sb-service-row {
          transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
          animation: dropdownItemIn 0.35s cubic-bezier(.4,0,.2,1) both;
        }
        .sb-service-row:hover {
          background: rgba(247,210,107,0.10);
          border-color: rgba(247,210,107,0.35);
          transform: translateX(3px);
        }
        .sb-service-icon {
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }
        .sb-service-row:hover .sb-service-icon {
          background: linear-gradient(120deg, ${C.from}, ${C.to});
          color: #05070B;
          transform: scale(1.08);
        }
        @media (prefers-reduced-motion: reduce) {
          .sb-pulse { animation: none; }
          .sb-service-row, .sb-service-icon { transition: none; animation: none; }
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

        {/* ===== Desktop Nav ===== */}
        <div
          className="desktop-nav-container hidden md:flex items-center"
          onMouseLeave={() => {
            if (!servicesOpen) setHovered(null);
          }}
          style={{
            position: "relative",
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 999,
            padding: 3,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 4,
              left: pill.left,
              width: pill.width,
              height: "calc(100% - 6px)",
              borderRadius: 999,
              background: "rgba(247,210,107,0.12)",
              opacity: pill.opacity,
              transition: "left 0.3s cubic-bezier(.4,0,.2,1), width 0.3s cubic-bezier(.4,0,.2,1), opacity 0.2s ease",
            }}
          />
          {NAV_ITEMS.map((item) => {
            const isActive = active === item || (servicesOpen && item === "services");
            const isServices = item === "services";

            const button = (
              <button
                key={item}
                ref={(el) => (itemRefs.current[item] = el)}
                onMouseEnter={() => (isServices ? openServices() : handleItemHover(item))}
                onClick={() => go(item)}
                className="sb-navbtn"
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
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
                {isServices && (
                  <ChevronDown
                    size={13}
                    style={{
                      transition: "transform 0.25s ease",
                      transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                )}
              </button>
            );

            if (!isServices) return button;

            return (
              <div
                key={item}
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
                style={{ position: "relative" }}
              >
                {button}

                {/* ===== Dropdown Wrapper ===== */}
                <div
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    paddingTop: 12,
                    transform: `translateX(-50%) translateY(${servicesOpen ? "0" : "-10px"}) scale(${servicesOpen ? 1 : 0.97})`,
                    transformOrigin: "top center",
                    opacity: servicesOpen ? 1 : 0,
                    visibility: servicesOpen ? "visible" : "hidden",
                    pointerEvents: servicesOpen ? "auto" : "none",
                    transition: "opacity 0.25s ease, transform 0.25s cubic-bezier(.4,0,.2,1), visibility 0.25s",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      left: "50%",
                      transform: "translateX(-50%) rotate(45deg)",
                      width: 12,
                      height: 12,
                      background: "rgba(46,36,16,0.96)",
                      borderLeft: "1px solid rgba(217,169,62,0.28)",
                      borderTop: "1px solid rgba(217,169,62,0.28)",
                      borderRadius: 3,
                    }}
                  />

                  <div
                    key={servicesOpen ? "open" : "closed"}
                    style={{
                      position: "relative",
                      width: 260,
                      borderRadius: 20,
                      background: `linear-gradient(160deg, rgba(46,36,16,0.96) 0%, rgba(16,13,9,0.97) 55%, rgba(10,9,8,0.98) 100%)`,
                      backdropFilter: "blur(18px)",
                      WebkitBackdropFilter: "blur(18px)",
                      border: `1px solid rgba(217,169,62,0.28)`,
                      boxShadow: `0 28px 56px -18px rgba(0,0,0,0.6), 0 0 36px -10px rgba(217,169,62,0.2)`,
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ padding: "8px 8px 6px" }}>
                      {SERVICE_ITEMS.map(({ path, label, icon: ItemIcon }, i) => (
                        <button
                          key={path}
                          onClick={() => goToService(path)}
                          className="sb-navbtn sb-service-row"
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "10px 12px",
                            borderRadius: 12,
                            background: "transparent",
                            border: "1px solid transparent",
                            textAlign: "left",
                            cursor: "pointer",
                            animationDelay: `${i * 45}ms`,
                          }}
                        >
                          <span
                            className="sb-service-icon"
                            style={{
                              width: 32,
                              height: 32,
                              flexShrink: 0,
                              borderRadius: 10,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: "rgba(247,210,107,0.12)",
                              color: C.active,
                            }}
                          >
                            <ItemIcon size={16} />
                          </span>
                          <span
                            style={{
                              fontSize: 13,
                              fontWeight: 600,
                              letterSpacing: "0.02em",
                              textTransform: "none",
                              color: "#F5F6FA",
                            }}
                          >
                            {label}
                          </span>
                        </button>
                      ))}

                      {/* ===== View All Services Button ===== */}
                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 6, paddingTop: 6 }}>
                        <button
                          onClick={() => go("services")}
                          className="sb-navbtn sb-service-row"
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 8,
                            padding: "10px 12px",
                            borderRadius: 12,
                            background: "rgba(247,210,107,0.08)",
                            border: "1px solid rgba(247,210,107,0.2)",
                            textAlign: "left",
                            cursor: "pointer",
                            animationDelay: `${SERVICE_ITEMS.length * 45}ms`,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 12.5,
                              fontWeight: 700,
                              color: C.active,
                              letterSpacing: "0.03em",
                              textTransform: "none",
                              flexGrow: 1,
                            }}
                          >
                            View All Services
                          </span>
                          <ArrowRight size={14} color={C.active} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

        {/* ===== Mobile Toggle ===== */}
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

      {/* ===== Progress Bar ===== */}
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

      {/* ===== Mobile Menu ===== */}
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

          <div style={{ width: "100%", maxWidth: 300, display: "flex", flexDirection: "column", gap: 8, marginTop: -4 }}>
            {SERVICE_ITEMS.map(({ path, label, icon: ItemIcon }) => (
              <button
                key={path}
                onClick={() => goToService(path)}
                className="sb-mobile-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 16px",
                  borderRadius: 12,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  color: C.muted,
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${C.border}`,
                  cursor: "pointer",
                }}
              >
                <ItemIcon size={15} color={C.active} />
                {label}
              </button>
            ))}
          </div>

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