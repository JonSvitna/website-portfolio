"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

const clients = [
  {
    name: "Jordan R.",
    loss: "-42 LBS",
    weeks: "16 Weeks",
    quote: "I lost 42 lbs and regained confidence in myself. Coaching changed everything.",
    img: "/images/Jordan_tranformation.jpeg",
  },
  {
    name: "Darius M.",
    loss: "-35 LBS",
    weeks: "14 Weeks",
    quote: "Coaching changed my mindset and my body. I finally feel like myself again.",
    img: "/images/darius_transformation.jpeg",
  },
  {
    name: "Trey T.",
    loss: "-28 LBS",
    weeks: "12 Weeks",
    quote: "I have more energy, more confidence, and a new outlook on life.",
    img: "/images/trey_transformation.jpeg",
  },
];

export default function Transformations() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const isMobile = useIsMobile();

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

        {/* 3-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              onClick={() => setLightbox(i)}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8E2D8",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Photo — contain so full image shows, no cropping */}
              <div
                style={{
                  position: "relative",
                  background: "#0F0C08",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.img}
                  alt={`${client.name} transformation`}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
                {/* Stat overlay at bottom of photo */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "48px 20px 16px",
                    background: "linear-gradient(to top, rgba(10,6,2,0.78) 0%, transparent 100%)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(36px, 3.5vw, 48px)",
                      color: "#C89B4F",
                      lineHeight: 1,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {client.loss}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 9,
                      letterSpacing: "0.28em",
                      textTransform: "uppercase",
                      color: "rgba(255,240,200,0.75)",
                      fontWeight: 500,
                      marginTop: 4,
                    }}
                  >
                    {client.weeks}
                  </div>
                </div>
                {/* Expand hint */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: "rgba(0,0,0,0.45)",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: 11,
                    padding: "4px 8px",
                    letterSpacing: "0.1em",
                  }}
                >
                  ⤢
                </div>
              </div>

              {/* Quote + name */}
              <div style={{ padding: "22px 24px 26px" }}>
                <div style={{ width: 32, height: 1, background: "#C89B4F", marginBottom: 16 }} />
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(8,5,2,0.92)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.1, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={clients[lightbox].img}
                alt={`${clients[lightbox].name} transformation`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              {/* Info bar */}
              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 36,
                    color: "#C89B4F",
                    letterSpacing: "0.02em",
                  }}
                >
                  {clients[lightbox].loss}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "rgba(255,240,200,0.6)",
                  }}
                >
                  {clients[lightbox].weeks} &nbsp;·&nbsp; {clients[lightbox].name}
                </span>
              </div>
              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                style={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#C89B4F",
                  border: "none",
                  color: "#FFFFFF",
                  fontSize: 18,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                }}
                aria-label="Close"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
