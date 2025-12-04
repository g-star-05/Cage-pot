import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop"; // optional but good UX
import GalleryPage from "./pages/Gallery";

// Home page composed of main sections
function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Testimonials />
    </>
  );
}

export default function App() {
  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Navbar always visible */}
      <Nav />

      {/* Routed pages */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </>
  );
}
