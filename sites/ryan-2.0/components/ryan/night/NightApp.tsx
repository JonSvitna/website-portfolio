'use client';

import { Nav } from "./Nav";
import { HeroCinematic } from "./HeroCinematic";
import { OccasionsGrid } from "./OccasionsGrid";
import { LuxuryExperienceSection } from "./LuxuryExperienceSection";
import { DriverBand } from "./DriverBand";
import { ReserveForm } from "./ReserveForm";
import { Footer } from "./Footer";

export default function NightApp() {
  return (
    <div className="night-page">
      <div className="film-grain" aria-hidden />
      <a
        href="/"
        className="fixed top-[22px] left-8 z-[60] font-mono text-[10px] uppercase tracking-[0.22em] text-white/75 no-underline transition-colors hover:text-champagne"
      >
        ← Home
      </a>
      <Nav />
      <main>
        <HeroCinematic />
        <OccasionsGrid />
        <LuxuryExperienceSection />
        <DriverBand />
        <ReserveForm />
      </main>
      <Footer />
    </div>
  );
}
