"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section
      id="story"
      style={{
        background: "#111009",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "85vh",
        }}
        className="flex flex-col lg:grid"
      >
        {/* Left — Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.1, 1] }}
          style={{
            position: "relative",
            minHeight: "clamp(400px, 60vw, 700px)",
            background: `
              radial-gradient(ellipse 55% 65% at 45% 30%, rgba(201,168,76,0.08) 0%, transparent 55%),
              radial-gradient(ellipse 40% 50% at 60% 80%, rgba(160,100,20,0.10) 0%, transparent 50%),
              linear-gradient(175deg, #1c1409 0%, #130e07 45%, #0d0b08 100%)
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
              pointerEvents: "none",
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
                rgba(255,255,255,0.008) 3px,
                rgba(255,255,255,0.008) 4px
              )`,
              pointerEvents: "none",
            }}
          />

          {/* Large watermark initial */}
          <div
            style={{
              position: "absolute",
              bottom: "-10%",
              left: "-5%",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(200px, 30vw, 380px)",
              color: "rgba(201,168,76,0.04)",
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
              letterSpacing: "-0.02em",
            }}
          >
            S
          </div>

          {/* Athlete silhouette — abstract shape */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "75%",
              background: `
                radial-gradient(ellipse 80% 90% at 50% 30%, rgba(201,168,76,0.06) 0%, transparent 60%),
                radial-gradient(ellipse 50% 60% at 50% 60%, rgba(201,168,76,0.04) 0%, transparent 60%)
              `,
            }}
          />

          {/* Label */}
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
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#C9A84C",
                flexShrink: 0,
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
              Superset Shaw — Personal Archive
            </span>
          </div>
        </motion.div>

        {/* Right — Story text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.1, 1], delay: 0.15 }}
          style={{
            padding: "clamp(60px, 8vw, 100px) clamp(32px, 5vw, 80px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#0d0b08",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            My Story
          </p>

          <div className="gold-line" style={{ marginBottom: 32 }} />

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5.5vw, 64px)",
              lineHeight: 1.0,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              color: "#FAF9F7",
              marginBottom: 32,
            }}
          >
            From Athlete
            <br />
            <span style={{ color: "#C9A84C" }}>To Purpose</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "rgba(250,249,247,0.65)",
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            I spent years chasing performance on the court — but real transformation
            happened when I rebuilt my life off the court. Basketball gave me discipline,
            but faith gave me direction.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "rgba(250,249,247,0.65)",
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Through faith, discipline, and consistency, I found purpose bigger than
            basketball. Now I help everyday people do the same — build bodies, families,
            and legacies that last.
          </p>

          {/* Pull quote */}
          <div
            style={{
              borderLeft: "3px solid #C9A84C",
              paddingLeft: 28,
              marginBottom: 40,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                lineHeight: 1.25,
                letterSpacing: "0.03em",
                color: "#FAF9F7",
                marginBottom: 12,
              }}
            >
              "Discipline is the bridge between who you are and who you&apos;re meant to be."
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#C9A84C",
              }}
            >
              — Superset Shaw
            </p>
          </div>

          {/* Signature */}
          <div>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                color: "rgba(250,249,247,0.85)",
                letterSpacing: "0.02em",
                marginBottom: 6,
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
                color: "rgba(250,249,247,0.35)",
              }}
            >
              Transformational Fitness Coach
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
