import Reveal from "../Reveal";

const amenities = [
  {
    title: "Agile Delivery",
    desc: "Two-week sprints, visible boards, and demos you can actually attend.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M8 24c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16" />
        <path d="M8 24l6-6M8 24l6 6" />
      </svg>
    ),
  },
  {
    title: "Certified Engineers",
    desc: "AWS, Azure, and security-certified staff on every engagement.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="24" cy="16" r="7" />
        <path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    desc: "On-call incident response with agreed response-time SLAs.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 14v10l7 5" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "Fixed-scope or time & materials — no surprise line items.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="9" y="9" width="30" height="30" rx="2" />
        <path d="M9 19h30M19 9v30" />
      </svg>
    ),
  },
  {
    title: "Scalable Architecture",
    desc: "Systems designed to handle 10x load without a rewrite.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M24 6v14M24 20l10 22H14L24 20z" />
      </svg>
    ),
  },
  {
    title: "Global Clients",
    desc: "Distributed teams across time zones, working in your stack.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="10" y="14" width="28" height="20" rx="1" />
        <path d="M16 14V10h16v4" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="h2" delay={0.1}>Built for teams<br />that <em>ship often.</em></Reveal>
          <Reveal as="p" delay={0.2}>
            No black boxes and no long procurement cycles — just engineers who
            communicate clearly and deliver on schedule.
          </Reveal>
        </div>

        <div className="amenities__grid">
          {amenities.map((a, i) => (
            <Reveal as="div" variant="fade" delay={i * 0.05} className="amenity" key={a.title}>
              <div className="amenity__icon">{a.icon}</div>
              <div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
