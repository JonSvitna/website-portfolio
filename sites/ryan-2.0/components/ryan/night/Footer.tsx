'use client';

import { SITE } from "./site";
import { KineticMarquee } from "./hyperframes";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-paper/85">
      <KineticMarquee />
      <div className="py-12 md:py-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-12 px-4 md:flex-row md:justify-between md:px-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-champagne">{SITE.brand}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">{SITE.tagline}</p>
            <p className="mt-6 font-mono text-xs tracking-[0.14em] text-paper/90">{SITE.city}</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-mist">Dial</p>
              <a className="mt-3 block text-lg font-semibold text-champagne hover:underline" href={`tel:${SITE.phoneTel}`}>
                {SITE.phoneDisplay}
              </a>
              <p className="mt-2 text-xs text-mist">Call or text — day or night, by appointment.</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-mist">Jump</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a className="text-mist hover:text-paper" href="#occasions">Occasions</a></li>
                <li><a className="text-mist hover:text-paper" href="#luxury">Cabin</a></li>
                <li><a className="text-mist hover:text-paper" href="#driver">Ryan</a></li>
                <li><a className="text-mist hover:text-paper" href="#reserve">Reserve</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[1400px] border-t border-white/10 px-4 pt-8 md:px-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-mist/80">
            © {new Date().getFullYear()} {SITE.driver} · {SITE.vehicle} · Private hire
          </p>
        </div>
      </div>
    </footer>
  );
}
