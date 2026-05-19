'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlyerIcon } from "./flyerIcons";
import { SITE } from "./site";
import { springPop } from "./hyperframes";

export function OccasionsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section id="occasions" ref={ref} className="border-y border-champagne/20 bg-[#08090d] py-14 md:py-20">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={springPop}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-champagne">Perfect for any occasion</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-paper md:text-4xl">One cabin. Seven briefs it already knows.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...springPop, delay: 0.08 }}
          className="mt-10 rounded-[2rem] border border-champagne/30 bg-white/[0.02] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:mt-12 md:p-8"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-7">
            {SITE.flyer.occasions.map((o, i) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...springPop, delay: 0.06 + i * 0.04 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-black/25 px-3 py-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-champagne/25"
              >
                <FlyerIcon name={o.icon} size={34} />
                <p className="text-[12px] font-medium leading-snug text-paper/90">{o.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
