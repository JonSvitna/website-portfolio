"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" style={{ background: "#FFFFFF", overflow: "hidden" }}>
      <div className="layout-story">

        {/* Left — photo */}
        <motion.div
          className="story-photo-panel"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number] }}
          style={{ background: "#C4955A" }}
        >
          {/* Real photo */}
          <Image
            src="/images/shaw-portrait.jpg"
            alt="Superset Shaw — transformational fitness coach"
            fill
            style={{ objectFit: "cover", objectPosition: "left center" }}
          />

          {/* Right-edge blend to text panel — md+ only */}
          <div
            className="story-photo-blend"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "15%",
              height: "100%",
              background: "linear-gradient(to left, #FFFFFF 0%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          {/* Vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              boxShadow: "inset 0 0 100px rgba(30,15,0,0.2)",
            }}
          />

          {/* S watermark */}
          <div
            style={{
              position: "absolute",
              bottom: "-8%",
              left: "-4%",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(150px, 22vw, 360px)",
              color: "rgba(255,255,255,0.06)",
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            S
          </div>

          {/* Caption */}
          <div
            style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              right: 24,
              zIndex: 3,
              borderTop: "1px solid rgba(255,248,220,0.3)",
              paddingTop: 12,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#C89B4F",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(255,248,220,0.6)",
              }}
            >
              Personal Archive
            </span>
          </div>
        </motion.div>

        {/* Right — text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number], delay: 0.12 }}
          style={{
            padding: "clamp(48px, 7vw, 100px) clamp(20px, 5vw, 80px) clamp(48px, 7vw, 100px) clamp(24px, 5vw, 72px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#FFFFFF",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            My Story
          </p>

          <div className="gold-line" style={{ marginBottom: 28 }} />

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.0,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              color: "#1D1D1D",
              marginBottom: 24,
            }}
          >
            From Athlete
            <br />
            <span style={{ color: "#C89B4F" }}>To Purpose</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.5vw, 17px)",
              color: "#6B5F52",
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            I spent years chasing performance on the court — but real
            transformation happened when I rebuilt my life off the court.
            Basketball gave me discipline, but faith gave me direction.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.5vw, 17px)",
              color: "#6B5F52",
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            Through faith, discipline, and consistency, I found purpose bigger
            than basketball. Now I help everyday people do the same — build
            bodies, families, and legacies that last.
          </p>

          {/* Pull quote */}
          <div
            style={{
              borderLeft: "3px solid #C89B4F",
              paddingLeft: 20,
              marginBottom: 36,
              background: "rgba(200,155,79,0.04)",
              padding: "18px 18px 18px 22px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(17px, 2.2vw, 26px)",
                lineHeight: 1.3,
                letterSpacing: "0.03em",
                color: "#1D1D1D",
                marginBottom: 10,
              }}
            >
              &ldquo;Discipline is the bridge between who you are and who you&apos;re
              meant to be.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#C89B4F",
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
                fontSize: "clamp(24px, 3vw, 38px)",
                color: "#1D1D1D",
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
                color: "#A8917B",
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
