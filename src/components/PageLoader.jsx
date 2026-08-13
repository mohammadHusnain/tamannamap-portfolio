/** Lightweight loading state for lazy-loaded routes and sections. */
export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Loading">
      <span className="page-loader__bar" />
    </div>
  );
}
