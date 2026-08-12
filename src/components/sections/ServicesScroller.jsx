import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import { useHorizontalScroller } from "../../hooks/useHorizontalScroller";
import { services } from "../../data/services";

export default function ServicesScroller() {
  const { pinRef, stageRef, trackRef, progressRef } = useHorizontalScroller();

  return (
    <section className="residences" id="services">
      <div className="section-head">
        <Reveal as="h2" delay={0.1}>
          Five ways
          <br />
          we can <em>help.</em>
        </Reveal>
        <Reveal as="p" delay={0.2}>
          From a single audit to a fully managed platform, every engagement is scoped
          to what you actually need next. <Link to="/services">See full details →</Link>
        </Reveal>
      </div>

      <div className="residences__pin" ref={pinRef}>
        <div className="residences__stage" ref={stageRef}>
          <div className="residences__track" ref={trackRef}>
            {services.map((s) => (
              <article className="unit" key={s.name}>
                <div className="unit__art" aria-hidden="true">
                  <img className="photo-tone" loading="lazy" decoding="async" src={s.image} alt="" />
                </div>
                <div className="unit__scrim" />
                <div className="unit__meta">
                  <div>
                    <div className="unit__index">{s.category}</div>
                    <div className="unit__name">{s.name}</div>
                  </div>
                  <div className="unit__specs">
                    {s.specs.slice(0, 2).join(" · ")}
                    <br />
                    {s.specs.slice(2).join(" · ")}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="residences__progress" aria-hidden="true">
            <span ref={progressRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
