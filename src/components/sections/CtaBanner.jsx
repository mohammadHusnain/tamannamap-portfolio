import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function CtaBanner() {
  return (
    <section className="section section--moss" id="contact">
      <div className="wrap cta">
        <Reveal as="h2" delay={0.1} className="cta__title">
          Tell us what
          <br />
          you're <em>building.</em>
        </Reveal>
        <Reveal as="p" delay={0.2} className="cta__desc">
          Send a few details and a solutions engineer will follow up within one
          business day with next steps and a rough estimate.
        </Reveal>
        <Reveal as="div" variant="fade" delay={0.3} className="cta__action">
          <Link to="/contact" className="btn">
            Request a Proposal <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
