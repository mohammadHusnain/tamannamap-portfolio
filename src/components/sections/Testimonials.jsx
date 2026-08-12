import Reveal from "../Reveal";

const quotes = [
  {
    text: "They shipped our MVP in nine weeks and stayed on for the scaling work afterward. No handoff gap.",
    cite: "— Product Lead, E-commerce Platform",
  },
  {
    text: "The cloud migration cut our infrastructure spend by a third with zero downtime during cutover.",
    cite: "— Engineering Director, Retail Chain",
  },
  {
    text: "Their security audit found issues two other vendors missed, and the fixes shipped the same sprint.",
    cite: "— CTO, Healthcare Startup",
  },
];

export default function Testimonials() {
  return (
    <section className="section section--dark">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="h2" delay={0.1}>What it's like to <em>work with us.</em></Reveal>
        </div>
        <div className="testimonials">
          {quotes.map((q, i) => (
            <Reveal as="blockquote" variant="fade" delay={i * 0.1} className="testimonial" key={q.cite}>
              <p>"{q.text}"</p>
              <cite>{q.cite}</cite>
            </Reveal>
          ))}
        </div>
        <p className="testimonials-note">
          Sample feedback for illustration — replace with quotes from your own clients
          before launch.
        </p>
      </div>
    </section>
  );
}
