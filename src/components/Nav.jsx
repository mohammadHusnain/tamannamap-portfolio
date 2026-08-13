import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useNavCondense } from "../hooks/useNavCondense";

import { CONTACT_FORM_PATH } from "../constants/links";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const desktopLinks = links.filter((link) => link.to !== "/");

export default function Nav() {
  const { condensed, hidden } = useNavCondense();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  useEffect(() => {
    close();
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname === path;

  return (
    <>
      <header
        className={`nav${condensed ? " is-condensed" : ""}${hidden && !open ? " is-hidden" : ""}${open ? " is-menu-open" : ""}`}
      >
        <div className="nav__start">
          <button
            type="button"
            className={`nav__toggle${open ? " is-active" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav__hamburger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <Link to="/" className="nav__mark" onClick={close}>
            TAMANNA<span className="nav__mark-accent">LABS</span>
          </Link>
        </div>

        <nav className="nav__links" aria-label="Primary">
          {desktopLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive: active }) => (active ? "is-active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to={CONTACT_FORM_PATH} className="nav__cta">
          Get a Quote
        </Link>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <nav aria-label="Mobile primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={isActive(link.to) ? "is-active" : undefined}
              onClick={close}
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link to={CONTACT_FORM_PATH} className="mobile-menu__cta" onClick={close} tabIndex={open ? 0 : -1}>
          Get a Quote <span aria-hidden="true">→</span>
        </Link>
      </div>
    </>
  );
}
