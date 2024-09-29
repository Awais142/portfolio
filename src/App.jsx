import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-slate-800 min-h-screen">
        <Navbar />
        <main>
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="services" className="min-h-screen">
            <Services />
          </section>
          <section id="portfolio" className="min-h-screen">
            <Portfolio />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
