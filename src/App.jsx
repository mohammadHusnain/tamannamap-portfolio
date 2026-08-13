import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageLoader from "./components/PageLoader";
import Home from "./pages/Home";

// Home is the most likely first paint, so it loads eagerly. Every other
// route is code-split into its own chunk and only fetched when visited —
// keeps the initial bundle (and first paint) as small as possible.
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function LazyRoute({ children }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <LazyRoute>
              <About />
            </LazyRoute>
          }
        />
        <Route
          path="/services"
          element={
            <LazyRoute>
              <Services />
            </LazyRoute>
          }
        />
        <Route
          path="/work"
          element={
            <LazyRoute>
              <Work />
            </LazyRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <LazyRoute>
              <Contact />
            </LazyRoute>
          }
        />
        <Route
          path="*"
          element={
            <LazyRoute>
              <NotFound />
            </LazyRoute>
          }
        />
      </Route>
    </Routes>
  );
}
