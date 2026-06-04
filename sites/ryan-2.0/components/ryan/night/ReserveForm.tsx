'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "./site";

export function ReserveForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="reserve" ref={ref} className="border-t border-ink/10 bg-paper py-16 text-ink md:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 md:grid-cols-2 md:gap-14 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-champagne-dim">Reserve</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:mt-4 md:text-4xl lg:text-5xl">
            Your comfort, your time — same thread from quote to curb.
          </h2>
          <p className="mt-5 max-w-[52ch] text-slate-600 md:mt-6">
            Call or text {SITE.phoneDisplay} for the fastest answer. {SITE.driver} confirms personally, usually within an hour for new requests.
          </p>
          <ul className="mt-10 space-y-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            <li className="flex gap-3 border-l border-champagne/60 pl-4">01 — Pickup, timing, dress code for the cabin.</li>
            <li className="flex gap-3 border-l border-champagne/60 pl-4">02 — Direct line to {SITE.driver}; same driver end to end.</li>
            <li className="flex gap-3 border-l border-champagne/60 pl-4">03 — {SITE.vehicle} staged early; cabin reset between legs.</li>
          </ul>
          <p className="mt-10 text-sm text-slate-600">
            <span className="font-semibold text-ink">Coverage:</span> {SITE.coverage.join(" · ")}.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start justify-center rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-[0_30px_90px_-48px_rgba(15,23,42,0.45)] md:p-10"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-champagne-dim">Book now</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">
            Ready to reserve your ride?
          </h3>
          <p className="mt-4 text-sm text-slate-600">
            Tap below to open the booking form — {SITE.driver} confirms personally, usually within an hour.
          </p>
          <a
            href="https://tr.ee/GTOHjorP2S"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform active:scale-[0.98] hover:bg-slate-900"
          >
            Book Your Night →
          </a>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-4 w-full text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 hover:text-ink transition-colors"
          >
            Or call · {SITE.phoneDisplay}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
