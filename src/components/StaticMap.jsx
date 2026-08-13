const ADDRESS =
  "Office Number: 401 — 4th Floor, 73-Nishtar Block, Bahria Town, Lahore";

// Approximate coordinates for Bahria Town, Lahore — used only to center the
// map preview. The click-through link is address-based via Google Maps
// search, so it resolves correctly regardless of small pin offsets.
const LAT = 31.3705;
const LNG = 74.1757;

// A small bounding box around the point, used by the OpenStreetMap embed —
// no API key required and it renders real map tiles reliably (unlike
// third-party static-image services that can rate-limit or go offline).
const DELTA_LAT = 0.01;
const DELTA_LNG = 0.014;
const BBOX = [
  (LNG - DELTA_LNG).toFixed(4),
  (LAT - DELTA_LAT).toFixed(4),
  (LNG + DELTA_LNG).toFixed(4),
  (LAT + DELTA_LAT).toFixed(4),
].join(",");

const EMBED_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${BBOX}&layer=mapnik&marker=${LAT}%2C${LNG}`;
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export default function StaticMap() {
  return (
    <div className="static-map">
      <iframe
        className="static-map__frame"
        title={`Map showing our location at ${ADDRESS}`}
        src={EMBED_SRC}
        loading="lazy"
        aria-hidden="true"
        tabIndex={-1}
      />
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="static-map__link"
        aria-label={`Open ${ADDRESS} in Google Maps`}
      >
        <span className="static-map__overlay">
          <span className="static-map__label">{ADDRESS}</span>
          <span className="static-map__cta">Open in Google Maps →</span>
        </span>
      </a>
    </div>
  );
}
