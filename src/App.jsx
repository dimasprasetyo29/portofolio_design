import React from "react";
import Navbar from "./component/Navbar/Navbar"; 
import Hero from "./component/Hero/Hero"; 
import Skills from "./component/Skills/Skills"; 
import Experience from "./component/Experience/Experience";
import Projects from "./component/Projects/Projects";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
