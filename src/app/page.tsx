import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Features } from "@/components/Features";
import { PinnedStory } from "@/components/PinnedStory";
import { InteractiveCards } from "@/components/InteractiveCards";

import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full relative">
        <Hero />
        <LogoMarquee />
        <Features />
        


        <PinnedStory />
        <InteractiveCards />

        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
