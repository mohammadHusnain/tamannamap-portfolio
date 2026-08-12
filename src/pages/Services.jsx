import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import ServiceRow from "../components/ServiceRow";
import CtaBanner from "../components/sections/CtaBanner";
import { services } from "../data/services";

export default function Services() {
  const [first, ...rest] = services;

  return (
    <>
      <Seo
        title="Services — TamannaLabs"
        description="Web & app development, cloud & DevOps, cybersecurity, data & AI, and IT consulting — explore what TamannaLabs can do for your team."
      />
      <main id="top" className="services-page">
        <section className="section section--moss page-hero">
          <div className="wrap">
            <div className="page-hero__body">
              <Reveal as="h1" delay={0.1} className="page-hero__title">
                Five ways we can help you <em>ship.</em>
              </Reveal>
              <Reveal as="p" delay={0.2} className="page-hero__desc">
                From a single audit to a fully managed platform, every engagement is
                scoped to what you actually need next — not a fixed package.
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section section--dark">
          <div className="wrap">
            <ServiceRow service={first} reverse={false} />
          </div>
        </section>

        {rest.map((service, i) => {
          const mossBg =
            service.name === "Cybersecurity" || service.name === "IT Consulting";

          return (
            <section
              key={service.name}
              className={`section${mossBg ? " section--moss" : ""}`}
            >
              <div className="wrap">
                <ServiceRow service={service} reverse={i % 2 === 0} />
              </div>
            </section>
          );
        })}

        <CtaBanner />
      </main>
    </>
  );
}
