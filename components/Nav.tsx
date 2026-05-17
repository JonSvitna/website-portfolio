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
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "14px clamp(16px, 4vw, 40px)" : "22px clamp(16px, 4vw, 40px)",
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
              width: 36,
              height: 36,
              background: "#C89B4F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontSize: 16,
              color: "#FFFFFF",
              letterSpacing: "0.05em",
              flexShrink: 0,
            }}
          >
            DW
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 19,
              letterSpacing: "0.15em",
              color: "#1D1D1D",
            }}
          >
            DEVIN WILLIAMS
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
            background: "rgba(245, 241, 235, 0.98)",
            borderTop: "1px solid #D9D3CB",
            padding: "28px 40px 32px",
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
