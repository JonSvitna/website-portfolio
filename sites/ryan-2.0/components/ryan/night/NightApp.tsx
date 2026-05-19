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
