"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "@phosphor-icons/react";
import { contact, credentials, hero, images } from "@/lib/site-content";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionLabel from "@/components/ui/SectionLabel";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] overflow-hidden">
      <Image
        src={images.heroPoster}
        alt="Heavy equipment paving asphalt at a commercial job site"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/40"
        aria-hidden
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30"
        aria-hidden
      />

      <motion.div
        className="container-site relative flex min-h-[100dvh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24 md:pt-36"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel className="text-gold">{hero.eyebrow}</SectionLabel>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-display mt-4 text-4xl leading-[0.95] text-white md:text-6xl lg:text-7xl"
          >
            {hero.headlineLine1}
            <br />
            {hero.headlineLine2}
            <br />
            <span className="hero-headline-accent">{hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-body mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact" variant="primary">
              {hero.primaryCta}
            </MagneticButton>
            <MagneticButton href={contact.phoneHref} variant="heroOutline">
              <Phone size={18} weight="bold" />
              {hero.secondaryCta} {contact.phone}
            </MagneticButton>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-10 font-mono text-xs uppercase tracking-widest text-white/60"
          >
            {credentials.mhic} · {contact.address.line}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
