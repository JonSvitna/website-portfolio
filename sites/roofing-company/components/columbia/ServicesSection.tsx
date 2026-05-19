"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/site-content";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-surface">
      <motion.div
        className="container-site"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center md:text-left">
          <SectionLabel className="text-gold">Our services</SectionLabel>
          <h2 className="text-display mt-4 text-3xl text-navy md:text-4xl">
            Paving & construction specialties
          </h2>
          <p className="text-body mx-auto mt-4 max-w-[65ch] text-base leading-relaxed text-ink-muted md:mx-0">
            Commercial and residential capabilities—scoped to your site, traffic, and timeline.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className="group overflow-hidden rounded-xl border border-border bg-surface shadow-[0_16px_40px_-24px_rgba(15,33,55,0.2)] transition-shadow hover:shadow-[0_24px_48px_-20px_rgba(15,33,55,0.28)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 90, damping: 22, delay: index * 0.06 }}
            >
              <motion.div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </motion.div>
              <div className="p-6 md:p-8">
                <h3 className="text-display text-xl text-navy">{service.title}</h3>
                <div className="gold-rule mt-3" />
                <p className="text-body mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
