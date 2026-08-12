import Reveal from "../Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap intro">
        <div>
          <Reveal as="p" delay={0.1} className="intro__lead">
            TamannaLabs is a <em>full-service technology partner</em> —
            we take products from a whiteboard sketch to production infrastructure, and
            keep them running once real users show up.
          </Reveal>
          <div className="intro__foot">
            <Reveal as="p" delay={0.2}>
              Our engineers embed with your team through discovery, delivery, and
              support — not a handoff-and-disappear model.
            </Reveal>
            <Reveal as="p" delay={0.3}>
              Every engagement is scoped around measurable outcomes: shipped features,
              reduced incident rates, lower cloud spend.
            </Reveal>
          </div>
        </div>

        <Reveal as="div" delay={0.15} variant="fade" className="intro__media">
          <img
            className="photo-tone"
            src="https://images.pexels.com/photos/7651804/pexels-photo-7651804.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="TamannaLabs engineers collaborating around a laptop"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </div>
    </section>
  );
}
