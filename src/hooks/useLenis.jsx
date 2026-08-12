import { createContext, useContext, useEffect, useRef, useState } from "react";

const LenisContext = createContext(null);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);
  const rafId = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let instance;
    let cancelled = false;

    // Lenis is dynamically imported so it never blocks the initial bundle —
    // the first paint (hero, nav, fonts) renders before this chunk is even
    // requested, and native scroll works fine in the meantime.
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      document.documentElement.classList.add("lenis");
      instance = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)), // expo-out
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.15,
        infinite: false,
      });

      function raf(time) {
        instance.raf(time);
        rafId.current = requestAnimationFrame(raf);
      }
      rafId.current = requestAnimationFrame(raf);

      setLenis(instance);
    });

    return () => {
      cancelled = true;
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (instance) instance.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export function useLenis() {
  return useContext(LenisContext);
}

export { prefersReducedMotion };
