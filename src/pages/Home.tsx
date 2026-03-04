import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { ClientsServed } from "@/components/sections/ClientsServed";
import { ServicesScroll } from "@/components/sections/ServicesScroll";
import { YouthPrograms } from "@/components/sections/YouthPrograms";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Community } from "@/components/sections/Community";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <ClientsServed />
        <ServicesScroll />
        <YouthPrograms />
        <WhyChooseUs />
        <Community />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
