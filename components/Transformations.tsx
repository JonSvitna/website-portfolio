"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  { name: "Jordan M.",  src: "/images/jordan_card.png" },
  { name: "Darius T.",  src: "/images/darius_card.png" },
  { name: "Trey H.",    src: "/images/trey_card.png"   },
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

        {/* Card stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{
                position: "relative",
                width: "100%",
                border: "1px solid #E8E2D8",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                overflow: "hidden",
                background: "#1A1410",
              }}
            >
              <Image
                src={card.src}
                alt={`${card.name} transformation`}
                width={1500}
                height={470}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
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
