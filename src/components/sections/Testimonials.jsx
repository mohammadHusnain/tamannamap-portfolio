import Reveal from "../Reveal";

const quotes = [
  {
    text: "TamannaLabs rebuilt our core platform ahead of peak season and handled everything from architecture to deployment. They communicated clearly, hit every milestone, and felt like an extension of our own engineering team.",
    name: "Ahmed Raza",
    role: "CTO",
    company: "PayBridge Solutions",
    location: "Lahore, Pakistan",
  },
  {
    text: "We had six weeks to ship an investor-ready MVP. They delivered a polished product, set up our cloud infrastructure, and stayed on to help us scale through our first major release in Dubai.",
    name: "Sara Al-Maktoum",
    role: "Startup Founder",
    company: "Nexa Health",
    location: "Dubai, UAE",
  },
  {
    text: "Their DevOps work cut our cloud costs noticeably and turned deployments from a weekly stress test into a routine. Direct, honest, and genuinely invested in the outcome — rare in agency work.",
    name: "Khalid Hassan",
    role: "Co-Founder & CTO",
    company: "Arq Digital",
    location: "Dubai, UAE",
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
            <Reveal as="blockquote" variant="fade" delay={i * 0.1} className="testimonial" key={q.name}>
              <p>&ldquo;{q.text}&rdquo;</p>
              <footer className="testimonial__author">
                <cite className="testimonial__name">{q.name}</cite>
                <span className="testimonial__role">
                  {q.role}, {q.company}
                </span>
                <span className="testimonial__location">{q.location}</span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
