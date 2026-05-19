"use client";

import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { contact, navLinks } from "@/lib/site-content";
import MagneticButton from "@/components/ui/MagneticButton";

function LogoMark() {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold text-lg font-extrabold text-navy"
      aria-hidden
    >
      C
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-navy-mid/50 bg-navy/95 text-white shadow-lg backdrop-blur-md">
      <motion.div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:gap-6 md:px-8 md:py-4">
        <a href="#hero" className="flex items-center gap-3">
          <LogoMark />
          <span className="hidden sm:block">
            <span className="text-display block text-xs leading-tight tracking-wide text-white">
              Columbia
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
              Contracting Co.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton href={contact.phoneHref} variant="primary">
            Call {contact.phone}
          </MagneticButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/20 p-2.5 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-navy-mid bg-navy px-4 py-6 lg:hidden"
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-lg font-medium text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <MagneticButton href={contact.phoneHref} className="mt-2 w-full">
                Call {contact.phone}
              </MagneticButton>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
