'use client';

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SITE } from "./site";

const links = [
  { href: "#occasions", label: "Occasions" },
  { href: "#luxury", label: "Cabin" },
  { href: "#driver", label: SITE.driver },
  { href: "#reserve", label: "Reserve" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-8">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-white/10 bg-ink/70 px-5 py-3 shadow-[0_28px_80px_-24px_rgb(0_0_0/0.45)] backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <a href="/" className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist transition-colors hover:text-champagne">
            ← Back
          </a>
          <a href="#" className="group flex items-baseline gap-2">
            <span className="font-mono text-[11px] tracking-[0.28em] text-champagne">RJ</span>
            <span className="text-sm font-medium tracking-tight text-paper/90">{SITE.brand}</span>
          </a>
        </div>

        {scrolled && (
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist transition-colors hover:text-champagne"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          {scrolled && (
            <a
              href={`tel:${SITE.phoneTel}`}
              className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-mist sm:block"
            >
              {SITE.phoneDisplay}
            </a>
          )}
          {scrolled && (
            <a
              href="https://tr.ee/GTOHjorP2S"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-champagne/50 bg-champagne/10 px-4 py-2 text-xs font-medium text-champagne transition-transform active:scale-[0.98] hover:bg-champagne/20"
            >
              Reserve
            </a>
          )}
          <button
            type="button"
            className="rounded-full border border-white/15 px-3 py-2 text-xs text-paper md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-3 max-w-[1400px] rounded-2xl border border-white/10 bg-ink/95 p-4 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/90"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
