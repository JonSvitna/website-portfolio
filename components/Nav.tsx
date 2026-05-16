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
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.1, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "14px 40px" : "24px 40px",
        background: scrolled
          ? "rgba(13, 11, 8, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(201, 168, 76, 0.15)"
          : "1px solid transparent",
        transition:
          "background 0.4s ease, padding 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              background: "#C9A84C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontSize: 18,
              color: "#0d0b08",
              letterSpacing: "0.05em",
              flexShrink: 0,
            }}
          >
            SS
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              letterSpacing: "0.15em",
              color: "#FAF9F7",
            }}
          >
            SUPERSET SHAW
          </span>
        </a>

        {/* Desktop Nav Links */}
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
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(250, 249, 247, 0.75)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "#C9A84C")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(250, 249, 247, 0.75)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#final-cta" className="btn-gold hidden lg:inline-flex" style={{ padding: "12px 24px", fontSize: 13 }}>
          Apply for Coaching
        </a>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#FAF9F7",
            cursor: "pointer",
            padding: 8,
          }}
          aria-label="Toggle menu"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <span
              style={{
                display: "block",
                width: 24,
                height: 1.5,
                background: menuOpen ? "#C9A84C" : "#FAF9F7",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
                transition: "transform 0.3s ease, background 0.3s ease",
              }}
            />
            <span
              style={{
                display: "block",
                width: 24,
                height: 1.5,
                background: "#FAF9F7",
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            />
            <span
              style={{
                display: "block",
                width: 24,
                height: 1.5,
                background: menuOpen ? "#C9A84C" : "#FAF9F7",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
                transition: "transform 0.3s ease, background 0.3s ease",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: "rgba(13, 11, 8, 0.98)",
            borderTop: "1px solid rgba(201, 168, 76, 0.15)",
            padding: "24px 40px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    letterSpacing: "0.08em",
                    color: "#FAF9F7",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#final-cta" className="btn-gold" style={{ marginTop: 24, display: "inline-flex" }}>
            Apply for Coaching
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
