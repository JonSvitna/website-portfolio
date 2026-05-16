"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Jordan M.",
    loss: "-28 LBS",
    tag: "Gained Confidence",
    weeks: "12 Weeks",
    quote: "Shaw's coaching changed more than my body — it changed how I see myself every single day.",
    beforeSrc: "/images/before-jordan.jpg",
    afterSrc: "/images/after-jordan.jpg",
    beforeBg: "linear-gradient(175deg, #C8B898 0%, #A89878 50%, #807058 100%)",
    afterBg: "linear-gradient(165deg, #D9C080 0%, #C4955A 45%, #8B6030 100%)",
  },
  {
    name: "Darius T.",
    loss: "-32 LBS",
    tag: "Built Strength",
    weeks: "14 Weeks",
    quote: "I finally have the discipline I always wanted. The faith-based approach made all the difference.",
    beforeSrc: "/images/before-darius.jpg",
    afterSrc: "/images/after-darius.jpg",
    beforeBg: "linear-gradient(175deg, #C0B0A0 0%, #A09080 50%, #787060 100%)",
    afterBg: "linear-gradient(165deg, #D4BC78 0%, #BC8E50 45%, #845A28 100%)",
  },
  {
    name: "Trey H.",
    loss: "-24 LBS",
    tag: "Built Discipline",
    weeks: "10 Weeks",
    quote: "I have more energy, more confidence, and a new outlook on life. Superset is the real deal.",
    beforeSrc: "/images/before-trey.jpg",
    afterSrc: "/images/after-trey.jpg",
    beforeBg: "linear-gradient(175deg, #BCAC9C 0%, #9C8C7C 50%, #74685C 100%)",
    afterBg: "linear-gradient(165deg, #D0B870 0%, #B88A48 45%, #806020 100%)",
  },
];

const stats = [
  { number: "100+", label: "Lives Transformed" },
  { number: "10K+", label: "Training Sessions" },
  { number: "7+", label: "Years of Experience" },
  { number: "1", label: "Greater Purpose" },
];

export default function Transformations() {
  return (
    <section id="transformations" style={{ background: "#F8F6F2" }}>
      <div
        className="container-wide"
        style={{ paddingTop: "clamp(80px, 10vw, 120px)", paddingBottom: "clamp(60px, 8vw, 96px)" }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow" style={{ marginBottom: 12 }}>
              Real results, real people
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 56px)",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                color: "#1D1D1D",
                lineHeight: 1,
              }}
            >
              Client Transformations
            </h2>
          </motion.div>

          <a
            href="#community"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C89B4F",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 500,
            }}
          >
            View More Results <span style={{ fontSize: 16 }}>→</span>
          </a>
        </div>

        {/* Cards grid */}
        <div className="layout-transformations">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8E2D8",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                overflow: "hidden",
              }}
            >
              {/* Before / After */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 2,
                  background: "#D9D3CB",
                }}
              >
                {[
                  { label: "Before", src: client.beforeSrc, bg: client.beforeBg },
                  { label: "After", src: client.afterSrc, bg: client.afterBg },
                ].map(({ label, src, bg }) => (
                  <div
                    key={label}
                    style={{
                      aspectRatio: "3/4",
                      background: bg,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={src}
                      alt={`${client.name} ${label}`}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />

                    {/* After: subtle warm glow */}
                    {label === "After" && (
                      <div
                        style={{
                          position: "absolute",
                          top: "-10%",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "130%",
                          height: "50%",
                          background:
                            "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(255,248,200,0.2) 0%, transparent 65%)",
                          pointerEvents: "none",
                        }}
                      />
                    )}

                    <span
                      style={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        fontFamily: "var(--font-body)",
                        fontSize: 9,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        background: "rgba(255,255,255,0.88)",
                        color: "#3A3530",
                        padding: "3px 8px",
                        fontWeight: 600,
                        zIndex: 2,
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card info */}
              <div style={{ padding: "24px 26px 28px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(44px, 5vw, 52px)",
                    color: "#C89B4F",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                    marginBottom: 4,
                  }}
                >
                  {client.loss}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#A8917B",
                      fontWeight: 500,
                    }}
                  >
                    {client.weeks}
                  </div>
                  <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#D9D3CB" }} />
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#C89B4F",
                      fontWeight: 600,
                    }}
                  >
                    {client.tag}
                  </div>
                </div>

                <div style={{ width: 36, height: 1, background: "#D9D3CB", marginBottom: 18 }} />

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "#6B5F52",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    marginBottom: 14,
                  }}
                >
                  &ldquo;{client.quote}&rdquo;
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#C89B4F",
                    fontWeight: 500,
                  }}
                >
                  — {client.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
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
        {stats.map((stat) => (
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
