import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Pillars from "@/components/Pillars";
import Transformations from "@/components/Transformations";
import Services from "@/components/Services";
import FeedSection from "@/components/FeedSection";
import Community from "@/components/Community";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Pillars />
        <Transformations />
        <Services />
        <FeedSection />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
