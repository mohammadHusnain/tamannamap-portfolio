import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import { workItems } from "../../data/work";

export default function WorkTeaser() {
  const items = workItems.slice(0, 3);
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="h2" delay={0.1}>A closer look at <em>recent builds.</em></Reveal>
        </div>

        <div className="work-grid">
          {items.map((item, i) => (
            <Reveal as="div" variant="fade" delay={i * 0.08} className="work-card" key={item.label}>
              <img className="photo-tone" loading="lazy" decoding="async" src={item.image} alt={item.label} />
              <div className="work-card__scrim" />
              <div className="work-card__label">
                <span>{item.category}</span>
                <strong>{item.label}</strong>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/work" className="btn">
            View all work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
