import { memo } from "react";

const stack = ["React", "Node.js", "AWS", "Kubernetes", "Python", "Azure", "PostgreSQL", "Figma"];

function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <span>
          {stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </span>
        <span>
          {stack.map((s) => (
            <span key={`${s}-dup`}>{s}</span>
          ))}
        </span>
      </div>
    </div>
  );
}

export default memo(Marquee);
