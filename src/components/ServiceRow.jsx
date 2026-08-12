import Reveal from "./Reveal";

export default function ServiceRow({ service, reverse }) {
  return (
    <div className={`service-row${reverse ? " service-row--reverse" : ""}`}>
      <Reveal as="div" variant="fade" className="service-row__card">
        <img className="photo-tone" loading="lazy" decoding="async" src={service.image} alt={service.name} />
        <div className="unit__scrim" />
        <div className="unit__meta">
          <div>
            <div className="unit__index">{service.category}</div>
            <div className="unit__name">{service.name}</div>
          </div>
        </div>
      </Reveal>
      <Reveal as="div" delay={0.1} className="service-row__details">
        <div className="unit__index">{service.category}</div>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <div className="service-row__specs">
          {service.specs.map((spec) => (
            <span key={spec}>{spec}</span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
