"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const tiles = [
  {
    id: "feat",
    type: "VIDEO",
    title: "3 Mistakes Keeping You Overweight",
    video: "/images/Speaking to camera 1.mp4",
    featured: true,
  },
  {
    id: "t1",
    type: "REEL",
    title: "Why Motivation Fails",
    video: "/images/eating_food_vid.mp4",
    featured: false,
  },
  {
    id: "t2",
    type: "VIDEO",
    title: "What College Sports Taught Me",
    video: "/images/talking_to_camera.mp4",
    featured: false,
  },
  {
    id: "t3",
    type: "TIP",
    title: "How to Build Real Discipline",
    bg: `
      radial-gradient(ellipse 70% 45% at 50% 0%, rgba(255,240,195,0.55) 0%, transparent 50%),
      linear-gradient(165deg, #D8C090 0%, #B89060 38%, #886030 68%, #583A10 100%)
    `,
    featured: false,
  },
  {
    id: "t4",
    type: "VIDEO",
    title: "The Truth About Calorie Deficits",
    bg: `
      radial-gradient(ellipse 70% 45% at 50% 0%, rgba(195,220,245,0.5) 0%, transparent 50%),
      linear-gradient(165deg, #B0C8E0 0%, #8098B8 38%, #506890 68%, #304058 100%)
    `,
    featured: false,
  },
  {
    id: "t5",
    type: "REEL",
    title: "Best Pre-Workout Meal Ideas",
    bg: `
      radial-gradient(ellipse 70% 45% at 50% 0%, rgba(255,235,195,0.55) 0%, transparent 50%),
      linear-gradient(165deg, #D4B888 0%, #AC8450 38%, #785420 68%, #483208 100%)
    `,
    featured: false,
  },
];

export default function FeedSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="feed" style={{ background: "#F5F1EB" }}>
      <div
        className="container-wide"
        style={{ paddingTop: "clamp(80px, 10vw, 120px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 40,
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
                color: "#1D1D1D",
                lineHeight: 1,
              }}
            >
              Fitness Tips & Insights
            </h2>
          </motion.div>

          <a
            href="https://www.instagram.com/supersetshaw"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C89B4F",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 500,
            }}
          >
            Follow for More <span style={{ fontSize: 16 }}>→</span>
          </a>
        </div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 220px)",
            gap: 4,
          }}
        >
          {tiles.map((tile) => (
            <div
              key={tile.id}
              onMouseEnter={() => setHovered(tile.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                gridColumn: tile.featured ? "span 2" : "span 1",
                gridRow: tile.featured ? "span 2" : "span 1",
                background: (tile as { bg?: string }).bg ?? "#0F0C08",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid",
                borderColor: hovered === tile.id ? "rgba(200,155,79,0.4)" : "transparent",
                transition: "border-color 0.3s ease",
              }}
            >
              {/* Background video */}
              {"video" in tile && (
                <video
                  src={(tile as { video: string }).video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}

              {/* Sunlight flare (gradient tiles only) */}
              {"bg" in tile && (
                <div
                  style={{
                    position: "absolute",
                    top: "-8%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "130%",
                    height: "50%",
                    background:
                      "radial-gradient(ellipse 55% 75% at 50% 0%, rgba(255,248,220,0.35) 0%, transparent 65%)",
                    pointerEvents: "none",
                  }}
                />
              )}

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

              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(245,241,235,0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.35s ease",
                  ...(hovered === tile.id && {
                    background: "rgba(245,241,235,0.35)",
                  }),
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.9)",
                    background: "rgba(200,155,79,0.85)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: hovered === tile.id ? 1 : 0,
                    transform: hovered === tile.id ? "scale(1)" : "scale(0.7)",
                    transition: "opacity 0.35s ease, transform 0.35s ease",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                    <path d="M4 2l10 6-10 6V2z" />
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
                  background: "#C89B4F",
                  color: "#FFFFFF",
                  padding: "4px 9px",
                  fontWeight: 700,
                  zIndex: 2,
                }}
              >
                {tile.type}
              </div>

              {/* Bottom title */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "36px 16px 16px",
                  background:
                    "linear-gradient(to top, rgba(245,241,235,0.88) 0%, transparent 100%)",
                  zIndex: 2,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: tile.featured
                      ? "clamp(18px, 2.5vw, 26px)"
                      : "clamp(13px, 1.4vw, 16px)",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    color: "#1D1D1D",
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
            marginTop: 28,
            textAlign: "center",
            fontFamily: "var(--font-body)",
            fontSize: 12,
            letterSpacing: "0.2em",
            color: "#A8917B",
            textTransform: "uppercase",
          }}
        >
          @supersetshaw
        </div>
      </div>
    </section>
  );
}
