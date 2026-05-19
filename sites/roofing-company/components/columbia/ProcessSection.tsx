"use client";

import dynamic from "next/dynamic";
import { useConstructionProgress } from "@/components/columbia/ConstructionProgressProvider";
import SectionLabel from "@/components/ui/SectionLabel";
import { processSteps } from "@/lib/site-content";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BuildingScene = dynamic(() => import("./BuildingScene"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[280px] animate-pulse rounded-xl bg-stone-deep" aria-hidden />
  ),
});

export default function ProcessSection() {
  const { setProgress } = useConstructionProgress();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mapped = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(mapped, "change", (v) => {
    setProgress(v);
  });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-pad border-b border-border bg-surface"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionLabel className="text-gold">Our process</SectionLabel>
            <h2 className="text-display mt-4 max-w-xl text-3xl text-navy md:text-4xl">
              How we build your project
            </h2>
            <p className="text-body mt-4 max-w-[65ch] text-base leading-relaxed text-ink-muted">
              Scroll through our process—the 3D build model tracks your progress through each phase.
            </p>

            <ol className="mt-12 space-y-0">
              {processSteps.map((step, i) => (
                <motion.li
                  key={step.step}
                  className="relative grid grid-cols-1 gap-2 border-t border-border py-10 first:border-t-0 first:pt-0 md:grid-cols-[4rem_1fr] md:gap-6"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 100, damping: 20 }}
                >
                  <span className="process-step-num" aria-hidden>
                    {step.step}
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                      Step {step.step}
                    </p>
                    <h3 className="text-display mt-2 text-lg text-navy">{step.title}</h3>
                    <p className="text-body mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          <motion.div
            className="sticky top-28 hidden lg:block"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 90, damping: 22 }}
          >
            <BuildingScene className="min-h-[420px] rounded-xl border border-border" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
