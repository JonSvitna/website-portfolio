"use client";

import { motion } from "framer-motion";
import { Certificate, HardHat, Seal, ShieldCheck } from "@phosphor-icons/react";
import { credentials } from "@/lib/site-content";

const items = [
  { icon: Certificate, label: "MHIC Licensed", value: credentials.mhic },
  { icon: HardHat, label: "Professional Engineer", value: "Maryland PE" },
  { icon: Seal, label: "Notary Public", value: credentials.notary },
  { icon: ShieldCheck, label: "Licensed Specialties", value: "Paving & construction" },
] as const;

export default function CredentialsBar() {
  return (
    <section aria-label="Licenses and credentials" className="band-light border-y border-border">
      <motion.div
        className="container-site grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.06,
              }}
              className="flex items-start gap-4"
            >
              <Icon
                size={32}
                weight="duotone"
                className="shrink-0 text-navy"
                aria-hidden
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-navy">
                  {item.label}
                </p>
                <p className="mt-1 font-mono text-sm text-ink-muted">{item.value}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
