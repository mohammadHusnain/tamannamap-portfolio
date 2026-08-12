import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useNavCondense } from "../hooks/useNavCondense";

const links = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const { condensed, hidden } = useNavCondense();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`nav${condensed ? " is-condensed" : ""}${hidden && !open ? " is-hidden" : ""}`}
      >
        <Link to="/" className="nav__mark" onClick={close}>
          TAMANNA<span className="nav__mark-accent">LABS</span>
        </Link>
        <nav className="nav__links">
          {links.map((link) =>
            link.to.startsWith("/#") ? (
              <a key={link.to} href={link.to}>
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? "is-active" : undefined)}
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>
        <Link to="/contact" className="nav__cta">
          Get a Quote
        </Link>
        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </header>

      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        {links.map((link) =>
          link.to.startsWith("/#") ? (
            <a key={link.to} href={link.to} onClick={close}>
              {link.label}
            </a>
          ) : (
            <Link
              key={link.to}
              to={link.to}
              className={location.pathname === link.to ? "is-active" : undefined}
              onClick={close}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </>
  );
}
