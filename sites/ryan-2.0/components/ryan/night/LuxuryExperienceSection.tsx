'use client';

import { Check } from "@phosphor-icons/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "./site";
import { springPop } from "./hyperframes";

export function LuxuryExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="luxury" ref={ref} className="bg-paper py-16 text-ink md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={springPop}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-champagne-dim">Inside the frame</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{SITE.flyer.luxuryTitle}</h2>
            <ul className="mt-8 space-y-3 md:mt-10 md:space-y-4">
              {SITE.flyer.luxuryBullets.map((line, i) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ ...springPop, delay: 0.05 * i }}
                  className="flex gap-3 border-b border-slate-200/90 pb-4 last:border-0"
                >
                  <Check className="mt-0.5 shrink-0 text-champagne-dim" size={22} weight="bold" aria-hidden />
                  <span className="text-[15px] leading-relaxed text-slate-700">{line}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 22 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...springPop, delay: 0.06 }}
          >
            <div className="grid h-full min-h-[320px] grid-cols-2 gap-3 md:min-h-[420px] md:grid-cols-5 md:grid-rows-2 md:gap-4">
              <motion.div
                className="relative col-span-2 row-span-2 overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_28px_80px_-48px_rgba(15,23,42,0.45)] md:col-span-3"
                whileHover={{ scale: 1.01 }}
                transition={springPop}
              >
                <img
                  src={SITE.flyer.interiors[0].src}
                  alt={SITE.flyer.interiors[0].alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className="relative col-span-1 overflow-hidden rounded-[1.5rem] border border-slate-200/90 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] md:col-span-2"
                whileHover={{ scale: 1.02 }}
                transition={springPop}
              >
                <img
                  src={SITE.flyer.interiors[1].src}
                  alt={SITE.flyer.interiors[1].alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className="relative col-span-1 overflow-hidden rounded-[1.5rem] border border-slate-200/90 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] md:col-span-2"
                whileHover={{ scale: 1.02 }}
                transition={springPop}
              >
                <img
                  src={SITE.flyer.interiors[2].src}
                  alt={SITE.flyer.interiors[2].alt}
                  className="h-full w-full object-cover"
                  style={SITE.flyer.interiors[2].objectPosition ? { objectPosition: SITE.flyer.interiors[2].objectPosition } : undefined}
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
