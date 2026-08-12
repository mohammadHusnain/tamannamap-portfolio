import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/sections/CtaBanner";
import { workItems } from "../data/work";

export default function Work() {
  return (
    <>
      <Seo
        title="Work — TamannaLabs"
        description="Recent builds from TamannaLabs across web platforms, cloud migration, security audits, and data & AI."
      />
      <main id="top">
        <section className="section section--moss page-hero">
          <div className="wrap">
            <div className="page-hero__body">
              <Reveal as="h1" delay={0.1} className="page-hero__title">
                A closer look at recent <em>builds.</em>
              </Reveal>
              <Reveal as="p" delay={0.2} className="page-hero__desc">
                From web platforms and cloud migrations to security audits and
                data pipelines — a sample of what we ship with client teams.
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="work-grid">
              {workItems.map((item, i) => (
                <Reveal
                  as="div"
                  variant="fade"
                  delay={(i % 3) * 0.08}
                  className="work-card"
                  key={item.label}
                >
                  <img className="photo-tone" loading="lazy" decoding="async" src={item.image} alt={item.label} />
                  <div className="work-card__scrim" />
                  <div className="work-card__label">
                    <span>{item.category}</span>
                    <strong>{item.label}</strong>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <CtaBanner />
      </main>
    </>
  );
}
