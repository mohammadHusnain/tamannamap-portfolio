import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import About from "../components/sections/About";
import CtaBanner from "../components/sections/CtaBanner";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About — TamannaLabs"
        description="TamannaLabs is a full-service technology partner — engineers who embed with your team from discovery through delivery and support."
      />
      <main id="top">
        <section className="section section--moss page-hero">
          <div className="wrap">
            <div className="page-hero__body">
              <Reveal
                as="h1"
                delay={0.1}
                className="page-hero__title"
              >
                A technology partner, not a <em>vendor.</em>
              </Reveal>
              <Reveal as="p" delay={0.2} className="page-hero__desc">
                TamannaLabs is a full-service technology partner —
                we take products from a whiteboard sketch to production
                infrastructure, and keep them running once real users show up.
                Our engineers embed with your team through discovery, delivery,
                and support, and every engagement is scoped around measurable
                outcomes rather than billable hours.
              </Reveal>
            </div>
          </div>
        </section>
        <About />
        <CtaBanner />
      </main>
    </>
  );
}
