"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "#C4955A", // fallback while image loads
      }}
    >
      {/* ── Full-bleed background photo ── */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Superset Shaw on the basketball court"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center top" }}
      />

      {/* Gradient overlay — left text readable, right bright */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(
              to right,
              rgba(245,241,235,0.92) 0%,
              rgba(245,241,235,0.78) 28%,
              rgba(245,241,235,0.25) 58%,
              rgba(245,241,235,0.0) 80%
            )
          `,
        }}
      />

      {/* Bottom fade for stat strip */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "28%",
          background:
            "linear-gradient(to top, rgba(245,241,235,0.85) 0%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          padding: "0 clamp(20px, 5vw, 80px) clamp(52px, 7vw, 80px)",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: 540 }}>
          {/* Eyebrow */}
          <motion.p variants={fadeUp} className="eyebrow" style={{ marginBottom: 20 }}>
            Faith.&nbsp; Family.&nbsp; Fitness.
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(60px, 9vw, 118px)",
              lineHeight: 0.9,
              letterSpacing: "0.01em",
              textTransform: "uppercase",
              color: "#1D1D1D",
              margin: "0 0 24px",
            }}
          >
            Discipline
            <br />
            Builds
            <br />
            <span style={{ color: "#C89B4F" }}>Legacy</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.6vw, 17px)",
              color: "#3A3530",
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 380,
            }}
          >
            I help everyday people transform their body, mindset, and life
            through proven coaching and accountability.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 52 }}
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
              borderTop: "1px solid rgba(29,29,29,0.15)",
              paddingTop: 22,
              display: "flex",
              gap: "clamp(16px, 4vw, 48px)",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: "🏀", label: "Former\nCollege Athlete" },
              { icon: "💯", label: "100+\nLives Changed" },
              { icon: "✝", label: "Faith-Driven\nCoach" },
              { icon: "📍", label: "Online &\nIn-Person" },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 18 }}>{s.icon}</span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#6B5F52",
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
        </div>

        {/* Signature — positioned over the bright photo area */}
        <div
          style={{
            position: "absolute",
            right: "clamp(20px, 5vw, 80px)",
            bottom: "clamp(52px, 7vw, 80px)",
            textAlign: "right",
          }}
          className="hero-vert-label"
        >
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: "clamp(22px, 3vw, 40px)",
              color: "rgba(250,248,240,0.92)",
              textShadow: "0 2px 16px rgba(0,0,0,0.25)",
              letterSpacing: "0.02em",
              marginBottom: 6,
            }}
          >
            Superset Shaw
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(250,248,240,0.75)",
              textShadow: "0 1px 8px rgba(0,0,0,0.3)",
            }}
          >
            6&apos;6&quot; &nbsp;|&nbsp; Former College Athlete &nbsp;|&nbsp; Faith-Driven Coach
          </div>
        </div>
      </motion.div>
    </section>
  );
}
