"use client";

import { motion } from "framer-motion";
import { contact, ctaBanner } from "@/lib/site-content";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CtaBanner() {
  return (
    <section className="band-gold relative py-14 md:py-16">
      <motion.div
        className="container-site relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 90, damping: 22 }}
      >
        <div>
          <h2 className="text-display text-2xl text-navy md:text-3xl">{ctaBanner.title}</h2>
          <p className="text-body mt-2 text-base font-medium text-navy/80">
            {ctaBanner.subtitle}
          </p>
        </div>
        <MagneticButton href={contact.phoneHref} variant="navy" className="shrink-0">
          {ctaBanner.cta}
        </MagneticButton>
      </motion.div>
    </section>
  );
}
