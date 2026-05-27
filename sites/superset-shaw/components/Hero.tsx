"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#F5F1EB",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── LEFT PANEL — Text ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding:
            "clamp(120px, 14vw, 180px) clamp(24px, 5vw, 80px) clamp(60px, 8vw, 100px)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ maxWidth: 560 }}
        >
          {/* Eyebrow */}
          <motion.p variants={fadeUp} className="eyebrow" style={{ marginBottom: 24 }}>
            Faith.&nbsp; Family.&nbsp; Fitness.
          </motion.p>

          {/* Headline */}
          <motion.div variants={fadeUp}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(68px, 9vw, 120px)",
                lineHeight: 0.9,
                letterSpacing: "0.01em",
                textTransform: "uppercase",
                color: "#1D1D1D",
                margin: "0 0 28px",
              }}
            >
              Discipline
              <br />
              Builds
              <br />
              <span
                style={{
                  color: "#C89B4F",
                }}
              >
                Legacy
              </span>
            </h1>
          </motion.div>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 1.6vw, 18px)",
              color: "#6B5F52",
              lineHeight: 1.75,
              marginBottom: 40,
              maxWidth: 400,
            }}
          >
            I help everyday people transform their body, mindset, and life
            through proven coaching and accountability.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}
          >
            <a href="#final-cta" className="btn-gold">
              Start Your Transformation
            </a>
            <a href="#transformations" className="btn-outline">
              View Client Wins
            </a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            variants={fadeUp}
            style={{
              borderTop: "1px solid #D9D3CB",
              paddingTop: 28,
              display: "flex",
              gap: "clamp(20px, 4vw, 44px)",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: "🏀", label: "Former\nCollege Athlete" },
              { icon: "💯", label: "100+\nLives Changed" },
              { icon: "✝", label: "Faith-Driven\nCoach" },
              { icon: "📍", label: "Online &\nIn-Person" },
            ].map((s) => (
              <div
                key={s.label}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <span style={{ fontSize: 20 }}>{s.icon}</span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#A8917B",
                    lineHeight: 1.45,
                    whiteSpace: "pre-line",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative vertical text */}
        <div
          style={{
            position: "absolute",
            right: 20,
            top: "50%",
            transform: "translateY(-50%) rotate(90deg)",
            fontFamily: "var(--font-body)",
            fontSize: 9,
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "#D9D3CB",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          Davion Thomas — Transformational Fitness
        </div>
      </div>

      {/* ── RIGHT PANEL — hidden on mobile ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number] }}
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: isMobile ? "none" : "block",
        }}
      >
        {/* Hero portrait */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Homepage_intro.png"
          alt="Davion Thomas"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />

        {/* Sunlight flare — top center */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "140%",
            height: "55%",
            background:
              "radial-gradient(ellipse 60% 90% at 50% 0%, rgba(255, 248, 220, 0.55) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* Film grain on the photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              rgba(255,255,255,0.014) 3px,
              rgba(255,255,255,0.014) 4px
            )`,
            pointerEvents: "none",
          }}
        />

        {/* Warm-to-page-background gradient at left edge — blends into panel */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "18%",
            height: "100%",
            background:
              "linear-gradient(to right, #F5F1EB 0%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            boxShadow: "inset 0 0 120px rgba(30, 15, 0, 0.25)",
            pointerEvents: "none",
          }}
        />

        {/* Signature overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "clamp(32px, 5vw, 60px)",
            right: "clamp(24px, 4vw, 48px)",
            textAlign: "right",
            zIndex: 3,
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: "clamp(22px, 3vw, 36px)",
              color: "rgba(255,248,230,0.9)",
              letterSpacing: "0.02em",
              marginBottom: 6,
              textShadow: "0 2px 12px rgba(0,0,0,0.2)",
            }}
          >
            Davion Thomas
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,240,200,0.75)",
            }}
          >
            6&apos;6&quot; &nbsp;|&nbsp; Faith-Driven Coach
          </div>
        </div>

        {/* Large watermark initials */}
        <div
          style={{
            position: "absolute",
            bottom: "-5%",
            right: "-5%",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(160px, 22vw, 300px)",
            color: "rgba(255,255,255,0.05)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.02em",
            zIndex: 1,
          }}
        >
          DT
        </div>
      </motion.div>
    </section>
  );
}
