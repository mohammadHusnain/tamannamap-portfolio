import { memo } from "react";
import Reveal from "./Reveal";

const photos = [
  { src: "https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?w=480&q=65&auto=format&fit=crop", alt: "Team collaborating in the office" },
  { src: "https://images.unsplash.com/photo-1760670399462-f5e479452c27?w=480&q=65&auto=format&fit=crop", alt: "Code on a screen" },
  { src: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=480&q=65&auto=format&fit=crop", alt: "Server rack in a data center" },
  { src: "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=480&q=65&auto=format&fit=crop", alt: "Analytics dashboard on screen" },
  { src: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=480&q=65&auto=format&fit=crop", alt: "Padlock representing cybersecurity" },
];

function Set({ hidden }) {
  return (
    <div className="filmstrip__set" aria-hidden={hidden ? "true" : undefined}>
      {photos.map((p, i) => (
        <div className="filmstrip__item" key={i}>
          <img loading="lazy" decoding="async" src={p.src} alt={hidden ? "" : p.alt} />
        </div>
      ))}
    </div>
  );
}

function Filmstrip() {
  return (
    <Reveal as="div" variant="fade" className="filmstrip">
      <div className="filmstrip__track">
        <Set />
        <Set hidden />
      </div>
    </Reveal>
  );
}

export default memo(Filmstrip);
