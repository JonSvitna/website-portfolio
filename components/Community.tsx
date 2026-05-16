"use client";

import { motion } from "framer-motion";

export default function Community() {
  return (
    <section
      id="community"
      style={{
        background: "#111009",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "50%",
          background:
            "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Large ambient number */}
      <div
        style={{
          position: "absolute",
          right: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(150px, 22vw, 320px)",
          lineHeight: 1,
          color: "rgba(201,168,76,0.04)",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.02em",
        }}
      >
        500+
      </div>

      <div
        className="container-wide"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "clamp(80px, 10vw, 120px)",
          paddingBottom: "clamp(80px, 10vw, 120px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
        }}
      >
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.1, 1] }}
        >
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            The brotherhood
          </p>

          <div className="gold-line" style={{ marginBottom: 32 }} />

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5.5vw, 68px)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#FAF9F7",
              marginBottom: 28,
            }}
          >
            You&apos;re Not
            <br />
            Doing This
            <br />
            <span style={{ color: "#C9A84C" }}>Alone.</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.6vw, 17px)",
              color: "rgba(250,249,247,0.6)",
              lineHeight: 1.75,
              maxWidth: 380,
              marginBottom: 40,
            }}
          >
            Join a community of driven individuals who are committed to becoming
            their best — mentally, physically, and spiritually. Accountability,
            brotherhood, and faith in every step.
          </p>

          <a href="https://www.instagram.com/supersetshaw" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Join the Community
          </a>
        </motion.div>

        {/* Right — photo grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.1, 1], delay: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
          }}
        >
          {[
            "linear-gradient(145deg, #1c1409 0%, #130e07 100%)",
            "linear-gradient(145deg, #0d1117 0%, #0f1420 100%)",
            "linear-gradient(145deg, #0e1208 0%, #0b0f06 100%)",
            "linear-gradient(145deg, #150f08 0%, #0f0b05 100%)",
          ].map((bg, i) => (
            <div
              key={i}
              style={{
                aspectRatio: "1",
                background: bg,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  boxShadow: "inset 0 0 40px rgba(0,0,0,0.5)",
                }}
              />
              {/* Subtle texture lines */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 3px,
                    rgba(255,255,255,0.007) 3px,
                    rgba(255,255,255,0.007) 4px
                  )`,
                }}
              />
              {/* Number label */}
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 12,
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  color: "rgba(201,168,76,0.15)",
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
          borderTop: "1px solid rgba(201,168,76,0.12)",
          padding: "36px clamp(20px, 5vw, 80px)",
          display: "flex",
          justifyContent: "center",
          gap: "clamp(40px, 8vw, 120px)",
          flexWrap: "wrap",
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
                color: "#C9A84C",
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
                color: "rgba(250,249,247,0.4)",
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
