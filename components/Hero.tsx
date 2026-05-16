"use client";

import { motion } from "framer-motion";

const stats = [
  { icon: "🏀", number: "100+", label: "Lives\nChanged" },
  { icon: "✝", number: "6'6\"", label: "Former College\nAthlete" },
  { icon: "†", number: "", label: "Faith-Driven\nCoaching" },
  { icon: "📍", number: "", label: "Online +\nIn-Person" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number] },
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
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* Cinematic warm background — simulates golden-hour outdoor athletic photography */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 50% 80% at 68% 40%, rgba(201,168,76,0.10) 0%, transparent 55%),
            radial-gradient(ellipse 40% 70% at 72% 85%, rgba(160,100,20,0.14) 0%, transparent 50%),
            radial-gradient(ellipse 30% 40% at 30% 20%, rgba(13,11,8,0.5) 0%, transparent 70%),
            linear-gradient(160deg, #0d0b08 0%, #120e09 30%, #1a1409 60%, #0d0b08 100%)
          `,
        }}
      />

      {/* Vertical light column — simulates rim light on athlete */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "30%",
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.06) 30%, rgba(201,168,76,0.03) 70%, transparent 100%)",
        }}
      />

      {/* Bottom gradient — grounds the content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60%",
          background:
            "linear-gradient(to top, rgba(13,11,8,1) 0%, rgba(13,11,8,0.7) 50%, transparent 100%)",
        }}
      />

      {/* Large ambient "SS" watermark */}
      <div
        style={{
          position: "absolute",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(200px, 28vw, 420px)",
          color: "rgba(201,168,76,0.04)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.03em",
        }}
      >
        SS
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: "relative",
          zIndex: 10,
          padding: "0 clamp(20px, 5vw, 80px) clamp(60px, 8vw, 100px)",
          maxWidth: 1400,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <motion.p variants={fadeUp} className="eyebrow" style={{ marginBottom: 28 }}>
          Faith.&nbsp; Family.&nbsp; Fitness.
        </motion.p>

        {/* Headline */}
        <motion.div variants={fadeUp} style={{ marginBottom: 28 }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(64px, 10vw, 130px)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            <span style={{ display: "block", color: "#FAF9F7" }}>Discipline</span>
            <span style={{ display: "block", color: "#FAF9F7" }}>Builds</span>
            <span
              style={{
                display: "block",
                color: "#C9A84C",
                textShadow: "0 0 80px rgba(201,168,76,0.2)",
              }}
            >
              Legacy
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "rgba(250,249,247,0.7)",
            maxWidth: 420,
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          I help everyday people transform their body, mindset, and life through
          proven coaching and accountability.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 60 }}
        >
          <a href="#final-cta" className="btn-gold">
            Start Your Transformation
          </a>
          <a href="#transformations" className="btn-outline">
            View Client Wins
          </a>
        </motion.div>

        {/* Stat badges */}
        <motion.div
          variants={fadeUp}
          style={{
            borderTop: "1px solid rgba(201,168,76,0.2)",
            paddingTop: 28,
            display: "flex",
            gap: "clamp(24px, 4vw, 56px)",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "🏀", label: "Former\nCollege Athlete" },
            { icon: "💯", label: "100+\nLives Changed" },
            { icon: "✝", label: "Faith-Driven\nCoaching" },
            { icon: "📍", label: "Online +\nIn-Person" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", alignItems: "center", gap: 14 }}
            >
              <span style={{ fontSize: 22, opacity: 0.9, color: "#C9A84C" }}>
                {stat.icon}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(250,249,247,0.55)",
                  lineHeight: 1.4,
                  whiteSpace: "pre-line",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Signature overlay — top right */}
      <div
        style={{
          position: "absolute",
          top: "clamp(100px, 14vw, 180px)",
          right: "clamp(20px, 5vw, 80px)",
          textAlign: "right",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: "clamp(22px, 3.5vw, 42px)",
            color: "rgba(250,249,247,0.85)",
            letterSpacing: "0.02em",
            marginBottom: 8,
          }}
        >
          Superset Shaw
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#C9A84C",
          }}
        >
          6&apos;6&quot; &nbsp;|&nbsp; Former College Athlete
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(250,249,247,0.4)",
            marginTop: 4,
          }}
        >
          Faith-Driven Coach
        </div>
      </div>
    </section>
  );
}
