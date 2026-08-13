import { lazy, Suspense } from "react";
import Seo from "../components/Seo";
import Hero from "../components/sections/Hero";
import PageLoader from "../components/PageLoader";

const ServicesScroller = lazy(() => import("../components/sections/ServicesScroller"));
const WhyChooseUs = lazy(() => import("../components/sections/WhyChooseUs"));
const Impact = lazy(() => import("../components/sections/Impact"));
const WorkTeaser = lazy(() => import("../components/sections/WorkTeaser"));
const Testimonials = lazy(() => import("../components/sections/Testimonials"));
const CtaBanner = lazy(() => import("../components/sections/CtaBanner"));

export default function Home() {
  return (
    <>
      <Seo
        title="TamannaLabs — Software Development, Cloud & Cybersecurity"
        description="TamannaLabs is a full-service IT partner: web & app development, cloud & DevOps, cybersecurity, data & AI, and IT consulting for growing businesses."
      />
      <main id="top">
        <Hero />
        <Suspense fallback={<PageLoader />}>
          <ServicesScroller />
        </Suspense>
        <Suspense fallback={<PageLoader />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<PageLoader />}>
          <Impact />
        </Suspense>
        <Suspense fallback={<PageLoader />}>
          <WorkTeaser />
        </Suspense>
        <Suspense fallback={<PageLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<PageLoader />}>
          <CtaBanner />
        </Suspense>
      </main>
    </>
  );
}
