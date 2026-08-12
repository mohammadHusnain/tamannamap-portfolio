import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found — TamannaLabs" description="The page you're looking for doesn't exist." />
      <main id="top">
        <section className="not-found">
          <div className="not-found__code">404</div>
          <h1 className="not-found__title">This page went missing in deployment.</h1>
          <p>
            The page you were looking for doesn't exist, may have moved, or the URL
            has a typo. Head back home or get in touch if you think this is a
            mistake.
          </p>
          <Link to="/" className="btn">
            Back to Home <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    </>
  );
}
