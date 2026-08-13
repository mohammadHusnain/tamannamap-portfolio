import { Link } from "react-router-dom";
import { services } from "../data/services";

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.36A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.06-1.1l-.29-.17-3.03.79.81-2.95-.19-.3A8 8 0 1 1 12 20zm4.36-5.86c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12s-.62.77-.76.93-.28.18-.52.06a6.4 6.4 0 0 1-1.9-1.17 7.2 7.2 0 0 1-1.32-1.64c-.14-.24 0-.36.11-.48.11-.12.24-.28.36-.42.12-.14.16-.24.24-.4a.44.44 0 0 0-.02-.42c-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46a.9.9 0 0 0-.65.3 2.73 2.73 0 0 0-.85 2 4.75 4.75 0 0 0 1 2.5 10.9 10.9 0 0 0 4.16 3.68c.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:info@tamanalabs.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <div className="footer__brand">
              <span className="footer__mark">
                TAMANNA<span className="footer__mark-accent">LABS</span>
              </span>
            </div>
            <p className="footer__tagline">
              Future-driven IT solutions for modern businesses. We help you
              build, scale, and optimize your digital presence through
              reliable and innovative technology.
            </p>
            <div className="footer__social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            {services.map((service) => (
              <Link key={service.slug} to={`/services#${service.slug}`}>
                {service.name}
              </Link>
            ))}
          </div>

          <div className="footer__col">
            <h4>Contact Info</h4>
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>Office Number: 401 — 4th Floor, 73-Nishtar Block, Bahria Town, Lahore</span>
            </div>
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
              </svg>
              <span>Phone: +92 333 6599115</span>
            </div>
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <a href="mailto:info@tamanalabs.com">info@tamanalabs.com</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 TamannaLabs. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
