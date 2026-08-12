# Tamanna IT & Solutions — React

A production-quality React migration of the original static HTML/CSS/JS
Tamanna IT & Solutions site. Same design, same Lenis smooth-scroll and
scroll-driven motion — now a multi-page React Router app.

## Stack

- **React 19** + **Vite** (build tool)
- **React Router v7** — client-side routing
- **Lenis** — inertia-based smooth scroll (same library as the original build)
- Plain CSS (design tokens/layout carried over from the original `style.css`,
  unchanged, plus additions for the new Services/Work/Contact/404 pages)

## Routes

| Path        | Page                                            |
|-------------|--------------------------------------------------|
| `/`         | Home — hero, about, services teaser, work teaser, testimonials |
| `/services` | Full service list, alternating card/detail layout |
| `/work`     | Full portfolio grid |
| `/contact`  | Contact info + validated lead-capture form |
| `*`         | 404 |

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
npm run lint       # oxlint
```

No environment variables are required to run the site. See `.env.example`
for the one optional variable (a contact-form submission endpoint).

## Project structure

```
src/
├── components/           Reusable UI (Nav, Footer, Reveal, ParallaxImg, …)
│   └── sections/         Larger page sections shared across routes
├── data/                 Content: services.js, work.js
├── hooks/                Lenis, scroll-reveal, parallax, horizontal-scroll,
│                         count-up, nav-condense
├── pages/                Route-level components (Home, Services, Work,
│                         Contact, NotFound)
├── styles/global.css     Design tokens + layout (from the original site)
├── App.jsx               Route table
└── main.jsx              App entry, wraps App in BrowserRouter
```

## What was preserved from the original build

- All design tokens, typography, color palette, spacing, and layout rules
  (`src/styles/global.css` is the original `style.css` plus additive rules
  for the new pages — nothing existing was changed).
- Every animation: preloader, nav condense-on-scroll, scroll-reveal
  (`[data-reveal]` → `<Reveal>`), parallax drift, the pinned horizontal
  services scroller, count-up stats, the filmstrip and tech-stack marquee,
  and a floating nav that hides on scroll-down and reappears on scroll-up.
- Lenis-driven smooth scroll, with the same easing/duration configuration,
  now initialized once in `LenisProvider` and shared via context so every
  hook drives off the same scroll instance.
- `prefers-reduced-motion` is still respected everywhere motion is applied.

## Performance

- **Route-based code splitting** — only `/` (Home) is in the initial bundle;
  `/services`, `/work`, `/contact`, and the 404 page are each their own
  chunk, lazy-loaded via `React.lazy` + `Suspense` only when visited.
- **Lenis is dynamically imported**, not bundled into the main chunk — it's
  fetched in the background after first paint, and native scroll works
  fine in the brief window before it's ready (and permanently if the user
  has `prefers-reduced-motion` set).
- **Vendor chunk splitting** — React, React Router, and Lenis build into
  separate cacheable chunks (`vite.config.js`) so a redeploy that only
  touches app code doesn't invalidate the browser's cache of the framework.
- **LCP-optimized hero image** — `srcSet`/`sizes` serve an appropriately
  sized image per viewport instead of always shipping the largest, plus
  `fetchpriority="high"` and a matching `<link rel="preload">` in
  `index.html` so the browser starts fetching it immediately instead of
  discovering it after the JS bundle parses.
- **Lazy-loaded below-the-fold images** everywhere else (`loading="lazy"
  decoding="async"`) so only what's actually visible on load is fetched.
- **Trimmed preloader** — the original template's branding preloader is
  now a ~350ms beat instead of ~950ms, and is skipped entirely under
  `prefers-reduced-motion`; it never blocks content from rendering
  underneath it.
- Purely decorative, static-content components (`Grain`, `Marquee`,
  `Filmstrip`) are wrapped in `React.memo` so they don't re-render on
  route or state changes elsewhere in the tree.

## What changed for the React + multi-page migration

- Single HTML page → 4 routed pages, each with its own `<title>` and meta
  description (`src/components/Seo.jsx`).
- The original Services section (a pinned horizontal scroller) now appears
  as a teaser on Home and links to a full `/services` page built as an
  alternating card/detail layout (card left → details right → card right →
  details left …), responsive down to a single column on mobile.
- The original inline CTA form now lives on a dedicated `/contact` page
  with client-side validation (required name, valid email format, optional
  message length cap) and inline error states — no page reload, no data
  leaves the browser unless `VITE_CONTACT_FORM_ENDPOINT` is set.
- The Contact page now shows the real office address — **Lavender Block,
  Bahria Town, Lahore, Pakistan** — next to a static map preview
  (`src/components/StaticMap.jsx`) with a pinned marker. It's a plain
  `<img>` (OpenStreetMap static tile, no JS map library or API key, so it
  stays fast and lightweight) wrapped in a link; clicking it opens the
  exact address in Google Maps in a new tab.
- Added a 404 page matching the site's visual language.
- `<ScrollToTop>` resets scroll position on route change and smooth-scrolls
  to in-page anchors once the target section has mounted.
- Added a dedicated `/about` page (was previously an in-page anchor on
  Home, which made the two feel identical) — Home no longer renders the
  About section at all.

## Security review notes

- No `dangerouslySetInnerHTML`, no `eval`, no unsanitized HTML insertion
  anywhere in the app.
- The contact form is a controlled React form; all values are validated
  client-side before any network request, and the optional POST body is
  JSON (no HTML injection surface).
- No API keys or secrets are present in the codebase. The only
  environment variable (`VITE_CONTACT_FORM_ENDPOINT`) is a plain URL and
  is documented in `.env.example` — note that any `VITE_`-prefixed
  variable is bundled into the public client build, so nothing secret
  should ever be placed there. If you need authenticated form submission,
  proxy it through your own serverless function instead.
- `npm audit` reports **0 vulnerabilities** against the dependency set
  shipped here (React, React Router, Lenis, Vite).
- Images continue to be hotlinked from `images.unsplash.com` under the
  free Unsplash License, as in the original build — swap for your own
  photography before launch (see "Placeholder content" below).

## ⚠️ Placeholder content to replace before launch

Same caveats as the original template:

- **Case study names** on `/work` are illustrative project types, not real
  client engagements.
- **Testimonials** on Home are sample content — replace with real quotes
  (with permission).
- **Stats** in the Impact section (`250+ projects`, `96% retention`, etc.)
  are placeholder numbers.
- **Contact details** (email, social links) in the footer and `/contact`
  page are placeholders.
- **Tech-stack marquee** — update to match your team's actual stack.

## Browser support

Same as the original: current Chrome, Safari, Firefox, and Edge, built on
`IntersectionObserver`, `position: sticky`, and CSS custom properties.
