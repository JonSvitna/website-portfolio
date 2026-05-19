'use client';

import { motion, useReducedMotion } from "framer-motion";
import { memo, type ReactNode } from "react";

export const springPop = { type: "spring" as const, stiffness: 128, damping: 17, mass: 0.85 };

export function HyperFrame({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden rounded-[1.75rem] p-[1px] ${className}`}
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ ...springPop, delay }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-50"
        style={{
          background: "conic-gradient(from 90deg, rgba(201,169,98,0.0), rgba(201,169,98,0.35), rgba(201,169,98,0.0), rgba(255,255,255,0.08), rgba(201,169,98,0.0))",
        }}
        animate={reduce ? {} : { rotate: [0, 360] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative rounded-[calc(1.75rem-1px)] border border-white/10 bg-[#0a0c10]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-md md:p-7">
        {children}
      </div>
    </motion.div>
  );
}

const MARQUEE = "Reliable · Respectful · Professional · Baltimore · Private hire · ";

export const KineticMarquee = memo(function KineticMarquee() {
  const reduce = useReducedMotion();

  return (
    <div className="relative overflow-hidden border-y border-champagne/25 bg-ink py-3">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.42em] text-champagne/90"
        animate={reduce ? {} : { x: ["0%", "-50%"] }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      >
        <span>{MARQUEE}</span>
        <span aria-hidden>{MARQUEE}</span>
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
});

export function LetterReveal({ text, className = "" }: { text: string; className?: string }) {
  const reduce = useReducedMotion();

  return (
    <span className={`inline-flex ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 22, rotateX: -55 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={
            reduce
              ? { duration: 0.001 }
              : { ...springPop, delay: 0.04 + i * 0.045 }
          }
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}
