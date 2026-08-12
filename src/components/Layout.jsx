import { useState } from "react";
import { Outlet } from "react-router-dom";
import Grain from "./Grain";
import Preloader from "./Preloader";
import Nav from "./Nav";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { LenisProvider } from "../hooks/useLenis";

export default function Layout() {
  const [loading, setLoading] = useState(true);

  return (
    <LenisProvider>
      <ScrollToTop />
      <Grain />
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <Nav />
      <Outlet />
      <Footer />
    </LenisProvider>
  );
}
