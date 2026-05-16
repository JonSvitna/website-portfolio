"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "athletic",
    label: "01",
    title: "Athletic\nConditioning",
    description:
      "Improve speed, power, explosiveness and on-court performance. Train like an elite athlete — no matter your starting point.",
    bg: "linear-gradient(135deg, #0f0d0a 0%, #1a1409 100%)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="16" cy="6" r="3"/>
        <path d="M16 9v8M10 24l6-7 6 7M4 28h24"/>
      </svg>
    ),
  },
  {
    id: "fatloss",
    label: "02",
    title: "Fat Loss\nCoaching",
    description:
      "Sustainable fat loss without extreme diets or burnout. Real strategies that fit your real life — and actually last.",
    bg: "linear-gradient(135deg, #0d1108 0%, #121a09 100%)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M16 4C9 4 4 9 4 16s5 12 12 12 12-5 12-12S23 4 16 4z"/>
        <path d="M12 16l3 3 5-6"/>
      </svg>
    ),
  },
  {
    id: "mindset",
    label: "03",
    title: "Mindset &\nAccountability",
    description:
      "Build daily discipline with structure, systems, and support. Your mind changes first — the body follows.",
    bg: "linear-gradient(135deg, #0a0d12 0%, #0f1420 100%)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M16 4a8 8 0 0 1 8 8c0 6-8 16-8 16S8 18 8 12a8 8 0 0 1 8-8z"/>
        <circle cx="16" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    id: "lifestyle",
    label: "04",
    title: "Lifestyle\nTransformation",
    description:
      "We don&apos;t just change bodies, we build better lives. Nutrition, sleep, faith, family — the full picture.",
    bg: "linear-gradient(135deg, #110e08 0%, #1a1509 100%)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 28V16l6-8h12l6 8v12"/>
        <path d="M12 28v-8h8v8"/>
        <path d="M4 20h24"/>
      </svg>
    ),
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" style={{ background: "#111009" }}>
      <div
        className="container-wide"
        style={{
          paddingTop: "clamp(80px, 10vw, 120px)",
          paddingBottom: "clamp(80px, 10vw, 120px)",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 56 }}
        >
          <p className="eyebrow" style={{ marginBottom: 12 }}>
            Coaching services
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              color: "#FAF9F7",
              lineHeight: 1,
            }}
          >
            How I Can Help You
          </h2>
        </motion.div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            background: "#0d0b08",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                background: hovered === service.id ? "#1a1614" : "#161614",
                padding: "clamp(36px, 4vw, 52px) clamp(28px, 3.5vw, 44px)",
                display: "flex",
                gap: 28,
                overflow: "hidden",
                transition: "background 0.4s ease",
                cursor: "pointer",
              }}
            >
              {/* Gold left accent */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 3,
                  height: hovered === service.id ? "100%" : "0%",
                  background: "#C9A84C",
                  transition: "height 0.5s cubic-bezier(0.25, 0.1, 0.1, 1)",
                }}
              />

              {/* Photo thumbnail — warm gradient block */}
              <div
                style={{
                  width: 100,
                  minWidth: 100,
                  aspectRatio: "1",
                  background: service.bg,
                  position: "relative",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(201,168,76,0.6)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxShadow: "inset 0 0 30px rgba(0,0,0,0.5)",
                  }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                  {service.icon}
                </div>
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    letterSpacing: "0.3em",
                    color: "rgba(201,168,76,0.5)",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {service.label}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.8vw, 30px)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#FAF9F7",
                    lineHeight: 1.1,
                    marginBottom: 14,
                    whiteSpace: "pre-line",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(13px, 1.4vw, 15px)",
                    color: "rgba(250,249,247,0.55)",
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />

                <a
                  href="#final-cta"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "gap 0.3s ease",
                  }}
                >
                  Learn More
                  <span style={{ fontSize: 14 }}>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
