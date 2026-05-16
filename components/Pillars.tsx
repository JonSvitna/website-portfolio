"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const pillars = [
  {
    id: "god",
    number: "01",
    title: "God",
    subtitle: "The Foundation",
    description:
      "Faith creates discipline when motivation disappears. Every rep, every sacrifice, every win starts from a place of purpose greater than yourself.",
    bg: `
      radial-gradient(ellipse 60% 70% at 40% 20%, rgba(100,130,180,0.10) 0%, transparent 55%),
      radial-gradient(ellipse 50% 60% at 70% 80%, rgba(50,80,130,0.08) 0%, transparent 55%),
      linear-gradient(170deg, #0d1117 0%, #111820 55%, #0a0e14 100%)
    `,
    iconColor: "rgba(180, 200, 240, 0.8)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <line x1="18" y1="4" x2="18" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="8" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "family",
    number: "02",
    title: "Family",
    subtitle: "Your Why",
    description:
      "Your transformation should inspire the people around you. When you win, your family wins. Build a legacy they can inherit.",
    bg: `
      radial-gradient(ellipse 55% 65% at 45% 25%, rgba(201,168,76,0.10) 0%, transparent 55%),
      radial-gradient(ellipse 40% 55% at 65% 85%, rgba(160,100,20,0.12) 0%, transparent 50%),
      linear-gradient(170deg, #150f08 0%, #1c1208 55%, #100c06 100%)
    `,
    iconColor: "rgba(201, 168, 76, 0.8)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="10" r="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="9" cy="14" r="3.5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="27" cy="14" r="3.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 30c0-5 3-8 7-8s7 3 7 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 26c0-1 3-4 7-4s7 3 7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 30c0-7 4-10 9-10s9 3 9 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "fitness",
    number: "03",
    title: "Fitness",
    subtitle: "The Vehicle",
    description:
      "Fitness is the vehicle that unlocks confidence, structure, and longevity. The body you build reflects the discipline you carry.",
    bg: `
      radial-gradient(ellipse 55% 65% at 50% 20%, rgba(80,160,100,0.07) 0%, transparent 55%),
      radial-gradient(ellipse 40% 50% at 40% 80%, rgba(40,100,60,0.08) 0%, transparent 50%),
      linear-gradient(170deg, #080e0a 0%, #0d150f 55%, #080b09 100%)
    `,
    iconColor: "rgba(150, 200, 160, 0.8)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="1" y="15" width="6" height="6" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="29" y="15" width="6" height="6" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="7" y="12" width="5" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="24" y="12" width="5" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="18" x2="24" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Pillars() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="pillars" style={{ background: "#0d0b08" }}>
      {/* Section header */}
      <div
        style={{
          textAlign: "center",
          padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px) clamp(40px, 5vw, 60px)",
        }}
      >
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 16 }}
        >
          Built on three pillars
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 56px)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#FAF9F7",
          }}
        >
          The 3 Pillars
        </motion.h2>
      </div>

      {/* Pillars grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
        className="grid-cols-1 md:grid-cols-3"
      >
        {pillars.map((pillar, i) => (
          <motion.article
            key={pillar.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.1, 1], delay: i * 0.15 }}
            onMouseEnter={() => setHovered(pillar.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "relative",
              height: "clamp(420px, 55vw, 600px)",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/* Background image simulation */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: pillar.bg,
                transform: hovered === pillar.id ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.1, 1)",
              }}
            />

            {/* Scanline texture */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 3px,
                  rgba(255,255,255,0.006) 3px,
                  rgba(255,255,255,0.006) 4px
                )`,
                pointerEvents: "none",
              }}
            />

            {/* Dark overlay from bottom */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(13,11,8,0.97) 0%, rgba(13,11,8,0.6) 40%, rgba(13,11,8,0.15) 75%)",
                transition: "opacity 0.5s ease",
                opacity: hovered === pillar.id ? 0.88 : 1,
              }}
            />

            {/* Large number */}
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                fontFamily: "var(--font-display)",
                fontSize: 72,
                lineHeight: 1,
                color: "rgba(201,168,76,0.10)",
                userSelect: "none",
              }}
            >
              {pillar.number}
            </div>

            {/* Content — bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "40px 36px",
                zIndex: 2,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  color: pillar.iconColor,
                  marginBottom: 20,
                }}
              >
                {pillar.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 4.5vw, 52px)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#FAF9F7",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {pillar.title}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  marginBottom: 16,
                }}
              >
                {pillar.subtitle}
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(13px, 1.4vw, 15px)",
                  color: "rgba(250,249,247,0.65)",
                  lineHeight: 1.65,
                  maxWidth: 320,
                  opacity: hovered === pillar.id ? 1 : 0.85,
                  transition: "opacity 0.4s ease",
                }}
              >
                {pillar.description}
              </p>
            </div>

            {/* Gold left border on hover */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 3,
                height: hovered === pillar.id ? "100%" : "0%",
                background: "#C9A84C",
                transition: "height 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)",
              }}
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
