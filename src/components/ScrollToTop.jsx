import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "../hooks/useLenis";

/** Resets scroll position on route change, and jumps to an in-page anchor
 *  (e.g. /#about) once the target section has mounted. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.2 });
        else el.scrollIntoView();
        return;
      }
    }
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash, lenis]);

  return null;
}
