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
    photoImg: "/images/god.png",
    accentColor: "rgba(170, 200, 235, 0.9)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <line x1="16" y1="3" x2="16" y2="29" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="7" y1="12" x2="25" y2="12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
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
    photoImg: "/images/family.png",
    accentColor: "rgba(240, 215, 150, 0.9)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="16" cy="9" r="4.5" />
        <circle cx="8" cy="13" r="3" />
        <circle cx="24" cy="13" r="3" />
        <path d="M2 28c0-4.5 2.5-7.5 6-7.5s6.5 2.5 8 4.5" />
        <path d="M18 25c1.5-2 4.5-4.5 8-4.5s6 3 6 7.5" />
        <path d="M8 28c0-6 3.5-9 8-9s8 3 8 9" />
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
    photoImg: "/images/fitness.png",
    accentColor: "rgba(190, 220, 170, 0.9)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="0.5" y="14" width="5.5" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="26" y="14" width="5.5" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="6" y="11" width="4.5" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="21.5" y="11" width="4.5" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <line x1="10.5" y1="16" x2="21.5" y2="16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Pillars() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="pillars" style={{ background: "#F5F1EB" }}>
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          padding:
            "clamp(64px, 9vw, 112px) clamp(20px, 5vw, 80px) clamp(48px, 6vw, 72px)",
        }}
      >
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 14 }}
        >
          Built on three pillars
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(38px, 5.5vw, 60px)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#1D1D1D",
            marginBottom: 16,
          }}
        >
          The 3 Pillars
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(14px, 1.4vw, 16px)",
            color: "#A8917B",
            maxWidth: 420,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Every transformation is rooted in these three non-negotiables.
        </motion.p>
      </div>

      {/* Pillars grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
          background: "#D9D3CB",
          margin: "0 clamp(20px, 4vw, 60px)",
          marginBottom: "clamp(64px, 9vw, 112px)",
        }}
      >
        {pillars.map((pillar, i) => (
          <motion.article
            key={pillar.id}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number], delay: i * 0.14 }}
            onMouseEnter={() => setHovered(pillar.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "relative",
              height: "clamp(440px, 58vw, 620px)",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/* Pillar photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pillar.photoImg}
              alt={pillar.title}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                transform: hovered === pillar.id ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.1, 1)",
              }}
            />

            {/* Film grain */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `repeating-linear-gradient(
                  0deg, transparent, transparent 3px,
                  rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px
                )`,
                pointerEvents: "none",
              }}
            />

            {/* Sunlight from top */}
            <div
              style={{
                position: "absolute",
                top: "-5%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "120%",
                height: "45%",
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(255,248,220,0.35) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />

            {/* Bottom white gradient — bleeds into page */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "45%",
                background:
                  "linear-gradient(to top, rgba(245,241,235,0.95) 0%, rgba(245,241,235,0.6) 40%, transparent 100%)",
                transition: "opacity 0.4s ease",
              }}
            />

            {/* Number */}
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                fontFamily: "var(--font-display)",
                fontSize: 60,
                lineHeight: 1,
                color: "rgba(255,255,255,0.18)",
                userSelect: "none",
              }}
            >
              {pillar.number}
            </div>

            {/* Content */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "32px 32px 36px",
                zIndex: 2,
              }}
            >
              {/* Icon */}
              <div style={{ color: pillar.accentColor, marginBottom: 14 }}>
                {pillar.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 4.5vw, 52px)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#1D1D1D",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {pillar.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#C89B4F",
                  marginBottom: 14,
                  fontWeight: 500,
                }}
              >
                {pillar.subtitle}
              </p>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(13px, 1.3vw, 15px)",
                  color: "#3A3530",
                  lineHeight: 1.65,
                  maxWidth: 300,
                }}
              >
                {pillar.description}
              </p>
            </div>

            {/* Gold left accent on hover */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 3,
                height: hovered === pillar.id ? "100%" : "0%",
                background: "#C89B4F",
                transition: "height 0.55s cubic-bezier(0.25, 0.1, 0.1, 1)",
              }}
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
