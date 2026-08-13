import { useEffect, useRef } from "react";
import { useLenis } from "./useLenis";

const MOBILE_BREAKPOINT = 768;

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

    const mobileQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    let pinHeight = 0;
    let maxTranslate = 0;

    function resetMobileLayout() {
      pin.style.height = "";
      track.style.transform = "";
      if (progress) progress.style.transform = "";
    }

    function measure() {
      if (mobileQuery.matches) {
        resetMobileLayout();
        return;
      }

      const trackWidth = track.scrollWidth;
      const viewportWidth = stage.clientWidth;
      maxTranslate = Math.max(0, trackWidth - viewportWidth);
      pinHeight = window.innerHeight + maxTranslate;
      pin.style.height = `${pinHeight}px`;
    }

    function update() {
      if (mobileQuery.matches) return;

      const rect = pin.getBoundingClientRect();
      const total = pinHeight - window.innerHeight;
      const raw = total > 0 ? -rect.top / total : 0;
      const clamped = Math.min(1, Math.max(0, raw));
      const x = -clamped * maxTranslate;
      track.style.transform = `translate3d(${x.toFixed(1)}px, 0, 0)`;
      if (progress) progress.style.transform = `scaleX(${Math.max(0.02, clamped)})`;
    }

    function onResize() {
      measure();
      update();
      if (lenis) lenis.resize();
    }

    function onBreakpointChange() {
      onResize();
    }

    measure();
    update();

    if (lenis) {
      lenis.on("scroll", update);
    } else {
      window.addEventListener("scroll", update, { passive: true });
    }

    window.addEventListener("resize", onResize);
    mobileQuery.addEventListener("change", onBreakpointChange);

    return () => {
      if (lenis) lenis.off("scroll", update);
      else window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
      mobileQuery.removeEventListener("change", onBreakpointChange);
      resetMobileLayout();
    };
  }, [lenis]);

  return { pinRef, stageRef, trackRef, progressRef };
}
