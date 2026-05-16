"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const tiles = [
  {
    id: "feat",
    type: "VIDEO",
    title: "3 Mistakes Keeping You Overweight",
    bg: "linear-gradient(145deg, #1a1208 0%, #0f0d07 100%)",
    featured: true,
  },
  {
    id: "t1",
    type: "REEL",
    title: "Why Motivation Fails",
    bg: "linear-gradient(145deg, #0a0d12 0%, #0d1018 100%)",
    featured: false,
  },
  {
    id: "t2",
    type: "VIDEO",
    title: "What College Sports Taught Me",
    bg: "linear-gradient(145deg, #0e1108 0%, #0b0e07 100%)",
    featured: false,
  },
  {
    id: "t3",
    type: "TIP",
    title: "How to Build Real Discipline",
    bg: "linear-gradient(145deg, #130e08 0%, #0e0b06 100%)",
    featured: false,
  },
  {
    id: "t4",
    type: "VIDEO",
    title: "The Truth About Calorie Deficits",
    bg: "linear-gradient(145deg, #0d1210 0%, #0a0e0c 100%)",
    featured: false,
  },
  {
    id: "t5",
    type: "REEL",
    title: "Best Pre-Workout Meal Ideas",
    bg: "linear-gradient(145deg, #120f08 0%, #0d0b06 100%)",
    featured: false,
  },
];

export default function FeedSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="feed" style={{ background: "#0d0b08" }}>
      <div
        className="container-wide"
        style={{
          paddingTop: "clamp(80px, 10vw, 120px)",
          paddingBottom: "clamp(80px, 10vw, 120px)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 44,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow" style={{ marginBottom: 12 }}>
              Knowledge & content
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
              Fitness Tips & Insights
            </h2>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            href="https://www.instagram.com/supersetshaw"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C9A84C",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Follow for More
            <span style={{ fontSize: 16 }}>→</span>
          </motion.a>
        </div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 200px)",
            gap: 3,
          }}
          className="grid-cols-2 md:grid-cols-3"
        >
          {tiles.map((tile) => (
            <div
              key={tile.id}
              onMouseEnter={() => setHovered(tile.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                gridColumn: tile.featured ? "span 2" : "span 1",
                gridRow: tile.featured ? "span 2" : "span 1",
                background: tile.bg,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Vignette */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)",
                  pointerEvents: "none",
                }}
              />

              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(13,11,8,0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.35s ease",
                  ...(hovered === tile.id && {
                    background: "rgba(13,11,8,0.55)",
                  }),
                }}
              >
                {/* Play icon */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    border: "2px solid rgba(201,168,76,0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: hovered === tile.id ? 1 : 0,
                    transform: hovered === tile.id ? "scale(1)" : "scale(0.7)",
                    transition: "opacity 0.35s ease, transform 0.35s ease",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="#C9A84C">
                    <path d="M5 3l11 6-11 6V3z"/>
                  </svg>
                </div>
              </div>

              {/* Type badge */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  fontFamily: "var(--font-body)",
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  background: "#C9A84C",
                  color: "#0d0b08",
                  padding: "4px 8px",
                  fontWeight: 700,
                  zIndex: 2,
                }}
              >
                {tile.type}
              </div>

              {/* Title — bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "40px 16px 16px",
                  background: "linear-gradient(to top, rgba(13,11,8,0.9) 0%, transparent 100%)",
                  zIndex: 2,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: tile.featured ? "clamp(20px, 2.5vw, 28px)" : "clamp(14px, 1.5vw, 17px)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#FAF9F7",
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  {tile.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Instagram handle */}
        <div
          style={{
            marginTop: 36,
            textAlign: "center",
            fontFamily: "var(--font-body)",
            fontSize: 13,
            letterSpacing: "0.15em",
            color: "rgba(250,249,247,0.35)",
            textTransform: "uppercase",
          }}
        >
          @supersetshaw on Instagram
        </div>
      </div>
    </section>
  );
}
