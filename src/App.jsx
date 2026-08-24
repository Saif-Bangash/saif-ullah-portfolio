import { useEffect } from "react";
import "./App.css";
import About from "./component/About";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import ResumeSection from "./component/ResumeSection";
import Skills from "./component/Skills";
import Project from "./component/Project";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import WebDevelopment from "./services/Web_Development/Custom-web-development";
import ReactDevelopment from "./services/Web_Development/React-Development";
  
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<ResumeSection />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/custom-web-development" element={<WebDevelopment />} />
        <Route path="/react-development" element={<ReactDevelopment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
