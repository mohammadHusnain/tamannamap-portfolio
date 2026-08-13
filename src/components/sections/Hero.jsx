import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import ParallaxImg from "../ParallaxImg";
import { CONTACT_FORM_PATH } from "../../constants/links";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__scene" aria-hidden="true">
        {/* TODO: swap src/srcSet below for the client-provided hero image
            when supplied — everything else in this section is final. */}
        <ParallaxImg
          speed={0.12}
          className="hero__photo"
          src="https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?w=1600&q=70&auto=format&fit=crop"
          srcSet="
            https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?w=900&q=68&auto=format&fit=crop 900w,
            https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?w=1600&q=70&auto=format&fit=crop 1600w,
            https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?w=2400&q=72&auto=format&fit=crop 2400w"
          sizes="100vw"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__content">
        <Reveal as="h1" variant="fade" delay={0.1} className="hero__title">
          TAMANNA<em>LABS</em>
        </Reveal>

        <Reveal as="p" variant="fade" delay={0.2} className="hero__desc">
          We design, build, and run digital products for teams that move fast —
          web, mobile, cloud, and data platforms scoped to measurable outcomes.
        </Reveal>

        <Reveal as="div" variant="fade" delay={0.3} className="hero__actions">
          <Link to={CONTACT_FORM_PATH} className="btn">
            Start a Project <span aria-hidden="true">→</span>
          </Link>
          <Link to="/work" className="hero__link">
            View Our Work <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
