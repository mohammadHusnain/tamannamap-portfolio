import { useEffect, useRef } from "react";
import { useLenis } from "./useLenis";

/** Recreates the original initHorizontalScroller behavior: a tall wrapper
 *  (`pinRef`) is sized to cover the horizontal distance, `stageRef` sticks,
 *  and `trackRef` translates horizontally in proportion to scroll. */
export function useHorizontalScroller() {
  const pinRef = useRef(null);
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    const pin = pinRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!pin || !stage || !track) return undefined;

    let pinHeight = 0;
    let maxTranslate = 0;

    function measure() {
      const trackWidth = track.scrollWidth;
      const viewportWidth = stage.clientWidth;
      maxTranslate = Math.max(0, trackWidth - viewportWidth);
      pinHeight = window.innerHeight + maxTranslate;
      pin.style.height = `${pinHeight}px`;
    }

    function update() {
      const rect = pin.getBoundingClientRect();
      const total = pinHeight - window.innerHeight;
      const raw = total > 0 ? -rect.top / total : 0;
      const clamped = Math.min(1, Math.max(0, raw));
      const x = -clamped * maxTranslate;
      track.style.transform = `translate3d(${x.toFixed(1)}px, 0, 0)`;
      if (progress) progress.style.transform = `scaleX(${Math.max(0.02, clamped)})`;
    }

    measure();
    update();

    if (lenis) {
      lenis.on("scroll", update);
    } else {
      window.addEventListener("scroll", update, { passive: true });
    }

    function onResize() {
      measure();
      update();
      if (lenis) lenis.resize();
    }
    window.addEventListener("resize", onResize);

    return () => {
      if (lenis) lenis.off("scroll", update);
      else window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, [lenis]);

  return { pinRef, stageRef, trackRef, progressRef };
}
