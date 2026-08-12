import { useEffect, useRef, useState } from "react";
import { useLenis } from "./useLenis";

/**
 * Floating nav behavior: condenses after a small scroll offset, hides while
 * scrolling down (once past the hero), and reveals again on any upward
 * scroll — so the hero is never permanently obstructed.
 */
export function useNavCondense() {
  const [condensed, setCondensed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const lenis = useLenis();

  useEffect(() => {
    const HIDE_AFTER = 120; // don't hide until past the hero's top region
    const THRESHOLD = 6; // ignore sub-pixel scroll jitter

    function onScroll(y) {
      setCondensed(y > 40);

      const delta = y - lastY.current;
      if (Math.abs(delta) < THRESHOLD) return;

      if (y <= HIDE_AFTER) {
        setHidden(false);
      } else if (delta > 0) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }
      lastY.current = y;
    }

    if (lenis) {
      const handler = ({ scroll }) => onScroll(scroll);
      lenis.on("scroll", handler);
      return () => lenis.off("scroll", handler);
    }
    const handler = () => onScroll(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [lenis]);

  return { condensed, hidden };
}
