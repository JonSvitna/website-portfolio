"use client";

import { motion } from "framer-motion";
import {
  Certificate,
  Handshake,
  MapPin,
  ShieldCheck,
} from "@phosphor-icons/react";
import { whyChoose } from "@/lib/site-content";
import SectionLabel from "@/components/ui/SectionLabel";

const icons = [Handshake, ShieldCheck, MapPin, Certificate] as const;

export default function WhyChooseSection() {
  return (
    <section className="band-navy section-pad">
      <motion.div
        className="container-site"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center">
          <SectionLabel className="text-gold">{whyChoose.label}</SectionLabel>
          <h2 className="text-display mt-4 text-3xl text-white md:text-4xl">
            {whyChoose.title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {whyChoose.items.map((item, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.08,
                }}
              >
                <Icon
                  size={40}
                  weight="duotone"
                  className="mx-auto text-gold lg:mx-0"
                  aria-hidden
                />
                <h3 className="text-display mt-4 text-lg text-white">{item.title}</h3>
                <p className="text-body mt-3 text-sm leading-relaxed text-asphalt-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
