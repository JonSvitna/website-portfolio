'use client';

import { motion, useReducedMotion } from "framer-motion";
import { FlyerIcon } from "./flyerIcons";
import { SkylineSilhouette } from "./SkylineSilhouette";
import { SITE } from "./site";
import { HyperFrame, LetterReveal, springPop } from "./hyperframes";

export function HeroCinematic() {
  const reduce = useReducedMotion();
  const bokehMobile = 5;
  const bokehDesktop = 14;

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-void">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_65%_8%,rgba(201,169,98,0.11),transparent_55%),radial-gradient(ellipse_70%_45%_at_15%_75%,rgba(40,44,52,0.45),transparent_58%),linear-gradient(180deg,#040508_0%,#090b10_48%,#0b0e14_100%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-35 md:hidden">
        {[...Array(bokehMobile)].map((_, i) => (
          <motion.span
            key={`sm-${i}`}
            className="absolute rounded-full bg-champagne/25 blur-sm"
            style={{
              width: 3 + (i % 4) * 2,
              height: 3 + (i % 4) * 2,
              left: `${(i * 47) % 100}%`,
              top: `${(i * 31) % 50}%`,
            }}
            animate={reduce ? {} : { opacity: [0.12, 0.45, 0.15], scale: [1, 1.35, 1] }}
            transition={{ duration: 6 + (i % 3), repeat: Infinity, ease: [0.45, 0, 0.55, 1], delay: i * 0.15 }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 hidden opacity-35 md:block">
        {[...Array(bokehDesktop)].map((_, i) => (
          <motion.span
            key={`md-${i}`}
            className="absolute rounded-full bg-champagne/25 blur-sm"
            style={{
              width: 3 + (i % 4) * 2,
              height: 3 + (i % 4) * 2,
              left: `${(i * 47) % 100}%`,
              top: `${(i * 31) % 50}%`,
            }}
            animate={reduce ? {} : { opacity: [0.12, 0.45, 0.15], scale: [1, 1.35, 1] }}
            transition={{ duration: 6 + (i % 3), repeat: Infinity, ease: [0.45, 0, 0.55, 1], delay: i * 0.12 }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: `
              linear-gradient(105deg, transparent 0%, rgba(201,169,98,0.08) 32%, rgba(255,248,230,0.06) 48%, transparent 68%),
              repeating-linear-gradient(-7deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 12px)
            `,
            backgroundSize: "220% 100%, 100% 100%",
          }}
          animate={reduce ? {} : { backgroundPosition: ["0% 55%", "100% 45%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -left-[18%] right-[-18%] bottom-[-20%] h-[55%] rounded-[100%] bg-gradient-to-t from-slate-950/70 via-champagne/5 to-transparent blur-3xl"
          animate={reduce ? {} : { x: [0, 32, -18, 0], opacity: [0.4, 0.62, 0.48, 0.52] }}
          transition={{ duration: 18, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
        />
        <motion.div
          className="absolute inset-x-[-22%] bottom-[-10%] h-[36%] bg-gradient-to-t from-black/75 via-transparent to-transparent"
          animate={reduce ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[38vh] text-paper/22 md:bottom-[40vh]">
        <SkylineSilhouette className="h-auto w-full min-w-[960px]" />
      </div>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
      >
        <div className="relative w-[min(1180px,112vw)] translate-y-[7%] md:translate-y-[5%]">
          <div className="absolute inset-0 -z-10 scale-95 bg-gradient-to-t from-black/60 via-transparent to-transparent blur-2xl" />
          <img
            src="/night/bmw-hero-v2.png"
            alt={`${SITE.vehicle} ${SITE.exterior} — waterfront night`}
            className="mx-auto w-full object-contain object-bottom drop-shadow-[0_44px_90px_rgba(0,0,0,0.58)]"
            loading="eager"
            decoding="async"
          />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 gap-8 px-4 pb-28 pt-24 md:grid-cols-12 md:gap-12 md:px-8 md:pb-36 md:pt-28">
        <div className="md:col-span-7">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex flex-col items-center md:items-start">
            <svg width="36" height="28" viewBox="0 0 36 28" className="mb-5 text-champagne" aria-hidden>
              <path fill="currentColor" d="M18 2l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L18 16.9l-5.6 2.9 1.1-6.2-4.5-4.4 6.2-.9L18 2z" />
            </svg>
            <div className="[perspective:1000px] text-center md:text-left">
              <div className="font-display text-[clamp(3rem,11vw,6.25rem)] font-semibold leading-[0.88] tracking-tight text-paper">
                <LetterReveal text={SITE.flyer.luxuryWord} />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPop, delay: 0.35 }}
                className="mt-3 font-mono text-[11px] uppercase tracking-[0.48em] text-champagne md:text-xs"
              >
                {SITE.flyer.serviceLine}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPop, delay: 0.45 }}
                className="mt-6 text-sm font-medium tracking-wide text-paper/90"
              >
                {SITE.flyer.tagA}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPop, delay: 0.52 }}
                className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-mist"
              >
                {SITE.flyer.tagB}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPop, delay: 0.62 }}
                className="mt-6 max-w-[52ch] text-sm leading-relaxed text-mist md:mt-8 md:text-base"
              >
                {SITE.hero.sub}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPop, delay: 0.7 }}
                className="mt-4 text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.24em] text-mist/80 md:text-left"
              >
                {SITE.hero.kicker}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPop, delay: 0.78 }}
                className="mt-8 text-center md:text-left"
              >
                <a
                  href="#reserve"
                  className="font-mono text-[11px] uppercase tracking-[0.26em] text-champagne underline-offset-4 transition-colors hover:text-paper hover:underline"
                >
                  Reserve a date
                </a>
              </motion.p>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-5 md:pt-10">
          <HyperFrame delay={0.2}>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.34em] text-champagne/80">Why clients book</p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {SITE.flyer.pillars.map((p) => (
                <div key={p.title} className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <FlyerIcon name={p.icon} size={30} />
                  <p className="text-left text-[13px] font-medium leading-snug tracking-tight text-paper/95">{p.title}</p>
                </div>
              ))}
            </div>
          </HyperFrame>
        </div>
      </div>
    </section>
  );
}
