import Seo from "../components/Seo";
import Hero from "../components/sections/Hero";
import ServicesScroller from "../components/sections/ServicesScroller";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Impact from "../components/sections/Impact";
import WorkTeaser from "../components/sections/WorkTeaser";
import Testimonials from "../components/sections/Testimonials";
import CtaBanner from "../components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Seo
        title="TamannaLabs — Software Development, Cloud & Cybersecurity"
        description="TamannaLabs is a full-service IT partner: web & app development, cloud & DevOps, cybersecurity, data & AI, and IT consulting for growing businesses."
      />
      <main id="top">
        <Hero />
        <ServicesScroller />
        <WhyChooseUs />
        <Impact />
        <WorkTeaser />
        <Testimonials />
        <CtaBanner />
      </main>
    </>
  );
}
