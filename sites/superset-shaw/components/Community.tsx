"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Community() {
  const isMobile = useIsMobile();

  return (
    <section
      id="community"
      style={{ background: "#F8F6F2", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative large number watermark */}
      <div
        style={{
          position: "absolute",
          right: "-3%",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(160px, 22vw, 340px)",
          lineHeight: 1,
          color: "rgba(200,155,79,0.06)",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.02em",
        }}
      >
        500+
      </div>

      {/* Warm ambient glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "40%",
          background:
            "radial-gradient(ellipse 80% 100% at 30% 0%, rgba(200,155,79,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-wide"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "clamp(80px, 10vw, 120px)",
          paddingBottom: "clamp(80px, 10vw, 120px)",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
        }}
      >
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number] }}
        >
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            The Brotherhood
          </p>

          <div className="gold-line" style={{ marginBottom: 32 }} />

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5.5vw, 68px)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#1D1D1D",
              marginBottom: 28,
            }}
          >
            You&apos;re Not
            <br />
            Doing This
            <br />
            <span style={{ color: "#C89B4F" }}>Alone.</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.5vw, 17px)",
              color: "#6B5F52",
              lineHeight: 1.8,
              maxWidth: 380,
              marginBottom: 40,
            }}
          >
            Join a community of driven individuals committed to becoming their
            best — mentally, physically, and spiritually. Accountability,
            brotherhood, and faith in every step.
          </p>

          <span
            className="btn-gold"
            style={{ cursor: "default" }}
          >
            Join the Community
          </span>
        </motion.div>

        {/* Right — photo grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number], delay: 0.14 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
          }}
        >
          {[
            "/images/group_training.jpeg",
            "/images/group_prayer.jpeg",
            "/images/group_bonding.jpeg",
            "/images/coaching_squar_4.png",
          ].map((src, i) => (
            <div
              key={i}
              style={{
                aspectRatio: "1",
                position: "relative",
                overflow: "hidden",
                border: "1px solid #E8E2D8",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={["Group training", "Group prayer", "Group bonding", "Coaching"][i]}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
              {/* Vignette */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  boxShadow: "inset 0 0 40px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats strip */}
      <div
        className="community-stats"
        style={{
          borderTop: "1px solid #D9D3CB",
          padding: "36px clamp(20px, 5vw, 80px)",
          display: "flex",
          justifyContent: "center",
          gap: "clamp(40px, 8vw, 120px)",
          flexWrap: "wrap",
          background: "#FFFFFF",
        }}
      >
        {[
          { number: "500+", label: "Community Members" },
          { number: "100+", label: "Lives Transformed" },
          { number: "3+", label: "Years Coaching" },
          { number: "∞", label: "Discipline" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 48px)",
                color: "#C89B4F",
                lineHeight: 1,
                letterSpacing: "0.02em",
                marginBottom: 6,
              }}
            >
              {stat.number}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#A8917B",
                fontWeight: 500,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
