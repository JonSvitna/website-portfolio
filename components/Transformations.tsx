"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Jordan R.",
    loss: "-42 LBS",
    weeks: "16 Weeks",
    quote: "I lost 42 lbs and regained confidence in myself. Superset changed everything.",
    beforeBg: "linear-gradient(175deg, #1a1510 0%, #0f0d0a 100%)",
    afterBg: "linear-gradient(175deg, #1c1609 0%, #130f07 100%)",
  },
  {
    name: "Kayla M.",
    loss: "-35 LBS",
    weeks: "14 Weeks",
    quote: '"Superset changed my mindset and my body." I finally feel like myself again.',
    beforeBg: "linear-gradient(175deg, #181412 0%, #0e0c0a 100%)",
    afterBg: "linear-gradient(175deg, #1a1508 0%, #110e06 100%)",
  },
  {
    name: "Derrick T.",
    loss: "-28 LBS",
    weeks: "12 Weeks",
    quote: "I have more energy, more confidence, and a new outlook on life.",
    beforeBg: "linear-gradient(175deg, #161412 0%, #0d0b09 100%)",
    afterBg: "linear-gradient(175deg, #191408 0%, #100d05 100%)",
  },
  {
    name: "Marcus W.",
    loss: "-52 LBS",
    weeks: "20 Weeks",
    quote: "The faith-based approach made the difference. This wasn't just a body change.",
    beforeBg: "linear-gradient(175deg, #171512 0%, #0e0c0a 100%)",
    afterBg: "linear-gradient(175deg, #1b1608 0%, #120e06 100%)",
  },
];

export default function Transformations() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const cardWidth = 420;
  const gap = 24;

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(clients.length - 1, index));
    setCurrent(clamped);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${clamped * (cardWidth + gap)}px)`;
    }
  };

  return (
    <section id="transformations" style={{ background: "#0d0b08", overflow: "hidden" }}>
      <div className="container-wide" style={{ paddingTop: "clamp(80px, 10vw, 120px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 52,
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
                color: "#FAF9F7",
                lineHeight: 1,
              }}
            >
              Client Transformations
            </h2>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            href="#community"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C9A84C",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            View More Results
            <span style={{ fontSize: 16 }}>→</span>
          </motion.a>
        </div>

        {/* Carousel */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: `${gap}px`,
              transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)",
            }}
          >
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{
                  minWidth: `${cardWidth}px`,
                  background: "#161614",
                  border: "1px solid rgba(201,168,76,0.12)",
                  flexShrink: 0,
                }}
              >
                {/* Before / After photos */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 2,
                    background: "#0d0b08",
                  }}
                >
                  {/* Before */}
                  <div
                    style={{
                      aspectRatio: "3/4",
                      background: client.beforeBg,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Desaturated feel */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(13,11,8,0.3)",
                        backdropFilter: "grayscale(0.5)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        fontFamily: "var(--font-body)",
                        fontSize: 9,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        background: "rgba(0,0,0,0.6)",
                        color: "rgba(250,249,247,0.6)",
                        padding: "4px 8px",
                      }}
                    >
                      Before
                    </span>
                  </div>

                  {/* After */}
                  <div
                    style={{
                      aspectRatio: "3/4",
                      background: client.afterBg,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Warmer, golden feel */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "radial-gradient(ellipse 60% 70% at 50% 30%, rgba(201,168,76,0.05) 0%, transparent 60%)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        boxShadow: "inset 0 0 60px rgba(0,0,0,0.4)",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        fontFamily: "var(--font-body)",
                        fontSize: 9,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        background: "rgba(0,0,0,0.6)",
                        color: "rgba(250,249,247,0.6)",
                        padding: "4px 8px",
                      }}
                    >
                      After
                    </span>
                  </div>
                </div>

                {/* Card info */}
                <div style={{ padding: "28px 28px 32px" }}>
                  {/* Loss badge */}
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 52,
                      color: "#C9A84C",
                      lineHeight: 1,
                      letterSpacing: "0.02em",
                      marginBottom: 4,
                    }}
                  >
                    {client.loss}
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(250,249,247,0.4)",
                      marginBottom: 20,
                    }}
                  >
                    {client.weeks}
                  </div>

                  <div
                    style={{
                      width: 40,
                      height: 1,
                      background: "rgba(201,168,76,0.3)",
                      marginBottom: 20,
                    }}
                  />

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "rgba(250,249,247,0.6)",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                      marginBottom: 16,
                    }}
                  >
                    &ldquo;{client.quote}&rdquo;
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#C9A84C",
                    }}
                  >
                    — {client.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 36,
          }}
        >
          {/* Dots */}
          <div style={{ display: "flex", gap: 8 }}>
            {clients.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                style={{
                  width: i === current ? 32 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === current ? "#C9A84C" : "rgba(201,168,76,0.25)",
                  border: "none",
                  cursor: "pointer",
                  transition: "width 0.4s ease, background 0.4s ease",
                  padding: 0,
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => scrollTo(current - 1)}
              disabled={current === 0}
              style={{
                width: 48,
                height: 48,
                border: "1px solid rgba(201,168,76,0.25)",
                background: "transparent",
                color: current === 0 ? "rgba(250,249,247,0.2)" : "#FAF9F7",
                cursor: current === 0 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                transition: "border-color 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (current !== 0) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A84C";
                  (e.currentTarget as HTMLButtonElement).style.color = "#C9A84C";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.25)";
                (e.currentTarget as HTMLButtonElement).style.color = current === 0 ? "rgba(250,249,247,0.2)" : "#FAF9F7";
              }}
            >
              ←
            </button>
            <button
              onClick={() => scrollTo(current + 1)}
              disabled={current === clients.length - 1}
              style={{
                width: 48,
                height: 48,
                border: "1px solid rgba(201,168,76,0.25)",
                background: "transparent",
                color: current === clients.length - 1 ? "rgba(250,249,247,0.2)" : "#FAF9F7",
                cursor: current === clients.length - 1 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                transition: "border-color 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (current !== clients.length - 1) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A84C";
                  (e.currentTarget as HTMLButtonElement).style.color = "#C9A84C";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.25)";
                (e.currentTarget as HTMLButtonElement).style.color = current === clients.length - 1 ? "rgba(250,249,247,0.2)" : "#FAF9F7";
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
