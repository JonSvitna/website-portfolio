"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Jordan M.",
    loss: "-28 LBS",
    tag: "Gained Confidence",
    weeks: "12 Weeks",
    quote: "This journey changed more than my body. I've gained confidence, discipline, and a standard for my life.",
    src: "/images/client-jordan.png",
    position: "center top",
  },
  {
    name: "Darius T.",
    loss: "-32 LBS",
    tag: "Built Strength",
    weeks: "14 Weeks",
    quote: "I used to quit on myself. Now I stay consistent and trust the process. Everything changed.",
    src: "/images/client-darius.png",
    position: "center top",
  },
  {
    name: "Trey H.",
    loss: "-24 LBS",
    tag: "Built Discipline",
    weeks: "10 Weeks",
    quote: "Discipline became my lifestyle. I feel stronger, healthier, and more focused than ever.",
    src: "/images/client-trey.png",
    position: "center center",
  },
];

const stats = [
  { number: "100+", label: "Lives Transformed" },
  { number: "10K+", label: "Training Sessions" },
  { number: "7+",   label: "Years of Experience" },
  { number: "1",    label: "Greater Purpose" },
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
              Real people. Real transformations.
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
              Proof That Discipline Works
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

        {/* Cards */}
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
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Photo */}
              <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "#1A1410" }}>
                <Image
                  src={client.src}
                  alt={`${client.name} transformation`}
                  fill
                  style={{ objectFit: "cover", objectPosition: client.position }}
                />

                {/* Bottom gradient for name badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "45%",
                    background: "linear-gradient(to top, rgba(20,12,4,0.75) 0%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Loss badge — top left */}
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    background: "#C89B4F",
                    padding: "6px 12px",
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      color: "#FFFFFF",
                      lineHeight: 1,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {client.loss}
                  </span>
                </div>

                {/* Name + tag — bottom left */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: 16,
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      color: "#FFFFFF",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {client.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#C89B4F",
                      fontWeight: 600,
                    }}
                  >
                    {client.tag} &nbsp;·&nbsp; {client.weeks}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div style={{ padding: "20px 22px 24px" }}>
                <div style={{ width: 32, height: 1, background: "#C89B4F", marginBottom: 16 }} />
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(13px, 1.3vw, 15px)",
                    color: "#6B5F52",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{client.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            color: "#A8917B",
            textAlign: "center",
            marginTop: 20,
            letterSpacing: "0.08em",
            fontStyle: "italic",
          }}
        >
          *Results vary. Success requires consistency, effort, and belief.
        </p>
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
