"use client";

import { motion } from "framer-motion";

export default function Community() {
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
        className="container-wide layout-community"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "clamp(80px, 10vw, 120px)",
          paddingBottom: "clamp(80px, 10vw, 120px)",
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

          <a
            href="https://www.instagram.com/supersetshaw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Join the Community
          </a>
        </motion.div>

        {/* Right — photo grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.1, 1] as [number, number, number, number], delay: 0.14 }}
          className="community-photo-grid"
        >
          {[
            {
              bg: `radial-gradient(ellipse 70% 50% at 50% 5%, rgba(255,240,185,0.6) 0%, transparent 52%), linear-gradient(165deg, #D9C070 0%, #B88C48 40%, #7A5C20 80%, #4A3808 100%)`,
            },
            {
              bg: `radial-gradient(ellipse 70% 45% at 50% 0%, rgba(195,215,250,0.5) 0%, transparent 50%), linear-gradient(168deg, #B8CCE0 0%, #8898C0 40%, #5060A0 80%, #283878 100%)`,
            },
            {
              bg: `radial-gradient(ellipse 70% 45% at 50% 0%, rgba(215,235,210,0.55) 0%, transparent 50%), linear-gradient(165deg, #B8CCA0 0%, #88A870 40%, #587838 80%, #304818 100%)`,
            },
            {
              bg: `radial-gradient(ellipse 70% 45% at 50% 0%, rgba(255,235,195,0.55) 0%, transparent 50%), linear-gradient(165deg, #D0B888 0%, #A88050 40%, #785028 80%, #483008 100%)`,
            },
          ].map(({ bg }, i) => (
            <div
              key={i}
              style={{
                aspectRatio: "1",
                background: bg,
                position: "relative",
                overflow: "hidden",
                border: "1px solid #E8E2D8",
              }}
            >
              {/* Sunlight flare */}
              <div
                style={{
                  position: "absolute",
                  top: "-10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "130%",
                  height: "50%",
                  background:
                    "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(255,248,220,0.3) 0%, transparent 65%)",
                }}
              />
              {/* Film grain */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `repeating-linear-gradient(
                    0deg, transparent, transparent 3px,
                    rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
                  )`,
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
              {/* Number watermark */}
              <div
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 10,
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  color: "rgba(255,255,255,0.2)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {["01", "02", "03", "04"][i]}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats strip */}
      <div
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
