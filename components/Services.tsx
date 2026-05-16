"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "1on1",
    num: "01",
    title: "1:1 Coaching",
    imageSrc: "/images/service-1on1.png",
    photoBg: "linear-gradient(165deg, #D9C490 0%, #C4955A 38%, #8B5E30 72%, #5C3518 100%)",
    checklist: [
      "Custom workout & nutrition plans",
      "Mindset & habit development",
      "Weekly check-ins & adjustments",
      "24/7 support & accountability",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: "group",
    num: "02",
    title: "Group Coaching",
    imageSrc: "/images/service-group.png",
    photoBg: "linear-gradient(165deg, #BDD4C0 0%, #8DAE78 35%, #5A8040 65%, #2E5418 100%)",
    checklist: [
      "Small group training sessions",
      "Community & brotherhood",
      "Shared accountability",
      "Monthly challenges & events",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="9" cy="7" r="3" />
        <circle cx="15" cy="7" r="3" />
        <path d="M3 20c0-3 2.7-5 6-5" />
        <path d="M15 15c3.3 0 6 2 6 5" />
        <path d="M9 15c3 0 6 1.5 6 5H3c0-3.5 3-5 6-5z" />
      </svg>
    ),
  },
  {
    id: "online",
    num: "03",
    title: "Online Coaching",
    imageSrc: "/images/service-online.png",
    photoBg: "linear-gradient(165deg, #B8CDE0 0%, #8BAAC8 33%, #547090 62%, #2A4A68 100%)",
    checklist: [
      "Custom training & nutrition plans",
      "Video form feedback",
      "App-based coaching",
      "Flexible & convenient",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: "athlete",
    num: "04",
    title: "Athlete Development",
    imageSrc: "/images/service-athlete.png",
    photoBg: "linear-gradient(165deg, #D4C8A0 0%, #B8A070 35%, #8A7040 65%, #5A4818 100%)",
    checklist: [
      "Performance training",
      "Position-specific drills",
      "Injury prevention",
      "Game confidence & mindset",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2L4 7v10l8 5 8-5V7z" />
        <path d="M12 7v10M4 7l8 5 8-5" />
      </svg>
    ),
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" style={{ background: "#FFFFFF" }}>
      <div
        className="container-wide"
        style={{ paddingTop: "clamp(80px, 10vw, 120px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 56 }}
        >
          <p className="eyebrow" style={{ marginBottom: 12 }}>
            Coaching services
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
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
              How I Can Help You
            </h2>
            <a
              href="#final-cta"
              className="btn-gold"
              style={{ fontSize: 13, padding: "13px 28px" }}
            >
              Apply Now
            </a>
          </div>
        </motion.div>

        {/* Portrait cards grid */}
        <div className="layout-services-portrait">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#FFFFFF",
                border: "1.5px solid",
                borderColor: hovered === s.id ? "#C89B4F" : "#E8E2D8",
                boxShadow: hovered === s.id
                  ? "0 8px 40px rgba(200,155,79,0.12)"
                  : "0 2px 16px rgba(0,0,0,0.04)",
                transition: "border-color 0.35s ease, box-shadow 0.35s ease",
                cursor: "pointer",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Photo */}
              <div className="service-portrait-photo" style={{ background: s.photoBg }}>
                <Image
                  src={s.imageSrc}
                  alt={s.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                />

                {/* Icon badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    left: 16,
                    width: 36,
                    height: 36,
                    background: "#C89B4F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    zIndex: 2,
                  }}
                >
                  {s.icon}
                </div>

                {/* Number badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 14,
                    fontFamily: "var(--font-display)",
                    fontSize: 13,
                    letterSpacing: "0.1em",
                    background: "rgba(255,255,255,0.88)",
                    color: "#C89B4F",
                    padding: "3px 8px",
                    fontWeight: 700,
                    zIndex: 2,
                  }}
                >
                  {s.num}
                </div>

                {/* Bottom gradient on photo */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Text content */}
              <div style={{ padding: "20px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(20px, 2vw, 24px)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#1D1D1D",
                    lineHeight: 1.1,
                    marginBottom: 16,
                  }}
                >
                  {s.title}
                </h3>

                {/* Checklist */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  {s.checklist.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div
                        style={{
                          width: 16,
                          height: 16,
                          flexShrink: 0,
                          marginTop: 1,
                          background: "#C89B4F",
                          clipPath: "polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "clamp(12px, 1.2vw, 14px)",
                          color: "#3A3530",
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#final-cta"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#C89B4F",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontWeight: 500,
                    marginTop: 18,
                  }}
                >
                  Learn More <span style={{ fontSize: 14 }}>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
