import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlyphBackground from "./components/GlyphBackground.tsx";
import Certifications from "./pages/Certifications.tsx";

function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);
  return (
    <>
      <a href="#main-content" className="skip-link primary-button">
        Skip to content
      </a>
      <GlyphBackground />
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <main
          id="main-content"
          tabIndex={-1}
          className="relative z-10 flex-1 pt-6 sm:pt-8"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
