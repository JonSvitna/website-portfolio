"use client";

import { motion } from "framer-motion";

const checklist = [
  "Personalized Coaching",
  "Proven Systems",
  "Faith-Based Approach",
  "Accountability & Support",
  "Real, Lasting Results",
];

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      style={{
        background: "#0d0b08",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background ambient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 70% 80% at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 20% 80%, rgba(201,168,76,0.03) 0%, transparent 60%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Large watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(120px, 20vw, 280px)",
          color: "rgba(201,168,76,0.03)",
          lineHeight: 1,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        LEGACY
      </div>

      <div
        className="container-wide"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "clamp(80px, 12vw, 140px)",
          paddingBottom: "clamp(80px, 12vw, 140px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
        }}
      >
        {/* Left — Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.1, 1] }}
          style={{
            position: "relative",
            aspectRatio: "4/5",
            background: `
              radial-gradient(ellipse 55% 65% at 45% 25%, rgba(201,168,76,0.09) 0%, transparent 55%),
              radial-gradient(ellipse 40% 50% at 70% 80%, rgba(160,100,20,0.11) 0%, transparent 50%),
              linear-gradient(175deg, #1c1409 0%, #130e07 50%, #0d0b08 100%)
            `,
            overflow: "hidden",
          }}
        >
          {/* Vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              boxShadow: "inset 0 0 120px rgba(0,0,0,0.6)",
            }}
          />

          {/* Scanlines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent, transparent 3px,
                rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px
              )`,
            }}
          />

          {/* Large S watermark */}
          <div
            style={{
              position: "absolute",
              bottom: "-5%",
              right: "-5%",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(180px, 25vw, 300px)",
              color: "rgba(201,168,76,0.04)",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            S
          </div>

          {/* Overlay label */}
          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: 32,
              right: 32,
              borderTop: "1px solid rgba(201,168,76,0.2)",
              paddingTop: 16,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#C9A84C",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(250,249,247,0.4)",
              }}
            >
              Superset Shaw — Coaching
            </span>
          </div>
        </motion.div>

        {/* Right — CTA content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.1, 1], delay: 0.1 }}
        >
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            Start today
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 6vw, 76px)",
              lineHeight: 0.92,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              marginBottom: 40,
            }}
          >
            <span style={{ color: "#FAF9F7" }}>Your</span>
            <br />
            <span style={{ color: "#FAF9F7" }}>Transformation</span>
            <br />
            <span style={{ color: "#FAF9F7" }}>Starts</span>{" "}
            <span
              style={{
                color: "#C9A84C",
                textShadow: "0 0 60px rgba(201,168,76,0.2)",
              }}
            >
              Now.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.5vw, 17px)",
              color: "rgba(250,249,247,0.6)",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 360,
            }}
          >
            Discipline changed my life. Now let&apos;s change yours. Apply today and
            take the first step toward who you were meant to be.
          </p>

          {/* Checklist */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginBottom: 44,
            }}
          >
            {checklist.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                {/* Gold checkmark */}
                <div
                  style={{
                    width: 20,
                    height: 20,
                    flexShrink: 0,
                    background: "#C9A84C",
                    clipPath:
                      "polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(14px, 1.4vw, 16px)",
                    color: "rgba(250,249,247,0.75)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <a
            href="https://www.instagram.com/supersetshaw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ fontSize: 16, padding: "20px 44px" }}
          >
            Apply for Coaching Today
            <span style={{ marginLeft: 4 }}>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
