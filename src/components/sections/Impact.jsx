import Reveal from "../Reveal";
import { useCounter } from "../../hooks/useCounter";

const stats = [
  { target: 250, label: "Projects delivered across web, cloud, and data" },
  { target: 96, label: "Percent client retention year over year" },
  { target: 18, label: "Countries with an active TamannaLabs engagement" },
  { target: 99, label: "Percent average uptime across managed platforms" },
];

function Stat({ target, label, delay }) {
  const [ref, value] = useCounter(target);
  return (
    <Reveal as="div" variant="fade" delay={delay}>
      <div className="stat__num" ref={ref}>{value}</div>
      <p className="stat__label">{label}</p>
    </Reveal>
  );
}

export default function Impact() {
  return (
    <section className="section section--moss">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="h2" delay={0.1}>Numbers our clients <em>care about.</em></Reveal>
        </div>
        <div className="stats">
          {stats.map((s, i) => (
            <Stat key={s.label} target={s.target} label={s.label} delay={0.05 + i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
