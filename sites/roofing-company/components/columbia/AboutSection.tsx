"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about, images } from "@/lib/site-content";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-stone">
      <div className="container-site grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 90, damping: 22 }}
        >
          <SectionLabel className="text-gold">{about.label}</SectionLabel>
          <h2 className="text-display mt-4 text-3xl text-navy md:text-4xl">{about.title}</h2>
          <div className="gold-rule mt-6" />
          <div className="mt-8 space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-body max-w-[65ch] text-base leading-relaxed text-ink-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 90, damping: 22, delay: 0.1 }}
          className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-[0_32px_64px_-32px_rgba(15,33,55,0.35)]"
        >
          <Image
            src={images.about}
            alt="Construction team at a Maryland job site"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone via-transparent to-transparent lg:from-stone/90" />
        </motion.div>
      </div>
    </section>
  );
}
