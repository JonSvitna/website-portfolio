import AboutSection from "@/components/columbia/AboutSection";
import { ConstructionProgressProvider } from "@/components/columbia/ConstructionProgressProvider";
import ContactSection from "@/components/columbia/ContactSection";
import CredentialsBar from "@/components/columbia/CredentialsBar";
import Footer from "@/components/columbia/Footer";
import Hero from "@/components/columbia/Hero";
import Nav from "@/components/columbia/Nav";
import ProcessSection from "@/components/columbia/ProcessSection";
import ServicesSection from "@/components/columbia/ServicesSection";

export default function Home() {
  return (
    <ConstructionProgressProvider>
      <Nav />
      <main>
        <Hero />
        <CredentialsBar />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </ConstructionProgressProvider>
  );
}
