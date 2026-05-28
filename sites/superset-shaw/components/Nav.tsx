"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#story" },
    { label: "Coaching", href: "#services" },
    { label: "Client Results", href: "#transformations" },
    { label: "Tips", href: "#feed" },
    { label: "Community", href: "#community" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 40px" : "18px 40px",
        paddingTop: scrolled
          ? "max(12px, env(safe-area-inset-top))"
          : "max(18px, env(safe-area-inset-top))",
        background: scrolled
          ? "rgba(245, 241, 235, 0.96)"
          : "rgba(245, 241, 235, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid #D9D3CB"
          : "1px solid transparent",
        transition: "background 0.4s ease, padding 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div
        className="nav-shell"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Name */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <span
            className="nav-logo-text"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 19,
              letterSpacing: "0.15em",
              color: "#1D1D1D",
            }}
          >
            DAVION THOMAS
          </span>
        </a>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: 36,
            margin: 0,
            padding: 0,
          }}
          className="hidden lg:flex"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#6B5F52",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#C89B4F")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#6B5F52")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#final-cta"
          className="btn-gold hidden lg:inline-flex"
          style={{ padding: "11px 24px", fontSize: 13 }}
        >
          Apply for Coaching
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#1D1D1D",
            cursor: "pointer",
            padding: 8,
          }}
          aria-label="Toggle menu"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 24,
                  height: 1.5,
                  background: i === 1 && menuOpen ? "transparent" : "#1D1D1D",
                  transform:
                    menuOpen && i === 0
                      ? "rotate(45deg) translate(4.5px, 4.5px)"
                      : menuOpen && i === 2
                      ? "rotate(-45deg) translate(4.5px, -4.5px)"
                      : "none",
                  transition: "transform 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            paddingTop: "max(88px, calc(env(safe-area-inset-top) + 72px))",
            paddingLeft: "max(20px, env(safe-area-inset-left))",
            paddingRight: "max(20px, env(safe-area-inset-right))",
            paddingBottom: "max(32px, env(safe-area-inset-bottom))",
            background: "rgba(245, 241, 235, 0.98)",
            borderTop: "1px solid #D9D3CB",
            overflowY: "auto",
            zIndex: -1,
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    letterSpacing: "0.06em",
                    color: "#1D1D1D",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#final-cta"
            className="btn-gold"
            style={{ marginTop: 28, display: "inline-flex" }}
          >
            Apply for Coaching
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
