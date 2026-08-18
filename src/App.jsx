import "./App.css";
import About from "./component/About";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import ResumeSection from "./component/ResumeSection";
import Skills from "./component/Skills";
import Project from "./component/Project";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ResumeSection />
      <Project />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
