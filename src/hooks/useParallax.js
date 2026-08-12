import { useEffect, useRef } from "react";
import { useLenis } from "./useLenis";
import { prefersReducedMotion } from "./useLenis";

/** Element drifts vertically at `speed` fraction of scroll distance from
 *  viewport center, matching the original data-parallax behavior. */
export function useParallax(speed = 0.1) {
  const ref = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;

    function update() {
      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - vh / 2;
      const offset = center * -speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    }

    update();
    if (lenis) {
      lenis.on("scroll", update);
    } else {
      window.addEventListener("scroll", update, { passive: true });
    }
    window.addEventListener("resize", update);

    return () => {
      if (lenis) lenis.off("scroll", update);
      else window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [lenis, speed]);

  return ref;
}
