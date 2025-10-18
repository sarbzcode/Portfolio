import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlyphBackground from "./components/GlyphBackground.tsx";
import Certifications from "./pages/Certifications.tsx";

function App() {
  return (
    <>
      <GlyphBackground />
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <main className="relative z-10 flex-1 pt-6 sm:pt-8">
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
