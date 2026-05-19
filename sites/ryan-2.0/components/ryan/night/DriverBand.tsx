'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "./site";
import { springPop } from "./hyperframes";

export function DriverBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="driver" ref={ref} className="relative overflow-hidden bg-void py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_50%,rgba(201,169,98,0.07),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-4 md:grid-cols-12 md:gap-16 md:px-8">
        <motion.div
          className="flex justify-center md:col-span-4 md:justify-end"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={springPop}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-champagne/50 via-champagne/10 to-transparent blur-md" />
            <img
              src="/night/ryan-portrait.png"
              alt={`${SITE.driver} — chauffeur portrait`}
              className="relative h-44 w-44 rounded-full border-2 border-champagne/40 object-cover shadow-[0_28px_80px_-24px_rgb(0_0_0/0.45)] md:h-52 md:w-52"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-8"
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...springPop, delay: 0.05 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-champagne">{SITE.flyer.driverLine}</p>
          <p className="mt-5 max-w-[52ch] text-2xl font-semibold leading-snug tracking-tight text-paper md:text-3xl">{SITE.flyer.driverQuote}</p>
          <p className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
            <span className="inline-block h-px w-8 bg-champagne/50" aria-hidden />
            {SITE.hero.kicker}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
