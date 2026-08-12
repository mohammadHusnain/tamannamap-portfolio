import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../hooks/useLenis";

export default function Preloader({ onDone }) {
  const [done, setDone] = useState(false);
  const fillRef = useRef(null);

  useEffect(() => {
    const reduce = prefersReducedMotion();
    if (fillRef.current) {
      fillRef.current.style.transition = "transform 320ms cubic-bezier(.16,1,.3,1)";
      requestAnimationFrame(() => {
        if (fillRef.current) fillRef.current.style.transform = "scaleX(1)";
      });
    }
    // Kept brief — this is a branding beat, not a loading gate. Content and
    // images are already rendering underneath it, so this never delays
    // actual page readiness, only the visual reveal.
    const timer = window.setTimeout(() => {
      setDone(true);
      window.setTimeout(() => onDone && onDone(), 400);
    }, reduce ? 0 : 350);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <div className={`preloader${done ? " is-done" : ""}`} aria-hidden="true">
      <div className="preloader__mark">TamannaLabs</div>
      <div className="preloader__bar">
        <span ref={fillRef} />
      </div>
    </div>
  );
}
