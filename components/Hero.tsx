"use client";

import { motion } from "framer-motion";

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
  return (
    <section id="hero" className="layout-hero" style={{ background: "#F5F1EB" }}>

      {/* ── LEFT PANEL — Text ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(100px, 12vw, 160px) clamp(20px, 5vw, 80px) clamp(48px, 7vw, 80px)",
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
                fontSize: "clamp(60px, 9vw, 120px)",
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
              <span style={{ color: "#C89B4F" }}>Legacy</span>
            </h1>
          </motion.div>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.6vw, 18px)",
              color: "#6B5F52",
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 400,
            }}
          >
            I help everyday people transform their body, mindset, and life
            through proven coaching and accountability.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}
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
              paddingTop: 24,
              display: "flex",
              gap: "clamp(16px, 3.5vw, 44px)",
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
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <span style={{ fontSize: 18 }}>{s.icon}</span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#A8917B",
                    lineHeight: 1.4,
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

        {/* Decorative vertical text — desktop only */}
        <div
          className="hero-vert-label"
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
          Superset Shaw — Transformational Fitness
        </div>
      </div>

      {/* ── RIGHT PANEL — Cinematic photo simulation ── */}
      <motion.div
        className="hero-photo-panel"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number] }}
      >
        {/* Main warm sunrise */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(ellipse 80% 60% at 50% 5%, rgba(255, 243, 190, 0.7) 0%, transparent 50%),
              radial-gradient(ellipse 60% 50% at 80% 60%, rgba(180, 120, 45, 0.25) 0%, transparent 55%),
              radial-gradient(ellipse 50% 60% at 20% 80%, rgba(100, 60, 20, 0.2) 0%, transparent 55%),
              linear-gradient(165deg, #E2C88A 0%, #C9965C 28%, #9A6630 58%, #6B4218 82%, #3E2408 100%)
            `,
          }}
        />

        {/* Sunlight flare */}
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

        {/* Film grain */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(
              0deg, transparent, transparent 3px,
              rgba(255,255,255,0.014) 3px, rgba(255,255,255,0.014) 4px
            )`,
            pointerEvents: "none",
          }}
        />

        {/* Left-edge blend into page — desktop only */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "18%",
            height: "100%",
            background: "linear-gradient(to right, #F5F1EB 0%, transparent 100%)",
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

        {/* Signature */}
        <div
          style={{
            position: "absolute",
            bottom: "clamp(24px, 4vw, 60px)",
            right: "clamp(20px, 4vw, 48px)",
            textAlign: "right",
            zIndex: 3,
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: "clamp(18px, 2.5vw, 36px)",
              color: "rgba(255,248,230,0.9)",
              letterSpacing: "0.02em",
              marginBottom: 5,
              textShadow: "0 2px 12px rgba(0,0,0,0.2)",
            }}
          >
            Superset Shaw
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,240,200,0.75)",
            }}
          >
            6&apos;6&quot; &nbsp;|&nbsp; Faith-Driven Coach
          </div>
        </div>

        {/* SS watermark */}
        <div
          style={{
            position: "absolute",
            bottom: "-5%",
            right: "-5%",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(100px, 18vw, 300px)",
            color: "rgba(255,255,255,0.05)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.02em",
            zIndex: 1,
          }}
        >
          SS
        </div>
      </motion.div>
    </section>
  );
}
