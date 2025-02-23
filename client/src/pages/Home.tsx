import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesOverview />
      <ContactSection />
    </>
  );
}
