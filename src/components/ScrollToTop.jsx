import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "../hooks/useLenis";

const HASH_RETRY_MS = 100;
const HASH_MAX_ATTEMPTS = 40;
const VIEWPORT_PADDING = 24;

function getNavHeight() {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--nav-height")
    .trim();
  return parseFloat(value) || 60;
}

/** Scroll so the full service section (or any hash target) is visible in the viewport. */
function scrollToHashTarget(el, lenis) {
  const navHeight = getNavHeight();
  const viewport = window.innerHeight;
  const usableHeight = viewport - navHeight - VIEWPORT_PADDING * 2;
  const sectionHeight = el.offsetHeight;
  const sectionTop = window.scrollY + el.getBoundingClientRect().top;

  let targetY;

  if (sectionHeight <= usableHeight) {
    targetY =
      sectionTop -
      navHeight -
      VIEWPORT_PADDING -
      (usableHeight - sectionHeight) / 2;
  } else {
    const row = el.querySelector(".service-row");
    const anchor = row || el;
    const anchorTop = window.scrollY + anchor.getBoundingClientRect().top;
    targetY = anchorTop - navHeight - VIEWPORT_PADDING;
  }

  targetY = Math.max(0, targetY);

  if (lenis) lenis.scrollTo(targetY, { duration: 1.2 });
  else window.scrollTo({ top: targetY, behavior: "smooth" });
}

/** Resets scroll position on route change, and jumps to an in-page anchor
 *  (e.g. /services#cloud-devops) once the target section has mounted. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      let attempts = 0;
      let timer;

      function scrollToTarget() {
        const el = document.getElementById(id);
        if (!el) return false;
        scrollToHashTarget(el, lenis);
        return true;
      }

      let settleTimer;

      if (!scrollToTarget()) {
        timer = window.setInterval(() => {
          attempts += 1;
          if (scrollToTarget() || attempts >= HASH_MAX_ATTEMPTS) {
            window.clearInterval(timer);
          }
        }, HASH_RETRY_MS);
      } else {
        settleTimer = window.setTimeout(() => {
          const el = document.getElementById(id);
          if (el) scrollToHashTarget(el, lenis);
        }, 450);
      }

      return () => {
        if (timer) window.clearInterval(timer);
        if (settleTimer) window.clearTimeout(settleTimer);
      };
    }

    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash, lenis]);

  return null;
}
