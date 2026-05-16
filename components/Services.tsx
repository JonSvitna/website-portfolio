"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "athletic",
    num: "01",
    title: "Athletic Conditioning",
    description:
      "Improve speed, power, explosiveness, and on-court performance. Train like an elite athlete — no matter your starting point.",
    photoBg: `linear-gradient(165deg, #D9C490 0%, #C4955A 38%, #8B5E30 72%, #5C3518 100%)`,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="14" cy="5" r="3" />
        <path d="M14 8v8M8 22l6-6 6 6M2 26h24" />
      </svg>
    ),
  },
  {
    id: "fatloss",
    num: "02",
    title: "Fat Loss Coaching",
    description:
      "Sustainable fat loss without extreme diets or burnout. Real strategies that fit your real life — and actually last.",
    photoBg: `linear-gradient(165deg, #BDD4C0 0%, #8DAE78 35%, #5A8040 65%, #2E5418 100%)`,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M14 3C7.5 3 3 7.5 3 14s4.5 11 11 11 11-4.5 11-11S20.5 3 14 3z" />
        <path d="M10 14l3 3 5-6" />
      </svg>
    ),
  },
  {
    id: "mindset",
    num: "03",
    title: "Mindset & Accountability",
    description:
      "Build daily discipline with structure, systems, and support. Your mind changes first — the body follows.",
    photoBg: `linear-gradient(165deg, #B8CDE0 0%, #8BAAC8 33%, #547090 62%, #2A4A68 100%)`,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M14 3a7 7 0 0 1 7 7c0 5.5-7 15-7 15S7 15.5 7 10a7 7 0 0 1 7-7z" />
        <circle cx="14" cy="10.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: "lifestyle",
    num: "04",
    title: "Lifestyle Transformation",
    description:
      "We don't just change bodies, we build better lives. Nutrition, sleep, faith, family — the complete picture.",
    photoBg: `linear-gradient(165deg, #D4C8A0 0%, #B8A070 35%, #8A7040 65%, #5A4818 100%)`,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M3 26V15l5-7h12l5 7v11" />
        <path d="M10 26v-7h8v7" />
        <path d="M3 18h22" />
      </svg>
    ),
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" style={{ background: "#FFFFFF" }}>
      <div
        className="container-wide"
        style={{ paddingTop: "clamp(80px, 10vw, 120px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 56 }}
        >
          <p className="eyebrow" style={{ marginBottom: 12 }}>
            Coaching services
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 56px)",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                color: "#1D1D1D",
                lineHeight: 1,
              }}
            >
              How I Can Help You
            </h2>
            <a
              href="#final-cta"
              className="btn-gold"
              style={{ fontSize: 13, padding: "13px 28px" }}
            >
              Apply Now
            </a>
          </div>
        </motion.div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#FFFFFF",
                border: "1.5px solid",
                borderColor: hovered === s.id ? "#C89B4F" : "#E8E2D8",
                boxShadow: hovered === s.id
                  ? "0 8px 40px rgba(200,155,79,0.12)"
                  : "0 2px 16px rgba(0,0,0,0.04)",
                padding: "clamp(28px, 3.5vw, 44px)",
                display: "flex",
                gap: 24,
                transition: "border-color 0.35s ease, box-shadow 0.35s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Gold top border on hover */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: hovered === s.id ? "100%" : "0%",
                  height: 3,
                  background: "#C89B4F",
                  transition: "width 0.5s cubic-bezier(0.25, 0.1, 0.1, 1)",
                }}
              />

              {/* Photo thumb */}
              <div
                style={{
                  width: 88,
                  height: 88,
                  minWidth: 88,
                  background: s.photoBg,
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {/* Sunlight flare */}
                <div
                  style={{
                    position: "absolute",
                    top: "-15%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "130%",
                    height: "55%",
                    background:
                      "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(255,248,200,0.35) 0%, transparent 65%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxShadow: "inset 0 0 30px rgba(0,0,0,0.2)",
                  }}
                />
                <div style={{ position: "relative", zIndex: 1, color: "rgba(255,248,220,0.9)" }}>
                  {s.icon}
                </div>
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    letterSpacing: "0.3em",
                    color: "#C89B4F",
                    textTransform: "uppercase",
                    marginBottom: 8,
                    fontWeight: 500,
                  }}
                >
                  {s.num}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.5vw, 28px)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#1D1D1D",
                    lineHeight: 1.1,
                    marginBottom: 12,
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(13px, 1.3vw, 15px)",
                    color: "#6B5F52",
                    lineHeight: 1.7,
                    marginBottom: 18,
                  }}
                >
                  {s.description}
                </p>

                <a
                  href="#final-cta"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#C89B4F",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontWeight: 500,
                  }}
                >
                  Learn More <span style={{ fontSize: 14 }}>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
