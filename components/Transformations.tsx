"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Jordan R.",
    loss: "-42 LBS",
    weeks: "16 Weeks",
    quote: "I lost 42 lbs and regained confidence in myself. Superset changed everything.",
    beforeBg: "linear-gradient(175deg, #C8B898 0%, #A89878 50%, #807058 100%)",
    afterBg: "linear-gradient(165deg, #D9C080 0%, #C4955A 45%, #8B6030 100%)",
  },
  {
    name: "Kayla M.",
    loss: "-35 LBS",
    weeks: "14 Weeks",
    quote: "Superset changed my mindset and my body. I finally feel like myself again.",
    beforeBg: "linear-gradient(175deg, #C0B0A0 0%, #A09080 50%, #787060 100%)",
    afterBg: "linear-gradient(165deg, #D4BC78 0%, #BC8E50 45%, #845A28 100%)",
  },
  {
    name: "Derrick T.",
    loss: "-28 LBS",
    weeks: "12 Weeks",
    quote: "I have more energy, more confidence, and a new outlook on life.",
    beforeBg: "linear-gradient(175deg, #BCAC9C 0%, #9C8C7C 50%, #74685C 100%)",
    afterBg: "linear-gradient(165deg, #D0B870 0%, #B88A48 45%, #806020 100%)",
  },
  {
    name: "Marcus W.",
    loss: "-52 LBS",
    weeks: "20 Weeks",
    quote: "The faith-based approach made the difference. This wasn't just a body change.",
    beforeBg: "linear-gradient(175deg, #C4B4A4 0%, #A49484 50%, #7C6C5C 100%)",
    afterBg: "linear-gradient(165deg, #DCBC78 0%, #C09050 45%, #887038 100%)",
  },
];

const CARD_W = 400;
const GAP = 20;

export default function Transformations() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const scrollTo = (idx: number) => {
    const next = Math.max(0, Math.min(clients.length - 1, idx));
    setCurrent(next);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${next * (CARD_W + GAP)}px)`;
    }
  };

  return (
    <section id="transformations" style={{ background: "#F8F6F2", overflow: "hidden" }}>
      <div
        className="container-wide"
        style={{ paddingTop: "clamp(80px, 10vw, 120px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}
      >
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

        {/* Carousel */}
        <div style={{ overflow: "hidden" }}>
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: `${GAP}px`,
              transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)",
            }}
          >
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                style={{
                  minWidth: `${CARD_W}px`,
                  background: "#FFFFFF",
                  border: "1px solid #E8E2D8",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  flexShrink: 0,
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
                    { label: "Before", bg: client.beforeBg },
                    { label: "After", bg: client.afterBg },
                  ].map(({ label, bg }) => (
                    <div
                      key={label}
                      style={{
                        aspectRatio: "3/4",
                        background: bg,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Sunlight flare on After panel */}
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
                              "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(255,248,200,0.3) 0%, transparent 65%)",
                          }}
                        />
                      )}
                      {/* Film grain */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage: `repeating-linear-gradient(
                            0deg, transparent, transparent 3px,
                            rgba(255,255,255,0.014) 3px, rgba(255,255,255,0.014) 4px
                          )`,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          boxShadow: "inset 0 0 40px rgba(0,0,0,0.18)",
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
                          background: "rgba(255,255,255,0.85)",
                          color: "#3A3530",
                          padding: "3px 8px",
                          fontWeight: 600,
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
                      fontSize: 52,
                      color: "#C89B4F",
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
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#A8917B",
                      marginBottom: 18,
                      fontWeight: 500,
                    }}
                  >
                    {client.weeks}
                  </div>

                  <div
                    style={{ width: 36, height: 1, background: "#D9D3CB", marginBottom: 18 }}
                  />

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

        {/* Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 32,
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {clients.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                style={{
                  width: i === current ? 32 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === current ? "#C89B4F" : "#D9D3CB",
                  border: "none",
                  cursor: "pointer",
                  transition: "width 0.4s ease, background 0.4s ease",
                  padding: 0,
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            {[
              { dir: -1, label: "←", disabled: current === 0 },
              { dir: 1, label: "→", disabled: current === clients.length - 1 },
            ].map(({ dir, label, disabled }) => (
              <button
                key={label}
                onClick={() => scrollTo(current + dir)}
                disabled={disabled}
                style={{
                  width: 44,
                  height: 44,
                  border: "1.5px solid",
                  borderColor: disabled ? "#E8E2D8" : "#D9D3CB",
                  background: "#FFFFFF",
                  color: disabled ? "#D9D3CB" : "#1D1D1D",
                  cursor: disabled ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  transition: "border-color 0.3s ease, color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (!disabled) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#C89B4F";
                    (e.currentTarget as HTMLButtonElement).style.color = "#C89B4F";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = disabled ? "#E8E2D8" : "#D9D3CB";
                  (e.currentTarget as HTMLButtonElement).style.color = disabled ? "#D9D3CB" : "#1D1D1D";
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
