"use client";

import Image from "next/image";
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
      style={{ background: "#F5F1EB", position: "relative", overflow: "hidden" }}
    >
      {/* Soft ambient light top-right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "55%",
          height: "100%",
          background:
            "radial-gradient(ellipse 90% 80% at 100% 20%, rgba(200,155,79,0.09) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Large LEGACY watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "-2%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(100px, 16vw, 240px)",
          color: "rgba(200,155,79,0.06)",
          lineHeight: 1,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        LEGACY
      </div>

      <div
        className="container-wide layout-cta"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "clamp(80px, 12vw, 140px)",
          paddingBottom: "clamp(80px, 12vw, 140px)",
        }}
      >
        {/* Left — Photo (hidden on mobile) */}
        <motion.div
          className="cta-photo-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number] }}
          style={{
            position: "relative",
            aspectRatio: "4/5",
            overflow: "hidden",
            background: "#1A1410",
            border: "1px solid #D9D3CB",
          }}
        >
          {/* Real photo */}
          <Image
            src="/images/cta-bg.jpg"
            alt="Devin Williams overlooking the city at golden hour"
            fill
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />

          {/* Vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              boxShadow: "inset 0 0 100px rgba(30,15,0,0.28)",
            }}
          />

          {/* Caption bar */}
          <div
            style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              right: 24,
              borderTop: "1px solid rgba(255,248,220,0.3)",
              paddingTop: 14,
              display: "flex",
              alignItems: "center",
              gap: 10,
              zIndex: 2,
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
                color: "rgba(255,248,220,0.65)",
              }}
            >
              Devin Williams — Coaching
            </span>
          </div>
        </motion.div>

        {/* Right — CTA content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number], delay: 0.1 }}
        >
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            Start today
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 6vw, 76px)",
              lineHeight: 0.93,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#1D1D1D",
              marginBottom: 36,
            }}
          >
            Your
            <br />
            Transformation
            <br />
            Starts{" "}
            <span style={{ color: "#C89B4F" }}>Now.</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.5vw, 17px)",
              color: "#6B5F52",
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 360,
            }}
          >
            Discipline changed my life. Now let&apos;s change yours. Apply today
            and take the first step toward who you were meant to be.
          </p>

          {/* Checklist */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 44 }}
          >
            {checklist.map((item) => (
              <div
                key={item}
                style={{ display: "flex", alignItems: "center", gap: 14 }}
              >
                {/* Gold checkmark */}
                <div
                  style={{
                    width: 20,
                    height: 20,
                    flexShrink: 0,
                    background: "#C89B4F",
                    clipPath:
                      "polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(14px, 1.4vw, 16px)",
                    color: "#3A3530",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://www.instagram.com/supersetshaw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ fontSize: 16, padding: "20px 44px" }}
          >
            Apply for Coaching Today <span style={{ marginLeft: 4 }}>→</span>
          </a>

          {/* Sub-note */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "#A8917B",
              marginTop: 16,
              letterSpacing: "0.05em",
            }}
          >
            Limited spots available each month.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
