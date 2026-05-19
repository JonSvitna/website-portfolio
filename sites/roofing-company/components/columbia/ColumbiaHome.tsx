"use client";

import { ConstructionProgressProvider } from "./ConstructionProgressProvider";
import Nav from "./Nav";
import Hero from "./Hero";
import CredentialsBar from "./CredentialsBar";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import WhyChooseSection from "./WhyChooseSection";
import ProcessSection from "./ProcessSection";
import CtaBanner from "./CtaBanner";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function ColumbiaHome() {
  return (
    <ConstructionProgressProvider>
      <Nav />
      <main>
        <Hero />
        <CredentialsBar />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </ConstructionProgressProvider>
  );
}
